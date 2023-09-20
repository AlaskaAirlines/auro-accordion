import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import '../src/auro-accordion-group';
import '../src/auro-accordion';

describe('auro-accordion-group', () => {
  it('auro-accordion-group is accessible', async () => {
    const el = await defaultFixture();

    await expect(el).to.be.accessible();
  });

  it('auro-accordion-group custom element is defined', async () => {
    const el = await !!customElements.get("auro-accordion-group");

    await expect(el).to.be.true;
  });

  it('accordion has correct attributes when in an accordion group with emphasis attribute', async () => {
    const el = await emphasisFixture();
    const accordion = el.querySelector('auro-accordion');

    await expect(accordion.emphasis).to.be.true;
    await expect(accordion.iconRight).to.be.true;
    await expect(accordion.group).to.be.true;
  });

  it('sm attribute is passed down to the accordion', async () => {
    const el = await smFixture();
    const accordion = el.querySelector('auro-accordion');

    await expect(accordion.sm).to.be.true;
  });

  it('lg attribute is passed down to the accordion', async () => {
    const el = await lgFixture();
    const accordion = el.querySelector('auro-accordion');

    await expect(accordion.lg).to.be.true;
  });

  it('one accordion closes when another accordion opens', async () => {
    const el = await expandedFixture();

    const firstAccordion = [...el.querySelectorAll('auro-accordion')][0];
    const secondAccordion = [...el.querySelectorAll('auro-accordion')][1];

    const secondAccordionTrigger = secondAccordion.querySelector('span');

    await expect(firstAccordion.hasAttribute('expanded')).to.be.true;
    await expect(secondAccordion.hasAttribute('expanded')).to.be.false;

    secondAccordionTrigger.click();

    await elementUpdated();

    await expect(firstAccordion.hasAttribute('expanded')).to.be.false;
    await expect(secondAccordion.hasAttribute('expanded')).to.be.true;
  });

  it('noToggleExpanded attribute allows for multiple accordions to be open at once', async () => {
    const el = await expandedFixture();

    el.setAttribute('noToggleExpanded', true);

    const firstAccordion = [...el.querySelectorAll('auro-accordion')][0];
    const secondAccordion = [...el.querySelectorAll('auro-accordion')][1];

    const secondAccordionTrigger = secondAccordion.querySelector('span');

    await expect(firstAccordion.hasAttribute('expanded')).to.be.true;
    await expect(secondAccordion.hasAttribute('expanded')).to.be.false;

    secondAccordionTrigger.click();

    await elementUpdated(el);

    await expect(firstAccordion.hasAttribute('expanded')).to.be.true;
    await expect(secondAccordion.hasAttribute('expanded')).to.be.true;
  });
});

async function defaultFixture() {
  return await fixture(html`
    <auro-accordion-group>
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
    </auro-accordion-group>

  `);
}

async function emphasisFixture() {
  return await fixture(html`
    <auro-accordion-group emphasis>
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
    </auro-accordion-group>

  `);
}

async function smFixture() {
  return await fixture(html`
    <auro-accordion-group sm>
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
    </auro-accordion-group>

  `);
}

async function lgFixture() {
  return await fixture(html`
    <auro-accordion-group lg>
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
    </auro-accordion-group>

  `);
}

async function expandedFixture() {
  return await fixture(html`
    <auro-accordion-group>
      <auro-accordion expanded>
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
    </auro-accordion-group>
  `);
}
