((typeof self !== 'undefined' ? self : this)["webpackJsonpbasic_sidebar"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpbasic_sidebar"] || []).push([[0],{

/***/ "6054":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_ef001a6e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9498");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_ef001a6e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_ef001a6e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_ef001a6e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "684d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7bcb1249-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar.vue?vue&type=template&id=ef001a6e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticStyle:{"display":"inline-block","vertical-align":"top","width":"25%"}},[_c('el-menu',{attrs:{"default-active":_vm.activeMenu,"router":true,"unique-opened":true,"background-color":"#4BD0FF","text-color":"#fff","active-text-color":"#ffd04b"}},[_vm._l((_vm.routers),function(item){return [(item.children.length === 0)?_c('el-menu-item',{key:item.meta.title,attrs:{"index":item.path},on:{"click":function($event){return _vm.selectMenu(item)}}},[_vm._v(_vm._s(item.meta.title))]):(item.children.length > 0)?_c('el-submenu',{key:item.meta.title,attrs:{"index":item.path}},[_c('template',{slot:"title"},[_vm._v(_vm._s(item.meta.title))]),_c('el-menu-item-group',_vm._l((item.children),function(child){return _c('el-menu-item',{key:child.meta.title,attrs:{"index":child.path},on:{"click":function($event){return _vm.selectMenu(child)}}},[_vm._v(_vm._s(child.meta.title))])}),1)],2):_vm._e()]})],2)],1),_c('div',{staticStyle:{"display":"inline-block","vertical-align":"top","width":"72%"}},[_c('el-tabs',{attrs:{"type":"card"},on:{"tab-click":_vm.clickTab,"tab-remove":_vm.removeTab},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},_vm._l((_vm.tabsLabel),function(item,index){return _c('el-tab-pane',{key:item.meta.title,attrs:{"label":item.meta.title,"closable":index !== 0,"name":item.meta.title}},[_c('router-view')],1)}),1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/sidebar.vue?vue&type=template&id=ef001a6e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var sidebarvue_type_script_lang_js_ = ({
  name: 'sidebar',
  data() {
    return {
      routers: [],
      activeMenu: '1',
      active: '',
      tabsLabel: []
    }
  },
  created() {
    this.routers = this.$router.options.routes;
    this.tabsLabel.push(this.routers[0]);
    this.active = this.tabsLabel[0].meta.title;
    
  },
  methods: {
    selectMenu(item) {
      let isRepeat = this.tabsLabel.some(ele => {
        return item.meta.title === ele.meta.title;
      })
      if(!isRepeat) {
        this.tabsLabel.push(item);
      }
      this.active = item.meta.title;
    },

    removeTab(tag) {
      this.tabsLabel.splice(this.tabsLabel.indexOf(tag), 1);
    },

    clickTab(tag) {
      
    }
  }
});

// CONCATENATED MODULE: ./src/components/sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_sidebarvue_type_script_lang_js_ = (sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/sidebar.vue?vue&type=style&index=0&id=ef001a6e&scoped=true&lang=css&
var sidebarvue_type_style_index_0_id_ef001a6e_scoped_true_lang_css_ = __webpack_require__("6054");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/sidebar.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ef001a6e",
  null
  
)

/* harmony default export */ var sidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9498":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);