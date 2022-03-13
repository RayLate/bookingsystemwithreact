"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(query) {
    var variables,
        response,
        body,
        result,
        _error,
        details,
        _args9 = arguments;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            variables = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
            _context9.prev = 1;
            _context9.next = 4;
            return fetch("/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            response = _context9.sent;
            _context9.next = 7;
            return response.text();

          case 7:
            body = _context9.sent;
            result = JSON.parse(body, jsonDateReviver);

            if (result.errors) {
              _error = result.errors[0];

              if (_error.extensions.code == "BAD_USER_INPUT") {
                details = _error.extensions.exception.errors.join("\n ");
                alert("".concat(_error.message, ":\n ").concat(details));
              } else if (_error.extensions.code == "FORBIDDEN") {
                alert(_error.message);
              } else {
                alert("".concat(_error.extensions.code, ": ").concat(_error.message));
              }
            }

            return _context9.abrupt("return", result.data);

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](1);
            alert("".concat(error.extension.code, ": ").concat(_context9.t0.message));

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 13]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

var DisplayHomePage = /*#__PURE__*/function (_React$Component) {
  _inherits(DisplayHomePage, _React$Component);

  var _super = _createSuper(DisplayHomePage);

  function DisplayHomePage() {
    _classCallCheck(this, DisplayHomePage);

    return _super.apply(this, arguments);
  }

  _createClass(DisplayHomePage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
        className: "navbar navbar-dark bg-dark px-5 py-3"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "text-white"
      }, "High-Speed Railway Reservation System"), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "IT5007 Tutorial 4")), /*#__PURE__*/React.createElement("div", {
        className: "container my-5"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex"
      }, /*#__PURE__*/React.createElement(BookingSystem, null))), /*#__PURE__*/React.createElement("div", {
        className: "footer bg-light border border-grey d-flex align-items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mx-auto align-middle text-center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-muted"
      }, "Build by Ding Ming A0241574E"), /*#__PURE__*/React.createElement("a", {
        href: "https://github.com/RayLate/bookingsystemwithreact",
        className: "text-primary"
      }, "Git Repository"))));
    }
  }]);

  return DisplayHomePage;
}(React.Component);

