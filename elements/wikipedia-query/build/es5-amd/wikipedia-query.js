define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.WikipediaQuery = void 0;
  function _templateObject_122b1480d70d11e8b510a52f4c04d9b3() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_122b1480d70d11e8b510a52f4c04d9b3 = function() {
      return data;
    };
    return data;
  }
  var WikipediaQuery = (function(_PolymerElement) {
    babelHelpers.inherits(WikipediaQuery, _PolymerElement);
    function WikipediaQuery() {
      babelHelpers.classCallCheck(this, WikipediaQuery);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          WikipediaQuery.__proto__ || Object.getPrototypeOf(WikipediaQuery)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      WikipediaQuery,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                WikipediaQuery.prototype.__proto__ ||
                  Object.getPrototypeOf(WikipediaQuery.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              WikipediaQuery.haxProperties,
              WikipediaQuery.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_122b1480d70d11e8b510a52f4c04d9b3()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Wikipedia query",
                description: "Automated conversion of wikipedia-query/",
                icon: "icons:android",
                color: "green",
                groups: ["Query"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "wikipedia-query";
          }
        }
      ]
    );
    return WikipediaQuery;
  })(_polymerElement.PolymerElement);
  _exports.WikipediaQuery = WikipediaQuery;
  window.customElements.define(WikipediaQuery.tag, WikipediaQuery);
});
