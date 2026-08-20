import { elementUpdated, expect, fixture, html } from "@open-wc/testing";
import { AuroAccordion } from "../src/auro-accordion";
import { AuroAccordionGroup } from "../src/auro-accordion-group";

AuroAccordion.register();
AuroAccordionGroup.register();

describe("auro-accordion-group", () => {
  it("auro-accordion-group is accessible", async () => {
    const el = await defaultFixture();

    await expect(el).to.be.accessible();
  });

  it("auro-accordion-group custom element is defined", async () => {
    const el = await !!customElements.get("auro-accordion-group");

    await expect(el).to.be.true;
  });

  it("accordion has correct attributes when in an accordion group with emphasis attribute", async () => {
    const el = await emphasisFixture();
    const accordion = el.querySelector("auro-accordion");

    await expect(accordion.emphasis).to.be.true;
    await expect(accordion.getAttribute("chevron") === "right").to.be.true;
    await expect(accordion.grouped).to.be.true;
  });

  it("sm attribute is passed down to the accordion", async () => {
    const el = await smFixture();
    const accordion = el.querySelector("auro-accordion");

    await expect(accordion.getAttribute("variant") === "sm").to.be.true;
  });

  it("lg attribute is passed down to the accordion", async () => {
    const el = await lgFixture();
    const accordion = el.querySelector("auro-accordion");

    await expect(accordion.getAttribute("variant") === "lg").to.be.true;
  });

  it('variant="min" is passed down to the accordion', async () => {
    const el = await minFixture();
    const accordion = el.querySelector("auro-accordion");

    await expect(accordion.getAttribute("variant") === "min").to.be.true;
  });

  it('variant="min" removes the child accordion\'s trigger padding', async () => {
    const el = await minFixture();
    const accordion = el.querySelector("auro-accordion");
    await elementUpdated(accordion);

    const button = accordion.shadowRoot
      .querySelector(".trigger")
      .shadowRoot.querySelector("button");

    await expect(getComputedStyle(button).paddingTop).to.equal("0px");
    await expect(getComputedStyle(button).paddingLeft).to.equal("0px");
  });

  it("one accordion closes when another accordion opens", async () => {
    const el = await expandedFixture();

    const firstAccordion = [...el.querySelectorAll("auro-accordion")][0];
    const secondAccordion = [...el.querySelectorAll("auro-accordion")][1];

    const secondAccordionTrigger = secondAccordion.querySelector("span");

    await expect(firstAccordion.hasAttribute("expanded")).to.be.true;
    await expect(secondAccordion.hasAttribute("expanded")).to.be.false;

    secondAccordionTrigger.click();

    await elementUpdated(el);

    await expect(firstAccordion.hasAttribute("expanded")).to.be.false;
    await expect(secondAccordion.hasAttribute("expanded")).to.be.true;
  });

  it("noToggleExpanded attribute allows for multiple accordions to be open at once", async () => {
    const el = await expandedFixture();

    el.setAttribute("noToggleExpanded", true);

    const firstAccordion = [...el.querySelectorAll("auro-accordion")][0];
    const secondAccordion = [...el.querySelectorAll("auro-accordion")][1];

    const secondAccordionTrigger = secondAccordion.querySelector("span");

    await expect(firstAccordion.hasAttribute("expanded")).to.be.true;
    await expect(secondAccordion.hasAttribute("expanded")).to.be.false;

    secondAccordionTrigger.click();

    await elementUpdated(el);

    await expect(firstAccordion.hasAttribute("expanded")).to.be.true;
    await expect(secondAccordion.hasAttribute("expanded")).to.be.true;
  });

  it("does not scroll when accordion group is already in view", async () => {
    const el = await expandedFixture();

    let scrollCalled = false;
    const originalScrollIntoView = el.scrollIntoView;
    const originalGetBoundingClientRect = el.getBoundingClientRect;

    try {
      el.scrollIntoView = () => { scrollCalled = true; };

      // Stub getBoundingClientRect to an explicit in-viewport rect so the
      // result does not depend on the expanded content's rendered height.
      el.getBoundingClientRect = () => ({
        top: 0,
        bottom: 100,
        left: 0,
        right: 100,
        width: 100,
        height: 100,
      });

      const secondAccordion = [...el.querySelectorAll("auro-accordion")][1];
      const secondAccordionTrigger = secondAccordion.querySelector("span");

      secondAccordionTrigger.click();
      await elementUpdated(el);

      await expect(scrollCalled).to.be.false;
    } finally {
      el.getBoundingClientRect = originalGetBoundingClientRect;
      el.scrollIntoView = originalScrollIntoView;
    }
  });

  it("scrolls into view when accordion group is out of view", async () => {
    const el = await expandedFixture();

    let scrollCalled = false;
    const originalScrollIntoView = el.scrollIntoView;
    const originalGetBoundingClientRect = el.getBoundingClientRect;

    try {
      el.scrollIntoView = () => { scrollCalled = true; };

      // Stub getBoundingClientRect to simulate element being out of view
      el.getBoundingClientRect = () => ({
        top: -500,
        bottom: -400,
        left: 0,
        right: 100,
        width: 100,
        height: 100,
      });

      const secondAccordion = [...el.querySelectorAll("auro-accordion")][1];
      const secondAccordionTrigger = secondAccordion.querySelector("span");

      secondAccordionTrigger.click();
      await elementUpdated(el);

      await expect(scrollCalled).to.be.true;
    } finally {
      el.getBoundingClientRect = originalGetBoundingClientRect;
      el.scrollIntoView = originalScrollIntoView;
    }
  });

  it("scrolls into view when accordion group is entirely below the fold", async () => {
    const el = await expandedFixture();

    let scrollCalled = false;
    const originalScrollIntoView = el.scrollIntoView;
    const originalGetBoundingClientRect = el.getBoundingClientRect;

    try {
      el.scrollIntoView = () => { scrollCalled = true; };

      // Stub getBoundingClientRect to simulate the element sitting entirely
      // below the fold (top >= innerHeight). This is the symmetric partner to
      // the "entirely above" case and exercises the `rect.top < innerHeight`
      // half of the predicate, so a sign-flip there can't pass unnoticed.
      el.getBoundingClientRect = () => ({
        top: window.innerHeight + 100,
        bottom: window.innerHeight + 500,
        left: 0,
        right: 100,
        width: 100,
        height: 400,
      });

      const secondAccordion = [...el.querySelectorAll("auro-accordion")][1];
      const secondAccordionTrigger = secondAccordion.querySelector("span");

      secondAccordionTrigger.click();
      await elementUpdated(el);

      await expect(scrollCalled).to.be.true;
    } finally {
      el.getBoundingClientRect = originalGetBoundingClientRect;
      el.scrollIntoView = originalScrollIntoView;
    }
  });

  it("does not scroll when accordion group is taller than the viewport but partially in view", async () => {
    const el = await expandedFixture();

    let scrollCalled = false;
    const originalScrollIntoView = el.scrollIntoView;
    const originalGetBoundingClientRect = el.getBoundingClientRect;

    try {
      el.scrollIntoView = () => { scrollCalled = true; };

      // A group taller than the viewport is still "in view" when any part of
      // it overlaps the fold. This is the case the intersection predicate
      // handles and the rejected containment predicate did not: top < 0 and
      // bottom > innerHeight simultaneously, yet the group is clearly on screen.
      el.getBoundingClientRect = () => ({
        top: -500,
        bottom: window.innerHeight + 500,
        left: 0,
        right: 100,
        width: 100,
        height: window.innerHeight + 1000,
      });

      const secondAccordion = [...el.querySelectorAll("auro-accordion")][1];
      const secondAccordionTrigger = secondAccordion.querySelector("span");

      secondAccordionTrigger.click();
      await elementUpdated(el);

      await expect(scrollCalled).to.be.false;
    } finally {
      el.getBoundingClientRect = originalGetBoundingClientRect;
      el.scrollIntoView = originalScrollIntoView;
    }
  });

  it("render with disabled attribute", async () => {
    const el = await fixture(html`
      <auro-accordion-group disabled>
        <auro-accordion>
          <span slot="trigger">Trigger</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </auro-accordion>
      </auro-accordion-group>
    `);

    const accordion = el.querySelector("auro-accordion");

    await expect(accordion.disabled).to.be.true;
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

async function minFixture() {
  return await fixture(html`
    <auro-accordion-group variant="min">
      <auro-accordion>
        <span slot="trigger">Trigger</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </auro-accordion>
    </auro-accordion-group>
  `);
}

async function smFixture() {
  return await fixture(html`
    <auro-accordion-group variant="sm">
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
    <auro-accordion-group variant="lg">
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
