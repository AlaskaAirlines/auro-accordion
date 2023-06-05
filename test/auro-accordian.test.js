import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import '../src/auro-accordian';

describe('auro-accordian', () => {
  it('auro-accordian is accessible', async () => {
    const el = await defaultFixture();

    await expect(el).to.be.accessible();
  });

  it('auro-accordian custom element is defined', async () => {
    const el = await !!customElements.get("auro-accordian");

    await expect(el).to.be.true;
  });

  it('toggles the accordian when clicking on the trigger', async () => {
    const el = await defaultFixture();

    const trigger = el.shadowRoot.querySelector('.trigger');

    await expect(el.getAttribute('aria-expanded')).to.equal('false');

    trigger.click();

    await elementUpdated(el);

    await expect(el.getAttribute('aria-expanded')).to.equal('true');

    trigger.click();

    await elementUpdated(el);

    await expect(el.getAttribute('aria-expanded')).to.equal('false');
  });
});

async function defaultFixture() {
  return await fixture(html`
  <auro-accordian>
    <span slot="trigger">Trigger</span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </auro-accordian>
  `);
}
