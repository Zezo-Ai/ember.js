import {
  moduleFor,
  ApplicationTestCase,
  defineComponent,
  ModuleBasedTestResolver,
  RenderingTestCase,
  runTask,
} from 'internal-test-helpers';

import { DEBUG } from '@glimmer/env';
import { set } from '@ember/object';
import { getOwner } from '@ember/-internals/owner';
import Controller from '@ember/controller';
import Engine, { getEngineParent } from '@ember/engine';

import { backtrackingMessageFor } from '../utils/debug-stack';
import { compile, Component } from '../utils/helpers';
import { setComponentTemplate } from '@glimmer/manager';

moduleFor(
  '{{mount}} single param assertion',
  class extends RenderingTestCase {
    ['@test it asserts that only a single param is passed']() {
      expectAssertion(() => {
        this.render('{{mount "chat" "foo"}}');
      }, /You can only pass a single positional argument to the {{mount}} helper, e.g. {{mount "chat-engine"}}./i);
    }
  }
);

moduleFor(
  '{{mount}} assertions',
  class extends RenderingTestCase {
    ['@test it asserts when an invalid engine name is provided']() {
      expectAssertion(() => {
        this.render('{{mount this.engineName}}', { engineName: {} });
      }, /Invalid engine name '\[object Object\]' specified, engine name must be either a string, null or undefined./i);
    }

    ['@test it asserts that the specified engine is registered']() {
      expectAssertion(() => {
        this.render('{{mount "chat"}}');
      }, /You used `{{mount 'chat'}}`, but the engine 'chat' can not be found./i);
    }
  }
);

