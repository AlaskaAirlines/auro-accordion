import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-accordion.js';

describe('auro-accordion', () => {

  it('auro-accordion is accessible', async () => {
    const el = await fixture(html`
      <auro-accordion>
        <span slot="trigger">Star Wars: The Empire Strikes Back</span>
          <p>It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.</p>
      </auro-accordion>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-accordion is expanded', async () => {
    const el = await fixture(html`
      <auro-accordion expanded>
        <span slot="trigger">Star Wars: The Empire Strikes Back</span>
          <p>It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.</p>
      </auro-accordion>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-accordion custom element is defined', async () => {
    const el = await !!customElements.get("auro-accordion");

    await expect(el).to.be.true;
  });
});
