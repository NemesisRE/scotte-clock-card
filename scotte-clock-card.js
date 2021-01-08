class ClockCard extends Polymer.Element {
  
  static get template() {
    return Polymer.html`
          <style>
        :host {
          cursor: pointer;
        }
        .content {
          padding: 24px 16px;
	  text-align: center
        }
        .gtlogo{
	        background-image: url("/local/images/gt-logo.png");
		    background-size: contain;
		    background-repeat: no-repeat;
		    width: 50%;
        }
        .time {
          font-family: var(--paper-font-headline_-_font-family);
          -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
          font-size: 3em;
          font-weight: var(--paper-font-headline_-_font-weight);
          letter-spacing: var(--paper-font-headline_-_letter-spacing);
          line-height: 1em;
          text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
        }
      </style>
      <ha-card>
        <div class="content">
	      <div class="gtlogo"></div>
	      <div class="clock">
		    <div class="time" id="time">13:45</div>
	      </div>
        </div>
      </ha-card>
     `
  }
  
  static get properties() {
    return {
      _hass: Object
    }
  }
  
  ready() {
    super.ready();
    this.time = this.$.time;
    this.date = this.$.date;
    
    this._updateTime();
    setInterval(() => this._updateTime(), 500);
  }
  
  setConfig(config) {
    this.config = config;
  }
  
  set hass(hass) {
    this._hass = hass;
  }

  _updateTime() {
    var time = new Date();

    this.time.innerHTML = time.toLocaleTimeString('de-DE');
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 3;
  }
}

customElements.define('simple-clock-card', ClockCard);
