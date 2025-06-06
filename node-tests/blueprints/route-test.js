'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerate = blueprintHelpers.emberGenerate;
const emberDestroy = blueprintHelpers.emberDestroy;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;
const setupPodConfig = blueprintHelpers.setupPodConfig;
const modifyPackages = blueprintHelpers.modifyPackages;

const chai = require('ember-cli-blueprint-test-helpers/chai');
const expect = chai.expect;
const file = chai.file;
const fs = require('fs-extra');

const fixture = require('../helpers/fixture');

describe('Blueprint: route', function () {
  setupTestHooks(this);

  describe('in app', function () {
    beforeEach(function () {
      return emberNew();
    });

    it('route foo', function () {
      return emberGenerateDestroy(['route', 'foo'], (_file) => {
        expect(_file('app/routes/foo.js')).to.equal(fixture('route/route.js'));

        expect(_file('app/templates/foo.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

        expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/app.js'));

        expect(file('app/router.js')).to.contain("this.route('foo')");
      }).then(() => {
        expect(file('app/router.js')).to.not.contain("this.route('foo')");
      });
    });

    it('route foo.js', function () {
      return emberGenerateDestroy(['route', 'foo.js'], (_file) => {
        expect(_file('app/routes/foo.js.js')).to.not.exist;
        expect(_file('app/templates/foo.js.hbs')).to.not.exist;
        expect(_file('tests/unit/routes/foo.js-test.js')).to.not.exist;

        expect(_file('app/routes/foo.js')).to.equal(fixture('route/route.js'));

        expect(_file('app/templates/foo.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

        expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/app.js'));

        expect(file('app/router.js')).to.contain("this.route('foo')");
        expect(file('app/router.js')).to.not.contain("this.route('foo.js')");
      }).then(() => {
        expect(file('app/router.js')).to.not.contain("this.route('foo')");
      });
    });

    it('route foo --skip-router', function () {
      return emberGenerateDestroy(['route', 'foo', '--skip-router'], (_file) => {
        expect(_file('app/routes/foo.js')).to.exist;
        expect(_file('app/templates/foo.hbs')).to.exist;
        expect(_file('tests/unit/routes/foo-test.js')).to.exist;
        expect(file('app/router.js')).to.not.contain("this.route('foo')");
      }).then(() => {
        expect(file('app/router.js')).to.not.contain("this.route('foo')");
      });
    });

    it('route foo --path=:foo_id/show', function () {
      return emberGenerateDestroy(['route', 'foo', '--path=:foo_id/show'], (_file) => {
        expect(_file('app/routes/foo.js')).to.equal(fixture('route/route-with-dynamic-segment.js'));

        expect(_file('app/templates/foo.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

        expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/app.js'));

        expect(file('app/router.js'))
          .to.contain("this.route('foo', {")
          .to.contain("path: ':foo_id/show'")
          .to.contain('});');
      }).then(() => {
        expect(file('app/router.js'))
          .to.not.contain("this.route('foo'")
          .to.not.contain("path: ':foo_id/show'");
      });
    });

    it('route parent/child --reset-namespace', function () {
      return emberGenerateDestroy(['route', 'parent/child', '--reset-namespace'], (_file) => {
        expect(_file('app/routes/child.js')).to.equal(fixture('route/route-child.js'));

        expect(_file('app/templates/child.hbs')).to.equal('{{page-title "Child"}}\n{{outlet}}');

        expect(_file('tests/unit/routes/child-test.js')).to.equal(fixture('route-test/child.js'));

        expect(file('app/router.js'))
          .to.contain("this.route('parent', {")
          .to.contain("this.route('child', {")
          .to.contain('resetNamespace: true')
          .to.contain('});');
      });
    });

    it('route parent/child --reset-namespace --pod', function () {
      return emberGenerateDestroy(
        ['route', 'parent/child', '--reset-namespace', '--pod'],
        (_file) => {
          expect(_file('app/child/route.js')).to.equal(fixture('route/route-child.js'));

          expect(_file('app/child/template.hbs')).to.equal('{{page-title "Child"}}\n{{outlet}}');

          expect(_file('tests/unit/child/route-test.js')).to.equal(fixture('route-test/child.js'));

          expect(file('app/router.js'))
            .to.contain("this.route('parent', {")
            .to.contain("this.route('child', {")
            .to.contain('resetNamespace: true')
            .to.contain('});');
        }
      );
    });

    it('route index', function () {
      return emberGenerateDestroy(['route', 'index'], (_file) => {
        expect(_file('app/routes/index.js')).to.exist;
        expect(_file('app/templates/index.hbs')).to.exist;
        expect(_file('tests/unit/routes/index-test.js')).to.exist;
        expect(file('app/router.js')).to.not.contain("this.route('index')");
      }).then(() => {
        expect(file('app/router.js')).to.not.contain("this.route('index')");
      });
    });

    it('route application', function () {
      fs.removeSync('app/templates/application.hbs');
      return emberGenerate(['route', 'application']).then(() => {
        expect(file('app/router.js')).to.not.contain("this.route('application')");
      });
    });

    it('route basic', function () {
      return emberGenerateDestroy(['route', 'basic'], (_file) => {
        expect(_file('app/routes/basic.js')).to.exist;
        expect(file('app/router.js')).to.not.contain("this.route('basic')");
      }).then(() => {
        expect(file('app/router.js')).to.not.contain("this.route('basic')");
      });
    });

    it('route foo --route-authoring-format strict', function () {
      return emberGenerateDestroy(
        ['route', 'foo', '--route-authoring-format', 'strict'],
        (_file) => {
          expect(_file('app/routes/foo.js')).to.equal(fixture('route/route.js'));

          expect(_file('app/templates/foo.gjs')).to.equal(
            fixture('route/strict-route-template.gjs')
          );
          expect(_file('app/templates/foo.hbs')).to.not.exist;

          expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/app.js'));

          expect(file('app/router.js')).to.contain("this.route('foo')");
        }
      );
    });

    it('route foo --strict', function () {
      return emberGenerateDestroy(['route', 'foo', '--strict'], (_file) => {
        expect(_file('app/routes/foo.js')).to.equal(fixture('route/route.js'));

        expect(_file('app/templates/foo.gjs')).to.equal(fixture('route/strict-route-template.gjs'));
        expect(_file('app/templates/foo.hbs')).to.not.exist;

        expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/app.js'));

        expect(file('app/router.js')).to.contain("this.route('foo')");
      });
    });

    it('route foo --strict --typescript', function () {
      return emberGenerateDestroy(['route', 'foo', '--strict', '--typescript'], (_file) => {
        expect(_file('app/routes/foo.ts')).to.equal(fixture('route/route.js'));

        expect(_file('app/templates/foo.gts')).to.equal(fixture('route/strict-route-template.gts'));
        expect(_file('app/templates/foo.hbs')).to.not.exist;

        expect(_file('tests/unit/routes/foo-test.ts')).to.equal(fixture('route-test/app.js'));

        expect(file('app/router.js')).to.contain("this.route('foo')");
      });
    });

    it('route foo --route-authoring-format loose', function () {
      return emberGenerateDestroy(
        ['route', 'foo', '--route-authoring-format', 'loose'],
        (_file) => {
          expect(_file('app/routes/foo.js')).to.equal(fixture('route/route.js'));

          expect(_file('app/templates/foo.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

          expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/app.js'));

          expect(file('app/router.js')).to.contain("this.route('foo')");
        }
      );
    });

    it('route foo --loose', function () {
      return emberGenerateDestroy(['route', 'foo', '--loose'], (_file) => {
        expect(_file('app/routes/foo.js')).to.equal(fixture('route/route.js'));

        expect(_file('app/templates/foo.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

        expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/app.js'));

        expect(file('app/router.js')).to.contain("this.route('foo')");
      });
    });

    it('route foo --pod', function () {
      return emberGenerateDestroy(['route', 'foo', '--pod'], (_file) => {
        expect(_file('app/foo.js/route.js')).to.not.exist;
        expect(_file('app/foo.js/template.hbs')).to.not.exist;
        expect(_file('tests/unit/foo.js/route-test.js')).to.not.exist;

        expect(_file('app/foo/route.js')).to.equal(fixture('route/route.js'));

        expect(_file('app/foo/template.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

        expect(_file('tests/unit/foo/route-test.js')).to.equal(fixture('route-test/app.js'));

        expect(file('app/router.js')).to.contain("this.route('foo')");
      }).then(() => {
        expect(file('app/router.js')).to.not.contain("this.route('foo')");
      });
    });

    it('route foo.js --pod', function () {
      return emberGenerateDestroy(['route', 'foo.js', '--pod'], (_file) => {
        expect(_file('app/foo.js/route.js')).to.not.exist;
        expect(_file('app/foo.js/template.hbs')).to.not.exist;
        expect(_file('tests/unit/foo.js/route-test.js')).to.not.exist;

        expect(_file('app/foo/route.js')).to.equal(fixture('route/route.js'));

        expect(_file('app/foo/template.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

        expect(_file('tests/unit/foo/route-test.js')).to.equal(fixture('route-test/app.js'));

        expect(file('app/router.js')).to.contain("this.route('foo')");
        expect(file('app/router.js')).to.not.contain("this.route('foo.js')");
      }).then(() => {
        expect(file('app/router.js')).to.not.contain("this.route('foo')");
      });
    });

    it('route foo --pod with --path', function () {
      return emberGenerate(['route', 'foo', '--pod', '--path=:foo_id/show'])
        .then(() =>
          expect(file('app/router.js'))
            .to.contain("this.route('foo', {")
            .to.contain("path: ':foo_id/show'")
            .to.contain('});')
        )

        .then(() => emberDestroy(['route', 'foo', '--pod', '--path=:foo_id/show']))
        .then(() =>
          expect(file('app/router.js'))
            .to.not.contain("this.route('foo', {")
            .to.not.contain("path: ':foo_id/show'")
        );
    });

    it('route index --pod', function () {
      return emberGenerate(['route', 'index', '--pod']).then(() =>
        expect(file('app/router.js')).to.not.contain("this.route('index')")
      );
    });

    it('route application --pod', function () {
      return emberGenerate(['route', 'application', '--pod'])
        .then(() => expect(file('app/application/route.js')).to.exist)
        .then(() => expect(file('app/application/template.hbs')).to.exist)
        .then(() => expect(file('app/router.js')).to.not.contain("this.route('application')"));
    });

    it('route basic --pod', function () {
      return emberGenerateDestroy(['route', 'basic', '--pod'], (_file) => {
        expect(_file('app/basic/route.js')).to.exist;
        expect(file('app/router.js')).to.not.contain("this.route('index')");
      });
    });

    describe('with podModulePrefix', function () {
      beforeEach(function () {
        setupPodConfig({ podModulePrefix: true });
      });

      it('route foo --pod', function () {
        return emberGenerateDestroy(['route', 'foo', '--pod'], (_file) => {
          expect(_file('app/pods/foo/route.js')).to.equal(fixture('route/route.js'));

          expect(_file('app/pods/foo/template.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

          expect(_file('tests/unit/pods/foo/route-test.js')).to.equal(fixture('route-test/app.js'));

          expect(file('app/router.js')).to.contain("this.route('foo')");
        }).then(() => {
          expect(file('app/router.js')).to.not.contain("this.route('foo')");
        });
      });

      it('route foo.js --pod', function () {
        return emberGenerateDestroy(['route', 'foo.js', '--pod'], (_file) => {
          expect(_file('app/pods/foo.js/route.js')).to.not.exist;
          expect(_file('app/pods/foo.js/template.hbs')).to.not.exist;
          expect(_file('tests/unit/pods/foo.js/route-test.js')).to.not.exist;

          expect(_file('app/pods/foo/route.js')).to.equal(fixture('route/route.js'));

          expect(_file('app/pods/foo/template.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

          expect(_file('tests/unit/pods/foo/route-test.js')).to.equal(fixture('route-test/app.js'));

          expect(file('app/router.js')).to.contain("this.route('foo')");
          expect(file('app/router.js')).to.not.contain("this.route('foo.js')");
        }).then(() => {
          expect(file('app/router.js')).to.not.contain("this.route('foo')");
        });
      });

      describe('ember-page-title is not installed', function () {
        beforeEach(function () {
          return modifyPackages([{ name: 'ember-page-title', delete: true }]);
        });

        it('route foo', function () {
          return emberGenerateDestroy(['route', 'foo'], (_file) => {
            expect(_file('app/templates/foo.hbs')).to.equal('{{outlet}}');
          });
        });

        it('route foo/bar', function () {
          return emberGenerateDestroy(['route', 'foo/bar'], (_file) => {
            expect(_file('app/templates/foo/bar.hbs')).to.equal('{{outlet}}');
          });
        });
      });
    });

    it('using a `router.ts` file', async function () {
      fs.moveSync('app/router.js', 'app/router.ts');

      await emberGenerate(['route', 'foo']);
      expect(file('app/router.ts')).to.contain("this.route('foo')");

      await emberDestroy(['route', 'foo']);
      expect(file('app/router.ts')).to.not.contain("this.route('foo')");
    });

    it('throws a helpful error if a router file could not be found', async function () {
      fs.removeSync('app/router.js');

      await expect(emberGenerate(['route', 'foo'])).to.be.rejectedWith(
        'Could not find a router file. Please make sure your project has a `router.js` or `router.ts` file.'
      );
    });

    it('throws a helpful error if both a `router.ts` and `router.js` file are found', async function () {
      fs.copySync('app/router.js', 'app/router.ts');

      await expect(emberGenerate(['route', 'foo'])).to.be.rejectedWith(
        'Found both a `router.js` and `router.ts` file. Please make sure your project only has one or the other.'
      );
    });
  });

  describe('in addon', function () {
    beforeEach(function () {
      return emberNew({ target: 'addon' });
    });

    it('route foo', function () {
      return emberGenerateDestroy(['route', 'foo'], (_file) => {
        expect(_file('addon/routes/foo.js')).to.equal(fixture('route/route.js'));

        expect(_file('addon/templates/foo.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

        expect(_file('app/routes/foo.js')).to.contain(
          "export { default } from 'my-addon/routes/foo';"
        );

        expect(_file('app/templates/foo.js')).to.contain(
          "export { default } from 'my-addon/templates/foo';"
        );

        expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/addon.js'));

        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('foo')");
      }).then(() => {
        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('foo')");
      });
    });

    it('route foo.js', function () {
      return emberGenerateDestroy(['route', 'foo.js'], (_file) => {
        expect(_file('addon/routes/foo.js.js')).to.not.exist;
        expect(_file('addon/templates/foo.js.hbs')).to.not.exist;
        expect(_file('app/routes/foo.js.js')).to.not.exist;
        expect(_file('app/templates/foo.js.js')).to.not.exist;
        expect(_file('tests/unit/routes/foo.js-test.js')).to.not.exist;

        expect(_file('addon/routes/foo.js')).to.equal(fixture('route/route.js'));

        expect(_file('addon/templates/foo.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

        expect(_file('app/routes/foo.js')).to.contain(
          "export { default } from 'my-addon/routes/foo';"
        );

        expect(_file('app/templates/foo.js')).to.contain(
          "export { default } from 'my-addon/templates/foo';"
        );

        expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/addon.js'));

        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('foo')");
        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('foo.js')");
      }).then(() => {
        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('foo')");
      });
    });

    it('route foo/bar', function () {
      return emberGenerateDestroy(['route', 'foo/bar'], (_file) => {
        expect(_file('addon/routes/foo/bar.js')).to.equal(fixture('route/route-nested.js'));

        expect(_file('addon/templates/foo/bar.hbs')).to.equal('{{page-title "Bar"}}\n{{outlet}}');

        expect(_file('app/routes/foo/bar.js')).to.contain(
          "export { default } from 'my-addon/routes/foo/bar';"
        );

        expect(_file('app/templates/foo/bar.js')).to.contain(
          "export { default } from 'my-addon/templates/foo/bar';"
        );

        expect(_file('tests/unit/routes/foo/bar-test.js')).to.equal(
          fixture('route-test/addon-nested.js')
        );

        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('bar')");
      }).then(() => {
        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('bar')");
      });
    });

    it('route foo --dummy', function () {
      return emberGenerateDestroy(['route', 'foo', '--dummy'], (_file) => {
        expect(_file('tests/dummy/app/routes/foo.js')).to.equal(fixture('route/route.js'));

        expect(_file('tests/dummy/app/templates/foo.hbs')).to.equal(
          '{{page-title "Foo"}}\n{{outlet}}'
        );

        expect(_file('app/routes/foo.js')).to.not.exist;
        expect(_file('app/templates/foo.hbs')).to.not.exist;
        expect(_file('tests/unit/routes/foo-test.js')).to.not.exist;

        expect(file('tests/dummy/app/router.js')).to.contain("this.route('foo')");
      }).then(() => {
        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('foo')");
      });
    });

    it('route foo.js --dummy', function () {
      return emberGenerateDestroy(['route', 'foo.js', '--dummy'], (_file) => {
        expect(_file('tests/dummy/app/routes/foo.js.js')).to.not.exist;
        expect(_file('tests/dummy/app/templates/foo.js.hbs')).to.not.exist;

        expect(_file('tests/dummy/app/routes/foo.js')).to.equal(fixture('route/route.js'));

        expect(_file('tests/dummy/app/templates/foo.hbs')).to.equal(
          '{{page-title "Foo"}}\n{{outlet}}'
        );

        expect(_file('app/routes/foo.js')).to.not.exist;
        expect(_file('app/templates/foo.hbs')).to.not.exist;
        expect(_file('tests/unit/routes/foo-test.js')).to.not.exist;

        expect(file('tests/dummy/app/router.js')).to.contain("this.route('foo')");
        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('foo.js')");
      }).then(() => {
        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('foo')");
      });
    });

    it('route foo/bar --dummy', function () {
      return emberGenerateDestroy(['route', 'foo/bar', '--dummy'], (_file) => {
        expect(_file('tests/dummy/app/routes/foo/bar.js')).to.equal(
          fixture('route/route-nested.js')
        );

        expect(_file('tests/dummy/app/templates/foo/bar.hbs')).to.equal(
          '{{page-title "Bar"}}\n{{outlet}}'
        );

        expect(_file('app/routes/foo/bar.js')).to.not.exist;
        expect(_file('app/templates/foo/bar.hbs')).to.not.exist;
        expect(_file('tests/unit/routes/foo/bar-test.js')).to.not.exist;

        expect(file('tests/dummy/app/router.js'))
          .to.contain("this.route('foo', function() {")
          .to.contain("this.route('bar')");
      }).then(() => {
        expect(file('tests/dummy/app/router.js')).to.not.contain("this.route('bar')");
      });
    });

    it('route foo --pod', function () {
      return emberGenerateDestroy(['route', 'foo', '--pod'], (_file) => {
        expect(_file('addon/foo/route.js')).to.equal(fixture('route/route.js'));

        expect(_file('addon/foo/template.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

        expect(_file('app/foo/route.js')).to.contain(
          "export { default } from 'my-addon/foo/route';"
        );

        expect(_file('app/foo/template.js')).to.contain(
          "export { default } from 'my-addon/foo/template';"
        );

        expect(_file('tests/unit/foo/route-test.js')).to.equal(fixture('route-test/addon.js'));
      });
    });

    it('route foo.js --pod', function () {
      return emberGenerateDestroy(['route', 'foo.js', '--pod'], (_file) => {
        expect(_file('addon/foo.js/route.js')).to.not.exist;
        expect(_file('addon/foo.js/template.hbs')).to.not.exist;
        expect(_file('app/foo.js/route.js')).to.not.exist;
        expect(_file('app/foo.js/template.js')).to.not.exist;
        expect(_file('tests/unit/foo.js/route-test.js')).to.not.exist;

        expect(_file('addon/foo/route.js')).to.equal(fixture('route/route.js'));

        expect(_file('addon/foo/template.hbs')).to.equal('{{page-title "Foo"}}\n{{outlet}}');

        expect(_file('app/foo/route.js')).to.contain(
          "export { default } from 'my-addon/foo/route';"
        );

        expect(_file('app/foo/template.js')).to.contain(
          "export { default } from 'my-addon/foo/template';"
        );

        expect(_file('tests/unit/foo/route-test.js')).to.equal(fixture('route-test/addon.js'));
      });
    });

    describe('ember-page-title is not installed', function () {
      beforeEach(function () {
        return modifyPackages([{ name: 'ember-page-title', delete: true }]);
      });

      it('route foo', function () {
        return emberGenerateDestroy(['route', 'foo'], (_file) => {
          expect(_file('addon/templates/foo.hbs')).to.equal('{{outlet}}');
        });
      });

      it('route foo/bar', function () {
        return emberGenerateDestroy(['route', 'foo/bar'], (_file) => {
          expect(_file('addon/templates/foo/bar.hbs')).to.equal('{{outlet}}');
        });
      });
    });

    it('using a `router.ts` file', async function () {
      fs.moveSync('tests/dummy/app/router.js', 'tests/dummy/app/router.ts');

      await emberGenerate(['route', 'foo', '--dummy']);
      expect(file('tests/dummy/app/router.ts')).to.contain("this.route('foo')");

      await emberDestroy(['route', 'foo', '--dummy']);
      expect(file('tests/dummy/app/router.ts')).to.not.contain("this.route('foo')");
    });

    it('throws a helpful error if a router file could not be found', async function () {
      fs.removeSync('tests/dummy/app/router.js');

      await expect(emberGenerate(['route', 'foo', '--dummy'])).to.be.rejectedWith(
        'Could not find a router file. Please make sure your project has a `router.js` or `router.ts` file.'
      );
    });

    it('throws a helpful error if both a `router.ts` and `router.js` file are found', async function () {
      fs.copySync('tests/dummy/app/router.js', 'tests/dummy/app/router.ts');

      await expect(emberGenerate(['route', 'foo', '--dummy'])).to.be.rejectedWith(
        'Found both a `router.js` and `router.ts` file. Please make sure your project only has one or the other.'
      );
    });
  });

  describe('in in-repo-addon', function () {
    beforeEach(function () {
      return emberNew({ target: 'in-repo-addon' });
    });

    it('route foo --in-repo-addon=my-addon', function () {
      return emberGenerateDestroy(['route', 'foo', '--in-repo-addon=my-addon'], (_file) => {
        expect(_file('lib/my-addon/addon/routes/foo.js')).to.equal(fixture('route/route.js'));

        expect(_file('lib/my-addon/addon/templates/foo.hbs')).to.equal(
          '{{page-title "Foo"}}\n{{outlet}}'
        );

        expect(_file('lib/my-addon/app/routes/foo.js')).to.contain(
          "export { default } from 'my-addon/routes/foo';"
        );

        expect(_file('lib/my-addon/app/templates/foo.js')).to.contain(
          "export { default } from 'my-addon/templates/foo';"
        );

        expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/app.js'));
      });
    });

    it('route foo.js --in-repo-addon=my-addon', function () {
      return emberGenerateDestroy(['route', 'foo.js', '--in-repo-addon=my-addon'], (_file) => {
        expect(_file('lib/my-addon/addon/routes/foo.js.js')).to.not.exist;
        expect(_file('lib/my-addon/addon/templates/foo.js.hbs')).to.not.exist;
        expect(_file('lib/my-addon/app/routes/foo.js.js')).to.not.exist;
        expect(_file('lib/my-addon/app/templates/foo.js.js')).to.not.exist;
        expect(_file('tests/unit/routes/foo.js-test.js')).to.not.exist;

        expect(_file('lib/my-addon/addon/routes/foo.js')).to.equal(fixture('route/route.js'));

        expect(_file('lib/my-addon/addon/templates/foo.hbs')).to.equal(
          '{{page-title "Foo"}}\n{{outlet}}'
        );

        expect(_file('lib/my-addon/app/routes/foo.js')).to.contain(
          "export { default } from 'my-addon/routes/foo';"
        );

        expect(_file('lib/my-addon/app/templates/foo.js')).to.contain(
          "export { default } from 'my-addon/templates/foo';"
        );

        expect(_file('tests/unit/routes/foo-test.js')).to.equal(fixture('route-test/app.js'));
      });
    });

    it('route foo/bar --in-repo-addon=my-addon', function () {
      return emberGenerateDestroy(['route', 'foo/bar', '--in-repo-addon=my-addon'], (_file) => {
        expect(_file('lib/my-addon/addon/routes/foo/bar.js')).to.equal(
          fixture('route/route-nested.js')
        );

        expect(_file('lib/my-addon/addon/templates/foo/bar.hbs')).to.equal(
          '{{page-title "Bar"}}\n{{outlet}}'
        );

        expect(_file('lib/my-addon/app/routes/foo/bar.js')).to.contain(
          "export { default } from 'my-addon/routes/foo/bar';"
        );

        expect(_file('lib/my-addon/app/templates/foo/bar.js')).to.contain(
          "export { default } from 'my-addon/templates/foo/bar';"
        );

        expect(_file('tests/unit/routes/foo/bar-test.js')).to.equal(
          fixture('route-test/nested.js')
        );
      });
    });

    describe('ember-page-title is not installed', function () {
      beforeEach(function () {
        return modifyPackages([{ name: 'ember-page-title', delete: true }]);
      });

      it('route foo', function () {
        return emberGenerateDestroy(['route', 'foo', '--in-repo-addon=my-addon'], (_file) => {
          expect(_file('lib/my-addon/addon/templates/foo.hbs')).to.equal('{{outlet}}');
        });
      });

      it('route foo/bar', function () {
        return emberGenerateDestroy(['route', 'foo/bar', '--in-repo-addon=my-addon'], (_file) => {
          expect(_file('lib/my-addon/addon/templates/foo/bar.hbs')).to.equal('{{outlet}}');
        });
      });
    });
  });
});
