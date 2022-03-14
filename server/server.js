const fs = require("fs");
const express = require("express");
const {
  ApolloServer,
  UserInputError,
  ForbiddenError,
} = require("apollo-server-express");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const { MongoClient } = require("mongodb");

const PORT = process.env.PORT || 3000;
const url = "mongodb://localhost/travellerinfo";

let db;

const GraphQLDate = new GraphQLScalarType({
  name: "GraphQLDate",
  description: "A Date() type in GraphQL as a scalar",
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    const dateValue = new Date(value);
    return isNaN(dateValue) ? undefined : dateValue;
  },
  parseLiteral(ast) {
    if (ast.kind == Kind.STRING) {
      const value = new Date(ast.value);
      return isNaN(value) ? undefined : value;
    }
  },
});

const resolvers = {
  Query: {
    getBooking,
    getBookingList,
    getBlackList,
  },
  Mutation: {
    addBooking,
    deleteBooking,
    clearBookings,
    addBlackList,
  },
  GraphQLDate,
};

async function getBooking(_, { sn }) {
  if (!(0 < sn < 26)) {
    throw new UserInputError("The input Serial Number is invalid");
  }
  const booking = await db.collection("travellers").findOne({ sn });
  console.log(booking);
  return booking;
}

async function getBookingList() {
  const bookings = await db.collection("travellers").find({}).toArray();
  return bookings;
}

async function getNextSequence(name) {
  const result = await db.collection("counters").findOneAndUpdate(
    {
      _id: name,
    },
    { $inc: { current: 1 } },
    { returnOriginal: false }
  );
  return result.value.current;
}

async function getAvilableSeat() {
  const bookings = await getBookingList();
  for (let index = 1; index < 26; index++) {
    if (bookings.find((booking) => booking.sn == index) === undefined) {
      return index;
    }
  }

  // alert("All 25 seats are fully booked");
  return -1;
}

function bookingValidate(booking) {
  const errors = [];
  if (booking.sn == -1) {
    errors.push("All 25 seats are fully booked");
    throw new UserInputError("Invalid input(s)", { errors });
  }
  if (!booking.name && !booking.phone) {
    errors.push('Field "name" and "phone" are required');
  }
  if (!Boolean(parseInt(booking.phone)) || parseInt(booking.phone) <= 0) {
    errors.push('Only positive integers are allowed in field "phone"');
  }

  if (errors.length > 0) {
    throw new UserInputError("Invalid input(s)", { errors });
  }
}

async function addBooking(_, { booking }) {
  booking.timestamp = new Date();
  booking.name = booking.name.toUpperCase();
  booking.sn = await getAvilableSeat();
  bookingValidate(booking);
  booking.id = await getNextSequence("travellers");

  const blacklist = await getBlackList();
  if (
    blacklist.find(
      (blacklistEntry) =>
        blacklistEntry.name === booking.name ||
        blacklistEntry.phone === booking.phone
    )
  ) {
    throw new ForbiddenError(
      `"${
        booking.name || booking.phone
      }" is on blacklist, barred from travelling`
    );
  }

  const result = await db.collection("travellers").insertOne(booking);
  const savedBooking = await db
    .collection("travellers")
    .findOne({ _id: result.insertedId });
  return savedBooking;
}

function resultEvaluate(result) {
  if (result.deletedCount === 0) {
    throw new UserInputError("Invalid Serial Number");
  }
}

async function deleteBooking(_, { sn }) {
  const result = await db.collection("travellers").deleteOne({ sn });
  resultEvaluate(result);

  return `Serial Number ${sn} deleted successfully!`;
}

async function clearBookings() {
  const result = await db.collection("travellers").remove({});
  console.log(result.result);
  return "Reset Database 'travellers'";
}

async function getBlackList() {
  const blacklist = await db.collection("blacklist").find({}).toArray();
  return blacklist;
}

function blacklistValidate(blacklist) {
  const errors = [];
  if (!blacklist.name && !blacklist.phone) {
    errors.push("Either Field 'name' or 'phone' must be provided");
  }
  if (
    blacklist.phone &&
    (!Boolean(parseInt(blacklist.phone)) || parseInt(blacklist.phone) <= 0)
  ) {
    errors.push('Only positive integers are allowed in field "phone"');
  }
  if (errors.length > 0) {
    throw new UserInputError("Invalid input(s)", { errors });
  }
}

async function addBlackList(_, { blacklist }) {
  blacklistValidate(blacklist);
  blacklist.timestamp = new Date();
  blacklist.id = await getNextSequence("blacklist");
  console.log(blacklist);
  const result = await db.collection("blacklist").insertOne(blacklist);
  const savedBlacklist = await db
    .collection("blacklist")
    .findOne({ _id: result.insertedId });

  return savedBlacklist;
}

async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log("Connected to MongoDb at", url);
  db = client.db();
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./server/schema.graphql", "utf-8"),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

const app = express();

app.use("/", express.static("public"));

server.applyMiddleware({ app, path: "/graphql" });

(async function () {
  try {
    await connectToDb();
    app.listen(PORT, function () {
      console.log(`App started on port localhost:${PORT}`);
    });
  } catch (err) {
    console.error("ERROR:", err);
  }
})();
