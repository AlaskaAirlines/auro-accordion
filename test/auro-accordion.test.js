import { fixture, html, expect, waitUntil } from '@open-wc/testing';
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

  it('auro-accordion is not expanded', async () => {
    const el = await fixture(html`
      <auro-accordion id="test">
        <span slot="trigger">Star Wars: The Empire Strikes Back</span>
          <p>It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.</p>
      </auro-accordion>
    `);

    const button = el.shadowRoot.querySelector('button');
    const panel = el.shadowRoot.querySelector('#testPanel');

    expect(button).to.not.have.class('expanded');
    expect(button).to.have.class('detailsTrigger');
    expect(panel).to.have.class('details');
    expect(panel).to.not.have.class('details--isOpen');
    expect(el.ariaExpanded()).to.be.equal('false');
  });

  it('auro-accordion is expanded', async () => {
    const el = await fixture(html`
      <auro-accordion id="test" expanded>
        <span slot="trigger">Star Wars: The Empire Strikes Back</span>
          <p>It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.</p>
      </auro-accordion>
    `);

    const button = el.shadowRoot.querySelector('button');
    const panel = el.shadowRoot.querySelector('#testPanel');

    expect(button).to.have.class('expanded');
    expect(button).to.have.class('detailsTrigger');
    expect(panel).to.have.class('details');
    expect(panel).to.have.class('details--isOpen');
    expect(el.ariaExpanded()).to.be.equal('true');
  });

  it('auro-accordion expands on click', async () => {
    const el = await fixture(html`
      <auro-accordion id="test">
        <span slot="trigger">Star Wars: The Empire Strikes Back</span>
          <p>It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.</p>
      </auro-accordion>
    `);

    const button = el.shadowRoot.querySelector('button');
    const panel = el.shadowRoot.querySelector('#testPanel');

    button.click();

    await waitUntil(() => el.expanded, "Element did not trigger expansion");

    expect(button).to.have.class('expanded');
    expect(button).to.have.class('detailsTrigger');
    expect(panel).to.have.class('details');
    expect(panel).to.have.class('details--isOpen');
    expect(el.ariaExpanded()).to.be.equal('true');
  });

  it('auro-accordion collapses on click', async () => {
    const el = await fixture(html`
      <auro-accordion id="test" expanded>
        <span slot="trigger">Star Wars: The Empire Strikes Back</span>
          <p>It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.</p>
      </auro-accordion>
    `);

    const button = el.shadowRoot.querySelector('button');
    const panel = el.shadowRoot.querySelector('#testPanel');

    button.click();

    await waitUntil(() => !el.expanded, "Element did not trigger expansion");

    expect(button).to.not.have.class('expanded');
    expect(button).to.have.class('detailsTrigger');
    expect(panel).to.have.class('details');
    expect(panel).to.not.have.class('details--isOpen');
    expect(el.ariaExpanded()).to.be.equal('false');
  });

  it('auro-accordion custom element is defined', async () => {
    const el = await !!customElements.get("auro-accordion");

    await expect(el).to.be.true;
  });
});
