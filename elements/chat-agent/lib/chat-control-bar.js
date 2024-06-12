/**
 * Copyright 2024 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

class ChatControlBar extends DDD {

  static get tag() {
    return "chat-control-bar";
  }

  constructor() {
    super();

    this.developerModeEnabled = false; // set by chat-agent.js
    this.isFullView = false; // set by chat-agent.js
  }

  static get styles() {
    return [
      super.styles,
      css`
        /* https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd */
        
        :host {
          display: block;
        }

        .chat-control-bar-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-0);
        }

      `
    ];
  }

  render() {
    return html`
      <!-- https://haxapi.vercel.app/?path=/story/media-icons--hax-iconset-story -->
      
      <div class="chat-control-bar-wrapper">
        <div class="left-side">
          <button id="download-button" @click=${this.handleDownloadLogButton}>
            <simple-icon-lite icon="icons:file-download"></simple-icon-lite> 
          </button>
          <button id="reset-button" @click=${this.handleResetButton}>
            <simple-icon-lite icon="icons:refresh"></simple-icon-lite>
          </button>
        </div>
        <div class="right-side">
          <button id="view-button" @click=${this.handleViewButton}>
            <simple-icon-lite icon="${this.isFullView ? 'icons:fullscreen-exit' : 'icons:fullscreen'}"></simple-icon-lite>
          </button>
          <button id="hide-button" @click=${this.handleHideButton}>
            <simple-icon-lite icon="lrn:arrow-right"></simple-icon-lite> <!-- TODO might want to change to just be minimize button, since there shouldn't be a way to shut down AI without refreshing page -->
          </button>
        </div>
      </div>
    `;
  }

  /**
   * @description handles the functionality of the download button
   */
  handleDownloadLogButton() {
    this.developerModeEnabled ? console.info('HAX-DEV-MODE: Download log button pressed.') : null;

    this.downloadChatLog();
  }

  /**
   * @description handles the functionality of the reset button
   */
  handleResetButton() {
    this.developerModeEnabled ? console.info('HAX-DEV-MODE: Reset button pressed.') : null;

    if (confirm('Download the chat log before you reset?')) {
      this.developerModeEnabled ? console.info('HAX-DEV-MODE: Download chat log before reset confirmed.') : null;
      this.downloadChatLog();
    } else {
      if(this.developerModeEnabled) {
        console.info('HAX-DEV-MODE: Download before reset denied.');
      }
      this.developerModeEnabled ? console.info('HAX-DEV-MODE: Download chat log before reset denied.') : null;
    }

    this.resetChat();
  }

  /**
   * @description Toggles the view of chat-interface to full or minimized
   */
  handleViewButton() {
    const CHAT_AGENT = document.querySelector('chat-agent'); // TODO needs to change for actual HAX environment
    
    this.developerModeEnabled ? console.info('HAX-DEV-MODE: View switch button pressed.') : null;

    // this.developerModeEnabled ? console.info('HAX-DEV-MODE: View switched to: ' + (this.isFullView ? 'full' : 'standard')) : null;

    // ! pseudo code to have the general idea down; will need more logic
    if (CHAT_AGENT.isFullView) {
      CHAT_AGENT.isFullView = false;
    } else {
      CHAT_AGENT.isFullView = true;
    }
    
  }

  /**
   * @description changes the interface window to be hidden off screen and unfocusable
   */
  handleHideButton() {
    const CHAT_AGENT = document.querySelector('chat-agent');
    
    this.developerModeEnabled ? console.info('HAX-DEV-MODE: Hide button pressed.') : null;

    // TODO write code that will hide the interface using CSS.
    // * is user is in full size mode, the chat-button needs to become unhidden (which will happen through src/chat-agent.js)
  }

  /**
   * @description downloads the chat log as a .json file
   */
  downloadChatLog() {
    this.developerModeEnabled ? console.info('HAX-DEV-MODE: Downloading chat log...') : null;

    // TODO write code to download the chat log. May need to convert an array to .json
    /*
      * Grab the array to convery to JSON, or if it is possible to make the JSON file when the AI loads, then just need to find way to download
      * Download array as JSON
    */
  }

  /**
   * @description resets the chat to initial state
   */
  resetChat() {
    this.developerModeEnabled ? console.info('HAX-DEV-MODE: Resetting chat...') : null;

    // TODO write code to reset the chat to it's initial state. Could maybe just be done through array map by resetting the chat log to initial state
  }

  static get properties() {
    return {
      ...super.properties,
      developerModeEnabled: {
        type: Boolean,
        attribute: "developer-mode",
      },
      isFullView: {
        type: Boolean,
        attribute: "full-view",
      },
    };
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(ChatControlBar.tag, ChatControlBar);
export { ChatControlBar };