var BookingSystem = /*#__PURE__*/function (_React$Component2) {
  _inherits(BookingSystem, _React$Component2);

  var _super2 = _createSuper(BookingSystem);

  function BookingSystem() {
    var _this;

    _classCallCheck(this, BookingSystem);

    _this = _super2.call(this);
    _this.state = {
      bookings: []
    };
    _this.addBooking = _this.addBooking.bind(_assertThisInitialized(_this));
    _this.removeBooking = _this.removeBooking.bind(_assertThisInitialized(_this));
    _this.searchBooking = _this.searchBooking.bind(_assertThisInitialized(_this));
    _this.clearBookings = _this.clearBookings.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BookingSystem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n      getBookingList\n      {\n        sn\n        name\n        phone\n        timestamp\n      }\n    }";
                _context.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context.sent;
                console.log(data);

                if (data) {
                  this.setState({
                    bookings: data.getBookingList
                  });
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "addBooking",
    value: function () {
      var _addBooking = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(booking) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "mutation addbook($booking: BookingInputs!){\n      addBooking(booking: $booking)\n      {\n        sn\n        name\n        phone\n        timestamp\n      }\n    }";
                _context2.next = 3;
                return graphQLFetch(query, {
                  booking: booking
                });

              case 3:
                data = _context2.sent;

                if (data) {
                  this.loadData();
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addBooking(_x2) {
        return _addBooking.apply(this, arguments);
      }

      return addBooking;
    }()
  }, {
    key: "searchBooking",
    value: function () {
      var _searchBooking = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sn) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "query getBooking($sn: Int!) {\n      getBooking(sn:$sn)\n      {\n        sn\n        name\n        phone\n        timestamp\n      }\n    }";
                _context3.next = 3;
                return graphQLFetch(query, {
                  sn: sn
                });

              case 3:
                data = _context3.sent;
                return _context3.abrupt("return", data.getBooking);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function searchBooking(_x3) {
        return _searchBooking.apply(this, arguments);
      }

      return searchBooking;
    }()
  }, {
    key: "removeBooking",
    value: function () {
      var _removeBooking = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(sn) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = "mutation deleteBooking($sn: Int!) {\n        deleteBooking(sn:$sn)\n    }";
                _context4.next = 3;
                return graphQLFetch(query, {
                  sn: sn
                });

              case 3:
                data = _context4.sent;

                if (data) {
                  console.log(data.deleteBooking);
                  this.loadData();
                }

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function removeBooking(_x4) {
        return _removeBooking.apply(this, arguments);
      }

      return removeBooking;
    }()
  }, {
    key: "clearBookings",
    value: function () {
      var _clearBookings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                query = "mutation {\n      clearBookings\n    }";
                _context5.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context5.sent;

                if (data) {
                  console.log(data.clearBookings);
                  this.loadData();
                }

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function clearBookings() {
        return _clearBookings.apply(this, arguments);
      }

      return clearBookings;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col col-lg-6 col-md-12"
      }, /*#__PURE__*/React.createElement(DisplayFreeSeats, {
        bookings: this.state.bookings.sort(function (a, b) {
          return a.sn - b.sn;
        }),
        clearBookings: this.clearBookings
      })), /*#__PURE__*/React.createElement("div", {
        className: "col col-lg-6 col-md-12 mt-md-10"
      }, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("div", {
        className: "nav nav-tabs",
        id: "nav-tab",
        role: "tablist"
      }, /*#__PURE__*/React.createElement("button", {
        className: "nav-link active",
        id: "nav-display-tab",
        "data-bs-toggle": "tab",
        "data-bs-target": "#nav-display",
        type: "button",
        role: "tab",
        "aria-controls": "nav-display",
        "aria-selected": "true"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fs-4"
      }, "Display")), /*#__PURE__*/React.createElement("button", {
        className: "nav-link",
        id: "nav-create-tab",
        "data-bs-toggle": "tab",
        "data-bs-target": "#nav-create",
        type: "button",
        role: "tab",
        "aria-controls": "nav-create",
        "aria-selected": "false"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fs-4"
      }, "Create")), /*#__PURE__*/React.createElement("button", {
        className: "nav-link",
        id: "nav-delete-tab",
        "data-bs-toggle": "tab",
        "data-bs-target": "#nav-delete",
        type: "button",
        role: "tab",
        "aria-controls": "nav-delete",
        "aria-selected": "false"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fs-4"
      }, "Delete")), /*#__PURE__*/React.createElement("button", {
        className: "nav-link",
        id: "nav-blacklist-tab",
        "data-bs-toggle": "tab",
        "data-bs-target": "#nav-blacklist",
        type: "button",
        role: "tab",
        "aria-controls": "nav-blacklist",
        "aria-selected": "false"
      }, /*#__PURE__*/React.createElement("div", {
        className: "fs-4"
      }, "Blacklist")))), /*#__PURE__*/React.createElement("div", {
        className: "tab-content p-3",
        id: "nav-tabContent"
      }, /*#__PURE__*/React.createElement("div", {
        className: "tab-pane fade show active",
        id: "nav-display",
        role: "tabpanel",
        "aria-labelledby": "nav-display-tab"
      }, this.state.bookings.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("legend", null, "List of Travellers"), /*#__PURE__*/React.createElement("div", {
        className: "scroll-table"
      }, /*#__PURE__*/React.createElement(DisplayTraveller, {
        bookings: this.state.bookings
      }))) : /*#__PURE__*/React.createElement("h2", null, "No Booking")), /*#__PURE__*/React.createElement("div", {
        className: "tab-pane fade",
        id: "nav-create",
        role: "tabpanel",
        "aria-labelledby": "nav-create-tab"
      }, /*#__PURE__*/React.createElement(AddTraveller, {
        addBooking: this.addBooking
      })), /*#__PURE__*/React.createElement("div", {
        className: "tab-pane fade",
        id: "nav-delete",
        role: "tabpanel",
        "aria-labelledby": "nav-delete-tab"
      }, /*#__PURE__*/React.createElement(DeleteTraveller, {
        searchBooking: this.searchBooking,
        removeBooking: this.removeBooking
      })), /*#__PURE__*/React.createElement("div", {
        className: "tab-pane fade",
        id: "nav-blacklist",
        role: "tabpanel",
        "aria-labelledby": "nav-blacklist-tab"
      }, /*#__PURE__*/React.createElement(BlackList, null))))));
    }
  }]);

  return BookingSystem;
}(React.Component);

function DisplayTraveller(props) {
  var bookingRows = props.bookings.map(function (booking, index) {
    return /*#__PURE__*/React.createElement(BookingRow, {
      key: index,
      booking: booking
    });
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "SN"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Name"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Phone"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Created"))), /*#__PURE__*/React.createElement("tbody", null, bookingRows)));
}

function BookingRow(props) {
  var booking = props.booking;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, booking.sn), /*#__PURE__*/React.createElement("td", null, booking.name), /*#__PURE__*/React.createElement("td", null, booking.phone), /*#__PURE__*/React.createElement("td", null, booking.timestamp.toLocaleString()));
}

