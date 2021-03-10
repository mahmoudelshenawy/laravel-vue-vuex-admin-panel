(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_2___default.a({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }),
      name: "",
      email: "",
      password: "",
      password_confirmation: '',
      error: false,
      errors: [],
      errorsArr: [],
      errorMsg: null
    };
  },
  //   computed:{
  // displayErr(name){
  // let err = this.errorsArr.find((index,err) => index === name)
  // return err.name
  // }
  //   },
  methods: {
    register: function register() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, result, err;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/register', {
                  name: _this.name,
                  email: _this.email,
                  password: _this.password,
                  password_confirmation: _this.password_confirmation
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', {
                  email: _this.email,
                  password: _this.password
                });

              case 6:
                result = _context.sent;
                // clear state
                _this.name = "";
                _this.email = "";
                _this.password = "";

                _this.$store.dispatch('setToken', result.data.token);

                _this.$store.dispatch('updateUser', result.data);

                _this.$router.push({
                  name: "Home"
                });

                _context.next = 26;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                _this.error = true;
                _context.next = 20;
                return _context.t0.response.data.message;

              case 20:
                _this.errorMsg = _context.sent;
                _context.next = 23;
                return _context.t0.response.data.errors;

              case 23:
                _this.errors = _context.sent;

                for (err in _this.errors) {
                  // console.log(this.errors[err][0])
                  _this.errorsArr[err] = _this.errors[err][0];
                } // console.log(this.errorsArr)


                console.log(_context.t0.response.data.errors.name[0]); // console.log(error.response)

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }))();
    },
    // after register get User
    displayErr: function displayErr(name, errs) {
      var err = errs.find(function (index, err) {
        return err;
      }); // console.log('test' , err , name)
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "6 mx-auto" } },
            [
              _c(
                "v-card",
                { staticClass: "d-flex flex-column" },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { color: "primary", dark: "" } },
                    [_c("v-toolbar-title", [_vm._v("Register")])],
                    1
                  ),
                  _vm._v(" "),
                  _vm.error
                    ? _c(
                        "v-alert",
                        {
                          staticClass: "mt-2",
                          attrs: { dense: "", outlined: "", type: "error" }
                        },
                        [_vm._v("\n " + _vm._s(_vm.errorMsg) + "\n")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.register($event)
                        },
                        keydown: function($event) {
                          return _vm.form.onKeydown($event)
                        }
                      }
                    },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "mx-auto mb-3 mt-6",
                          attrs: { cols: "8" }
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              label: "name",
                              placeholder: "name.."
                            },
                            model: {
                              value: _vm.name,
                              callback: function($$v) {
                                _vm.name = $$v
                              },
                              expression: "name"
                            }
                          }),
                          _vm._v(" "),
                          _vm.error
                            ? _c("span", { staticClass: "text-danger" }, [
                                _vm._v(
                                  _vm._s(_vm.displayErr("name", _vm.errorsArr))
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "mx-auto my-3", attrs: { cols: "8" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              label: "email",
                              placeholder: "email.."
                            },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "mx-auto my-3", attrs: { cols: "8" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              label: "password",
                              type: "password",
                              placeholder: "password.."
                            },
                            model: {
                              value: _vm.password,
                              callback: function($$v) {
                                _vm.password = $$v
                              },
                              expression: "password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "mx-auto my-3", attrs: { cols: "8" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              dense: "",
                              label: "password confirmation",
                              type: "password",
                              placeholder: "password confirmation"
                            },
                            model: {
                              value: _vm.password_confirmation,
                              callback: function($$v) {
                                _vm.password_confirmation = $$v
                              },
                              expression: "password_confirmation"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mx-auto my-3 text-center",
                          attrs: { cols: "3" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: { click: _vm.register }
                            },
                            [_vm._v("\n      submit\n      ")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/Auth/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_593630de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=593630de& */ "./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_593630de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_593630de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_593630de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=593630de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_593630de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_593630de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);