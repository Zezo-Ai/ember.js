import { moduleFor, ApplicationTestCase, RenderingTestCase, runTask } from 'internal-test-helpers';

import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import {
  getRootViews,
  getChildViews,
  getViewBounds,
  getViewClientRects,
  getViewBoundingClientRect,
} from '@ember/-internals/views';

import { Component } from '../../utils/helpers';

moduleFor(
  'View tree tests',
  class extends ApplicationTestCase {
    constructor() {
      super(...arguments);

      this.addComponent('x-tagless', {
        ComponentClass: class extends Component {
          tagName = '';
        },

        template:
          '<div id="{{this.id}}">[{{this.id}}] {{#if this.isShowing}}{{yield}}{{/if}}</div>',
      });

      this.addComponent('x-toggle', {
        ComponentClass: class extends Component {
          isExpanded = true;

          click() {
            this.toggleProperty('isExpanded');
            return false;
          }
        },

        template: '[{{this.id}}] {{#if this.isExpanded}}{{yield}}{{/if}}',
      });

      class ToggleController extends Controller {
        @tracked isExpanded = true;

        toggle = () => {
          this.toggleProperty('isExpanded');
        };
      }

      this.add('controller:application', ToggleController);

      this.addTemplate(
        'application',
        `
      {{x-tagless id="root-1"}}

      {{#x-toggle id="root-2"}}
        {{x-toggle id="inner-1"}}

        {{#x-toggle id="inner-2"}}
          {{x-toggle id="inner-3"}}
        {{/x-toggle}}
      {{/x-toggle}}

      <button id="toggle-application" {{on "click" this.toggle}}>Toggle</button>

      {{#if this.isExpanded}}
        {{x-toggle id="root-3"}}
      {{/if}}

      {{outlet}}
    `
      );

      this.add(
        'controller:index',
        class extends ToggleController {
          @tracked isExpanded = false;
        }
      );

      this.addTemplate(
        'index',
        `
      {{x-tagless id="root-4"}}

      {{#x-toggle id="root-5" isExpanded=false}}
        {{x-toggle id="inner-4"}}

        {{#x-toggle id="inner-5"}}
          {{x-toggle id="inner-6"}}
        {{/x-toggle}}
      {{/x-toggle}}

      <button id="toggle-index" {{on "click" this.toggle}}>Toggle</button>

      {{#if this.isExpanded}}
        {{x-toggle id="root-6"}}
      {{/if}}
    `
      );

      this.addTemplate(
        'zomg',
        `
      {{x-tagless id="root-7"}}

      {{#x-toggle id="root-8"}}
        {{x-toggle id="inner-7"}}

        {{#x-toggle id="inner-8"}}
          {{x-toggle id="inner-9"}}
        {{/x-toggle}}
      {{/x-toggle}}

      {{#x-toggle id="root-9"}}
        {{outlet}}
      {{/x-toggle}}
    `
      );

      this.addTemplate(
        'zomg.lol',
        `
      {{x-toggle id="inner-10"}}
    `
      );

      this.router.map(function () {
        this.route('zomg', function () {
          this.route('lol');
        });
      });
    }

    ['@test getRootViews']() {
      return this.visit('/')
        .then(() => {
          this.assertRootViews(['root-1', 'root-2', 'root-3', 'root-4', 'root-5']);

          runTask(() => this.$('#toggle-application').click());

          this.assertRootViews(['root-1', 'root-2', 'root-4', 'root-5']);

          runTask(() => {
            this.$('#toggle-application').click();
            this.$('#toggle-index').click();
          });

          this.assertRootViews(['root-1', 'root-2', 'root-3', 'root-4', 'root-5', 'root-6']);

          return this.visit('/zomg/lol');
        })
        .then(() => {
          this.assertRootViews(['root-1', 'root-2', 'root-3', 'root-7', 'root-8', 'root-9']);

          return this.visit('/');
        })
        .then(() => {
          this.assertRootViews(['root-1', 'root-2', 'root-3', 'root-4', 'root-5', 'root-6']);
        });
    }

    assertRootViews(ids) {
      let owner = this.applicationInstance;

      let actual = getRootViews(owner)
        .map((view) => view.id)
        .sort();
      let expected = ids.sort();

      this.assert.deepEqual(actual, expected, 'root views');
    }

    ['@test getChildViews']() {
      return this.visit('/')
        .then(() => {
          this.assertChildViews('root-2', ['inner-1', 'inner-2']);
          this.assertChildViews('root-5', []);
          this.assertChildViews('inner-2', ['inner-3']);

          runTask(() => this.$('#root-2').click());

          this.assertChildViews('root-2', []);

          runTask(() => this.$('#root-5').click());

          this.assertChildViews('root-5', ['inner-4', 'inner-5']);
          this.assertChildViews('inner-5', ['inner-6']);

          return this.visit('/zomg');
        })
        .then(() => {
          this.assertChildViews('root-2', []);
          this.assertChildViews('root-8', ['inner-7', 'inner-8']);
          this.assertChildViews('inner-8', ['inner-9']);
          this.assertChildViews('root-9', []);

          runTask(() => this.$('#root-8').click());

          this.assertChildViews('root-8', []);

          return this.visit('/zomg/lol');
        })
        .then(() => {
          this.assertChildViews('root-2', []);
          this.assertChildViews('root-8', []);
          this.assertChildViews('root-9', ['inner-10']);

          return this.visit('/');
        })
        .then(() => {
          this.assertChildViews('root-2', []);
          this.assertChildViews('root-5', []);

          runTask(() => this.$('#root-2').click());
          runTask(() => this.$('#inner-2').click());

          this.assertChildViews('root-2', ['inner-1', 'inner-2']);
          this.assertChildViews('inner-2', []);
        });
    }

    ['@test getChildViews does not return duplicates']() {
      return this.visit('/').then(() => {
        this.assertChildViews('root-2', ['inner-1', 'inner-2']);

        runTask(() => this.$('#root-2').click());
        runTask(() => this.$('#root-2').click());
        runTask(() => this.$('#root-2').click());
        runTask(() => this.$('#root-2').click());
        runTask(() => this.$('#root-2').click());
        runTask(() => this.$('#root-2').click());
        runTask(() => this.$('#root-2').click());
        runTask(() => this.$('#root-2').click());
        runTask(() => this.$('#root-2').click());
        runTask(() => this.$('#root-2').click());

        this.assertChildViews('root-2', ['inner-1', 'inner-2']);
      });
    }

    assertChildViews(parentId, childIds) {
      let parentView = this.viewFor(parentId);
      let childViews = getChildViews(parentView);

      let actual = childViews.map((view) => view.id).sort();
      let expected = childIds.sort();

      this.assert.deepEqual(actual, expected, `child views for #${parentId}`);
    }

    viewFor(id) {
      let owner = this.applicationInstance;
      let registry = owner.lookup('-view-registry:main');
      return registry[id];
    }
  }
);

