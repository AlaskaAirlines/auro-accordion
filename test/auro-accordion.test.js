import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import { AuroAccordion } from '../src/auro-accordion';

AuroAccordion.register();

// import './../index.js';

describe('auro-accordion', () => {
  it('auro-accordion is accessible', async () => {
    const el = await defaultFixture();

    await expect(el).to.be.accessible();
  });

  it('auro-accordion custom element is defined', async () => {
    const el = await !!customElements.get("auro-accordion");

    await expect(el).to.be.true;
  });

  it('toggles the accordion when clicking on the trigger', async () => {
    const el = await defaultFixture();

    const trigger = el.shadowRoot.querySelector('.trigger');
    const shadowButton = trigger.shadowRoot.querySelector('button');

    await expect(trigger.hasAttribute('ariaexpanded')).to.be.false;
    await expect(shadowButton.getAttribute('aria-expanded')).to.equal('false');

    trigger.click();

    await elementUpdated(trigger);

    await expect(trigger.hasAttribute('ariaexpanded')).to.be.true;
    await expect(shadowButton.getAttribute('aria-expanded')).to.equal('true');

    trigger.click();

    await elementUpdated(trigger);

    await expect(trigger.hasAttribute('ariaexpanded')).to.be.false;
    await expect(shadowButton.getAttribute('aria-expanded')).to.equal('false');
  });
});

async function defaultFixture() {
  return await fixture(html`
  <auro-accordion>
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
  </auro-accordion>
  `);
}
