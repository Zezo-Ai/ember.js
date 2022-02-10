import {
  setComponentTemplate as _setComponentTemplate,
  getComponentTemplate as _getComponentTemplate,
} from '@glimmer/manager';
import {
  componentCapabilities,
  setComponentManager as _setComponentManager,
} from '@ember/-internals/glimmer';

export { Component as default, Input, Textarea } from '@ember/-internals/glimmer';

/**
 * Assigns a TemplateFactory to a component class.
 *
 * @module @ember/component
 * @public
 *
 * ```js
 * import Component from '@glimmer/component';
 * import { hbs } from 'ember-cli-htmlbars';
 * import { setComponentTemplate } from '@ember/component';
 *
 * export default class Demo extends Component {
 *   // ...
 * }
 *
 * setComponentTemplate(hbs`
 *  <div>my template</div>
 * `, Demo);
 * ```
 *
 * @param {TemplateFactory} templateFactory
 * @param {object} componentDefinition
 */
export const setComponentTemplate = _setComponentTemplate;

/**
 * Returns the TemplateFactory associated with a component
 *
 * @module @ember/component
 * @public
 *
 * ```js
 * import Component from '@glimmer/component';
 * import { hbs } from 'ember-cli-htmlbars';
 * import { getComponentTemplate } from '@ember/component';
 *
 * export default class Demo extends Component {
 *   // ...
 * }
 *
 * let theTemplateFactory = getTemplateFactory(Demo)
 * ```
 *
 * @param {object} componentDefinition
 * @returns {TemplateFactory}
 */
export const getComponentTemplate = _getComponentTemplate;

/**
 * Tell the VM how manage a type of object / class when encountered
 * via component-invocation.
 *
 * A Component Manager, must implement this interface:
 * - static create()
 * - createComponent()
 * - updateComponent()
 * - destroyComponent()
 * - getContext()
 *
 * @module @ember/component
 * @public
 *
 *
 * After a component manager is registered via `setComponentManager`,
 *
 * ```js
 * import { StateNode } from 'xstate';
 * import ComponentManager from './-private/statechart-manager';
 *
 * setComponentManager((owner) => ComponentManager.create(owner), StateNode.prototype);
 * ```
 *
 * Instances of the class can be used as component.
 * No need to extend from `@glimmer/component`.
 *
 * ```js
 * // app/components/my-component.js
 * import { createMachine } from 'xstate';
 *
 * export default createMachine({ ... });
 * ```
 * ```hbs
 * {{!-- app/templates/application.hbs}}
 * <MyComponent />
 * ```
 *
 * @param {(owner: Owner) => import('@glimmer/interfaces').ComponentManager} managerFactory
 * @param {object} object that will be managed by the return value of `managerFactory`
 *
 */
export const setComponentManager = _setComponentManager;

/**
 * Tells Glimmer what capabilities a Component Manager will have
 *
 * @module @ember/component
 * @method capabilities
 * @public
 *
 * ```js
 * import { capabilities } from '@ember/component';
 *
 * export class MyComponentManager {
 *   capabilities = capabilities('3.13', {
 *     // capabilities listed here
 *   })
 * }
 * ```
 *
 *
 * For a full list of capabilities, their defaults, and how they are used, see [@glimmer/manager](https://github.com/glimmerjs/glimmer-vm/blob/4f1bef0d9a8a3c3ebd934c5b6e09de4c5f6e4468/packages/%40glimmer/manager/lib/public/component.ts#L26)
 *
 * @param {'3.13'} managerApiVersion
 * @param {object} options
 * @property {boolean} dynamicLayout
 * @property {boolean} dynamicTag
 * @property {boolean} prepareArgs
 * @property {boolean} createArgs
 * @property {boolean} attributeHook
 * @property {boolean} elementHook
 * @property {boolean} createCaller
 * @property {boolean} dynamicScope
 * @property {boolean} updateHook
 * @property {boolean} createInstance
 * @property {boolean} wrapped
 * @property {boolean} willDestroy
 * @property {boolean} hasSubOwner
 *
 */
export const capabilities = componentCapabilities;
