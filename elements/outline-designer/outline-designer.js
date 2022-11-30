/**
 * Copyright 2022 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */

import { LitElement, css, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { I18NMixin } from "@lrnwebcomponents/i18n-manager/lib/I18NMixin.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { HAXStore } from "@lrnwebcomponents/hax-body/lib/hax-store.js";
import { HaxTrayDetailHeadings } from "@lrnwebcomponents/hax-body/lib/hax-ui-styles.js";
import { autorun, toJS } from "mobx";
import "@lrnwebcomponents/simple-popover/simple-popover.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/hax-body/lib/hax-toolbar-item.js";
import "@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import "@lrnwebcomponents/simple-fields/lib/simple-fields-field.js";

/**
  * `outline-designer`
  * @element outline-designer
  * `tools to modify and visualize JSON Outline Schema for editing`
  * @demo demo/index.html
  */
export class OutlineDesigner extends I18NMixin(LitElement) {
  static get styles() {
    return [
      ...HaxTrayDetailHeadings,
      css`
      :host {
        display: block;
      }
      .container {
        text-align: left;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 50%;
      }
      ul li {
        margin: 0;
        padding: 0;
      }
      li hax-toolbar-item {
        display: inline-flex;
        width: 50%;
        max-width: 60%;
      }
      li .operation {
        display: inline-flex;
        opacity: 0;
        visibility: hidden;
        --simple-icon-width: 24px;
        --simple-icon-height: 24px;
        float: right;
      }
      li simple-icon-button:hover {
        background-color: #f5f5f5;
      }
      li simple-icon-button.del {
        margin-left: 8px;
      }
      li:hover .operation {
        visibility: visible;
        opacity: 1;
      }
      .label,
      .label-edit  {
        display: none;
      }
      span[disabled].label {
        pointer-events: none;
        opacity: .6;
      }
      .shown {
        display: unset;
      }
      .outline-designer-hovered {
        outline: 2px solid black;
        outline-offset: -1px;
        background-color: #e5e5e5;
      }
      .modified::after {
        content: "*";
        color: red;
        font-size: 20px;
        line-height: 20px;
      }

      .item {
        border: 1px solid grey;
        margin: 0;
        padding: 8px;
        cursor: pointer;
      }
      .item:hover,
      .item:focus {
        background-color: #f5f5f5;
      }
      ul {
        list-style: none;
      }
      .item .label {
        font-size: 14px;
        font-weight: bold;
      }
      .indent-0 {
        padding-left: 0px;
      }
      .indent-1 {
        padding-left: 16px;
      }
      .indent-2 {
        padding-left: 32px;
      }
      .indent-3 {
        padding-left: 48px;
      }
      .indent-4 {
        padding-left: 64px;
      }
      .indent-5 {
        padding-left: 64px;
      }
      .indent-6 {
        padding-left: 64px;
      }
    `];
  }
  constructor() {
    super();
    this.items = [];
    this.appReady = false;
    this.eventData = {};
    this.t = {
      selectParent: "Select target",
      importContentUnderThisPage: "Import content under this page",
      importThisContent: "Import this content",
      thisPage: "this page",
    };
    this.registerLocalization({
      context: this,
      namespace: "hax",
    });
    // so we can prepopulate the parent options menu
    autorun(() => {
      this.activeId = toJS(store.activeId);
    });
    autorun(() => {
      this.appReady = toJS(store.appReady);
    });
    this.addEventListener('click', (e) => {
      // clean up if something is active
      if (this.activePreview) {
        this.shadowRoot.querySelectorAll('simple-popover').forEach((item) => item.setAttribute('hidden','hidden'));
        this.activePreview = false;
      }
    })
  }
  // selectable list of items in the current HAXcms site
  getSiteItems() {
    // default to null parent as the whole site
    var items = [
      {
        text: this.t.selectParent,
        value: null,
      },
    ];
    if (this.appReady) {
      const rawItemList = store.getManifestItems(true);
      rawItemList.forEach((el) => {
        if (el.id != this.itemId) {
          // calculate -- depth so it looks like a tree
          let itemBuilder = el;
          // walk back through parent tree
          let distance = "- ";
          while (itemBuilder && itemBuilder.parent != null) {
            itemBuilder = rawItemList.find((i) => i.id == itemBuilder.parent);
            // double check structure is sound
            if (itemBuilder) {
              distance = "--" + distance;
            }
          }
          items.push({
            text: distance + el.title,
            value: el.id,
          });
        }
      });
    }
    return items;
  }
  // render function
  render() {
    return html`
    <label for="targetselector">${this.t.importThisContent}</label>
    <simple-fields-field id="targetselector" type="select" value="children" .itemsList="${[
      {
        text: "as children of",
        value: "children",
      },
      {
        text: "Above",
        value: "above",
      },
      {
        text: "Below",
        value: "below",
      },
    ]}"></simple-fields-field>
    ${this.t.thisPage}:
    <simple-fields-field id="itemselector" type="select" value="${this.activeId}" .itemsList="${this.getSiteItems()}"></simple-fields-field>
    <label for="itemselector">${this.t.importContentUnderThisPage}</label>
    <ul>
      ${this.items.map((item, index) => this.renderItem(item, index))}
    </ul>`;
  }

  renderItem(item, index) {
    return html`
    <li
      @dragenter="${this._dragEnter}"
      @dragleave="${this._dragLeave}"
      class="item indent-${item.indent} ${item.modified ? 'modified' : ''}"
      data-item-id="${item.id}"
    >
      <simple-icon-button
        ?disabled="${this.isLocked(index)}"
        @dragstart="${this._dragStart}"
        @dragend="${this._dragEnd}"
        draggable="${!this.isLocked(index)}"
        icon="hax:arrow-all"></simple-icon-button>
      <span class="label shown" ?disabled="${this.isLocked(index)}" @dblclick="${this.editTitle}">${item.title}</span>
      <span class="label-edit" @keypress="${this.monitorTitle}" @keydown="${this.monitorEsc}"></span>
      <simple-icon-button
        class="del operation"
        icon="delete"
        @click="${(e) => this.itemOp(index, "delete")}"
        title="Delete"
        ?disabled="${this.isLocked(index)}"
      ></simple-icon-button>
      <simple-icon-button
        class="operation"
        icon="hax:keyboard-arrow-up"
        @click="${(e) => this.itemOp(index, "up")}"
        title="Move up"
        ?disabled="${this.isLocked(index)}"
      ></simple-icon-button>
      <simple-icon-button
        class="operation"
        icon="hax:keyboard-arrow-down"
        @click="${(e) => this.itemOp(index, "down")}"
        title="Move down"
        ?disabled="${this.isLocked(index)}"
      ></simple-icon-button>
      <simple-icon-button
        class="operation"
        icon="${this.isLocked(index)
          ? "icons:lock"
          : "icons:lock-open"}"
        @click="${(e) => this.itemOp(index, "lock")}"
        title="Lock / Unlock"
      ></simple-icon-button>
      <simple-icon-button
        class="operation"
        icon="editor:insert-drive-file"
        @click="${this.toggleContent}"
        ?disabled="${this.isLocked(index)}"
        id="od-item-${item.id}"       
        ></simple-icon-button>
      <simple-popover for="od-item-${item.id}" hidden
        fit-to-visible-bounds
        auto>${unsafeHTML(item.contents)}</simple-popover>
    </li>`;
  }

  toggleContent(e) {
    this.activePreview = e.target;
    e.stopPropagation();
    e.stopImmediatePropagation();
    this.shadowRoot.querySelectorAll('simple-popover').forEach((item) => item.setAttribute('hidden','hidden'));
    this.shadowRoot.querySelector(`[for="${e.target.id}"]`).removeAttribute('hidden');
  }

  editTitle(e) {
    e.target.classList.remove('shown');
    e.target.nextElementSibling.classList.add('shown');
    e.target.nextElementSibling.setAttribute('contenteditable','true');
    e.target.nextElementSibling.innerText = e.target.innerText;
    e.target.nextElementSibling.focus();
  }
  
  monitorTitle(e) {
    if (e.key === 'Enter') {
      e.target.classList.remove('shown');
      e.target.previousElementSibling.classList.add('shown');
      e.target.removeAttribute('contenteditable');
      let itemId = e.target.closest("[data-item-id]").getAttribute('data-item-id');
      for ( let index = 0; index < this.items.length; index++) {
        if (this.items[index].id === itemId) {
          this.items[index].modified = true;
          this.items[index].title = e.target.innerText;
        }
      }
      setTimeout(() => {
        this.requestUpdate();
      }, 0);
    }
  }

  monitorEsc(e) {
    if (e.key === 'Escape') {
      e.target.classList.remove('shown');
      e.target.removeAttribute('contenteditable');
      e.target.previousElementSibling.classList.add('shown');
      e.target.innerText = e.target.previousElementSibling.innerText;
    }
  }
  /**
   * Enter an element, meaning we've over it while dragging
   */
  _dragEnter(e) {
    if (this._targetDrop !== e.target.closest("[data-item-id]")) {
      e.preventDefault();
      e.target.closest("[data-item-id]").classList.add("outline-designer-hovered");
      this._targetDrop = e.target.closest("[data-item-id]");        
    }
  }
  /**
   * Leaving an element while dragging.
   */
  _dragLeave(e) {
    if (this._targetDrop !== e.target.closest("[data-item-id]")) {
      e.target.closest("[data-item-id]").classList.remove("outline-designer-hovered");
    }
  }
  /**
   * When we end dragging ensure we remove the mover class.
   */
  _dragEnd(e) {
    if (this._targetDrag && this._targetDrop) {
      let here = null;
      let from = null;
      for ( let index = 0; index < this.items.length; index++) {
        let item = this.items[index];
        if (item.id === this._targetDrop.getAttribute('data-item-id')) {
          here = index;
        }
        if (item.id === this._targetDrag.getAttribute('data-item-id')) {
          from = index;
        }
      }
      if (from !== null && here !== null) {
        let element = this.items.splice(from, 1)[0];
        element.modified = true;
        this.items.splice(here, 0, element);
      }
      this._targetDrag = null;
      this._targetDrop = null;
      setTimeout(() => {
        this.requestUpdate();
      }, 0);
    }
  }
  /**
   * Drag start so we know what target to set
   */
  _dragStart(e) {
    if (e.target.getAttribute('disabled') == null) {
      let target = e.target.closest("[data-item-id]");
      this._targetDrop = null;
      this._targetDrag = target;
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setDragImage(target, 24, 16);
      }
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      eventData: { type: Object },
      items: { type: Array },
      appReady: { type: Boolean},
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "outline-designer";
  }

  /**
   * Return all data associated with the current tree
   * @note this makes more sense when we allow manipulation via this object and its options
   */
  async getData() {
    const parentId = this.shadowRoot.querySelector("#itemselector").value;
    const targetSelector = this.shadowRoot.querySelector("#targetselector").value;
    let eventData = this.eventData;
    eventData.items = [...this.items];
    let count = 0;
    await eventData.items.map(async (item, index) => {
      if (parentId && item.parent == null) {
        // helps in supporting multiple imports at a time
        count++;
        let parentItem = await store.findItemAsObject(parentId);
        switch (targetSelector) {
          case 'below':
            eventData.items[index].parent = parentItem.parent;
            eventData.items[index].order = parseInt(parentItem.order) + count;  
          break;
          case 'above':
            eventData.items[index].parent = parentItem.parent;
            // @todo this is currently the reverse order desired if
            // multiple top level children existed on the import
            eventData.items[index].order = parseInt(parentItem.order) - count;
          break;
          case 'children':
            eventData.items[index].parent = parentId;
          break;
        }
      }
    })
    return eventData;
  }
  
  isLocked(index) {
    if (index !== false && this.items[index] && this.items[index].metadata && this.items[index].metadata.locked) {
      return true;
    }
    return false;
  }

  itemOp(index, action) {
    if (index !== false && this.items[index] && action) {
      // verify this is not locked
      if (!this.items[index].metadata.locked) {
        switch (action) {
          case "lock":
            this.items[index].metadata.locked = true;
            break;
          case "delete":
            this.items.splice(index, 1);
            break;
          case "down":
            if (index < this.items.length) {
              let element = this.items.splice(index, 1)[0];
              element.modified = true;
              this.items.splice(index+1, 0, element);
            }
          break;
          case "up":
            if (index !== 0) {
              let element = this.items.splice(index, 1)[0];
              element.modified = true;
              this.items.splice(index-1, 0, element);
            }
            break;
        }
      } else if (action === "lock") {
        this.items[index].metadata.locked = false;
      }
      setTimeout(() => {
        this.requestUpdate();
      }, 0);
    }
  }
}
customElements.define(OutlineDesigner.tag, OutlineDesigner);