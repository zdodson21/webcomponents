/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html } from 'lit-element';
import { LrndesignGalleryBehaviors } from "./lib/lrndesign-gallery-behaviors.js";
import { ResponsiveUtility } from "@lrnwebcomponents/responsive-utility/responsive-utility.js";
/*import "./lib/lrndesign-gallery-carousel.js";
import "./lib/lrndesign-gallery-grid.js";*/

/**
 * `lrndesign-gallery`
 * displays images as a carousel or grid with the ability to zoom
 *
 * @customElement lrndesign-gallery
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class LrndesignGallery extends LrndesignGalleryBehaviors {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "lrndesign-gallery";
  }

  // life cycle
  constructor() {
    super();
    
    this.tag = LrndesignGallery.tag;
    // map our imported properties json to real props on the element
    // @notice static getter of properties is built via tooling
    // to edit modify src/lrndesign-gallery-properties.json
    let obj = LrndesignGallery.properties;
    for (let p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (this.hasAttribute(p)) {
          this[p] = this.getAttribute(p);
        }
        else {
          this.setAttribute(p, obj[p].value);
          this[p] = obj[p].value;
        }
      }
    }
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    this.__gallery = this.shadowRoot.querySelector("#gallery");
    this.anchorData = this._getAnchorData();
    window.ResponsiveUtility.requestAvailability();
    window.dispatchEvent(
      new CustomEvent("responsive-element", {
        detail: {
          element: this,
          attribute: "responsive-size",
          relativeToParent: true
        }
      })
    );
    
  }
  // static get observedAttributes() {
  //   return [];
  // }
  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}

  /**
   * calls responsive-utility to get parent's responsive size
   *
   * @param {object} a set of responsive for options, 
   * eg: `{element: root, attribute: "responsive-size", relativeToParent: true}`
   */
  _addResponsiveUtility(options) {
    window.ResponsiveUtility.requestAvailability();
    window.dispatchEvent(
      new CustomEvent("responsive-element", {
        detail:
          options !== undefined
            ? options
            : {
                element: this,
                attribute: "responsive-size",
                relativeToParent: true
              }
      })
    );
  }
  
}
customElements.define("lrndesign-gallery", LrndesignGallery);
export { LrndesignGallery };
