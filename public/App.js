"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
      }, "IT5007 Tutorial 3")), /*#__PURE__*/React.createElement("div", {
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
        href: "#",
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
    return _this;
  }

  _createClass(BookingSystem, [{
    key: "isFull",
    value: function isFull() {
      return this.state.bookings.length == 25;
    }
  }, {
    key: "getFirstAvailableId",
    value: function getFirstAvailableId() {
      var _this2 = this;

      var _loop = function _loop(index) {
        if (_this2.state.bookings.find(function (booking) {
          return booking.sn == index;
        }) === undefined) {
          return {
            v: index
          };
        }
      };

      for (var index = 1; index < 26; index++) {
        var _ret = _loop(index);

        if (_typeof(_ret) === "object") return _ret.v;
      }
    }
  }, {
    key: "addBooking",
    value: function addBooking(booking) {
      if (this.isFull()) {
        alert("All seats are booked");
        return;
      }

      var newBooking = _objectSpread(_objectSpread({}, booking), {}, {
        sn: this.getFirstAvailableId()
      });

      var newBookings = [].concat(_toConsumableArray(this.state.bookings), [newBooking]);
      console.log(newBookings);
      this.setState({
        bookings: newBookings
      });
    }
  }, {
    key: "searchBooking",
    value: function searchBooking(sn) {
      console.log(sn);
      var searchBooking = this.state.bookings.find(function (booking) {
        return booking.sn == sn;
      });
      return searchBooking;
    }
  }, {
    key: "removeBooking",
    value: function removeBooking(sn) {
      var newBookings = this.state.bookings.filter(function (booking) {
        return booking.sn != sn;
      });
      this.setState({
        bookings: newBookings
      });
    }
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
        })
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
      }, "Delete")))), /*#__PURE__*/React.createElement("div", {
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
      }))))));
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
  }, booking.sn), /*#__PURE__*/React.createElement("td", null, booking.name), /*#__PURE__*/React.createElement("td", null, booking.phone), /*#__PURE__*/React.createElement("td", null, booking.timestamp.toISOString()));
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
    className: "row",
    align: "center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-5 fw-bold"
  }, props.bookings.length == 25 ? "Fully Booked" : "Seats Available = ".concat(25 - props.bookings.length))), /*#__PURE__*/React.createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row p-3"
  }, seats), /*#__PURE__*/React.createElement("div", {
    className: "row"
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
  })))));
}

var AddTraveller = /*#__PURE__*/function (_React$Component3) {
  _inherits(AddTraveller, _React$Component3);

  var _super3 = _createSuper(AddTraveller);

  function AddTraveller() {
    var _this3;

    _classCallCheck(this, AddTraveller);

    _this3 = _super3.call(this);
    _this3.handleSubmit = _this3.handleSubmit.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(AddTraveller, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.newBookingForm;

      if (form.name.value === "" || form.phone.value === "") {
        alert("Invalid Input, please try again");
        return;
      }

      var booking = {
        name: form.name.value,
        phone: form.phone.value,
        timestamp: new Date()
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
    var _this4;

    _classCallCheck(this, DeleteTraveller);

    _this4 = _super4.call(this);
    _this4.state = {
      showSearchForm: true,
      showDeleteForm: false,
      searchError: false,
      snPendingDelete: -1
    };
    _this4.handleSearch = _this4.handleSearch.bind(_assertThisInitialized(_this4));
    _this4.handleDelete = _this4.handleDelete.bind(_assertThisInitialized(_this4));
    return _this4;
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
    value: function handleSearch(e) {
      e.preventDefault();
      var searchForm = document.forms.searchBookingForm;

      if (searchForm.sn.value === "") {
        alert("Invalid Input, please try again");
        return;
      }

      var searchBooking = this.props.searchBooking(searchForm.sn.value);

      if (searchBooking !== undefined) {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          showSearchForm: false,
          showDeleteForm: true,
          snPendingDelete: searchBooking.sn
        }));
        var deleteForm = document.forms.deleteBookingForm;
        deleteForm.sn.value = searchBooking.sn;
        deleteForm.name.value = searchBooking.name;
        deleteForm.number.value = searchBooking.phone;
        deleteForm.timestamp.value = searchBooking.timestamp.toISOString();
        searchForm.sn.value = "";
      } else {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          searchError: true
        }));
        window.alert("Search Error, ".concat(searchForm.sn.value, " cannot be found."));
      }
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(e) {
      e.preventDefault();
      this.props.removeBooking(this.state.snPendingDelete);
      window.alert("Booking ".concat(this.state.snPendingDelete, " deleted successfully"));
      this.resetState();
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      // console.log(this);
      this.resetState();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

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
          return _this5.handleCancel();
        }
      }, "Cancel"))));
    }
  }]);

  return DeleteTraveller;
}(React.Component);

var element = /*#__PURE__*/React.createElement(DisplayHomePage, null);
ReactDOM.render(element, document.getElementById("contents"));