let hasGetClientRects, hasGetBoundingClientRect;
let ClientRectListCtor, ClientRectCtor;

(function () {
  if (document.createRange) {
    let range = document.createRange();

    if (range.getClientRects) {
      let clientRectsList = range.getClientRects();
      hasGetClientRects = true;
      ClientRectListCtor = clientRectsList && clientRectsList.constructor;
    }

    if (range.getBoundingClientRect) {
      let clientRect = range.getBoundingClientRect();
      hasGetBoundingClientRect = true;
      ClientRectCtor = clientRect && clientRect.constructor;
    }
  }
})();

moduleFor(
  'Bounds tests',
  class extends RenderingTestCase {
    ['@test getViewBounds on a regular component'](assert) {
      let component;
      this.registerComponent('hi-mom', {
        ComponentClass: class extends Component {
          init() {
            super.init(...arguments);
            component = this;
          }
        },
        template: `<p>Hi, mom!</p>`,
      });

      this.render(`{{hi-mom}}`);

      let { parentElement, firstNode, lastNode } = getViewBounds(component);

      assert.equal(
        parentElement,
        this.element,
        'a regular component should have the right parentElement'
      );
      assert.equal(
        firstNode,
        component.element,
        'a regular component should have a single node that is its element'
      );
      assert.equal(
        lastNode,
        component.element,
        'a regular component should have a single node that is its element'
      );
    }

    ['@test getViewBounds on a tagless component'](assert) {
      let component;
      this.registerComponent('hi-mom', {
        ComponentClass: class extends Component {
          tagName = '';

          init() {
            super.init(...arguments);
            component = this;
          }
        },
        template: `<span id="start-node">Hi,</span> <em id="before-end-node">mom</em>!`,
      });

      this.render(`{{hi-mom}}`);

      let { parentElement, firstNode, lastNode } = getViewBounds(component);

      assert.equal(
        parentElement,
        this.element,
        'a tagless component should have the right parentElement'
      );
      assert.equal(
        firstNode,
        this.$('#start-node')[0],
        'a tagless component should have a range enclosing all of its nodes'
      );
      assert.equal(
        lastNode,
        this.$('#before-end-node')[0].nextSibling,
        'a tagless component should have a range enclosing all of its nodes'
      );
    }

    ['@test getViewClientRects'](assert) {
      if (!hasGetClientRects || !ClientRectListCtor) {
        assert.ok(
          true,
          'The test environment does not support the DOM API required to run this test.'
        );
        return;
      }

      let component;
      this.registerComponent('hi-mom', {
        ComponentClass: class extends Component {
          init() {
            super.init(...arguments);
            component = this;
          }
        },
        template: `<p>Hi, mom!</p>`,
      });

      this.render(`{{hi-mom}}`);

      assert.ok(getViewClientRects(component) instanceof ClientRectListCtor);
    }

    ['@test getViewBoundingClientRect'](assert) {
      if (!hasGetBoundingClientRect || !ClientRectCtor) {
        assert.ok(
          true,
          'The test environment does not support the DOM API required to run this test.'
        );
        return;
      }

      let component;
      this.registerComponent('hi-mom', {
        ComponentClass: class extends Component {
          init() {
            super.init(...arguments);
            component = this;
          }
        },
        template: `<p>Hi, mom!</p>`,
      });

      this.render(`{{hi-mom}}`);

      assert.ok(getViewBoundingClientRect(component) instanceof ClientRectCtor);
    }
  }
);
