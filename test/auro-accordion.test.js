import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-accordion.js';

describe('auro-accordion', () => {
  it('sets the CSS class on auro-accordion > div element', async () => {
    const el = await fixture(html`
      <auro-accordion cssclass="testClass"></auro-accordion>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-accordion is accessible', async () => {
    const el = await fixture(html`
      <auro-accordion cssclass="testClass"></auro-accordion>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-accordion custom element is defined', async () => {
    const el = await !!customElements.get("auro-accordion");

    await expect(el).to.be.true;
  });
});