moduleFor(
  '{{mount}} test',
  class extends ApplicationTestCase {
    constructor() {
      super(...arguments);

      let engineRegistrations = (this.engineRegistrations = {});

      this.add(
        'engine:chat',
        class extends Engine {
          router = null;
          Resolver = ModuleBasedTestResolver;

          init() {
            super.init(...arguments);

            Object.keys(engineRegistrations).forEach((fullName) => {
              this.register(fullName, engineRegistrations[fullName]);
            });
          }
        }
      );

      this.addTemplate('index', '{{mount "chat"}}');
    }

    ['@test it boots an engine, instantiates its application controller, and renders its application template'](
      assert
    ) {
      this.engineRegistrations['template:application'] = compile(
        '<h2>Chat here, {{this.username}}</h2>',
        {
          moduleName: 'my-app/templates/application.hbs',
        }
      );

      let controller;

      this.engineRegistrations['controller:application'] = class extends Controller {
        username = 'dgeb';

        init() {
          super.init(...arguments);
          controller = this;
        }
      };

      return this.visit('/').then(() => {
        assert.ok(controller, "engine's application controller has been instantiated");

        let engineInstance = getOwner(controller);
        assert.strictEqual(
          getEngineParent(engineInstance),
          this.applicationInstance,
          'engine instance has the application instance as its parent'
        );

        this.assertInnerHTML('<h2>Chat here, dgeb</h2>');

        runTask(() => set(controller, 'username', 'chancancode'));

        this.assertInnerHTML('<h2>Chat here, chancancode</h2>');

        runTask(() => set(controller, 'username', 'dgeb'));

        this.assertInnerHTML('<h2>Chat here, dgeb</h2>');
      });
    }

    async ['@test it emits a useful backtracking re-render assertion message'](assert) {
      if (!DEBUG) {
        assert.ok(true, 'nothing to do in prod builds, assertion is stripped');
        return;
      }

      this.router.map(function () {
        this.route('route-with-mount');
      });

      this.addTemplate('index', '');
      this.addTemplate('route-with-mount', '{{mount "chat"}}');

      this.engineRegistrations['template:application'] = compile(
        'hi {{this.person.name}} [{{component-with-backtracking-set person=this.person}}]',
        {
          moduleName: 'my-app/templates/application.hbs',
        }
      );
      this.engineRegistrations['controller:application'] = class extends Controller {
        person = {
          name: 'Alex',
          toString() {
            return `Person (${this.name})`;
          },
        };
      };

      let ComponentWithBacktrackingSet = class extends Component {
        init() {
          super.init(...arguments);
          this.set('person.name', 'Ben');
        }
      };

      setComponentTemplate(
        compile('[component {{this.person.name}}]', {
          moduleName: 'my-app/templates/components/component-with-backtracking-set.hbs',
        }),
        ComponentWithBacktrackingSet
      );

      this.engineRegistrations['component:component-with-backtracking-set'] =
        ComponentWithBacktrackingSet;

      let expectedBacktrackingMessage = backtrackingMessageFor('name', 'Person \\(Ben\\)', {
        includeTopLevel: 'outlet',
        renderTree: [
          '{{outlet}} for application',
          'application',
          '{{outlet}} for route-with-mount',
          'route-with-mount',
          'chat',
          'this.person.name',
        ],
      });

      await this.visit('/');

      return assert.rejectsAssertion(this.visit('/route-with-mount'), expectedBacktrackingMessage);
    }

    ['@test it renders with a bound engine name']() {
      this.router.map(function () {
        this.route('bound-engine-name');
      });
      let controller;
      this.add(
        'controller:bound-engine-name',
        class extends Controller {
          engineName = null;

          init() {
            super.init(...arguments);
            controller = this;
          }
        }
      );
      this.addTemplate('bound-engine-name', '{{mount this.engineName}}');

      this.add(
        'engine:foo',
        class extends Engine {
          router = null;
          Resolver = ModuleBasedTestResolver;

          init() {
            super.init(...arguments);
            this.register(
              'template:application',
              compile('<h2>Foo Engine</h2>', {
                moduleName: 'my-app/templates/application.hbs',
              })
            );
          }
        }
      );
      this.add(
        'engine:bar',
        class extends Engine {
          router = null;
          Resolver = ModuleBasedTestResolver;

          init() {
            super.init(...arguments);
            this.register(
              'template:application',
              compile('<h2>Bar Engine</h2>', {
                moduleName: 'my-app/templates/application.hbs',
              })
            );
          }
        }
      );

      return this.visit('/bound-engine-name').then(() => {
        this.assertInnerHTML('<!---->');

        runTask(() => set(controller, 'engineName', 'foo'));

        this.assertInnerHTML('<h2>Foo Engine</h2>');

        runTask(() => set(controller, 'engineName', undefined));

        this.assertInnerHTML('<!---->');

        runTask(() => set(controller, 'engineName', 'foo'));

        this.assertInnerHTML('<h2>Foo Engine</h2>');

        runTask(() => set(controller, 'engineName', 'bar'));

        this.assertInnerHTML('<h2>Bar Engine</h2>');

        runTask(() => set(controller, 'engineName', 'foo'));

        this.assertInnerHTML('<h2>Foo Engine</h2>');

        runTask(() => set(controller, 'engineName', null));

        this.assertInnerHTML('<!---->');
      });
    }

    ['@test it declares the event dispatcher as a singleton']() {
      this.router.map(function () {
        this.route('engine-event-dispatcher-singleton');
      });

      let controller;
      let component;

      this.add(
        'controller:engine-event-dispatcher-singleton',
        class extends Controller {
          init() {
            super.init(...arguments);
            controller = this;
          }
        }
      );
      this.addTemplate('engine-event-dispatcher-singleton', '{{mount "foo"}}');

      this.add(
        'engine:foo',
        class extends Engine {
          router = null;
          Resolver = ModuleBasedTestResolver;

          init() {
            super.init(...arguments);
            this.register(
              'template:application',
              compile('<h2>Foo Engine: {{tagless-component}}</h2>', {
                moduleName: 'my-app/templates/application.hbs',
              })
            );
            this.register(
              'component:tagless-component',
              defineComponent(
                {},
                'Tagless Component',
                class extends Component {
                  tagName = '';

                  init() {
                    super.init(...arguments);
                    component = this;
                  }
                }
              )
            );
          }
        }
      );

      return this.visit('/engine-event-dispatcher-singleton').then(() => {
        this.assertInnerHTML('<h2>Foo Engine: Tagless Component</h2>');

        let controllerOwnerEventDispatcher = getOwner(controller).lookup('event_dispatcher:main');
        let taglessComponentOwnerEventDispatcher =
          getOwner(component).lookup('event_dispatcher:main');

        this.assert.strictEqual(
          controllerOwnerEventDispatcher,
          taglessComponentOwnerEventDispatcher
        );
      });
    }
  }
);