function DisplayFreeSeats(props) {
  var seats = Array.from({
    length: 25
  }, function (_, i) {
    return i + 1;
  }).map(function (e, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "col-3 mx-auto",
      align: "center",
      key: i,
      id: e
    }, props.bookings.find(function (booking) {
      return booking.sn == e;
    }) ? /*#__PURE__*/React.createElement("div", {
      className: "square my-2 booked"
    }, e) : /*#__PURE__*/React.createElement("div", {
      className: "square my-2"
    }, e));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "container bg-light rounded-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row py-3",
    align: "center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-5 fw-bold"
  }, props.bookings.length == 25 ? "Fully Booked" : "Seats Available = ".concat(25 - props.bookings.length))), /*#__PURE__*/React.createElement("div", {
    className: "pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row p-3"
  }, seats), /*#__PURE__*/React.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-3 "
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "legend booked"
  }), /*#__PURE__*/React.createElement("span", null, "Booked"))), /*#__PURE__*/React.createElement("div", {
    className: "col-3 "
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "legend"
  }), /*#__PURE__*/React.createElement("span", null, "Available"))), /*#__PURE__*/React.createElement("div", {
    className: "col-3"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-dark",
    onClick: props.clearBookings
  }, "Clear all bookings")))));
}

var AddTraveller = /*#__PURE__*/function (_React$Component3) {
  _inherits(AddTraveller, _React$Component3);

  var _super3 = _createSuper(AddTraveller);

  function AddTraveller() {
    var _this2;

    _classCallCheck(this, AddTraveller);

    _this2 = _super3.call(this);
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(AddTraveller, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.newBookingForm; // if (form.name.value === "" || form.phone.value === "") {
      //   alert("Invalid Input, please try again");
      //   return;
      // }

      var booking = {
        name: form.name.value,
        phone: form.phone.value
      };
      this.props.addBooking(booking);
      form.name.value = "";
      form.phone.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "newBookingForm",
        onSubmit: this.handleSubmit,
        autoComplete: "off"
      }, /*#__PURE__*/React.createElement("legend", null, "New Booking"), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "inputTravellerName",
        className: "form-label"
      }, "Traveller Name:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputTravellerName",
        name: "name",
        "aria-describedby": "nameHelp"
      }), /*#__PURE__*/React.createElement("div", {
        id: "nameHelp",
        className: "form-text"
      }, "Use fullname on the travel document")), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "inputMobileNumber",
        className: "form-label"
      }, "Mobile Number:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputMobileNumber",
        name: "phone"
      })), /*#__PURE__*/React.createElement("div", {
        className: "d-grid"
      }, /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Create Booking")));
    }
  }]);

  return AddTraveller;
}(React.Component);

