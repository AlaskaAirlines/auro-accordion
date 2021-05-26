/* eslint-disable no-undef, no-unused-expressions, no-magic-numbers */
import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-accordion-group.js';
import '../src/auro-accordion.js';

describe('auro-accordion-group', () => {
  it('auro-accordion custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-accordion-group"));

    await expect(el).to.be.true;
  });
  it('only allows one accordion open at a time', async () => {
    const el = await fixture(html`
      <auro-accordion-group>
        <auro-accordion id="epV">
          <span slot="trigger">Star Wars: The Empire Strikes Back</span>
          <p>It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.</p>
        </auro-accordion>
        <auro-accordion id="epVI" expanded>
          <span slot="trigger">Star Wars: Return of the Jedi</span>
          <p>Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.</p>
        </auro-accordion>
        <auro-accordion id="epVII">
          <span slot="trigger">Star Wars: The Force Awakens</span>
          <p>Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.</p>
        </auro-accordion>
      </auro-accordion-group>
    `);
    const accordions = el.querySelectorAll('auro-accordion');
    const button = accordions[0].shadowRoot.querySelector('button');

    button.click();

    expect(accordions[0].expanded).to.be.true;
    expect(accordions[1].expanded).to.be.false;
  });

  it('reacts to slot changes', async () => {
    const el = await fixture(html`
      <auro-accordion-group></auro-accordion-group>
    `);

    // render accordion children after the group has connected
    await fixture(html`
      <auro-accordion id="epV">
        <span slot="trigger">Star Wars: The Empire Strikes Back</span>
        <p>It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.</p>
      </auro-accordion>
      <auro-accordion id="epVI" expanded>
        <span slot="trigger">Star Wars: Return of the Jedi</span>
        <p>Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.</p>
      </auro-accordion>
      <auro-accordion id="epVII">
        <span slot="trigger">Star Wars: The Force Awakens</span>
        <p>Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.</p>
      </auro-accordion>
    `, { parentNode: el });

    const accordions = el.querySelectorAll('auro-accordion');
    const button = accordions[0].shadowRoot.querySelector('button');

    button.click();

    expect(accordions[0].expanded).to.be.true;
    expect(accordions[1].expanded).to.be.false;
  });
});
