## auro-accordion

`<auro-accordion>` and `<auro-accordion-gropu` are [HTML custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of providing collapsable content on a page. `<auro-accordion>` is usable on its own, but combined with `<auro-accordion-group>` enables you to auto collapse an expanded section when you select another section.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/travis/AlaskaAirlines/auro-accordion?branch=master&style=for-the-badge)](https://travis-ci.org/github/AlaskaAirlines/auro-accordion)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/auro-accordion?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/auro-accordion)
[![License](https://img.shields.io/npm/l/@alaskaairux/auro-accordion?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-accordion
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-accordion>` component.

```javascript
import "@alaskaairuxauro-accordion";
```

**Reference component in HTML**

```html
<auro-accordion id="Demo" header="Hello">World</auro-accordion>
```

```html
<auro-accordion-group>
  <auro-accordion id="Demo1" header="Hello">World</auro-accordion>
  <auro-accordion id="Demo2" header="Hello One">World</auro-accordion>
</auro-accordion-group>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

**NOTE:** Be sure to replace `:version` in the URL with the version of the asset you want.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-design-tokens@:version/dist/tokens/CSSTokenProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/orion-web-core-style-sheets@:version/dist/bundled/baseline.css" />

<script src="https://unpkg.com/@alaskaairuxauro-accordion@:version/dist/polyfills.js"></script>
<script src="https://unpkg.com/@alaskaairuxauro-accordion@:version/dist/auro-accordion__bundled.js"></script>
<script src="https://unpkg.com/@alaskaairuxauro-accordion@:version/dist/auro-accordion-group__bundled.js"></script>
```

### polyfills.js

The `polyfills.js` is packaged with this component, but **IT IS NOT NEEDED** to load a polyfill per component. The `polyfills.js` will work for all additional components added to the project.

### IE11 Support

**Displaimer:** While these components are supported in IE, there may be issues with loading the [web components polyfill](https://www.webcomponents.org/polyfills). Please consult their documentation when supporting IE11.


## auro-accordion use cases

The `<auro-accordion>` element should be used in situations where users may:

* Need one or more collapsable sections

The `auro-accordion-group` element should be used with `auro-accordion` in situations where users may:

* Need to auto collapse the current open `auro-accordion` when a new one is clicked in the group

## API Code Examples

Default auro-accordion

```html
<auro-accordion id="Demo" header="Hello">World</auro-accordion>
```

```html
<auro-accordion-group>
  <auro-accordion id="Demo1" header="Hello">World</auro-accordion>
  <auro-accordion id="Demo2" header="Hello One">World</auro-accordion>
</auro-accordion-group>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open three different shell sessions. One is for the **Gulp tasks**, the second is for a series of **npm tasks** and the last is to run the **Polymer server**.

**Peer dependency:** Please make sure Polymer is installed globally in order to run the Polymer server. See [Auro Component Development Details](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md) for more information.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:3001](http://localhost:3001/)

### Testing
Automated tests are required for every Auro component. See `.\test\auro-accordion.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.
