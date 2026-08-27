import { elementUpdated, expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-accordion", () => {
  it("auro-accordion is accessible", async () => {
    const el = await defaultFixture();

    await expect(el).to.be.accessible();
  });

  it("auro-accordion custom element is defined", async () => {
    const el = await !!customElements.get("auro-accordion");

    await expect(el).to.be.true;
  });

  it("toggles the accordion when clicking on the trigger", async () => {
    const el = await defaultFixture();

    const trigger = el.shadowRoot.querySelector(".trigger");
    const shadowButton = trigger.shadowRoot.querySelector("button");

    await expect(trigger.hasAttribute("ariaexpanded")).to.be.false;
    await expect(shadowButton.getAttribute("aria-expanded")).to.equal("false");

    trigger.click();

    await elementUpdated(trigger);

    await expect(shadowButton.getAttribute("aria-expanded")).to.equal("true");

    trigger.click();

    await elementUpdated(trigger);

    await expect(trigger.hasAttribute("ariaexpanded")).to.be.false;
    await expect(shadowButton.getAttribute("aria-expanded")).to.equal("false");
  });

  it("render the disabled attribute", async () => {
    const el = await fixture(html`
      <auro-accordion disabled>
        <span slot="trigger">Trigger</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </auro-accordion>
    `);

    const trigger = el.shadowRoot.querySelector(".trigger");

    await expect(trigger.hasAttribute("aria-disabled")).to.not.null;
  });

  it("test toggle event when disabled is true", async () => {
    const el = await defaultFixture();
    el.disabled = true;
    const trigger = el.shadowRoot.querySelector(".trigger");
    trigger.click();

    await elementUpdated(trigger);
    await expect(trigger.hasAttribute("aria-expanded")).to.not.null;
  });

  it('render with chevron attribute value "none"', async () => {
    const el = await fixture(html`
      <auro-accordion chevron="none">
        <span slot="trigger">Trigger</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </auro-accordion>
    `);

    const trigger = el.shadowRoot.querySelector(".trigger");

    await expect(trigger.hasAttribute("chevron")).to.be.false;
  });

  it('keeps the default trigger padding without variant="min"', async () => {
    const el = await defaultFixture();

    const button = el.shadowRoot
      .querySelector(".trigger")
      .shadowRoot.querySelector("button");
    const slotted = el.querySelector('[slot="trigger"]');

    await expect(getComputedStyle(button).paddingTop).to.not.equal("0px");
    await expect(getComputedStyle(slotted).paddingLeft).to.not.equal("0px");
  });

  it('removes all trigger padding with variant="min"', async () => {
    const el = await minFixture();

    const button = el.shadowRoot
      .querySelector(".trigger")
      .shadowRoot.querySelector("button");
    const buttonStyles = getComputedStyle(button);

    await expect(buttonStyles.paddingTop).to.equal("0px");
    await expect(buttonStyles.paddingRight).to.equal("0px");
    await expect(buttonStyles.paddingBottom).to.equal("0px");
    await expect(buttonStyles.paddingLeft).to.equal("0px");

    const slottedStyles = getComputedStyle(
      el.querySelector('[slot="trigger"]'),
    );

    await expect(slottedStyles.paddingLeft).to.equal("0px");
    await expect(slottedStyles.paddingRight).to.equal("0px");
  });

  it("reflects the variant property to the variant attribute", async () => {
    const el = await defaultFixture();

    el.variant = "min";
    await elementUpdated(el);

    await expect(el.getAttribute("variant")).to.equal("min");
  });

  it("focus() moves focus to the trigger button", async () => {
    const el = await defaultFixture();

    const trigger = el.shadowRoot.querySelector(".trigger");
    const button = trigger.shadowRoot.querySelector("button");

    // Before focusing, nothing inside the accordion's shadow root is focused.
    await expect(el.shadowRoot.activeElement).to.be.null;

    el.focus();

    // Focus delegates host -> auro-accordion-button -> native <button>.
    await expect(el.shadowRoot.activeElement).to.equal(trigger);
    await expect(trigger.shadowRoot.activeElement).to.equal(button);
  });

  it("applies the focused-state trigger border after focus()", async () => {
    const el = await defaultFixture();
    const trigger = el.shadowRoot.querySelector(".trigger");

    const borderBeforeFocus = getComputedStyle(trigger).borderColor;

    el.focus();
    await elementUpdated(el);

    // The focus border keys on `.trigger:focus-within` (reliable across the
    // nested shadow boundary) rather than `:host(:focus)`, which delegatesFocus
    // left unreliable for a programmatic focus(). Both the pseudo-class match
    // and the resulting border color must react to focus landing on the trigger.
    await expect(trigger.matches(":focus-within")).to.be.true;
    await expect(getComputedStyle(trigger).borderColor).to.not.equal(
      borderBeforeFocus,
    );
  });

  it("focus() does not move focus when disabled", async () => {
    const el = await fixture(html`
      <auro-accordion disabled>
        <span slot="trigger">Trigger</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </auro-accordion>
    `);

    el.focus();

    // A disabled trigger's native <button> is not focusable, so focus stays put.
    await expect(el.shadowRoot.activeElement).to.be.null;
  });

  it("focus() does not throw before the shadow root exists", async () => {
    // A framework ref can call focus() between connection and first render,
    // when shadowRoot is still null. Native focus() never throws, so ours
    // must not either.
    const el = document.createElement("auro-accordion");

    await expect(el.shadowRoot).to.be.null;
    await expect(() => el.focus()).to.not.throw();
  });

  it('announces "Expanded" when expanded programmatically', async () => {
    const el = await defaultFixture();

    const announcer = el.shadowRoot.querySelector(".srAnnouncer");

    // Nothing is announced on initial render.
    await expect(announcer.getAttribute("aria-live")).to.equal("polite");
    await expect(announcer.textContent).to.equal("");

    el.expanded = true;
    await elementUpdated(el);

    await expect(announcer.textContent).to.equal("Expanded");
  });

  it('announces "Collapsed" when collapsed programmatically', async () => {
    const el = await defaultFixture();

    const announcer = el.shadowRoot.querySelector(".srAnnouncer");

    el.expanded = true;
    await elementUpdated(el);
    el.expanded = false;
    await elementUpdated(el);

    await expect(announcer.textContent).to.equal("Collapsed");
  });

  it("does not announce when the user activates the trigger", async () => {
    const el = await defaultFixture();

    const announcer = el.shadowRoot.querySelector(".srAnnouncer");
    const trigger = el.shadowRoot.querySelector("#accordionTrigger");

    // Focus the trigger, then activate it as a user would. The focused button
    // already announces its aria-expanded change, so the live region stays
    // silent to avoid a double announcement.
    el.focus();
    await elementUpdated(el);
    trigger.click();
    await elementUpdated(el);

    await expect(el.expanded).to.be.true;
    await expect(announcer.textContent).to.equal("");
  });

  it("renders content below the trigger by default", async () => {
    const el = await defaultFixture();
    // Expand so content has real height; otherwise both collapse to y=0 and the
    // vertical order is ambiguous.
    el.expanded = true;
    await elementUpdated(el);

    const wrapper = el.shadowRoot.querySelector(".componentWrapper");
    const trigger = wrapper.querySelector("#accordionTrigger");
    const content = wrapper.querySelector(".content");

    await expect(el.hasAttribute("expandup")).to.be.false;
    await expect(content.getBoundingClientRect().top).to.be.greaterThan(
      trigger.getBoundingClientRect().top,
    );
  });

  it("reflects the expandUp property to the expandup attribute", async () => {
    const el = await defaultFixture();

    el.expandUp = true;
    await elementUpdated(el);

    await expect(el.hasAttribute("expandup")).to.be.true;
  });

  it("reveals content above the trigger when expandUp is set", async () => {
    const el = await expandUpFixture();
    // Expand so the content has real height, making the reversed visual order
    // (content above trigger) unambiguous rather than both collapsing to y=0.
    el.expanded = true;
    await elementUpdated(el);

    const wrapper = el.shadowRoot.querySelector(".componentWrapper");
    const trigger = wrapper.querySelector("#accordionTrigger");
    const content = wrapper.querySelector(".content");

    // The visual order is reversed via CSS grid (not flex — see the alignRight
    // regression test below), so the content renders above the trigger.
    await expect(getComputedStyle(wrapper).display).to.equal("grid");
    await expect(content.getBoundingClientRect().top).to.be.lessThan(
      trigger.getBoundingClientRect().top,
    );
  });

  it("uses grid (not flex) for expandUp so alignRight animation stays smooth", async () => {
    // Regression guard for AB#1623779: alignRight avoids a flex wrapper because
    // flex re-resolves item size every frame and makes the height animation
    // janky. expandUp must not reintroduce flex on the wrapper, or combining
    // alignRight + expandUp brings the jank back.
    const el = await expandUpAlignRightFixture();

    const wrapper = el.shadowRoot.querySelector(".componentWrapper");

    await expect(getComputedStyle(wrapper).display).to.equal("grid");
    await expect(getComputedStyle(wrapper).display).to.not.equal("flex");
  });

  it("keeps trigger before content in DOM order with expandUp (reading order)", async () => {
    const el = await expandUpFixture();

    const wrapper = el.shadowRoot.querySelector(".componentWrapper");
    const trigger = wrapper.querySelector("#accordionTrigger");
    const content = wrapper.querySelector(".content");
    const children = Array.from(wrapper.children);

    // Only the visual order flips; DOM source order (and thus screen-reader
    // reading order) still places the trigger before its content.
    await expect(children.indexOf(trigger)).to.be.lessThan(
      children.indexOf(content),
    );
    await expect(content.id).to.not.be.empty;
  });

  it("collapses content in expandUp mode", async () => {
    const el = await expandUpFixture();

    const content = el.shadowRoot.querySelector(".content");
    const contentStyles = getComputedStyle(content);

    // The reversed grid item must still collapse to height 0. overflow: hidden
    // gives the grid item an automatic minimum size of 0, so height: 0 is not
    // floored at the content's intrinsic height.
    await expect(contentStyles.height).to.equal("0px");
    // The content must clip its own overflow. Reversed, the collapsed content
    // sits above the trigger, so its overflow spills down over the trigger
    // instead of past the wrapper's bottom edge where it would be clipped.
    await expect(contentStyles.overflow).to.equal("hidden");
  });

  it("still toggles expanded state when expandUp is set", async () => {
    const el = await expandUpFixture();

    const trigger = el.shadowRoot.querySelector(".trigger");
    const shadowButton = trigger.shadowRoot.querySelector("button");

    trigger.click();
    await elementUpdated(trigger);

    await expect(shadowButton.getAttribute("aria-expanded")).to.equal("true");
  });

  it("auro-accordion with expandUp is accessible", async () => {
    const el = await expandUpFixture();

    await expect(el).to.be.accessible();
  });
});

async function minFixture() {
  return await fixture(html`
  <auro-accordion variant="min">
    <span slot="trigger">Trigger</span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </auro-accordion>
  `);
}

async function expandUpFixture() {
  return await fixture(html`
  <auro-accordion expandUp>
    <span slot="trigger">Trigger</span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </auro-accordion>
  `);
}

async function expandUpAlignRightFixture() {
  return await fixture(html`
  <auro-accordion expandUp alignRight>
    <span slot="trigger">Trigger</span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </auro-accordion>
  `);
}

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
