import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-accordian';

describe('auro-accordian', () => {
  it('sets the CSS class on auro-accordian > div element', async () => {
    const el = await fixture(html`
      <auro-accordian cssclass="testClass"></auro-accordian>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-accordian is accessible', async () => {
    const el = await fixture(html`
      <auro-accordian cssclass="testClass"></auro-accordian>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-accordian custom element is defined', async () => {
    const el = await !!customElements.get("auro-accordian");

    await expect(el).to.be.true;
  });
});
