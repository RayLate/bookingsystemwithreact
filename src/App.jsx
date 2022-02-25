class DisplayHomePage extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark px-5 py-3">
          <h5 className="text-white">High-Speed Railway Reservation System</h5>
          <span className="text-muted">IT5007 Tutorial 3</span>
        </nav>
        <div className="container my-5">
          <div className="flex">
            <BookingSystem />
          </div>
        </div>
        <div className="footer bg-light border border-grey d-flex align-items-center">
          <div className="mx-auto align-middle text-center">
            <p className="text-muted">Build by Ding Ming A0241574E</p>
            <a
              href="https://github.com/RayLate/bookingsystemwithreact"
              className="text-primary"
            >
              Git Repository
            </a>
          </div>
        </div>
      </>
    );
  }
}
class BookingSystem extends React.Component {
  constructor() {
    super();
    this.state = { bookings: [] };
    this.addBooking = this.addBooking.bind(this);
    this.removeBooking = this.removeBooking.bind(this);
    this.searchBooking = this.searchBooking.bind(this);
    this.clearBookings = this.clearBookings.bind(this);
  }

  isFull() {
    return this.state.bookings.length == 25;
  }

  getFirstAvailableId() {
    for (let index = 1; index < 26; index++) {
      if (
        this.state.bookings.find((booking) => booking.sn == index) === undefined
      ) {
        return index;
      }
    }
  }

  addBooking(booking) {
    if (this.isFull()) {
      alert("All seats are booked");
      return;
    }
    if (this.checkDuplicateBookings(booking.name, booking.phone)) {
      alert("Duplicated Entry");
      return;
    }
    const newBooking = { ...booking, sn: this.getFirstAvailableId() };
    const newBookings = [...this.state.bookings, newBooking];
    console.log(newBookings);
    this.setState({ bookings: newBookings });
  }

  checkDuplicateBookings(name, phone) {
    const bookingSearchedbyname = this.state.bookings.find(
      (booking) => booking.name == name
    );
    if (bookingSearchedbyname) {
      if (bookingSearchedbyname.phone == phone) {
        return true;
      }
    }
    return false;
  }

  searchBooking(sn) {
    console.log(sn);
    const searchBooking = this.state.bookings.find(
      (booking) => booking.sn == sn
    );
    return searchBooking;
  }

  removeBooking(sn) {
    const newBookings = this.state.bookings.filter(
      (booking) => booking.sn != sn
    );
    this.setState({ bookings: newBookings });
  }

