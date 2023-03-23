import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-fields/lib/simple-tag.js";

export class SuperDaemonRow extends LitElement {
  constructor() {
    super();
    this.title = null;
    this.path = null;
    this.icon = null;
    this.image = null;
    this.key = null;
    this.eventName = null;
    this.more = false;
    this.showDetails = false;
    this.value = {};
    this.tags = [];
    this.shadowRootOptions = {
      ...LitElement.shadowRootOptions,
      delegatesFocus: true,
    };
    this.active = false;
  }
  static get tag() {
    return "super-daemon-row";
  }

  static get properties() {
    return {
      title: { type: String },
      path: { type: String },
      icon: { type: String },
      mini: { type: Boolean, reflect: true },
      image: { type: String },
      more: { type: Boolean },
      showDetails: { type: Boolean },
      key: { type: String },
      eventName: { type: String, attribute: "event-name" },
      value: { type: Object },
      tags: { type: Array },
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    let styles = [];
    if (super.styles) {
      styles = super.styles;
    }
    return [
      ...styles,
      css`
        :host {
          display: block;
          margin: 8px 16px;
        }
        :host([active]),
        :host:hover {
          border-radius: 8px;
          background-color: var(
            --super-daemon-row-hover,
            rgba(0, 100, 200, 0.1)
          );
          outline: 2px solid black;
        }
        :host([mini]) {
          margin: 0;
          --super-daemon-row-label: 18px;
          --super-daemon-row-path: 10px;
        }
        button {
          display: flex;
          padding: 16px;
          width: 100%;
          border-radius: 0;
          border: none;
          align-items: middle;
          justify-content: space-between;
          background-color: transparent;
        }
        :host([mini]) button {
          padding: 4px;
          justify-content: flex-start;
        }
        .result-icon {
          display: inline-flex;
          --simple-icon-height: var(--super-daemon-row-icon, 50px);
          --simple-icon-width: var(--super-daemon-row-icon, 50px);
        }
        :host([mini]) .result-icon {
          --simple-icon-height: var(--super-daemon-row-icon, 20px);
          --simple-icon-width: var(--super-daemon-row-icon, 20px);
        }
        .result-image {
          display: inline-flex;
          max-height: 64px;
          max-width: 100px;
        }
        :host([mini]) .result-image {
          max-height: 32px;
          max-width: 50px;
        }
        .label-wrap {
          min-width: 50%;
          overflow: hidden;
          text-align: left;
        }
        :host([mini]) .label-wrap {
          width: 100%;
          margin-left: 16px;
        }
        .tags {
          width: 30%;
          line-height: 32px;
          height: 64px;
          overflow: hidden;
        }
        :host([mini]) .tags {
          display: none;
        }
        .label-wrap .action {
          font-size: var(--super-daemon-row-label, 32px);
          font-weight: bold;
          max-width: 90%;
          word-break: break-all;
          overflow: hidden;
          line-height: var(--super-daemon-row-label, 32px);
          height: var(--super-daemon-row-label, 32px);
        }
        :host([mini]) .label-wrap .action {
          max-width: unset;
        }
        .label-wrap .path {
          font-size: var(--super-daemon-row-path, 20px);
          font-style: italic;
          margin-top: 8px;
          overflow-wrap: break-word;
          word-break: break-all;
          overflow: hidden;
          max-width: 80%;
          line-height: var(--super-daemon-row-path, 20px);
          height: var(--super-daemon-row-path, 20px);
        }
        :host([mini]) .label-wrap .path {
          max-width: unset;
        }
        .key-combo {
          height: 64px;
        }
        :host([mini]) .key-combo {
          display: none;
        }
        .keyboard-shortcut {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          color: rgba(0, 0, 0, 0.7);
          box-shadow: rgb(209 213 219) 0px -4px 0px inset,
            rgb(0 0 0 / 40%) 0px 1px 1px;
          display: block;
          letter-spacing: 0px;
          font-family: "Press Start 2P", "Trebuchet MS", "Lucida Sans Unicode",
            "Lucida Grande", "Lucida Sans", Arial, sans-serif;
          padding: 6px 4px;
          margin: 4px auto;
          font-size: 9px;
        }
        summary {
          display: none;
        }
        @keyframes details-show {
          from {
            opacity: 0;
            transform: var(--details-translate, translateY(-0.5em));
          }
          to {
            opacity: 1;
            transform: var(--details-translate, translateY(0));
          }
        }

        details[open] {
          padding: 0 16px 16px 16px;
          animation: details-show 100ms ease-in-out;
        }
      `,
    ];
  }

  keyEvent(e) {
    // ensure that the daemon dialog does not accidentally duplicate or get this
    // when our focus was on a specific item while using the keyboard
    if (e.code === "Enter" || e.code === "Space") {
      this.selected();
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  clickEvent(e) {
    this.selected();
  }

  selected() {
    // execute the event
    this.dispatchEvent(
      new CustomEvent("super-daemon-row-selected", {
        composed: true,
        bubbles: true,
        cancelable: true,
        detail: this,
      })
    );
    this.dispatchEvent(
      new CustomEvent(this.eventName, {
        composed: true,
        bubbles: true,
        cancelable: true,
        detail: this.value,
      })
    );
    // programs will run in the same window so we don't want to close the dialog
    // as every non-program running a single command would have to declare
    // when it wanted the dialog closed so we just do it automatically
    if (this.eventName !== "super-daemon-run-program") {
      // close dialog bc we executed that command
      this.dispatchEvent(
        new CustomEvent("super-daemon-close", {
          composed: true,
          bubbles: true,
          cancelable: true,
          detail: this,
        })
      );
    }
  }
  _focusIn(e) {
    this.active = true;
  }
  _focusOut(e) {
    this.active = false;
  }

  pickColor(val) {
    if (val === 0) {
      return "blue";
    }
    return "orange";
  }
  keyAry(key) {
    if (key) {
      return key.split("+");
    }
    return [];
  }
  render() {
    return html`
      <button
        part="button"
        @click="${this.clickEvent}"
        @keydown="${this.keyEvent}"
        @focusin="${this._focusIn}"
        @focusout="${this._focusOut}"
      >
        ${this.icon
          ? html`<simple-icon-lite
              icon="${this.icon}"
              class="result-icon"
            ></simple-icon-lite>`
          : ``}
        ${this.image
          ? html`<img src="${this.image}" class="result-image" alt="" />`
          : ``}
        <div class="label-wrap">
          <div class="action" part="action">${this.title}</div>
          <div class="path" part="path">${this.path}</div>
        </div>
        <div class="tags" part="tags">
          ${this.tags.map(
            (tag, i) => html` <simple-tag
              accent-color="${this.pickColor(i)}"
              value="${tag}"
              part="tag tag-${i}"
            ></simple-tag>`
          )}
        </div>
        <div class="key-combo" part="key-combo">
          ${this.keyAry(this.key).map(
            (key) => html`<kbd class="keyboard-shortcut">${key}</kbd>`
          )}
        </div>
        ${this.more
          ? html`<simple-icon-button
              label="More details"
              icon="more-vert"
              aria-controls="details"
              @click="${this.toggleDetailsClick}"
              @keydown="${this.toggleDetailsKey}"
            ></simple-icon-button>`
          : ``}
      </button>
      ${this.more
        ? html`<details
            id="details"
            ?open="${this.showDetails}"
            @toggle="${this.openChanged}"
          >
            <summary>Details</summary>
            <div>
              <slot></slot>
            </div>
          </details>`
        : ``}
    `;
  }
  // toggle on click but prevent the event from bubbling up
  toggleDetailsKey(e) {
    if (e.key === "Enter" || e.key === "Space") {
      this.showDetails = !this.showDetails;
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
  // toggle on click but prevent the event from bubbling up
  toggleDetailsClick(e) {
    this.showDetails = !this.showDetails;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
  openChanged(e) {
    this.showDetails = e.target.open;
  }
}

customElements.define(SuperDaemonRow.tag, SuperDaemonRow);
