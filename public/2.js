(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      headers: [{
        text: 'ID',
        value: 'id'
      }, {
        text: 'Image',
        value: 'image',
        sortable: false
      }, {
        text: 'Name',
        value: 'name'
      }, {
        text: 'Desc',
        value: 'desc'
      }, {
        text: 'Category',
        value: 'categories.name'
      }, {
        text: 'SubCategory',
        value: 'sub_categories.name'
      }, {
        text: 'Tags',
        value: 'tags'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      products: [],
      categories: [],
      subCategories: [],
      errors: [],
      tags: [],
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      position: -1,
      editedPro: {
        name: '',
        desc: '',
        category_id: '',
        sub_category_id: '',
        selling_price: '',
        purchase_price: '',
        stock: '',
        tag_id: [],
        image: ''
      },
      defaultPro: {
        name: '',
        desc: '',
        categoryId: '',
        subCategoryId: '',
        selling_price: '',
        purchase_price: '',
        stock: '',
        tag_id: [],
        image: ''
      },
      files: {},
      rules: [function (value) {
        return !!value || 'Required.';
      }, function (value) {
        return value && value > 0 || 'must be > 0';
      }]
    };
  },
  methods: {
    getColor: function getColor(index) {
      if (index % 2 == 0) return 'red';else if (index % 2 !== 0) return 'orange';else return 'green';
    },
    createProduct: function createProduct() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/products', this.editedPro).then(function (response) {
        _this.editedPro = Object.assign({}, _this.defaultPro);

        _this.products.unshift(response.data.data);

        _this.editedIndex = -1;
        console.log(response);
      })["catch"](function (error) {
        if (error.response.data.errors) {
          _this.errors = _objectSpread({}, error.response.data.errors);
        }
      });
    },
    //end create product
    editProduct: function editProduct() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/products/".concat(this.editedIndex), this.editedPro).then(function (response) {
        Object.assign(_this2.products[_this2.position], response.data.data);
        _this2.editedIndex = -1;
        console.log(response);
      })["catch"](function (error) {
        if (error.response.data.errors) {
          _this2.errors = _objectSpread({}, error.response.data.errors);
        }
      });
    },
    // end of edit product
    displayErrMsg: function displayErrMsg(name) {
      if (this.errors[name]) {
        return this.errors[name];
      }
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this3.editedPro = Object.assign({}, _this3.defaultPro);
        _this3.editedIndex = -1;
      });
      this.files = [];
    },
    save: function save() {
      if (this.editedIndex > -1) {
        // edit
        this.editProduct(); // this.editedPro = Object.assign({}, this.defaultPro)
      } else {
        // create
        this.createProduct();
      }

      this.close();
    },
    //end save product
    editItem: function editItem(item) {
      this.editedIndex = item.id;
      this.position = this.products.indexOf(item);
      this.editedPro = item;
      this.editedPro.image = item.image_path;
      var tagsIds = item.tags.map(function (tag) {
        return tag.id;
      });
      this.editedPro.tag_id = tagsIds;
      this.dialog = true;
      console.log(this.editedPro);
    },
    deleteItem: function deleteItem(item) {
      this.position = this.products.indexOf(item);
      this.editedIndex = item.id;
      this.editedPro = item;
      this.dialogDelete = true;
      console.log(this.position, this.editedIndex, this.editedPro);
    },
    deleteItemConfirm: function deleteItemConfirm() {
      this.products.splice(this.position, 1);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/products/".concat(this.editedIndex));
      this.closeDelete();
    },
    closeDelete: function closeDelete() {
      var _this4 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this4.editedPro = Object.assign({}, _this4.defaultPro);
        _this4.editedIndex = -1;
      });
    },
    onImageChange: function onImageChange(e) {
      // let files = e.target.files || e.dataTransfer.files
      var files = '';
      console.log(e.target);

      if (!files.length) {
        return;
      }
    },
    //end detecting image
    createImage: function createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.editedPro.image = e.target.result;
      };

      reader.readAsDataURL(file);
    } //end showing image

  },
  created: function created() {
    var _this5 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/products').then(function (response) {
      console.log(response.data.products);
      _this5.products = response.data.products;
      _this5.categories = response.data.categories;
      _this5.tags = response.data.tags;
    })["catch"](function (err) {
      console.error(err);
    });
  },
  watch: {
    editedPro: {
      handler: function handler(val) {
        var _this6 = this;

        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/products/get_sub_categories/".concat(val.category_id)).then(function (response) {
          _this6.subCategories = response.data.subCategories;
        })["catch"](function (err) {
          console.error(err);
        });
      },
      deep: true
    },
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    },
    files: function files(val) {
      console.log(val);
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.editedPro.image = e.target.result;
      };

      reader.readAsDataURL(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Products.vue?vue&type=template&id=4cceec26&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Products.vue?vue&type=template&id=4cceec26& ***!
  \******************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-6" },
          [
            _c(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "600px" },
                scopedSlots: _vm._u([
                  {
                    key: "activator",
                    fn: function(ref) {
                      var on = ref.on
                      var attrs = ref.attrs
                      return [
                        _c(
                          "v-btn",
                          _vm._g(
                            _vm._b(
                              { attrs: { color: "primary", dark: "" } },
                              "v-btn",
                              attrs,
                              false
                            ),
                            on
                          ),
                          [_vm._v("\r\n          Open Dialog\r\n        ")]
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.dialog,
                  callback: function($$v) {
                    _vm.dialog = $$v
                  },
                  expression: "dialog"
                }
              },
              [
                _vm._v(" "),
                _c("v-card", [
                  _c(
                    "form",
                    {
                      attrs: { action: "#" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.save($event)
                        }
                      }
                    },
                    [
                      _c("v-card-title", [
                        _c("span", { staticClass: "headline" }, [
                          _vm._v("User Profile")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "name*",
                                          required: "",
                                          "error-messages": _vm.displayErrMsg(
                                            "name"
                                          )
                                        },
                                        model: {
                                          value: _vm.editedPro.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.editedPro, "name", $$v)
                                          },
                                          expression: "editedPro.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "desciption",
                                          "error-messages": _vm.displayErrMsg(
                                            "desc"
                                          )
                                        },
                                        model: {
                                          value: _vm.editedPro.desc,
                                          callback: function($$v) {
                                            _vm.$set(_vm.editedPro, "desc", $$v)
                                          },
                                          expression: "editedPro.desc"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "purchase price",
                                          type: "number",
                                          rules: _vm.rules,
                                          "error-messages": _vm.displayErrMsg(
                                            "purchase_price"
                                          )
                                        },
                                        model: {
                                          value: _vm.editedPro.purchase_price,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedPro,
                                              "purchase_price",
                                              $$v
                                            )
                                          },
                                          expression: "editedPro.purchase_price"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "selling price",
                                          type: "number",
                                          rules: _vm.rules,
                                          "error-messages": _vm.displayErrMsg(
                                            "selling_price"
                                          )
                                        },
                                        model: {
                                          value: _vm.editedPro.selling_price,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedPro,
                                              "selling_price",
                                              $$v
                                            )
                                          },
                                          expression: "editedPro.selling_price"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "stock",
                                          type: "number",
                                          rules: _vm.rules,
                                          "error-messages": _vm.displayErrMsg(
                                            "stock"
                                          )
                                        },
                                        model: {
                                          value: _vm.editedPro.stock,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedPro,
                                              "stock",
                                              $$v
                                            )
                                          },
                                          expression: "editedPro.stock"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.categories,
                                          "item-text": "name",
                                          "item-value": "id",
                                          "error-messages": _vm.displayErrMsg(
                                            "category_id"
                                          ),
                                          label: "Categories"
                                        },
                                        model: {
                                          value: _vm.editedPro.category_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedPro,
                                              "category_id",
                                              $$v
                                            )
                                          },
                                          expression: "editedPro.category_id"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.subCategories,
                                          "item-text": "name",
                                          "item-value": "id",
                                          "error-messages": _vm.displayErrMsg(
                                            "sub_category_id"
                                          ),
                                          label: "sub categories"
                                        },
                                        model: {
                                          value: _vm.editedPro.sub_category_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedPro,
                                              "sub_category_id",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "editedPro.sub_category_id"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          multiple: "",
                                          items: _vm.tags,
                                          "item-text": "name",
                                          "item-value": "id",
                                          "error-messages": _vm.displayErrMsg(
                                            "tags"
                                          ),
                                          label: "tags"
                                        },
                                        model: {
                                          value: _vm.editedPro.tag_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedPro,
                                              "tag_id",
                                              $$v
                                            )
                                          },
                                          expression: "editedPro.tag_id"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "6" } },
                                    [
                                      _c("v-file-input", {
                                        attrs: {
                                          label: "upload image",
                                          type: "file"
                                        },
                                        model: {
                                          value: _vm.files,
                                          callback: function($$v) {
                                            _vm.files = $$v
                                          },
                                          expression: "files"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.editedPro.image
                                    ? _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            sm: "6",
                                            md: "6"
                                          }
                                        },
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              "lazy-src":
                                                "https://picsum.photos/id/11/10/6",
                                              "aspect-ratio": "1",
                                              src: _vm.editedPro.image
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: {
                                click: function($event) {
                                  _vm.dialog = false
                                }
                              }
                            },
                            [_vm._v("\r\n            Close\r\n          ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: { click: _vm.save }
                            },
                            [_vm._v("\r\n            Save\r\n          ")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-dialog",
              {
                attrs: { "max-width": "500px" },
                model: {
                  value: _vm.dialogDelete,
                  callback: function($$v) {
                    _vm.dialogDelete = $$v
                  },
                  expression: "dialogDelete"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c("v-card-title", { staticClass: "headline" }, [
                      _vm._v("Are you sure you want to delete this item?")
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "blue darken-1", text: "" },
                            on: { click: _vm.closeDelete }
                          },
                          [_vm._v("Cancel")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "blue darken-1", text: "" },
                            on: { click: _vm.deleteItemConfirm }
                          },
                          [_vm._v("OK")]
                        ),
                        _vm._v(" "),
                        _c("v-spacer")
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
      ]),
      _vm._v(" "),
      _c(
        "v-data-table",
        {
          staticClass: "elevation-1",
          attrs: {
            headers: _vm.headers,
            items: _vm.products,
            "items-per-page": 5,
            loading: "true",
            "loading-text": "Loading... Please wait"
          },
          scopedSlots: _vm._u([
            {
              key: "item.tags",
              fn: function(ref) {
                var item = ref.item
                return _vm._l(item.tags, function(tag) {
                  return _c(
                    "v-chip",
                    {
                      key: tag.id,
                      staticClass: "mr-2 mt-2 mb-2",
                      attrs: { dark: "", color: _vm.getColor(tag.id) }
                    },
                    [_vm._v("\r\n        " + _vm._s(tag.name) + "\r\n      ")]
                  )
                })
              }
            },
            {
              key: "item.image",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c("img", {
                    staticStyle: { "border-radius": "50%" },
                    attrs: {
                      src: item.image_path,
                      alt: "image",
                      width: "40",
                      height: "40"
                    }
                  })
                ]
              }
            },
            {
              key: "item.actions",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "div",
                    { staticClass: "d-flex flex-row" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-2",
                          attrs: { icon: "", color: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.editItem(item)
                            }
                          }
                        },
                        [
                          _c("v-icon", { attrs: { small: "" } }, [
                            _vm._v("\r\n        mdi-pencil\r\n      ")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-2",
                          attrs: { icon: "", color: "error" },
                          on: {
                            click: function($event) {
                              return _vm.deleteItem(item)
                            }
                          }
                        },
                        [
                          _c("v-icon", { attrs: { small: "" } }, [
                            _vm._v("\r\n        mdi-delete\r\n      ")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              }
            }
          ])
        },
        [_vm._v(" "), void 0],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("h4", [_vm._v("Manage Products")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Products.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Products.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_4cceec26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=4cceec26& */ "./resources/js/pages/Products.vue?vue&type=template&id=4cceec26&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/pages/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_4cceec26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_4cceec26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Products.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Products.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Products.vue?vue&type=template&id=4cceec26&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Products.vue?vue&type=template&id=4cceec26& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_4cceec26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=4cceec26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Products.vue?vue&type=template&id=4cceec26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_4cceec26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_4cceec26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);