  clearBookings() {
    this.setState({ bookings: [] });
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col col-lg-6 col-md-12">
            <DisplayFreeSeats
              bookings={this.state.bookings.sort((a, b) => a.sn - b.sn)}
              clearBookings={this.clearBookings}
            />
          </div>
          <div className="col col-lg-6 col-md-12 mt-md-10">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-display-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-display"
                  type="button"
                  role="tab"
                  aria-controls="nav-display"
                  aria-selected="true"
                >
                  <div className="fs-4">Display</div>
                </button>
                <button
                  className="nav-link"
                  id="nav-create-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-create"
                  type="button"
                  role="tab"
                  aria-controls="nav-create"
                  aria-selected="false"
                >
                  <div className="fs-4">Create</div>
                </button>
                <button
                  className="nav-link"
                  id="nav-delete-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-delete"
                  type="button"
                  role="tab"
                  aria-controls="nav-delete"
                  aria-selected="false"
                >
                  <div className="fs-4">Delete</div>
                </button>
              </div>
            </nav>
            <div className="tab-content p-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-display"
                role="tabpanel"
                aria-labelledby="nav-display-tab"
              >
                {this.state.bookings.length > 0 ? (
                  <>
                    <legend>List of Travellers</legend>

                    <div className="scroll-table">
                      <DisplayTraveller bookings={this.state.bookings} />
                    </div>
                  </>
                ) : (
                  <h2>No Booking</h2>
                )}
              </div>
              <div
                className="tab-pane fade"
                id="nav-create"
                role="tabpanel"
                aria-labelledby="nav-create-tab"
              >
                <AddTraveller addBooking={this.addBooking} />
              </div>
              <div
                className="tab-pane fade"
                id="nav-delete"
                role="tabpanel"
                aria-labelledby="nav-delete-tab"
              >
                <DeleteTraveller
                  searchBooking={this.searchBooking}
                  removeBooking={this.removeBooking}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function DisplayTraveller(props) {
  const bookingRows = props.bookings.map((booking, index) => (
    <BookingRow key={index} booking={booking} />
  ));
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SN</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>{bookingRows}</tbody>
      </table>
    </>
  );
}

function BookingRow(props) {
  const booking = props.booking;
  return (
    <tr>
      <th scope="row">{booking.sn}</th>
      <td>{booking.name}</td>
      <td>{booking.phone}</td>
      <td>{booking.timestamp.toISOString()}</td>
    </tr>
  );
}

function DisplayFreeSeats(props) {
  const seats = Array.from({ length: 25 }, (_, i) => i + 1).map((e, i) => (
    <div className="col-3 mx-auto" align="center" key={i} id={e}>
      {props.bookings.find((booking) => booking.sn == e) ? (
        <div className="square my-2 booked">{e}</div>
      ) : (
        <div className="square my-2">{e}</div>
      )}
    </div>
  ));

  return (
    <>
      <div className="container bg-light rounded-3">
        <div className="row py-3" align="center">
          <h1 className="display-5 fw-bold">
            {props.bookings.length == 25
              ? "Fully Booked"
              : `Seats Available = ${25 - props.bookings.length}`}
          </h1>
        </div>
        <div className="pb-3">
          <div className="row p-3">{seats}</div>
          <div className="row mb-3">
            <div className="col-3"></div>
            <div className="col-3 ">
              <div className="d-flex flex-row">
                <div className="legend booked"></div>
                <span>Booked</span>
              </div>
            </div>
            <div className="col-3 ">
              <div className="d-flex flex-row">
                <div className="legend"></div>
                <span>Available</span>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row">
            <button
              type="button"
              className="btn btn-dark"
              onClick={props.clearBookings}
            >
              Clear all bookings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
class AddTraveller extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.newBookingForm;
    if (form.name.value === "" || form.phone.value === "") {
      alert("Invalid Input, please try again");
      return;
    }

    const booking = {
      name: form.name.value,
      phone: form.phone.value,
      timestamp: new Date(),
    };
    this.props.addBooking(booking);
    form.name.value = "";
    form.phone.value = "";
  }

  render() {
    return (
      <form
        name="newBookingForm"
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <legend>New Booking</legend>
        <div className="mb-3">
          <label htmlFor="inputTravellerName" className="form-label">
            Traveller Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTravellerName"
            name="name"
            aria-describedby="nameHelp"
          />
          <div id="nameHelp" className="form-text">
            Use fullname on the travel document
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputMobileNumber" className="form-label">
            Mobile Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMobileNumber"
            name="phone"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Create Booking
          </button>
        </div>
      </form>
    );
  }
}
class DeleteTraveller extends React.Component {
  constructor() {
    super();
    this.state = {
      showSearchForm: true,
      showDeleteForm: false,
      searchError: false,
      snPendingDelete: -1,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  resetState() {
    this.setState({
      showSearchForm: true,
      showDeleteForm: false,
      searchError: false,
      snPendingDelete: -1,
    });
  }

  handleSearch(e) {
    e.preventDefault();
    const searchForm = document.forms.searchBookingForm;
    if (searchForm.sn.value === "") {
      alert("Invalid Input, please try again");
      return;
    }

    const searchBooking = this.props.searchBooking(searchForm.sn.value);
    if (searchBooking !== undefined) {
      this.setState({
        ...this.state,
        showSearchForm: false,
        showDeleteForm: true,
        snPendingDelete: searchBooking.sn,
      });
      const deleteForm = document.forms.deleteBookingForm;
      deleteForm.sn.value = searchBooking.sn;
      deleteForm.name.value = searchBooking.name;
      deleteForm.number.value = searchBooking.phone;
      deleteForm.timestamp.value = searchBooking.timestamp.toISOString();
      searchForm.sn.value = "";
    } else {
      this.setState({
        ...this.state,
        searchError: true,
      });
      window.alert(
        `Search Error, ${searchForm.sn.value} cannot be found or not booked.`
      );
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeBooking(this.state.snPendingDelete);
    window.alert(`Booking ${this.state.snPendingDelete} deleted successfully`);
    this.resetState();
  }

  handleCancel() {
    // console.log(this);
    this.resetState();
  }

  render() {
    return (
      <>
        <form
          name="searchBookingForm"
          onSubmit={this.handleSearch}
          autoComplete="off"
          className={this.state.showSearchForm ? "" : "visually-hidden"}
        >
          <legend>Delete Booking</legend>
          <div className="mb-3">
            <label htmlFor="searchSerialNumber" className="form-label">
              Booking Serial Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="searchSerialNumber"
              name="sn"
              aria-describedby="snHelp"
            />
            <div id="snHelp" className="form-text">
              Serial number on the ticket
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Search Booking
            </button>
          </div>
        </form>
        <form
          name="deleteBookingForm"
          onSubmit={this.handleDelete}
          autoComplete="off"
          className={this.state.showDeleteForm ? "" : "visually-hidden"}
        >
          <legend>Delete Booking</legend>
          <div className="mb-3">
            <label htmlFor="deleteSerialNumber" className="form-label">
              Booking Serial Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="deleteSerialNumber"
              name="sn"
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="deleteName" className="form-label">
              Traveller Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="deleteName"
              name="name"
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="deleteNumber" className="form-label">
              Handphone Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="deleteNumber"
              name="number"
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="deleteCreated" className="form-label">
              Created Date:
            </label>
            <input
              type="text"
              className="form-control"
              id="deleteCreated"
              name="timestamp"
              disabled
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-danger">
              Confirm Delete
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => this.handleCancel()}
            >
              Cancel
            </button>
          </div>
        </form>
      </>
    );
  }
}
const element = <DisplayHomePage />;

ReactDOM.render(element, document.getElementById("contents"));