moduleFor(
  '{{mount}} params tests',
  class extends ApplicationTestCase {
    constructor() {
      super(...arguments);

      this.add(
        'engine:paramEngine',
        class extends Engine {
          router = null;
          Resolver = ModuleBasedTestResolver;

          init() {
            super.init(...arguments);
            this.register(
              'template:application',
              compile('<h2>Param Engine: {{@model.foo}}</h2>', {
                moduleName: 'my-app/templates/application.hbs',
              })
            );
          }
        }
      );
    }

    ['@test it renders with static parameters']() {
      this.router.map(function () {
        this.route('engine-params-static');
      });
      this.addTemplate('engine-params-static', '{{mount "paramEngine" model=(hash foo="bar")}}');

      return this.visit('/engine-params-static').then(() => {
        this.assertInnerHTML('<h2>Param Engine: bar</h2>');
      });
    }

    ['@test it renders with bound parameters']() {
      this.router.map(function () {
        this.route('engine-params-bound');
      });
      let controller;
      this.add(
        'controller:engine-params-bound',
        class extends Controller {
          boundParamValue = null;
          init() {
            super.init(...arguments);
            controller = this;
          }
        }
      );
      this.addTemplate(
        'engine-params-bound',
        '{{mount "paramEngine" model=(hash foo=this.boundParamValue)}}'
      );

      return this.visit('/engine-params-bound').then(() => {
        this.assertInnerHTML('<h2>Param Engine: </h2>');

        runTask(() => set(controller, 'boundParamValue', 'bar'));

        this.assertInnerHTML('<h2>Param Engine: bar</h2>');

        runTask(() => set(controller, 'boundParamValue', undefined));

        this.assertInnerHTML('<h2>Param Engine: </h2>');

        runTask(() => set(controller, 'boundParamValue', 'bar'));

        this.assertInnerHTML('<h2>Param Engine: bar</h2>');

        runTask(() => set(controller, 'boundParamValue', 'baz'));

        this.assertInnerHTML('<h2>Param Engine: baz</h2>');

        runTask(() => set(controller, 'boundParamValue', 'bar'));

        this.assertInnerHTML('<h2>Param Engine: bar</h2>');

        runTask(() => set(controller, 'boundParamValue', null));

        this.assertInnerHTML('<h2>Param Engine: </h2>');
      });
    }

    ['@test it renders contextual components passed as parameter values']() {
      this.router.map(function () {
        this.route('engine-params-contextual-component');
      });

      this.addComponent('foo-component', {
        template: `foo-component rendered! - {{app-bar-component}}`,
      });
      this.addComponent('app-bar-component', {
        ComponentClass: class extends Component {
          tagName = '';
        },
        template: 'rendered app-bar-component from the app',
      });
      this.add(
        'engine:componentParamEngine',
        class extends Engine {
          router = null;
          Resolver = ModuleBasedTestResolver;

          init() {
            super.init(...arguments);
            this.register(
              'template:application',
              compile('{{@model.foo}}', {
                moduleName: 'my-app/templates/application.hbs',
              })
            );
          }
        }
      );
      this.addTemplate(
        'engine-params-contextual-component',
        '{{mount "componentParamEngine" model=(hash foo=(component "foo-component"))}}'
      );

      return this.visit('/engine-params-contextual-component').then(() => {
        this.assertComponentElement(this.firstChild, {
          content: 'foo-component rendered! - rendered app-bar-component from the app',
        });
      });
    }
  }
);