var DeleteTraveller = /*#__PURE__*/function (_React$Component4) {
  _inherits(DeleteTraveller, _React$Component4);

  var _super4 = _createSuper(DeleteTraveller);

  function DeleteTraveller() {
    var _this3;

    _classCallCheck(this, DeleteTraveller);

    _this3 = _super4.call(this);
    _this3.state = {
      showSearchForm: true,
      showDeleteForm: false,
      searchError: false,
      snPendingDelete: -1
    };
    _this3.handleSearch = _this3.handleSearch.bind(_assertThisInitialized(_this3));
    _this3.handleDelete = _this3.handleDelete.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(DeleteTraveller, [{
    key: "resetState",
    value: function resetState() {
      this.setState({
        showSearchForm: true,
        showDeleteForm: false,
        searchError: false,
        snPendingDelete: -1
      });
    }
  }, {
    key: "handleSearch",
    value: function () {
      var _handleSearch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
        var searchForm, searchBooking, deleteForm;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                e.preventDefault();
                searchForm = document.forms.searchBookingForm;

                if (!(searchForm.sn.value === "")) {
                  _context6.next = 5;
                  break;
                }

                alert("Invalid Input, please try again");
                return _context6.abrupt("return");

              case 5:
                _context6.next = 7;
                return this.props.searchBooking(+searchForm.sn.value);

              case 7:
                searchBooking = _context6.sent;

                if (searchBooking) {
                  this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
                    showSearchForm: false,
                    showDeleteForm: true,
                    snPendingDelete: searchBooking.sn
                  }));
                  deleteForm = document.forms.deleteBookingForm;
                  deleteForm.sn.value = searchBooking.sn;
                  deleteForm.name.value = searchBooking.name;
                  deleteForm.number.value = searchBooking.phone;
                  deleteForm.timestamp.value = searchBooking.timestamp.toLocaleString();
                  searchForm.sn.value = "";
                } else {
                  this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
                    searchError: true
                  }));
                  window.alert("Search Error, ".concat(searchForm.sn.value, " cannot be found or not booked."));
                }

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function handleSearch(_x5) {
        return _handleSearch.apply(this, arguments);
      }

      return handleSearch;
    }()
  }, {
    key: "handleDelete",
    value: function () {
      var _handleDelete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                e.preventDefault();
                _context7.next = 3;
                return this.props.removeBooking(this.state.snPendingDelete);

              case 3:
                window.alert("Booking ".concat(this.state.snPendingDelete, " deleted successfully"));
                this.resetState();

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function handleDelete(_x6) {
        return _handleDelete.apply(this, arguments);
      }

      return handleDelete;
    }()
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      // console.log(this);
      this.resetState();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
        name: "searchBookingForm",
        onSubmit: this.handleSearch,
        autoComplete: "off",
        className: this.state.showSearchForm ? "" : "visually-hidden"
      }, /*#__PURE__*/React.createElement("legend", null, "Delete Booking"), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "searchSerialNumber",
        className: "form-label"
      }, "Booking Serial Number:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "searchSerialNumber",
        name: "sn",
        "aria-describedby": "snHelp"
      }), /*#__PURE__*/React.createElement("div", {
        id: "snHelp",
        className: "form-text"
      }, "Serial number on the ticket")), /*#__PURE__*/React.createElement("div", {
        className: "d-grid"
      }, /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Search Booking"))), /*#__PURE__*/React.createElement("form", {
        name: "deleteBookingForm",
        onSubmit: this.handleDelete,
        autoComplete: "off",
        className: this.state.showDeleteForm ? "" : "visually-hidden"
      }, /*#__PURE__*/React.createElement("legend", null, "Delete Booking"), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "deleteSerialNumber",
        className: "form-label"
      }, "Booking Serial Number:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "deleteSerialNumber",
        name: "sn",
        disabled: true
      })), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "deleteName",
        className: "form-label"
      }, "Traveller Name:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "deleteName",
        name: "name",
        disabled: true
      })), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "deleteNumber",
        className: "form-label"
      }, "Handphone Number:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "deleteNumber",
        name: "number",
        disabled: true
      })), /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "deleteCreated",
        className: "form-label"
      }, "Created Date:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "deleteCreated",
        name: "timestamp",
        disabled: true
      })), /*#__PURE__*/React.createElement("div", {
        className: "d-grid gap-2"
      }, /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "btn btn-danger"
      }, "Confirm Delete"), /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        onClick: function onClick() {
          return _this4.handleCancel();
        }
      }, "Cancel"))));
    }
  }]);

  return DeleteTraveller;
}(React.Component);

var BlackList = /*#__PURE__*/function (_React$Component5) {
  _inherits(BlackList, _React$Component5);

  var _super5 = _createSuper(BlackList);

  function BlackList() {
    _classCallCheck(this, BlackList);

    return _super5.call(this);
  }

  _createClass(BlackList, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
        var form, blacklist, query, data, _data$addBlackList, name, phone;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                e.preventDefault();
                form = document.forms.addBlacklistForm;
                blacklist = {};
                if (form.name.value) blacklist["name"] = form.name.value.toUpperCase();
                if (form.phone.value) blacklist["phone"] = form.phone.value;
                query = "mutation addBlackList($blacklist: BlackListInputs!) {\n      addBlackList(blacklist: $blacklist)\n      {\n        name\n        phone\n      }\n    }";
                _context8.next = 8;
                return graphQLFetch(query, {
                  blacklist: blacklist
                });

              case 8:
                data = _context8.sent;

                if (data) {
                  _data$addBlackList = data.addBlackList, name = _data$addBlackList.name, phone = _data$addBlackList.phone;
                  alert("added to blacklist\n".concat(name ? "name: ".concat(name, "\n") : "").concat(phone ? "phone: ".concat(phone, "\n") : ""));
                }

                form.name.value = "";
                form.phone.value = "";

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function handleSubmit(_x7) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
        name: "addBlacklistForm",
        onSubmit: this.handleSubmit,
        autoComplete: "off"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/React.createElement("legend", null, "Blacklist"), /*#__PURE__*/React.createElement("h6", {
        className: "text-danger"
      }, "Add user to blacklist by giving either name or phone or both")), /*#__PURE__*/React.createElement("div", {
        className: "row mb-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group col-md-6"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "inputBlacklistName"
      }, "Name"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputBlacklistName",
        name: "name",
        placeholder: "Name"
      })), /*#__PURE__*/React.createElement("div", {
        className: "form-group col-md-6"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "inputBlacklistPhone"
      }, "Phone"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inputBlacklistPhone",
        name: "phone",
        placeholder: "Phone"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "d-grid mb-3"
      }, /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "btn btn-danger"
      }, "Add Blacklist"))));
    }
  }]);

  return BlackList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(DisplayHomePage, null);
ReactDOM.render(element, document.getElementById("contents"));