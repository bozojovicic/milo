import { LitElement, html, css } from 'lit';

export default class MerchBadge extends LitElement {
  static properties = {
    color: { type: String },
    variant: { type: String },
    backgroundColor: { type: String, attribute: 'background-color' },
  };

  constructor() {
    super();
    this.color = '';
    this.variant = '';
    this.backgroundColor = '';
  }

  connectedCallback() {
    this.style.setProperty('--merch-badge-background-color', `var(--${this.backgroundColor})`);
    this.style.setProperty('--merch-badge-color', this.color);
    this.style.setProperty('--merch-badge-padding', '8px 11px');
    this.style.setProperty('--merch-badge-border-radius', '5px 0 0 5px');
    this.style.setProperty('--merch-badge-font-size', 'var(--consonant-merch-card-body-xs-font-size)');
    if (this.variant === 'ccd-slice') {
      this.style.setProperty('--merch-badge-padding', '4px 9px');
      this.style.setProperty('--merch-badge-border-radius', '4px');
      this.style.setProperty('--merch-badge-font-size', 'var(--consonant-merch-card-body-xxs-font-size)');
    }
    if (this.variant === 'ccd-suggested' || this.variant === 'catalog') {
      this.style.setProperty('--merch-badge-border-radius', '4px');
    }
    super.connectedCallback();
  }

  render() {
    return html`<div class="plans-badge">
      ${this.textContent}
    </div>`;
  }

  static styles = css`
        :host {
            display: block;
            background-color: var(--merch-badge-background-color);
            color: var(--merch-badge-color, #000);
            padding: var(--merch-badge-padding);
            border-radius: var(--merch-badge-border-radius);
            font-size: var(--merch-badge-font-size);
            line-height: normal;
        }
    `;
}

customElements.define('merch-badge', MerchBadge);
