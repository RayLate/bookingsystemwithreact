/*
 * localhost:
 *   mongo travellerinfo scripts/init.mongo.js
 */

db.travellers.remove({});
db.blacklist.remove({});

db.counters.remove({ _id: "travellers" });
db.counters.remove({ _id: "blacklist" });
db.counters.insert({ _id: "travellers", current: 0 });
print("travellers counter: 0");
db.counters.insert({ _id: "blacklist", current: 0 });
print("blacklist counter: 0");

db.travellers.createIndex({ id: 1 }, { unique: true });
db.travellers.createIndex({ sn: 1 }, { unique: true });
db.travellers.createIndex({ name: 1 });
db.travellers.createIndex({ phone: 1 });
db.travellers.createIndex({ created: 1 });

db.blacklist.createIndex({ id: 1 }, { unique: true });
db.blacklist.createIndex({ name: 1 }, { unique: true });
db.blacklist.createIndex({ phone: 1 }, { unique: true });
db.blacklist.createIndex({ created: 1 });
