# Ember Changelog

## v6.6.0-beta.1 (June 9, 2025)

- [#20627](https://github.com/emberjs/ember.js/pull/20627) [CLEANUP] Remove `escapeExpression` from `@ember/template`
- [#20909](https://github.com/emberjs/ember.js/pull/20909) Remove microtask in runtime compiler

## v6.5.0 (June 9, 2025)

- [#20835](https://github.com/emberjs/ember.js/pull/20835) [FEATURE] Add a `--route-authoring-format` option to the route generator to generate template-tag components as route templates per [RFC #1046](https://rfcs.emberjs.com/id/1046-template-tag-in-routes).
- [#20862](https://github.com/emberjs/ember.js/pull/20862) [FEATURE] Add blueprints to generate strict components (template tag) with `--strict` or `--tt` per [RFC #0779](https://rfcs.emberjs.com/id/0779-first-class-component-templates).
- [#20813](https://github.com/emberjs/ember.js/pull/20686) / [#20813](https://github.com/emberjs/ember.js/pull/20813) [DEPRECATION] Deprecate `import Ember from 'ember'` per [RFC #1003](https://rfcs.emberjs.com/id/1003-deprecation-import-ember-from-ember).
- [#20880](https://github.com/emberjs/ember.js/pull/20880) [CLEANUP] Remove the `ember-cli-qunit` tests
- [#20891](https://github.com/emberjs/ember.js/pull/20891) [CLEANUP] Remove DEPRECATE_COMPONENT_TEMPLATE_RESOLVING deprecation

## v6.4.0 (April 28, 2025)

- [#20842](https://github.com/emberjs/ember.js/pull/20842) [BREAKING] Drop support for TypeScript 4.9 to allow for glimmer-vm upgrade. 
  * Ember now tests against TypeScript 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7. 
  Per the rolling support window, following [Semantic Versioning for TypeScript Types](https://www.semver-ts.org/),
  the supported range of TypeScript versions across two Ember LTS releases must 
  always overlap.
  For more examples, see the [Stability heading in this blog post](https://blog.emberjs.com/stable-typescript-types-in-ember-5-1/).
  * We now require consumers use `verbatimModuleSyntax`.
- [#20842](https://github.com/emberjs/ember.js/pull/20842) / [#20864](https://github.com/emberjs/ember.js/pull/20864) Upgrade glimmer-vm.
- [#20872](https://github.com/emberjs/ember.js/pull/20872) [BUGFIX] Fix `{{debugger}}` via upgrade @glimmer/runtime.
- [#20850](https://github.com/emberjs/ember.js/pull/20850) [BUGFIX] Fix source maps in published packages.
- [#20867](https://github.com/emberjs/ember.js/pull/20867) [BUGFIX] Fix LOG_VERSIONS.
- [#20852](https://github.com/emberjs/ember.js/pull/20852) [CLEANUP] Remove ember-auto-import as a dependency.
- [#20863](https://github.com/emberjs/ember.js/pull/20863) [CLEANUP] Cleanup "octane edition" code
- [#20856](https://github.com/emberjs/ember.js/pull/20856) [DOCS] Restore @glimmer/component API docs and test against classes and modules generated in api docs to prevent future missing docs.

## v6.3.0 (March 17, 2025)

- [#20800](https://github.com/emberjs/ember.js/pull/20800) [FEATURE] Support use of template-tag components as route templates per [RFC #1046](https://rfcs.emberjs.com/id/1046-template-tag-in-routes).
- [#20526](https://github.com/emberjs/ember.js/pull/20526) / [#20820](https://github.com/emberjs/ember.js/pull/20820) [DEPRECATION] Deprecate importing `inject` from `@ember/service`. The export is renamed to `service` per [RFC #0752](https://rfcs.emberjs.com/id/0752-inject-service/).
- [#20817](https://github.com/emberjs/ember.js/pull/20817) Clean up `deprecate-implicit-route-model` deprecation. It was deprecated until 6.0. 
- [#20825](https://github.com/emberjs/ember.js/pull/20825) Remove the `helper` wrapper from the helper generator. [Plain functions as helpers](https://guides.emberjs.com/release/components/helper-functions/#toc_global-helper-functions) have been supported since v4.5.

## v6.2.0 (February 03, 2025)

- [#20798](https://github.com/emberjs/ember.js/pull/20798) [CLEANUP] Remove old code that supported old ember-test-helpers
- [#20809](https://github.com/emberjs/ember.js/pull/20809) [CLEANUP] Remove long enabled `EMBER_TYPESCRIPT_BLUEPRINTS` feature flag
- [#20811](https://github.com/emberjs/ember.js/pull/20811) Fix typescript@next support

## v6.1.0 (December 23, 2024)

- [#20782](https://github.com/emberjs/ember.js/pull/20782) [BUGFIX] Fixes Ember keyword shadowing: keywords should always be superseded by in-scope lexical variables
- [#20787](https://github.com/emberjs/ember.js/pull/20787) Publish ember-source as v2 addon

## v6.0.1 (November 15, 2024)

- [#20792](https://github.com/emberjs/ember.js/pull/20792) [BUGFIX] Fix importing ember-source/types

## v6.0.0 (November 11, 2024)
 
- [BREAKING] Features and APIs that were deprecated until v6.0 will now throw exceptions and the related code will be removed imminently. For a list of deprecations, see the [Deprecation Guide](https://deprecations.emberjs.com/v5.x).
- [#20731](https://github.com/emberjs/ember.js/pull/20731) [BUGFIX] Bump `import Ember from 'ember'` barrel file deprecations until 7.0.0
- [#20779](https://github.com/emberjs/ember.js/pull/20779) / [#20791](https://github.com/emberjs/ember.js/pull/20791) [CLEANUP] Update browser support per RFC #685. Support is now Chrome >= 109, Edge >= 128 Firefox >= 115, Safari >= 15.6, ChromeAndroid >= 130, FirefoxAndroid >= 130
- [#20773](https://github.com/emberjs/ember.js/pull/20773) [CLEANUP] Remove deprecated features from component blueprint per [RFC #995](https://rfcs.emberjs.com/id/0995-deprecate-non-colocated-components).
- [#20730](https://github.com/emberjs/ember.js/pull/20730) [CLEANUP] Remove support for EXTEND_PROTOTYPES
- [#20732](https://github.com/emberjs/ember.js/pull/20732) [TYPES] Directly assign a boolean value in deprecated-features
- [#20753](https://github.com/emberjs/ember.js/pull/20753) [INTERNAL] Update tagging strategy: ember-source tags will now be v1.2.3-ember-source instead of v1.2.3
- [#20744](https://github.com/emberjs/ember.js/pull/20744) Add v2 addon metadata

## v5.12.0 (September 30, 2024)

- [#20746](https://github.com/emberjs/ember.js/pull/20746) [BUGFIX] Upgrade glimmer-vm for some perf improvements
- [#20714](https://github.com/emberjs/ember.js/pull/20714) [BUGFIX] Break eager cycle for "deprecate" function

## v5.11.1 (September 23, 2024)

- [#20734](https://github.com/emberjs/ember.js/pull/20734) Circularity fixes

## v5.11.0 (August 19, 2024)

- [#20716](https://github.com/emberjs/ember.js/pull/20716) [BREAKING] Drop Node 16 support
- [#20704](https://github.com/emberjs/ember.js/pull/20704) Remove `Component` suffix from blueprints to facilitate `<template>`

## v5.10.2 (August 6, 2024)

- [#20726](https://github.com/emberjs/ember.js/pull/20726) [BUGFIX] Fix test waiters by removing unintentional duplication from ember-testing bundle
- [#20715](https://github.com/emberjs/ember.js/pull/20715) [BUGFIX] Don't publish empty modules

## v5.10.1 (July 12, 2024)
 
- [#20720](https://github.com/emberjs/ember.js/pull/20720) [BUGFIX] Fix deprecation guide url for array prototype extensions deprecation

## v5.10.0 (July 8, 2024)

- [#20702](https://github.com/emberjs/ember.js/pull/20702) [DEPRECATION] Deprecate array prototype extensions per [RFC #848](https://rfcs.emberjs.com/id/0848-deprecate-array-prototype-extensions/).
- [#20660](https://github.com/emberjs/ember.js/pull/20660) [DEPRECATION] Deprecate non-colocated component template resolution per [RFC #995](https://rfcs.emberjs.com/id/0995-deprecate-non-colocated-components).
- [#20675](https://github.com/emberjs/ember.js/pull/20675) [INTERNAL] Build reform
- [#20683](https://github.com/emberjs/ember.js/pull/20683) [CLEANUP] Remove application-template-wrapper optional feature support
- [#20685](https://github.com/emberjs/ember.js/pull/20685) [CLEANUP] Remove support for non-glimmer template-only components
- [#20681](https://github.com/emberjs/ember.js/pull/20681) Update ember-cli-babel

## v5.9.0 (June 3, 2024)

- [#20653](https://github.com/emberjs/ember.js/pull/20653) [DEPRECATION] Deprecate `(action)` and `{{action}}` in templates per [RFC #1006](https://rfcs.emberjs.com/id/1006-deprecate-action-template-helper).
- [#20669](https://github.com/emberjs/ember.js/pull/20669) [FEATURE] Make deprecations throw when the `until` for `ember-source` has passed per [RFC #0830](https://rfcs.emberjs.com/id/0830-evolving-embers-major-version-process).
- [#20656](https://github.com/emberjs/ember.js/pull/20656) / [#20664](https://github.com/emberjs/ember.js/pull/20664) [BUGFIX] Upgrade router_js to support `exactOptionalPropertyTypes`
- [#20658](https://github.com/emberjs/ember.js/pull/20658) Upgrade glimmer-vm to v0.92
- [#20678](https://github.com/emberjs/ember.js/pull/20678) Address a missed deprecation introduced in #20658

## v5.8.0 (April 15, 2024)

- [#20672](https://github.com/emberjs/ember.js/pull/20672) [BUGFIX] Restore `{{this.attrs.foo}}` deprecation from the 3.x era. The API was accidentally not removed in 4.0 but the deprecation was removed.

## v5.7.0 (March 4, 2024)

- [#20639](https://github.com/emberjs/ember.js/pull/20639) [FEATURE] Add an optional feature "no-implicit-route-model" to allow the removal of the implicit loading of a model per [RFC #774](https://rfcs.emberjs.com/id/0774-implicit-record-route-loading).
- [#20597](https://github.com/emberjs/ember.js/pull/20597) [FEATURE] Add explicit support TS 5.1, 5.2, and 5.3
- [#20645](https://github.com/emberjs/ember.js/pull/20645) [BUGFIX] Make sure the `component-class` blueprint generates a signature in a TS project
- [#20224](https://github.com/emberjs/ember.js/pull/20224) Integrate types for the `warn` method
- [#20579](https://github.com/emberjs/ember.js/pull/20579) Mark `cached` as a `MethodDecorator` instead of `PropertyDecorator`
- [#20609](https://github.com/emberjs/ember.js/pull/20609) Bump all glimmer-vm dependencies to 0.87.1
- [#20619](https://github.com/emberjs/ember.js/pull/20619) [CLEANUP] Cleanup incorrect module usage
- [#20620](https://github.com/emberjs/ember.js/pull/20620) [CLEANUP] Remove final eager consumption of AMD loader

## v5.6.0 (January 22, 2024)

- [#20595](https://github.com/emberjs/ember.js/pull/20595) [BUGFIX] An addon re-export should always be a JavaScript file
- [#20603](https://github.com/emberjs/ember.js/pull/20603) [BUGFIX] Internal templates should be strictMode
- [#20605](https://github.com/emberjs/ember.js/pull/20605) [BUGFIX] Move babel-plugin-ember-template-compilation to dependencies
- [#20570](https://github.com/emberjs/ember.js/pull/20570) [CLEANUP] Remove all traces of named outlets code
- [#20561](https://github.com/emberjs/ember.js/pull/20561) Upgrade the Glimmer VM from 0.84.3 to 0.85.13

## v5.4.1 (January 22, 2024)

- [#20575](https://github.com/emberjs/ember.js/pull/20575) [BUGFIX] Update backburner.js to 2.4.2
- [#20595](https://github.com/emberjs/ember.js/pull/20595) [BUGFIX] Blueprints: An addon re-export should always be a JavaScript file

## v4.12.4 (January 22, 2024)

- [#20595](https://github.com/emberjs/ember.js/pull/20595) [BUGFIX] Blueprints: An addon re-export should always be a JavaScript file

## v5.5.0 (December 11, 2023)

- [#20575](https://github.com/emberjs/ember.js/pull/20575) [BUGFIX] Update backburner.js to 2.4.2
- [#20578](https://github.com/emberjs/ember.js/pull/20578) [BUGFIX] Deprecate outlet `TemplateFactory` support
- [#20559](https://github.com/emberjs/ember.js/pull/20559) [INTERNAL] Switch to pnpm

## v5.4.0 (October 30, 2023)

- [#20521](https://github.com/emberjs/ember.js/pull/20521) [FEATURE] Add TypeScript support for looking up controllers in DI registry
- [#20529](https://github.com/emberjs/ember.js/pull/20529) [BUGFIX] Don't rethrow string errors in handleTransitionReject
- [#20210](https://github.com/emberjs/ember.js/pull/20210) [BUGFIX] Fix hanging tests caused by legacy rsvp code
- [#20530](https://github.com/emberjs/ember.js/pull/20530) Upgrade the Glimmer VM to 0.84.3

## v5.3.0 (September 18, 2023)

- [#20376](https://github.com/emberjs/ember.js/pull/20376) / [#20524](https://github.com/emberjs/ember.js/pull/20524) [DEPRECATION] Deprecate implicit record loading in Ember Route per [RFC #774](https://rfcs.emberjs.com/id/0774-implicit-record-route-loading).

## v5.2.0 (August 7, 2023)

- [#20464](https://github.com/emberjs/ember.js/pull/20464) [FEATURE] Create public import for uniqueId helper per [RFC #659](https://rfcs.emberjs.com/id/0659-unique-id-helper).
- [#20505](https://github.com/emberjs/ember.js/pull/20505) [BUGFIX] Remove use of `this.element` in `component-test` and `helper-test` blueprints
- [#20501](https://github.com/emberjs/ember.js/pull/20501) [BUGFIX] Fix the types for the mutation-methods of `NativeArray`
- [#20477](https://github.com/emberjs/ember.js/pull/20477) Upgrade TS and configure TS CI accordingly to test against TS 4.9, 5.0, and 5.1

## v5.1.2 (June 30, 2023)

- [#20491](https://github.com/emberjs/ember.js/pull/20491) [BUGFIX] Types: EmberComponent's `element` is an `Element`
- [#20492](https://github.com/emberjs/ember.js/pull/20492) [BUGFIX] Types: EmberComponent init can have no args

## v4.12.3 (June 30, 2023)

- [#20493](https://github.com/emberjs/ember.js/pull/20493) [BUGFIX] Backport more types fixes

## v5.1.1 (June 29, 2023)

- [#20480](https://github.com/emberjs/ember.js/pull/20480) [BUGFIX] Fix type dependency issues
- [#20482](https://github.com/emberjs/ember.js/pull/20482) [BUGFIX] Types: Allow `store` to be injected on `Route`
- [#20489](https://github.com/emberjs/ember.js/pull/20489) [BUGFIX] Fix types for Resolver contract
- [#20490](https://github.com/emberjs/ember.js/pull/20490) [BUGFIX] Types Fix model arg to a Route `serialize`

## v4.12.2 (June 28, 2023)

- [#20481](https://github.com/emberjs/ember.js/pull/20481) [BUGFIX] Backport some stable type import locations

## v5.1.0 (June 26, 2023)

- [#20449](https://github.com/emberjs/ember.js/pull/20449) [FEATURE] Publish stable types for Ember per [RFC #800](https://rfcs.emberjs.com/id/0800-ts-adoption-plan).
- [#20439](https://github.com/emberjs/ember.js/pull/20439) [CLEANUP] Update tsconfig to target ES2021.
- [#20461](https://github.com/emberjs/ember.js/pull/20461) [BUGFIX] Fix cyclic module crash with engines and fastboot.

## v5.0.0 (May 15, 2023)

- [#20438](https://github.com/emberjs/ember.js/pull/20438) [BREAKING] Drop support for Node 14
- [#20445](https://github.com/emberjs/ember.js/pull/20445) [CLEANUP] Update browser support per RFC #685. Minimum support has been updated to Chrome >= 103, Edge >= 110, Firefox >= 102, iOS >= 12, Safari >= 12, ChromeAndroid >= 112, FirefoxAndroid >= 110
- [#20379](https://github.com/emberjs/ember.js/pull/20379) [CLEANUP] Remove deprecated `@ember/error` package
- [#20380](https://github.com/emberjs/ember.js/pull/20380) [CLEANUP] Remove deprecated `assign` polyfill
- [#20381](https://github.com/emberjs/ember.js/pull/20381) [CLEANUP] Remove deprecated `@ember/string` package
- [#20382](https://github.com/emberjs/ember.js/pull/20382) [CLEANUP] Remove deprecated injection
- [#20402](https://github.com/emberjs/ember.js/pull/20402) [CLEANUP] Remove support for `ember-cli-mocha` and `ember-mocha` when generating test blueprints
- [#20406](https://github.com/emberjs/ember.js/pull/20406) [CLEANUP] Remove deprecated auto-location
- [#20413](https://github.com/emberjs/ember.js/pull/20413) [CLEANUP] Remove deprecated routing.transition-methods
- [#20416](https://github.com/emberjs/ember.js/pull/20416) [CLEANUP] Finish cleaning up `Location` interface
- [#20434](https://github.com/emberjs/ember.js/pull/20434) [BUGFIX] Fix HistoryLocation preview types
- [#20441](https://github.com/emberjs/ember.js/pull/20441) [BUGFIX] Fix for TS 5.1 nightly narrowing change
- [#20429](https://github.com/emberjs/ember.js/pull/20429) [BUGFIX] TS lint-level error in `mixins/-proxy.ts`
- [#20410](https://github.com/emberjs/ember.js/pull/20410) [BUGFIX] Add missing type declarations in the preview types for @ember/template-compilation

## v4.12.1 (June 12, 2023)

- [#20461](https://github.com/emberjs/ember.js/pull/20461) [BUGFIX] Fix cyclic module crash with engines and fastboot.

## v4.8.6 (June 12, 2023)

- [#20461](https://github.com/emberjs/ember.js/pull/20461) [BUGFIX] Fix cyclic module crash with engines and fastboot.

## v4.8.5 (May 4, 2023)

- [#20388](https://github.com/emberjs/ember.js/pull/20388) [BUGFIX] Don't run getters while applying mixins

## v4.4.5 (May 4, 2023)

- [#20388](https://github.com/emberjs/ember.js/pull/20388) [BUGFIX] Don't run getters while applying mixins

## v3.28.12 (May 4, 2023)

- [#20388](https://github.com/emberjs/ember.js/pull/20388) [BUGFIX] Don't run getters while applying mixins

## v4.12.0 (April 3, 2023)

- [#20352](https://github.com/emberjs/ember.js/pull/20352) [FEATURE] Enable generating Typescript blueprints when `isTypeScriptProject` is true without additional environment variables per [RFC #800](https://rfcs.emberjs.com/id/0800-ts-adoption-plan).
- [#20355](https://github.com/emberjs/ember.js/pull/20355) [FEATURE] Enhance the Typescript blueprint for generated services per [RFC #800](https://rfcs.emberjs.com/id/0800-ts-adoption-plan).
- [#20356](https://github.com/emberjs/ember.js/pull/20356) [FEATURE] Generate signature in Typescript component blueprints per [RFC #800](https://rfcs.emberjs.com/id/0800-ts-adoption-plan).
- [#20388](https://github.com/emberjs/ember.js/pull/20388) [BUGFIX] Don't run getters while applying mixins
- [#20398](https://github.com/emberjs/ember.js/pull/20398) [BUGFIX] Fix runloop types on TS 5.0+
- [#20385](https://github.com/emberjs/ember.js/pull/20385) [BUGFIX] Improve error for owner methods called after destroy

## v4.11.0 (February 20, 2023)

- [#20288](https://github.com/emberjs/ember.js/pull/20288) [FEATURE] Stable types for `@ember/owner`
- [#20323](https://github.com/emberjs/ember.js/pull/20323) [FEATURE] Introduce stable types for `@ember/error`
- [#20361](https://github.com/emberjs/ember.js/pull/20361) [BUGFIX] Support a `router.ts` file when generating routes
- [#20373](https://github.com/emberjs/ember.js/pull/20373) / [#20374](https://github.com/emberjs/ember.js/pull/20374) [BUGFIX] Make the type for `SafeString` public
- [#20345](https://github.com/emberjs/ember.js/pull/20345) [CLEANUP] Remove flags for released features
- [#20285](https://github.com/emberjs/ember.js/pull/20285) Update to TS v4.9

## v4.10.0 (January 11, 2023)

- [#20270](https://github.com/emberjs/ember.js/pull/20270) / [#20271](https://github.com/emberjs/ember.js/pull/20271) [FEATURE] Add new imports for `getOwner` and `setOwner` from `@ember/owner` and introduce new `@ember/routing` sub-modules as part of [RFC #821](https://rfcs.emberjs.com/id/0821-public-types).
- [#20341](https://github.com/emberjs/ember.js/pull/20341) [DEPRECATION] Deprecations for importing `htmlSafe` and `isHTMLSafe` from `@ember/string`. They have moved to `@ember/template`. From [RFC #236](https://rfcs.emberjs.com/id/0236-deprecation-ember-string).
- [#20344](https://github.com/emberjs/ember.js/pull/20344) [DEPRECATION] Deprecate @ember/string when used from ember-source; point users to add the `@ember/string` addon per [RFC #236](https://rfcs.emberjs.com/id/0236-deprecation-ember-string).
- [#20342](https://github.com/emberjs/ember.js/pull/20342) [DEPRECATION] Deprecate @ember/error per [RFC #889](https://rfcs.emberjs.com/id/0889-deprecate-ember-error).
- [#20327](https://github.com/emberjs/ember.js/pull/20327) [BUGFIX] Fix the types for the mutation-methods of `NativeArray`
- [#20283](https://github.com/emberjs/ember.js/pull/20283) [BUGFIX] revert TS `compilerOptions.target` to ES2017
- [#20253](https://github.com/emberjs/ember.js/pull/20253) Types: Add the `Resolver` type to preview types
- [#20319](https://github.com/emberjs/ember.js/pull/20319) Types: resolve services with `Owner.lookup`

## v4.9.3 (December 13, 2022)

- [#20321](https://github.com/emberjs/ember.js/pull/20321) [BUGFIX] ContainerDebugAdapter extends EmberObject

## v4.8.4 (December 13, 2022)

- [#20321](https://github.com/emberjs/ember.js/pull/20321) [BUGFIX] ContainerDebugAdapter extends EmberObject

## v4.9.2 (December 12, 2022)

- [#20296](https://github.com/emberjs/ember.js/pull/20296) Controller `queryParams` should support `readonly` arrays
- [#20318](https://github.com/emberjs/ember.js/pull/20318) Backport `Resolver` to preview types

## v4.8.3 (December 12, 2022)

- [#20296](https://github.com/emberjs/ember.js/pull/20296) Controller `queryParams` should support `readonly` arrays
- [#20318](https://github.com/emberjs/ember.js/pull/20318) Backport `Resolver` to preview types

## v4.9.1 (November 30, 2022)

- [#20284](https://github.com/emberjs/ember.js/pull/20284) [BUGFIX] remove incorrect types for deprecation functions

## v3.28.11 (November 30, 2022)

- [#20286](https://github.com/emberjs/ember.js/pull/20286) [BUGFIX] Allow class-based helpers in strict-mode

## v4.9.0 (November 28, 2022)

- [#20274](https://github.com/emberjs/ember.js/pull/20274) [BUGFIX] Add some missing types to preview types
- [#20256](https://github.com/emberjs/ember.js/pull/20256) [BUGFIX] Correct types for Ember Arrays
- [#20257](https://github.com/emberjs/ember.js/pull/20257) [BUGFIX] Fix types for `getOwner` and GlimmerComponent
- [#20233](https://github.com/emberjs/ember.js/pull/20233) [BUGFIX] Include package name in deprecation error message
- [#20235](https://github.com/emberjs/ember.js/pull/20235) [BUGFIX] Update `@types/node` for TS 4.9 issue
- [#20238](https://github.com/emberjs/ember.js/pull/20238) [BUGFIX] Update Node.js versions to match support policy
- [#20227](https://github.com/emberjs/ember.js/pull/20227) [BUGFIX] Fix unsafe internal cast for NativeArray
- [#20228](https://github.com/emberjs/ember.js/pull/20228) [BUGFIX] Remove type export for ControllerMixin
- [#20203](https://github.com/emberjs/ember.js/pull/20203) / [#20204](https://github.com/emberjs/ember.js/pull/20204) [FEATURE] Preview types: Update to Typescript 4.8

## v4.8.2 (November 3, 2022)

- [#20244](https://github.com/emberjs/ember.js/pull/20244) Add missing type for `getComponentTemplate` to preview types

## v4.8.1 (November 2, 2022)

- [CVE pending](https://emberjs.com/blog/ember-4-8-1-released) Fix a prototype pollution vulnerability in `set` and `setProperties`

## v4.4.4 (November 2, 2022)

- [CVE pending](https://emberjs.com/blog/ember-4-8-1-released) Fix a prototype pollution vulnerability in `set` and `setProperties

## v3.28.10 (November 2, 2022)

- [CVE pending](https://emberjs.com/blog/ember-4-8-1-released) Fix a prototype pollution vulnerability in `set` and `setProperties`

## v3.24.7 (November 2, 2022)

- [CVE pending](https://emberjs.com/blog/ember-4-8-1-released) Fix a prototype pollution vulnerability in `set` and `setProperties`

## v4.8.0 (October 17, 2022)

- [#20180](https://github.com/emberjs/ember.js/pull/20180) [FEATURE] Publish an opt-in preview of public types for Ember
- [#20166](https://github.com/emberjs/ember.js/pull/20166) [BUGFIX] Upgrade router_js to fix Linked list of RouteInfos contains undefined object

## v4.4.3 (October 12, 2022)

- [#20166](https://github.com/emberjs/ember.js/pull/20166) [BUGFIX] Fix missing `RouteInfo` entries

## v4.7.1 (October 12, 2022)

- [#20166](https://github.com/emberjs/ember.js/pull/20166) [BUGFIX] Fix missing `RouteInfo` entries

## v4.7.0 (September 6, 2022)

- [#20126](https://github.com/emberjs/ember.js/pull/20126) [BUGFIX] Replace Firefox detection that used a deprecated browser API

## v4.6.0 (July 25, 2022)

- [#20125](https://github.com/emberjs/ember.js/pull/20125) [BUGFIX] Replace deprecated substr() method with substring() method.

## v4.5.1 (July 25, 2022)

- [#20120](https://github.com/emberjs/ember.js/pull/20120) [BUGFIX] Adjust uniqueId() implementation to only generate valid selectors.

## v4.5.0 (June 13, 2022)

- [#20052](https://github.com/emberjs/ember.js/pull/20052) / [#20055](https://github.com/emberjs/ember.js/pull/20055) [FEATURE] Add the default helper manager to implement [RFC #0756](https://github.com/emberjs/rfcs/blob/master/text/0756-helper-default-manager.md).
- [#20053](https://github.com/emberjs/ember.js/pull/20053) [FEATURE] Expose `renderSettled` from `@ember/renderer` to enable implementation of [RFC #0785](https://github.com/emberjs/rfcs/blob/master/text/0785-remove-set-get-in-tests.md).

## v4.4.2 (June 13, 2022)

- [#20114](https://github.com/emberjs/ember.js/pull/20114) [BUGFIX] Fix generated import paths for test setup functions in addons

## v4.4.1 (May 31, 2022)

- [#20082](https://github.com/emberjs/ember.js/pull/20082) [BUGFIX] Fix blueprints publication

## v4.4.0 (May 2, 2022)

- [#19882](https://github.com/emberjs/ember.js/pull/19882) / [#20005](https://github.com/emberjs/ember.js/pull/20005) [FEATURE] Implement the `unique-id` helper per [RFC #0659](https://github.com/emberjs/rfcs/blob/master/text/0659-unique-id-helper.md).
- [#19981](https://github.com/emberjs/ember.js/pull/19981) [FEATURE] Facilitate custom test setups per [RFC #0637](https://github.com/emberjs/rfcs/blob/master/text/0637-customizable-test-setups.md).
- [#16879](https://github.com/emberjs/ember.js/pull/16879) [BUGFIX] isEmpty on nested objects
- [#17978](https://github.com/emberjs/ember.js/pull/17978) Make hasListeners public
- [#20014](https://github.com/emberjs/ember.js/pull/20014) Log `until` for deprecations

## v3.28.9 (April 19, 2022)

- [#20028](https://github.com/emberjs/ember.js/pull/20028) Fix a memory leak in the Router Service class

## v4.3.0 (March 21, 2022)

- [#20025](https://github.com/emberjs/ember.js/pull/20025) [BUGFIX] Fix a memory leak in the Router Service class
- [#19971](https://github.com/emberjs/ember.js/pull/19971) [BUGFIX] Don't serialize default Query Params on RouterService
- [#20024](https://github.com/emberjs/ember.js/pull/20024) [BUGFIX] Correctly associate props with factory and owner in FactoryManager

## v4.2.0 (February 7, 2022)

- [#19878](https://github.com/emberjs/ember.js/pull/19878) [BUGFIX] Allow class-based helpers to work in strict-mode.

## v4.1.0 (December 28, 2021)

- [#19772](https://github.com/emberjs/ember.js/pull/19772) / [#19826](https://github.com/emberjs/ember.js/pull/19826) [FEATURE] Add a `@cached` decorator per [RFC #0566](https://github.com/emberjs/rfcs/blob/af64915b5ecde010fce09309a47ee6d2447588d0/text/0566-memo-decorator.md).
- [#19471](https://github.com/emberjs/ember.js/pull/19471) / [#19834](https://github.com/emberjs/ember.js/pull/19834) [FEATURE] Add `refresh` method to the Router Service per [RFC #0631](https://github.com/emberjs/rfcs/blob/master/text/0631-refresh-method-for-router-service.md).
- [#19776](https://github.com/emberjs/ember.js/pull/19776) [FEATURE] Provide `service` export from `@ember/service` in favour of `inject` implementing [RFC #0752](https://github.com/emberjs/rfcs/blob/master/text/0752-inject-service.md).
- [#19510](https://github.com/emberjs/ember.js/pull/19510) [DEPRECATION] Deprecate auto location per [RFC #0711](https://github.com/emberjs/rfcs/blob/master/text/0711-deprecate-auto-location.md).
- [#17570](https://github.com/emberjs/ember.js/pull/17570) [BUGFIX] Passing ObjectProxy with a property size to `isEmpty` would throw assertion
- [#18269](https://github.com/emberjs/ember.js/pull/18269) [BUGFIX] Fix for when query params are using a nested value

## v4.0.1 (December 1, 2021)

- [#19858](https://github.com/emberjs/ember.js/pull/19858) [BUGFIX] Improve assert message in default store for when routes have dynamic segments but no model hook
- [#19860](https://github.com/emberjs/ember.js/pull/19860) [BUGFIX] Add model hook in route blueprint for routes with dynamic segments

## v4.0.0 (November 15, 2021)

- [#19761](https://github.com/emberjs/ember.js/pull/19761) [BREAKING] Require ember-auto-import >= 2 or higher to enable ember-source to become a v2 addon in the 4.x cycle
- [#19706](https://github.com/emberjs/ember.js/pull/19706) [BREAKING] Explicitly drop Node 10 support to match support policy.
- [BREAKING] Remove deprecated features
  - [#19838](https://github.com/emberjs/ember.js/pull/19838) [CLEANUP] Remove check to see if `ember` is defined as a Bower dependency
  - [#19846](https://github.com/emberjs/ember.js/pull/19846) [CLEANUP] Make using the "classic" edition of Ember throw
  - [#19833](https://github.com/emberjs/ember.js/pull/19833) [CLEANUP] Remove deprecated array observers
  - [#19836](https://github.com/emberjs/ember.js/pull/19836) [CLEANUP] Turn `template-only-glimmer-components` deprecation into an error
  - [#19843](https://github.com/emberjs/ember.js/pull/19843) [CLEANUP] Turn `argument-less-helper-paren-less-invocation` deprecation into an error
  - [#19749](https://github.com/emberjs/ember.js/pull/19749) [CLEANUP] Remove `deprecate-router-events` support code
  - [#19762](https://github.com/emberjs/ember.js/pull/19762) [CLEANUP] Update GlimmerVM to 0.81
    - removes deprecation of mutations during helper compute
    - removes deprecation of mutations during unknownProperty
    - `@glimmer/integration-tests`, `@glimmer/manager`, `@glimmer/validator`
      * [#1330](https://github.com/glimmerjs/glimmer-vm/pull/1330) Remove deprecated support for mutation after consumption during certain manager hooks ([@snewcomer](https://github.com/snewcomer))
    - `@glimmer/manager`
      * [#1328](https://github.com/glimmerjs/glimmer-vm/pull/1328) Remove deprecated Component Manager version 3.4 ([@nlfurniss](https://github.com/nlfurniss))
    - `@glimmer/integration-tests`, `@glimmer/manager`
      * [#1329](https://github.com/glimmerjs/glimmer-vm/pull/1329) Remove deprecated Modifier Manager version 3.13 ([@nlfurniss](https://github.com/nlfurniss))
  - [#19806](https://github.com/emberjs/ember.js/pull/19806) [CLEANUP] Drop export of built-ins, remove legacy components
  - [#19808](https://github.com/emberjs/ember.js/pull/19808) [CLEANUP] Remove the `--test-type` option from the helper blueprint
  - [#19677](https://github.com/emberjs/ember.js/pull/19677) [CLEANUP] Remove jQuery from build
  - [#19708](https://github.com/emberjs/ember.js/pull/19708) [CLEANUP] Remove class-binding-and-class-name-bindings-in-templates
  - [#19650](https://github.com/emberjs/ember.js/pull/19650) [CLEANUP] Remove deprecated mouse events
  - [#19675](https://github.com/emberjs/ember.js/pull/19675) [CLEANUP] Remove jQuery usage from ember-testing
  - [#19704](https://github.com/emberjs/ember.js/pull/19704) [CLEANUP] Remove template-compiler.registerPlugin
  - [#19707](https://github.com/emberjs/ember.js/pull/19707) [CLEANUP] Remove Application Controller Router Properties
  - [#19528](https://github.com/emberjs/ember.js/pull/19528) [CLEANUP] Remove Logger
  - [#19558](https://github.com/emberjs/ember.js/pull/19558) [CLEANUP] Remove IE11 support
  - [#19563](https://github.com/emberjs/ember.js/pull/19563) [CLEANUP] Remove internal Ember.assign usage
  - [#19636](https://github.com/emberjs/ember.js/pull/19636) [CLEANUP] Remove copy & Copyable
  - [#19638](https://github.com/emberjs/ember.js/pull/19638) [CLEANUP] Remove deprecated with
  - [#19639](https://github.com/emberjs/ember.js/pull/19639) [CLEANUP] Removes deprecated Private INVOKE API
  - [#19640](https://github.com/emberjs/ember.js/pull/19640) [CLEANUP] Remove old deprecations import path
  - [#19641](https://github.com/emberjs/ember.js/pull/19641) [CLEANUP] Remove isVisible
  - [#19642](https://github.com/emberjs/ember.js/pull/19642) [CLEANUP] Remove aliasMethod
  - [#19643](https://github.com/emberjs/ember.js/pull/19643) [CLEANUP] Remove deprecate without for and since
  - [#19644](https://github.com/emberjs/ember.js/pull/19644) [CLEANUP] Remove -in-element
  - [#19645](https://github.com/emberjs/ember.js/pull/19645) [CLEANUP] Remove tryInvoke
  - [#19646](https://github.com/emberjs/ember.js/pull/19646) [CLEANUP] Remove loc
  - [#19647](https://github.com/emberjs/ember.js/pull/19647) [CLEANUP] Remove Ember.merge
  - [#19648](https://github.com/emberjs/ember.js/pull/19648) [CLEANUP] Remove getWithDefault
  - [#19651](https://github.com/emberjs/ember.js/pull/19651) [CLEANUP] Remove LEGACY_OWNER
  - [#19652](https://github.com/emberjs/ember.js/pull/19652) [CLEANUP] Remove Globals Resolver
  - [#19653](https://github.com/emberjs/ember.js/pull/19653) [CLEANUP] Remove run and computed dot access
  - [#19654](https://github.com/emberjs/ember.js/pull/19654) [CLEANUP] Remove @ember/string methods from native prototype
  - [#19655](https://github.com/emberjs/ember.js/pull/19655) [CLEANUP] Remove meta-destruction-apis
  - [#19656](https://github.com/emberjs/ember.js/pull/19656) [CLEANUP] Remove string-based setComponentManager
  - [#19657](https://github.com/emberjs/ember.js/pull/19657) [CLEANUP] Remove hasBlock and hasBlockParams
  - [#19658](https://github.com/emberjs/ember.js/pull/19658) [CLEANUP] Remove sendAction and string action passing
  - [#19659](https://github.com/emberjs/ember.js/pull/19659) [CLEANUP] Remove renderTemplate, disconnectOutlet, render
  - [#19660](https://github.com/emberjs/ember.js/pull/19660) [CLEANUP] Remove attrs/attrs-arg-access
  - [#19661](https://github.com/emberjs/ember.js/pull/19661) [CLEANUP] Remove EMBER_EXTEND_PROTOTYPES
  - [#19663](https://github.com/emberjs/ember.js/pull/19663) [CLEANUP] Remove function prototype extensions
  - [#19665](https://github.com/emberjs/ember.js/pull/19665) [CLEANUP] Remove deprecated jQuery integration
  - [#19666](https://github.com/emberjs/ember.js/pull/19666) [CLEANUP] Remove jQuery integration in EventDispatcher
  - [#19667](https://github.com/emberjs/ember.js/pull/19667) [CLEANUP] Cleanup IE11 leftovers
  - [#19670](https://github.com/emberjs/ember.js/pull/19670) [CLEANUP] Remove .volatile()
  - [#19671](https://github.com/emberjs/ember.js/pull/19671) [CLEANUP] Remove .property()
  - [#19673](https://github.com/emberjs/ember.js/pull/19673) [CLEANUP] Remove computed deep each
  - [#19674](https://github.com/emberjs/ember.js/pull/19674) [CLEANUP] Remove ability to override computed property
  - [#19678](https://github.com/emberjs/ember.js/pull/19678) [CLEANUP] Remove window.Ember global
  - [#19695](https://github.com/emberjs/ember.js/pull/19695) [CLEANUP] Remove {{partial}}
  - [#19691](https://github.com/emberjs/ember.js/pull/19691) Add build assertion against `{{outlet named}}`
- [#19680](https://github.com/emberjs/ember.js/pull/19680) [DEPRECATION] Deprecate owner.inject per [RFC #680](https://github.com/emberjs/rfcs/blob/sn/owner-inject-deprecation/text/0680-implicit-injection-deprecation.md#1-deprecate-implicit-injection-on-target-object) and cleanup related deprecations that are `until: 4.0.0`.
- [#19649](https://github.com/emberjs/ember.js/pull/19649) / [#19692](https://github.com/emberjs/ember.js/pull/19692) [DEPRECATION] Add deprecation warning to Ember.assign implementing [RFC #750](https://github.com/emberjs/rfcs/blob/master/text/0750-deprecate-ember-assign.md).
- [#19825](https://github.com/emberjs/ember.js/pull/19825) [BUGFIX] Replace `assert.equal` in blueprints with `assert.strictEqual` to pass eslint-plugin-qunit v7 on generation
- [#19227](https://github.com/emberjs/ember.js/pull/19227) [BUGFIX] Enable global event dispatcher listeners to be lazily created fixing Passive Listener Violation in Chrome
- [#19542](https://github.com/emberjs/ember.js/pull/19542) [BUGFIX] Fix initializer test blueprints
- [#19589](https://github.com/emberjs/ember.js/pull/19589) [BUGFIX] Don’t include type-tests in build output

## v3.28.8 (December 2, 2021)

- [#19868](https://github.com/emberjs/ember.js/pull/19868) [BUGFIX] Fix a bug with the implicit injections deprecation that meant injecting a store to avoid the deprecation did not work.

## v3.28.7 (December 1, 2021)

- [#19854](https://github.com/emberjs/ember.js/pull/19854) [BUGFIX] Fix implicit injections deprecation for routes to cover previously missed cases
- [#19857](https://github.com/emberjs/ember.js/pull/19857) [BUGFIX] Improve assert message in default store for when routes have dynamic segments but no model hook

## v3.28.6 (November 4, 2021)

- [#19683](https://github.com/emberjs/ember.js/pull/19683) Ensure super.willDestroy is called correctly in Router's willDestroy

## v3.28.5 (November 3, 2021)

- [#19820](https://github.com/emberjs/ember.js/pull/19820) Fix memory leak when looking up non-instantiable objects from the owner

## v3.28.4 (October 22, 2021)

- [#19798](https://github.com/emberjs/ember.js/pull/19798) More fixes for errors while precompiling inline templates (introduced in 3.28.2)
- [glimmerjs/glimmer-vm@0.80.3](https://github.com/glimmerjs/glimmer-vm/releases/tag/v0.80.3) Improve template compilation speed regression

## v3.28.3 (October 22, 2021)

- [#19799](https://github.com/emberjs/ember.js/pull/19799) / [glimmerjs/glimmer-vm#1354](https://github.com/glimmerjs/glimmer-vm/pull/1354) Fixes for errors while precompiling inline templates (introduced in 3.28.2)

## v3.28.2 (October 21, 2021)

- [glimmerjs/glimmer-vm#1351](https://github.com/glimmerjs/glimmer-vm/pull/1351) Support lexical scope in loose mode

## v3.24.6 (October 18, 2021)

- [glimmerjs/glimmer-vm#1347](https://github.com/glimmerjs/glimmer-vm/pull/1347) Avoid using a nested WeakMap for manager instances for a given owner (makes memory leak debugging easier)

## v3.28.1 (August 30, 2021)

- [#19733](https://github.com/emberjs/ember.js/pull/19733) [BUGFIX] Ensure that using `routerService.urlFor(...)` and `routerService.recognize(...)` does not error if the router is not fully initialized

## v3.28.0 (August 9, 2021)

- [#19697](https://github.com/emberjs/ember.js/pull/19697) [BUGFIX] Ensure `deserializeQueryParam` is called for lazy routes
- [#19681](https://github.com/emberjs/ember.js/pull/19681) [BUGFIX] Restore previous hash behavior
- [#19685](https://github.com/emberjs/ember.js/pull/19685) [BUGFIX] Fix memory leak in RouterService
- [#19690](https://github.com/emberjs/ember.js/pull/19690) [BUGFIX] Deprecates String.prototype.htmlSafe targeting Ember 4.0, as intended by the original deprecation.
- [#19584](https://github.com/emberjs/ember.js/pull/19584) [BUGFIX] Ensure hash objects correctly entangle as dependencies
- [#19491](https://github.com/emberjs/ember.js/pull/19491) [BUGFIX] Fix `owner.lookup` `owner.register` behavior with `singleton: true` option
- [#19472](https://github.com/emberjs/ember.js/pull/19472) [BUGFIX] Prevent transformation of block params called `attrs`

## v3.24.5 (August 9, 2021)

- [#19685](https://github.com/emberjs/ember.js/pull/19685) Fix memory leak with `RouterService` under Chrome
- [#19683](https://github.com/emberjs/ember.js/pull/19683) Ensure `super.willDestroy` is called correctly in `Router`'s `willDestroy`

## v3.27.5 (June 10, 2021)

- [#19597](https://github.com/emberjs/ember.js/pull/19597) [BIGFIX] Fix `<LinkTo>` with nested children

## v3.27.4 (June 9, 2021)

- [#19594](https://github.com/emberjs/ember.js/pull/19594) [BUGFIX] Revert lazy hash changes
- [#19596](https://github.com/emberjs/ember.js/pull/19596) [DOC] Fix "Dormant" addon warning typo

## v3.27.3 (June 3, 2021)

- [#19565](https://github.com/emberjs/ember.js/pull/19565) [BUGFIX] Ensures that `computed` can depend on dynamic `(hash` keys
- [#19571](https://github.com/emberjs/ember.js/pull/19571) [BUGFIX] Extend `Route.prototype.transitionTo` deprecation until 5.0.0
- [#19586](https://github.com/emberjs/ember.js/pull/19586) [BUGFIX] Fix Embroider compatibility

## v3.27.2 (May 27, 2021)

- [#19511](https://github.com/emberjs/ember.js/pull/19511) / [#19548](https://github.com/emberjs/ember.js/pull/19548) [BUGFIX] Makes the (hash) helper lazy
- [#19530](https://github.com/emberjs/ember.js/pull/19530) [DOC] fix passing params to named blocks examples
- [#19536](https://github.com/emberjs/ember.js/pull/19536) [BUGFIX] Fix `computed.*` deprecation message to include the correct import path
- [#19544](https://github.com/emberjs/ember.js/pull/19544) [BUGFIX] Use explicit this in helper test blueprints
- [#19555](https://github.com/emberjs/ember.js/pull/19555) [BUGFIX] Improve class based tranform deprecation message
- [#19557](https://github.com/emberjs/ember.js/pull/19557) [BUGFIX] Refine Ember Global deprecation message
- [#19564](https://github.com/emberjs/ember.js/pull/19564) [BUGFIX] Improve computed.* and run.* deprecation message (IE11)

## v3.27.1 (May 13, 2021)

- [#19540](https://github.com/emberjs/ember.js/pull/19540) [BUGFIX] Ensure ember-testing is loaded lazily
- [#19541](https://github.com/emberjs/ember.js/pull/19541) [BUGFIX] Add missing metadata for some deprecations enabled in 3.27.0
- [#19541](https://github.com/emberjs/ember.js/pull/19541) [BUGFIX] Ensure passing `@href` to `<LinkTo>` throws an error
- [#19541](https://github.com/emberjs/ember.js/pull/19541) [CLEANUP] Consistently use https://deprecations.emberjs.com/ in deprecation URLs

## v3.27.0 (May 3, 2021)

- [#19309](https://github.com/emberjs/ember.js/pull/19309) / [#19487](https://github.com/emberjs/ember.js/pull/19487) / [#19474](https://github.com/emberjs/ember.js/pull/19474) [FEATURE] Enable `(helper` and `(modifier` helpers per [RFC #432](https://github.com/emberjs/rfcs/blob/master/text/0432-contextual-helpers.md).
- [#19382](https://github.com/emberjs/ember.js/pull/19382) / [#19430](https://github.com/emberjs/ember.js/pull/19430) [FEATURE] Remaining implementation work per [RFC #671](https://github.com/emberjs/rfcs/blob/master/text/0671-modernize-built-in-components-1.md).
- [#19457](https://github.com/emberjs/ember.js/pull/19457) / [#19463](https://github.com/emberjs/ember.js/pull/19463) / [#19464](https://github.com/emberjs/ember.js/pull/19464) / [#19467](https://github.com/emberjs/ember.js/pull/19467) [DEPRECATION] Add deprecation for the Ember Global per [RFC #706](https://github.com/emberjs/rfcs/blob/master/text/0706-deprecate-ember-global.md).
- [#19407](https://github.com/emberjs/ember.js/pull/19407) [DEPRECATION] Add deprecation for `Route#disconnectOutlet` per [RFC #491](https://github.com/emberjs/rfcs/blob/master/text/0491-deprecate-disconnect-outlet.md).
- [#19433](https://github.com/emberjs/ember.js/pull/19433) [DEPRECATION] Add deprecation for `Route#renderTemplate` per [RFC #418](https://github.com/emberjs/rfcs/blob/master/text/0418-deprecate-route-render-methods.md).
- [#19442](https://github.com/emberjs/ember.js/pull/19442) [DEPRECATION] Add deprecation for `Route#render` method per [RFC #418](https://github.com/emberjs/rfcs/blob/master/text/0418-deprecate-route-render-methods.md).
- [#19429](https://github.com/emberjs/ember.js/pull/19429) [DEPRECATION] `registerPlugin` / `unregisterPlugin` and legacy class based AST plugins (private APIs)
- [#19499](https://github.com/emberjs/ember.js/pull/19499) [DEPRECATION] Deprecate `@foo={{helper}}` per [RFC #496](https://github.com/emberjs/rfcs/blob/master/text/0496-handlebars-strict-mode.md#3-no-implicit-invocation-of-argument-less-helpers).
- [#19499](https://github.com/emberjs/ember.js/pull/19499) [BUGFIX] Update rendering engine to `@glimmer/*` 0.78.2 for fixes including:
    - `<:else>` and `<:inverse>` should be aliases (see https://github.com/glimmerjs/glimmer-vm/pull/1296)
    - Fix nested calls to helpers in dynamic helpers (see https://github.com/glimmerjs/glimmer-vm/pull/1293)
- [#19477](https://github.com/emberjs/ember.js/pull/19477) [BUGFIX] Allow `<LinkToExternal />` to override internal assertion
- [#19481](https://github.com/emberjs/ember.js/pull/19481) [BUGFIX] Export `on` from correct path
- [#19466](https://github.com/emberjs/ember.js/pull/19466) [BUGFIX] Rename private runloop functions
- [#19384](https://github.com/emberjs/ember.js/pull/19384) Use qunit-dom in helper and component test blueprints
- [#19390](https://github.com/emberjs/ember.js/pull/19390) Refactor the internal Ember loader to use the standard Ember CLI loader
- [#19441](https://github.com/emberjs/ember.js/pull/19441) Add automated publishing of weekly alpha releases to NPM
- [#19462](https://github.com/emberjs/ember.js/pull/19462) Use `positional` and `named` as the argument names in `ember g helper` blueprint

## v3.24.4 (May 3, 2021)

- [#19477](https://github.com/emberjs/ember.js/pull/19477) Allow `<LinkToExternal />` to override internal assertion

## v3.26.2 (October 4, 2021)

- [#19683](https://github.com/emberjs/ember.js/pull/19683) [BUGFIX] Use `super.willDestroy` in native classes (instead of `this._super`)

## v3.26.1 (March 24, 2021)

- [#19473](https://github.com/emberjs/ember.js/pull/19473) Update Glimmer VM to latest.

## v3.26.0 (March 22, 2021)

- [#19255](https://github.com/emberjs/ember.js/pull/19255) [DEPRECATION] Deprecate transition methods of controller and route per [RFC #674](https://github.com/emberjs/rfcs/blob/master/text/0674-deprecate-transition-methods-of-controller-and-route.md).
- [#19345](https://github.com/emberjs/ember.js/pull/19345) [DEPRECATION] Deprecate `<LinkTo>` positional arguments per [RFC #698](https://github.com/emberjs/rfcs/blob/master/text/0698-deprecate-link-to-positional-arguments.md).
- [#19346](https://github.com/emberjs/ember.js/pull/19346) [DEPRECATION] Deprecate `{{#with}}` per [RFC #445](https://github.com/emberjs/rfcs/blob/master/text/0445-deprecate-with.md)
- [#19358](https://github.com/emberjs/ember.js/pull/19358) [DEPRECATION] Deprecate implicit injections per [RFC #680](https://github.com/emberjs/rfcs/blob/master/text/0680-implicit-injection-deprecation.md)
- [#19359](https://github.com/emberjs/ember.js/pull/19359) [DEPRECATION] Deprecates old browser support policy per [RFC #685 New Browser Support Policy](https://github.com/emberjs/rfcs/blob/master/text/0685-new-browser-support-policy.md).
- [#19371](https://github.com/emberjs/ember.js/pull/19371) [DEPRECATION] Deprecate implicit `this` property lookup fallback per [RFC #308]https://github.com/emberjs/rfcs/blob/master/text/0308-deprecate-property-lookup-fallback.md
- [#19372](https://github.com/emberjs/ember.js/pull/19372) [DEPRECATION] Adds deprecations for Classic edition and optional features per [RFC #704](https://github.com/emberjs/rfcs/blob/master/text/0704-deprecate-octane-optional-features.md) and [RFC #705](https://github.com/emberjs/rfcs/blob/master/text/0705-deprecate-jquery-optional-feature.md).
- [#19373](https://github.com/emberjs/ember.js/pull/19373) [DEPRECATION] Deprecate old manager capabilities per [RFC #686](https://github.com/emberjs/rfcs/blob/master/text/0686-deprecate-old-manager-capabilities-versions.md)
- [#19374](https://github.com/emberjs/ember.js/pull/19374) [DEPRECATION] Deprecate `hasBlock` and `hasBlockParams` per [RFC #689](https://github.com/emberjs/rfcs/blob/master/text/0689-deprecate-has-block.md).
- [#19375](https://github.com/emberjs/ember.js/pull/19375) [DEPRECATION] Deprecate old class binding syntax and {{attrs}} per [RFC #691](https://github.com/emberjs/rfcs/blob/master/text/0691-deprecate-class-binding-and-class-name-bindings.md) and [RFC #690](https://github.com/emberjs/rfcs/blob/master/text/0690-deprecate-attrs-in-templates.md).
- [#19381](https://github.com/emberjs/ember.js/pull/19381) [DEPRECATION] Deprecate Array Observers per [RFC #692](https://github.com/emberjs/rfcs/blob/master/text/0692-deprecate-array-observers.md).
- [#19379](https://github.com/emberjs/ember.js/pull/19379) [CLEANUP] Refactor DataAdapter to not use observers or array observers
- [#19378](https://github.com/emberjs/ember.js/pull/19378) [BUGFIX] Fix typo in template-only-glimmer-components feature detection
- [#19298](https://github.com/emberjs/ember.js/pull/19298) [BUGFIX] Route serialize did not extract param off proxy
- [#19469](https://github.com/emberjs/ember.js/pull/19469) [BUGFIX] Prevent eager argument consumption on modifier destruction
- [#19405](https://github.com/emberjs/ember.js/pull/19405) [BUGFIX] Avoid instantiation errors when `app/router.js` injects the router service.
- [#19436](https://github.com/emberjs/ember.js/pull/19436) [BUGFIX] Support observer keys with colons

## v3.25.4 (March 24, 2021)

- [#19473](https://github.com/emberjs/ember.js/pull/19473) Update Glimmer VM to latest.

## v3.25.3 (March 7, 2021)

- [#19448](https://github.com/emberjs/ember.js/pull/19448) Ensure query params are preserved through an intermediate loading state transition
- [#19450](https://github.com/emberjs/ember.js/pull/19450) Ensure `routerService.currentRoute.name` and `routerService.currentRouteName` match during loading states


## v3.25.2 (March 7, 2021)

- [#19389](https://github.com/emberjs/ember.js/pull/19389) Removes template ids
- [#19395](https://github.com/emberjs/ember.js/pull/19395) [BUGFIX] Ensure `<LinkTo>` can return a valid `href` most of the time
- [#19396](https://github.com/emberjs/ember.js/pull/19396) [BUGFIX] Revert deprecation of htmlSafe and isHTMLSafe
- [#19397](https://github.com/emberjs/ember.js/pull/19397) [BUGFIX] Force building Ember bundles when `targets.node` is defined
- [#19399](https://github.com/emberjs/ember.js/pull/19399) [DOC] Update ArrayProxy Documentation
- [#19412](https://github.com/emberjs/ember.js/pull/19412) / [#19416](https://github.com/emberjs/ember.js/pull/19416) [BUGFIX] Update Glimmer VM to 0.77 (fix dynamic helpers/modifiers)


## v3.25.1 (February 10, 2021)

- [#19326](https://github.com/emberjs/ember.js/pull/19326) / [#19387](https://github.com/emberjs/ember.js/pull/19387) [BUGFIX] Fix usage of `<LinkTo />` prior to routing (e.g. component rendering tests)

## v3.25.0 (February 08, 2021)

- [#19302](https://github.com/emberjs/ember.js/pull/19302) / [#19306](https://github.com/emberjs/ember.js/pull/19306) / [#19319](https://github.com/emberjs/ember.js/pull/19319) [FEATURE] Implement the [Handlebars Strict Mode RFC](https://github.com/emberjs/rfcs/blob/master/text/0496-handlebars-strict-mode.md).
- [#19318](https://github.com/emberjs/ember.js/pull/19318) [FEATURE] Implement the [Named Blocks RFC](https://github.com/emberjs/rfcs/blob/master/text/0460-yieldable-named-blocks.md).
- [#19339](https://github.com/emberjs/ember.js/pull/19339) [DEPRECATION] Deprecate importing `htmlSafe` and `isHTMLSafe` from `@ember/string` per the [Deprecate Ember String RFC](https://github.com/emberjs/rfcs/blob/master/text/0236-deprecation-ember-string.md).
- [#19320](https://github.com/emberjs/ember.js/pull/19320) / [#19317](https://github.com/emberjs/ember.js/pull/19317) / [#19297](https://github.com/emberjs/ember.js/pull/19297) / [#19293](https://github.com/emberjs/ember.js/pull/19293) / [#19278](https://github.com/emberjs/ember.js/pull/19278) / [#19275](https://github.com/emberjs/ember.js/pull/19275) / [#19363](https://github.com/emberjs/ember.js/pull/19363) Update rendering engine to `@glimmer/*` 0.74.2 for various features and bugfixes including ensuring `{{component.name}}` works with implicit this fallback
- [#18148](https://github.com/emberjs/ember.js/pull/18148) [BUGFIX] Fix empty `htmlSafe` string to be treated as falsy
- [#19365](https://github.com/emberjs/ember.js/pull/19365) [BUGFIX] Remove non-existing re-export from helper-addon blueprint
- [#19370](https://github.com/emberjs/ember.js/pull/19370) [BUGFIX] Update glimmer-vm to prevent errors for older inline precompilation
- [#19351](https://github.com/emberjs/ember.js/pull/19351) [BUGFIX] Ensure locals do not clobber components of the same name
- [#19336](https://github.com/emberjs/ember.js/pull/19336) [BUGFIX] Ensure Component Lookup Is Well Formed
- [#19338](https://github.com/emberjs/ember.js/pull/19338) [BUGFIX] Add missing `deprecate` options (`for` + `since`)
- [#19342](https://github.com/emberjs/ember.js/pull/19342) [BUGFIX] Fix misleading LinkTo error message

## v3.24.3 (March 7, 2021)

- [#19448](https://github.com/emberjs/ember.js/pull/19448) Ensure query params are preserved through an intermediate loading state transition
- [#19450](https://github.com/emberjs/ember.js/pull/19450) Ensure `routerService.currentRoute.name` and `routerService.currentRouteName` match during loading states
- [#19395](https://github.com/emberjs/ember.js/pull/19395) [BUGFIX] Ensure `<LinkTo>` can return a valid `href` most of the time
- [#19397](https://github.com/emberjs/ember.js/pull/19397) [BUGFIX] Force building Ember bundles when `targets.node` is defined


## v3.24.2 (February 10, 2021)

- [#19326](https://github.com/emberjs/ember.js/pull/19326) / [#19387](https://github.com/emberjs/ember.js/pull/19387) [BUGFIX] Fix usage of `<LinkTo />` prior to routing (e.g. component rendering tests)

## v3.24.1 (January 14, 2021)

- [#19337](https://github.com/emberjs/ember.js/pull/19337) [BUGFIX] Ensure query param only `<LinkTo />` are properly scoped in engines

## v3.24.0 (December 28, 2020)

- [#19224](https://github.com/emberjs/ember.js/pull/19224) [FEATURE] Add `{{page-title}}` helper to route template blueprints to implement [RFC #0654](https://github.com/emberjs/rfcs/blob/master/text/0645-add-ember-page-title-addon.md).
- [#19133](https://github.com/emberjs/ember.js/pull/19133) [FEATURE / DEPRECATION] Add new options to `deprecate()` for `for` and `since` and deprecate using `deprecate()` without those options per the [Deprecation Staging RFC](https://github.com/emberjs/rfcs/blob/master/text/0649-deprecation-staging.md).
- [#19211](https://github.com/emberjs/ember.js/pull/19211) [DEPRECATION] Deprecate `Ember.String.loc` and `{{loc}}` per the [Deprecate Ember String RFC](https://github.com/emberjs/rfcs/blob/master/text/0236-deprecation-ember-string.md).
- [#19234](https://github.com/emberjs/ember.js/pull/19234) [DEPRECATION] Deprecate String Prototype extensions per the [Deprecate Ember String RFC](https://github.com/emberjs/rfcs/blob/master/text/0236-deprecation-ember-string.md).
- [#19254](https://github.com/emberjs/ember.js/pull/19254) [DEPRECATION] Deprecate tryInvoke to implement the [Deprecate `tryInvoke` RFC](https://github.com/emberjs/rfcs/blob/master/text/0673-deprecate-tryinvoke.md).
- [#19080](https://github.com/emberjs/ember.js/pull/19080) [BUGFIX] Lazily setup the router in non-application tests
- [#19253](https://github.com/emberjs/ember.js/pull/19253) [BUGFIX] Correct return of getComponentTemplate from null to undefined to align with original RFC (#481)
- [#19223](https://github.com/emberjs/ember.js/pull/19223) [BUGFIX] `<LinkTo>` should link within the engine when used inside one
- [#19280](https://github.com/emberjs/ember.js/pull/19280) [BUGFIX] Ensure aliases cause recompute of a computed property when used with `@each` in the dependent keys of that property
- [#19196](https://github.com/emberjs/ember.js/pull/19196) [CLEANUP] Remove EMBER_GLIMMER_IN_ELEMENT feature flag
- [#19204](https://github.com/emberjs/ember.js/pull/19204) [CLEANUP] Remove EMBER_CACHE_API feature flag
- [#19206](https://github.com/emberjs/ember.js/pull/19206) [CLEANUP] Remove EMBER_ROUTING_MODEL_ARG feature flag
- [#19229](https://github.com/emberjs/ember.js/pull/19229) [CLEANUP] Remove the EMBER_GLIMMER_SET_COMPONENT_TEMPLATE feature flag
- [#19238](https://github.com/emberjs/ember.js/pull/19238) [CLEANUP] Removes the `expandLocalLookup` API
- [#19258](https://github.com/emberjs/ember.js/pull/19258) / [#19261](https://github.com/emberjs/ember.js/pull/19261) / [#19267](https://github.com/emberjs/ember.js/pull/19267) Update rendering engine to 0.65.0

## v3.23.1 (November 23, 2020)

- [#19282](https://github.com/emberjs/ember.js/pull/19282) [BUGFIX] Issue deprecations (instead of assertions) for tracked mutation in constructor during rendering

## v3.23.0 (November 16, 2020)

- [#19160](https://github.com/emberjs/ember.js/pull/19160) / [#19182](https://github.com/emberjs/ember.js/pull/19182) [FEATURE] Implements the helper manager feature specified in the [Helper Managers RFC](https://github.com/emberjs/rfcs/blob/master/text/0625-helper-managers.md).
- [#19171](https://github.com/emberjs/ember.js/pull/19171) / [#19182](https://github.com/emberjs/ember.js/pull/19182) [FEATURE] Implements `invokeHelper` from the [JavaScript Helper Invocation API RFC](https://github.com/emberjs/rfcs/blob/master/text/0626-invoke-helper.md).
- [#19148](https://github.com/emberjs/ember.js/pull/19148) / [#19119](https://github.com/emberjs/ember.js/pull/19119) Update rendering engine to `@glimmer/*` 0.62.1
- [#19122](https://github.com/emberjs/ember.js/pull/19122) [BUGFIX] Prevents dynamic invocations of string values when referenced directly in angle brackets
- [#19136](https://github.com/emberjs/ember.js/pull/19136) [BUGFIX] Update router microlib to improve Transition related debugging
- [#19173](https://github.com/emberjs/ember.js/pull/19173) [BUGFIX] Enforce usage of `capabilities` generation.
- [#19236](https://github.com/emberjs/ember.js/pull/19236) [BUGFIX] Only serialize query params once on activeTransition
- [#19250](https://github.com/emberjs/ember.js/pull/19250) [BUGFIX] Prevents infinite rerenders when errors occur during render
- [#19249](https://github.com/emberjs/ember.js/pull/19249) [BUGFIX] Fix bugs in query params with intermediate transitions
- [#19142](https://github.com/emberjs/ember.js/pull/19142) [BUGFIX] Fix App booting before DOM ready without jQuery
- [#19198](https://github.com/emberjs/ember.js/pull/19198) / [#19232](https://github.com/emberjs/ember.js/pull/19232) [BUGFIX] Restores the shadowed property set behavior
- [#19221](https://github.com/emberjs/ember.js/pull/19221) [BUGFIX] Ensure fn and (mut) work with falsy values
- [#19213](https://github.com/emberjs/ember.js/pull/19213) [BUGFIX] Update rendering engine to improve error ergonomics.

## v3.22.2 (November 25, 2020)

- [#19282](https://github.com/emberjs/ember.js/pull/19282) [BUGFIX] Issue deprecations (instead of assertions) for tracked mutation in constructor during rendering
- [#19263](https://github.com/emberjs/ember.js/pull/19263) [BUGFIX] Remove `@dependentKeyCompat` assertion

## v3.22.1 (November 10, 2020)

- [#19193](https://github.com/emberjs/ember.js/pull/19193) [BUGFIX] Ensure `@ember/component` user lifecycle hooks are untracked
- [#19197](https://github.com/emberjs/ember.js/pull/19197) [BUGFIX] Restore the shadowed property set behavior
- [#19199](https://github.com/emberjs/ember.js/pull/19199) [BUGFIX] Cleans up the DebugRenderTree more thoroughly on errors
- [#19249](https://github.com/emberjs/ember.js/pull/19249) [BUGFIX] Fix issues with query params during intermediate transitions

## v3.22.0 (October 5, 2020)

- [#19062](https://github.com/emberjs/ember.js/pull/19062) / [#19068](https://github.com/emberjs/ember.js/pull/19068) [FEATURE] Add @ember/destroyable feature from the [Destroyables RFC](https://github.com/emberjs/rfcs/blob/master/text/0580-destroyables.md).
- [#18984](https://github.com/emberjs/ember.js/pull/18984) / [#19067](https://github.com/emberjs/ember.js/pull/19067) [FEATURE] Add low-level Cache API per [Autotracking Memoization RFC](https://github.com/emberjs/rfcs/blob/master/text/0615-autotracking-memoization.md)
- [#19086](https://github.com/emberjs/ember.js/pull/19086) [FEATURE] Pass transition object to activate/deactivate hooks and events
- [#19094](https://github.com/emberjs/ember.js/pull/19094) [BUGFIX] Fix RouterService#isActive() to work with tracking
- [#19163](https://github.com/emberjs/ember.js/pull/19163) [BUGFIX] Use args proxy for modifier managers.
- [#19170](https://github.com/emberjs/ember.js/pull/19170) [BUGFIX] Make modifier manager 3.22 accept the resolved value directly.
- [#19124](https://github.com/emberjs/ember.js/pull/19124) [BUGFIX] Fix rendering engine usage within a `fastboot` sandbox

## v3.21.3 (September 30, 2020)

- [#19172](https://github.com/emberjs/ember.js/pull/19172) [BUGFIX] Ensures that tracked properties initialize property

## v3.21.2 (September 30, 2020)

- [#19138](https://github.com/emberjs/ember.js/pull/19138) [BUGFIX] Fix tag cycles in query parameters
- [#19164](https://github.com/emberjs/ember.js/pull/19164) [BUGFIX] Entangles custom EmberArray implementations when accessed with `Ember.get`

## v3.21.1 (August 28, 2020)

- [#19106](https://github.com/emberjs/ember.js/pull/19106) [BUGFIX] Ensure `destroy` methods on `CoreObject` are invoked.
- [#19111](https://github.com/emberjs/ember.js/pull/19111) [BUGFIX] Fixes `ArrayProxy` length reactivity.

## v3.21.0 (August 24, 2020)

- [#18993](https://github.com/emberjs/ember.js/pull/18993) [DEPRECATION] Deprecate `getWithDefault` per [RFC #554](https://github.com/emberjs/rfcs/blob/master/text/0554-deprecate-getwithdefault.md).
- [#19087](https://github.com/emberjs/ember.js/pull/19087) [BUGFIX] Generated initializer tests no longer causes a deprecation warning
- [#17571](https://github.com/emberjs/ember.js/pull/17571) [BUGFIX] Avoid tampering `queryParam` argument in RouterService#isActive

## v3.20.6 (November 11, 2020)

- [#19138](https://github.com/emberjs/ember.js/pull/19138) [BUGFIX] Fix tag cycles in query parameters
- [#19158](https://github.com/emberjs/ember.js/pull/19158) [BUGFIX] `RouterService#isActive()` now consumes `currentURL` to 3.20
- [#19164](https://github.com/emberjs/ember.js/pull/19164) [BUGFIX] Entangles custom EmberArray implementations when accessed
- [#19172](https://github.com/emberjs/ember.js/pull/19172) / [#19197](https://github.com/emberjs/ember.js/pull/19197) [BUGFIX] Ensures that tracked properties initialize property
- [#19178](https://github.com/emberjs/ember.js/pull/19178) [BUGFIX] Allow computeds to have cycles in their deps

## v3.20.5 (August 28, 2020)

- [#19106](https://github.com/emberjs/ember.js/pull/19106) [BUGFIX] Ensure `destroy` methods on `CoreObject` are invoked.
- [#19111](https://github.com/emberjs/ember.js/pull/19111) [BUGFIX] Fixes `ArrayProxy` length reactivity.

## v3.20.4 (August 11, 2020)

- [#19047](https://github.com/emberjs/ember.js/pull/19047) Ensure `inject-babel-helpers` plugin can be parallelized
- [#19089](https://github.com/emberjs/ember.js/pull/19089) Update rendering engine to improve immediate encoding performance
- [#19082](https://github.com/emberjs/ember.js/pull/19082) Simplify mixin application
- [#19088](https://github.com/emberjs/ember.js/pull/19088) Simplify factory instantiation from the container
- [#19028](https://github.com/emberjs/ember.js/pull/19028) Ensure setter CP's with dependent keys on curly components can be two way bound
- [#19077](https://github.com/emberjs/ember.js/pull/19077) Simplify `get` and improve `computed` caching scheme.
- [#19065](https://github.com/emberjs/ember.js/pull/19065) / [#19072](https://github.com/emberjs/ember.js/pull/19072) - Updates GlimmerVM to improve internal destroyable system and improve tag / revision computation.
- [#19081](https://github.com/emberjs/ember.js/pull/19081) Reduces template compilation size in production builds.

## v3.20.3 (July 30, 2020)

- [#19048](https://github.com/emberjs/ember.js/pull/19048) [BUGFIX] Update `router.js` to ensure `transition.abort` works for query param only transitions
- [#19059](https://github.com/emberjs/ember.js/pull/19059) [BUGFIX] Prevent `<base target="_parent">` from erroring in `HistoryLocation`
- [#19060](https://github.com/emberjs/ember.js/pull/19060) [BUGFIX] Update rendering engine to `@glimmer/*` 0.55.1
- [#19063](https://github.com/emberjs/ember.js/pull/19063) [DOC] Fix missing docs for `{{#in-element}}`

## v3.20.2 (July 26, 2020)

- [#19056](https://github.com/emberjs/ember.js/pull/19056) Update Glimmer rendering engine to 0.54.2. Fixes an issue with (private for now) destroyables work to enable the destroyables polyfill to work more appropriately.

## v3.20.1 (July 13, 2020)

- [#19040](https://github.com/emberjs/ember.js/pull/19040) [BUGFIX] Fix a memory leak that occurred when changing the array passed to `{{each}}`

## v3.20.0 (July 13, 2020)

- [#18867](https://github.com/emberjs/ember.js/pull/18867) / [#18927](https://github.com/emberjs/ember.js/pull/18927) / [#18928](https://github.com/emberjs/ember.js/pull/18928) [FEATURE] [Promote `{{in-element}}` to public API](https://github.com/emberjs/rfcs/blob/master/text/0287-promote-in-element-to-public-api.md) RFC.
- [#19025](https://github.com/emberjs/ember.js/pull/19025) [BUGFIX] Updates Glimmer VM to 0.54.0
- [#19021](https://github.com/emberjs/ember.js/pull/19021) [BUGFIX] Disallow null/undefined targets in `in-element`.
- [#19023](https://github.com/emberjs/ember.js/pull/19023) [BUGFIX] Don't access properties during init unless required to prevent unnecessary rendering invalidations.
- [#18997](https://github.com/emberjs/ember.js/pull/18997) [BUGFIX] Fix components `<Input>` and `<Textarea>` to work with native class actions correctly.
- [#18859](https://github.com/emberjs/ember.js/pull/18859) [BUGFIX] Fix transitionTo with scoped aliased queryParam.
- [#18961](https://github.com/emberjs/ember.js/pull/18961) [BUGFIX] Remove assertions for updating auto-tracked state without Ember.set / this.set

## v3.19.0 (May 26, 2020)

- [#18982](https://github.com/emberjs/ember.js/pull/18982) / [#18913](https://github.com/emberjs/ember.js/pull/18913) [BUGFIX] Update rendering engine to latest version.
  - Add a compile time error when passing arguments to regular HTML elements (e.g. `<a @foo=`)
  - Fix: Rerender an `{{#each`s block only when the specific item has changed
- [#18958](https://github.com/emberjs/ember.js/pull/18958) [BUGFIX] Ensure AST transforms using `in-element` work properly.
- [#18960](https://github.com/emberjs/ember.js/pull/18960) [BUGFIX] More assertions for Application lifecycle methods
- [#18919](https://github.com/emberjs/ember.js/pull/18919) [BUGFIX] Add error for modifier manager without capabilities.
- [#18828](https://github.com/emberjs/ember.js/pull/18828) [BUGFIX] Prepend 'TODO: ' to 'Replace this with your real tests' comments in generated tests
- [#18353](https://github.com/emberjs/ember.js/pull/18353) [BUGFIX] Improve `fn` & `on` undefined callback message
- [#18824](https://github.com/emberjs/ember.js/pull/18824) [CLEANUP] Remove deprecated private `window.ENV`
- [#18826](https://github.com/emberjs/ember.js/pull/18826) [CLEANUP] Remove deprecated private `_setComputedDecorator`
- [#18832](https://github.com/emberjs/ember.js/pull/18832) [CLEANUP] Remove deprecated private`implicit-modifier-manager-capabilities`
- [#18839](https://github.com/emberjs/ember.js/pull/18839) [CLEANUP] Updates the VM and autotracking APIs

## v3.18.1 (May 4, 2020)

- [#18941](https://github.com/emberjs/ember.js/pull/18941) [BUGFIX] Update rendering engine to latest version.
  - Reduce template size growth to near 3.16 levels (still ~ 3% higher than 3.16)
  - Ensures destroyable items added to an `{{#each` after initial render are invoked properly
  - Fixes an issue with key collisions in `{{#each`

## v3.18.0 (April 14, 2020)

- [#18869](https://github.com/emberjs/ember.js/pull/18869) / [#18861](https://github.com/emberjs/ember.js/pull/18861) / [#18811](https://github.com/emberjs/ember.js/pull/18811) [BUGFIX] Update to glimmer-vm 0.50.2.
- [#18807](https://github.com/emberjs/ember.js/pull/18807) [BUGFIX] Do not error (RE: `elementId` changing) if `elementId` is not changed
- [#18774](https://github.com/emberjs/ember.js/pull/18774) [BUGFIX] Suspend observer deactivation during property changes
- [#18785](https://github.com/emberjs/ember.js/pull/18785) Drop Node 8 support.

## v3.17.3 (April 2, 2020)

- [#18857](https://github.com/emberjs/ember.js/pull/18857) Pass value through to `PROPERTY_DID_CHANGE` to avoid calling `get` when setting values for computed props

## v3.17.2 (March 26, 2020)

- [#18837](https://github.com/emberjs/ember.js/pull/18837) [BUGFIX] Fix `willDestroy` on class based helpers.
- [#18838](https://github.com/emberjs/ember.js/pull/18838) [BUGFIX] Ensure destructors (e.g. `will-destroy` modifier, `@ember/component`s with `willDestroyElement`, etc) fire when used within an `{{#each}}` block.

## v3.17.1 (March 22, 2020)

- [#18809](https://github.com/emberjs/ember.js/pull/18809) [BUGFIX] Do not error (RE: `elementId` changing) if `elementId` is not changed
- [#18831](https://github.com/emberjs/ember.js/pull/18831) [BUGFIX] Fix transpilation issues (e.g. `_createSuper` is not a function) when used with Babel 7.9.0+.

## v3.17.0 (March 4, 2020)

- [#18688](https://github.com/emberjs/ember.js/pull/18688) / [#18621](https://github.com/emberjs/ember.js/pull/18621) / [#18714](https://github.com/emberjs/ember.js/pull/18714) / [#18743](https://github.com/emberjs/ember.js/pull/18743) / [#18762](https://github.com/emberjs/ember.js/pull/18762) Upgrades Glimmer VM to 0.47.9, fixes ignored `checked` attribute on `input`, fixes using `array` and `hash` helper together
- [#18741](https://github.com/emberjs/ember.js/pull/18741) [BUGFIX] Don't setup mandatory setters on array indexes
- [#18767](https://github.com/emberjs/ember.js/pull/18767) [BUGFIX] Fix observer leaks
- [#18770](https://github.com/emberjs/ember.js/pull/18770) [BUGFIX] Make ArrayProxy Lazy
- [#18780](https://github.com/emberjs/ember.js/pull/18780) [BUGFIX] Fix ownerInjection when used to create services directly
- [#18742](https://github.com/emberjs/ember.js/pull/18742) [BUGFIX] Fix setDiff computed macro used within glimmer component
- [#18727](https://github.com/emberjs/ember.js/pull/18727) [BUGFIX] Avoid breaking {{-in-element}} usage
- [#18728](https://github.com/emberjs/ember.js/pull/18728) [BUGFIX] Fix `{{#-in-element}}` double-clearing issue
- [#18703](https://github.com/emberjs/ember.js/pull/18703) [BUGFIX] Correctly links ArrayProxy tags to `arrangedContent`
- [#18707](https://github.com/emberjs/ember.js/pull/18707) [BUGFIX] Fixes tag chaining on Proxy mixins
- [#18708](https://github.com/emberjs/ember.js/pull/18708) [BUGFIX] Ensures the arg proxy works with `get`
- [#18694](https://github.com/emberjs/ember.js/pull/18694) [BUGFIX] Ensure tag updates are buffered, remove error message
- [#18709](https://github.com/emberjs/ember.js/pull/18709) [BUGFIX] Fix `this` in `@tracked` initializer

## v3.16.10 (August 5, 2020)

- [#19028](https://github.com/emberjs/ember.js/pull/19028) [BUGFIX] Ensure setter CP's with dependent keys on curly components can be two way bound

## v3.16.9 (July 29, 2020)

- [#19001](https://github.com/emberjs/ember.js/pull/19001) [BUGFIX] Invoke methods correctly in `TextSupport` `sendAction`
- [#19023](https://github.com/emberjs/ember.js/pull/19023) [BUGFIX] Avoid over eager property access during `init`
- [#19048](https://github.com/emberjs/ember.js/pull/19048) [BUGFIX] Update `router.js` to ensure `transition.abort` works for query param only transitions
- [#19057](https://github.com/emberjs/ember.js/pull/19057) [BUGFIX] Parallelize `inject-babel-helpers` plugin
- [#19059](https://github.com/emberjs/ember.js/pull/19059) [BUGFIX] Prevent `<base target="_parent">` from erroring in HistoryLocation

## v3.16.8 (April 24, 2020)

- [#18879](https://github.com/emberjs/ember.js/pull/18879) Ensure errors thrown during component construction do not cause (unrelated) errors during application teardown (fixes a common issue when using `setupOnerror` with components asserting during `constructor`/`init`/`didInsertElement`).

## v3.16.7 (April 13, 2020)

- [#18854](https://github.com/emberjs/ember.js/pull/18854) Pass value through to `PROPERTY_DID_CHANGE` to avoid calling `get` when setting values for computed props

## v3.16.6 (March 24, 2020)

- [#18835](https://github.com/emberjs/ember.js/pull/18835) [BUGFIX] Make `ArrayProxy` Lazy.

## v3.16.5 (March 23, 2020)

- [#18831](https://github.com/emberjs/ember.js/pull/18831) [BUGFIX] Fix transpilation issues (e.g. `_createSuper` is not a function) when used with Babel 7.9.0+.

## v3.16.4 (March 22, 2020)

- [#18741](https://github.com/emberjs/ember.js/pull/18741) [BUGFIX] Don't setup mandatory setters on array indexes
- [#18742](https://github.com/emberjs/ember.js/pull/18742) [BUGFIX] Fix `setDiff` computed macro used within glimmer component
- [#18767](https://github.com/emberjs/ember.js/pull/18767) [BUGFIX] Fix `observer` leaks.
- [#18780](https://github.com/emberjs/ember.js/pull/18780) [BUGFIX] Fix `owner.ownerInjection()` when used to create services directly
- [#18810](https://github.com/emberjs/ember.js/pull/18810) [BUGFIX] Do not error (RE: elementId changing) if elementId is not changed

## v3.16.3 (February 18, 2020)

- [#18730](https://github.com/emberjs/ember.js/pull/18730) Workaround for the Glimmer VM bug which encodes/decodes integer literals correctly.

## v3.16.2 (February 10, 2020)

- [#18721](https://github.com/emberjs/ember.js/pull/18721) [BUGFIX] Backport autotracking bugfixes
- [#18729](https://github.com/emberjs/ember.js/pull/18729) [BUGFIX] Remove deprecation for instantiation of new singleton instances (e.g. a service) during teardown (originally added in 3.16.1 by [#18717](https://github.com/emberjs/ember.js/pull/18717)).

## v3.16.1 (January 31, 2020)

- [#18691](https://github.com/emberjs/ember.js/pull/18691) [BUGFIX] Updated `component` and `helper` blueprints to use `import { hbs } from 'ember-cli-htmlbars'`.
- [#18698](https://github.com/emberjs/ember.js/pull/18698) [BUGFIX] Ensure tag updates are buffered
- [#18713](https://github.com/emberjs/ember.js/pull/18713) [BUGFIX] Update `@glimmer/syntax` to ensure that using `<Title />`, `<Script />`, and `<Style />` does not error.
- [#18717](https://github.com/emberjs/ember.js/pull/18717) [BUGFIX] Ensure instantiation cannot happen after destruction.
- [#18720](https://github.com/emberjs/ember.js/pull/18720) [BUGFIX] Ensure correct `@ember/edition-utils` is used (1.2.0).

## v3.16.0 (January 20, 2020)

- [#18436](https://github.com/emberjs/ember.js/pull/18436) [DEPRECATION] Deprecate globals resolver per [RFC #331](https://github.com/emberjs/rfcs/blob/master/text/0331-deprecate-globals-resolver.md).
- [#18668](https://github.com/emberjs/ember.js/pull/18668) [BUGFIX] Fix some scenarios where the "backtracking assertion" would be thrown by consuming tags after fully getting values
- [#18651](https://github.com/emberjs/ember.js/pull/18651) [BUGFIX] Async functions were incorrectly treated as falsey in template conditionals

## v3.15.0 (December 9, 2019)

- [#17948](https://github.com/emberjs/ember.js/pull/17948) [DEPRECATION] Deprecate `Component#isVisible` per [RFC #324](https://github.com/emberjs/rfcs/blob/master/text/0324-deprecate-component-isvisible.md).
- [#18491](https://github.com/emberjs/ember.js/pull/18491) [DEPRECATION] Deprecate `{{partial}}` per [RFC #449](https://github.com/emberjs/rfcs/blob/master/text/0449-deprecate-partials.md).
- [#18441](https://github.com/emberjs/ember.js/pull/18441) [DEPRECATION] Deprecate use of window.ENV to configure boot options
- [#18554](https://github.com/emberjs/ember.js/pull/18554) [BREAKING BUGFIX] Adds autotracking transaction
- [#17834](https://github.com/emberjs/ember.js/pull/17834) [BUGFIX] Prevents autotracking ArrayProxy creation

## v3.14.3 (December 3, 2019)

- [#18582](https://github.com/emberjs/ember.js/pull/18582) [BUGFIX] Ensure `loader.js` is transpiled to the applications specified targets (from `config/targets.js`).

## v3.14.2 (November 20, 2019)

- [#18539](https://github.com/emberjs/ember.js/pull/18539) / [#18548](https://github.com/emberjs/ember.js/pull/18548) [BUGFIX] Fix issues with the new APIs to be used by ember-inspector for building the "component's tree" including `@glimmer/component`.
- [#18549](https://github.com/emberjs/ember.js/pull/18549) [BUGFIX] Add component reference to the mouse event handler deprecation warnings.

## v3.14.1 (October 30, 2019)

- [#18244](https://github.com/emberjs/ember.js/pull/18244) [BUGFIX] Fix query param assertion when using the router services `transitionTo` to redirect _during_ an existing transition.

## v3.14.0 (October 29, 2019)

- [#18345](https://github.com/emberjs/ember.js/pull/18345) / [#18363](https://github.com/emberjs/ember.js/pull/18363) [FEATURE] Implement the [Provide @model named argument to route templates](https://github.com/emberjs/rfcs/blob/master/text/0523-model-argument-for-route-templates.md) RFC.
- [#18458](https://github.com/emberjs/ember.js/pull/18458) [BUGFIX] Using query params helper outside of link-to
- [#18429](https://github.com/emberjs/ember.js/pull/18429) [BUGFIX] Fix incorrect error message for octane features.
- [#18415](https://github.com/emberjs/ember.js/pull/18415) [BUGFIX] Fix hbs import path in test blueprint.
- [#18387](https://github.com/emberjs/ember.js/pull/18387) [BUGFIX] Ensure `updateComponent` is fired consistently
- [#18381](https://github.com/emberjs/ember.js/pull/18381) Drop Node 6 and 11 support.
- [#18410](https://github.com/emberjs/ember.js/pull/18410) Use ember-cli-htmlbars for inline precompilation if possible.

## v3.13.4 (October 29,2019)

- [#18476](https://github.com/emberjs/ember.js/pull/18476) [BUGFIX] Ensure model can be observed by sync observers.
- [#18477](https://github.com/emberjs/ember.js/pull/18477) [BUGFIX] Allows @each to work with arrays that contain falsy values.
- [#18500](https://github.com/emberjs/ember.js/pull/18500) [BUGFIX] Remove requirement for disabling jquery-integration in Octane.

## v3.13.3 (October 8, 2019)

- [#18462](https://github.com/emberjs/ember.js/pull/18462) [BUGFIX] Prevents observer re-entry.

## v3.13.2 (September 25, 2019)

- [#18429](https://github.com/emberjs/ember.js/pull/18429) [BUGFIX] Fix incorrect error message when opting into using Octane, and missing optional features.

## v3.13.1 (September 23, 2019)

- [#18273](https://github.com/emberjs/ember.js/pull/18273) [BUGFIX] Fix issues with SSR rehydration of <title>.
- [#18418](https://github.com/emberjs/ember.js/pull/18418) / [#18419](https://github.com/emberjs/ember.js/pull/18419) [BUGFIX] Require Octane features when using Octane preview.

## v3.13.0 (September 19, 2019)

- [#16366](https://github.com/emberjs/ember.js/pull/16366) / [#16903](https://github.com/emberjs/ember.js/pull/16903) / [#17572](https://github.com/emberjs/ember.js/pull/17572) / [#17682](https://github.com/emberjs/ember.js/pull/17682) / [#17765](https://github.com/emberjs/ember.js/pull/17765) / [#17751](https://github.com/emberjs/ember.js/pull/17751) / [#17835](https://github.com/emberjs/ember.js/pull/17835) / [#18059](https://github.com/emberjs/ember.js/pull/18059) / [#17951](https://github.com/emberjs/ember.js/pull/17951) / [#18069](https://github.com/emberjs/ember.js/pull/18069) / [#18074](https://github.com/emberjs/ember.js/pull/18074) / [#18073](https://github.com/emberjs/ember.js/pull/18073) / [#18091](https://github.com/emberjs/ember.js/pull/18091) / [#18186](https://github.com/emberjs/ember.js/pull/18186) / [#18223](https://github.com/emberjs/ember.js/pull/18223) / [#18358](https://github.com/emberjs/ember.js/pull/18358) / [#18266](https://github.com/emberjs/ember.js/pull/18266) [FEATURE] Implement the [Tracked Properties](https://github.com/emberjs/rfcs/blob/master/text/0410-tracked-properties.md) and [Tracked Property Updates](https://github.com/emberjs/rfcs/blob/master/text/0478-tracked-properties-updates.md) RFCs.
- [#18158](https://github.com/emberjs/ember.js/pull/18158) / [#18203](https://github.com/emberjs/ember.js/pull/18203) / [#18198](https://github.com/emberjs/ember.js/pull/18198) / [#18190](https://github.com/emberjs/ember.js/pull/18190) / [#18394](https://github.com/emberjs/ember.js/pull/18394) [FEATURE] Implement the [Component Templates Co-location](https://github.com/emberjs/rfcs/blob/master/text/0481-component-templates-co-location.md) RFC, including the setComponentTemplate(), getComponentTemplate() and templateOnlyComponent() APIs. Note that while these low-level APIs are enabled, the co-location feature is only enabled in Octane apps as of this release. This restriction will be removed in a future version.
- [#18241](https://github.com/emberjs/ember.js/pull/18241) / [#18383](https://github.com/emberjs/ember.js/pull/18383) [FEATURE] Add `updateHook` component-manager capability
- [#18396](https://github.com/emberjs/ember.js/pull/18396) [FEATURE] Implement component-class generator
- [#18389](https://github.com/emberjs/ember.js/pull/18389) [FEATURE] Use @ember/edition-utils to detect the edition that is in use
- [#18214](https://github.com/emberjs/ember.js/pull/18214) [DEPRECATION] Implement the [Deprecate support for mouseEnter/Leave/Move Ember events RFC](https://github.com/emberjs/rfcs/blob/master/text/0486-deprecate-mouseenter.md).
- [#18395](https://github.com/emberjs/ember.js/pull/18395) [BUGFIX] Use `<Nested::Invocation>` in component tests blueprint
- [#18406](https://github.com/emberjs/ember.js/pull/18406) [BUGFIX] Prevent infinite cycles from lazy computed computation
- [#18314](https://github.com/emberjs/ember.js/pull/18314) [BUGFIX] Use class inheritance for getters and setters
- [#18329](https://github.com/emberjs/ember.js/pull/18329) [BUGFIX] Eagerly consume aliases
- [#18278](https://github.com/emberjs/ember.js/pull/18278) [BUGFIX] Bump ember-router-generator from v1.2.3 to v2.0.0 to support parsing `app/router.js` with native class.
- [#18291](https://github.com/emberjs/ember.js/pull/18291) [BUGFIX] Adds the babel-helpers injection plugin back and include `ember-template-compiler` in the vendor folder for Ember.
- [#18296](https://github.com/emberjs/ember.js/pull/18296) [BUGFIX] Ensure {{each-in}} can iterate over keys with periods
- [#18304](https://github.com/emberjs/ember.js/pull/18304) [BUGFIX] Correctly determine the environment by checking the EMBER_ENV environment variable only after it is set
- [#18208](https://github.com/emberjs/ember.js/pull/18208) [BUGFIX] Compile Ember dynamically in consuming applications
- [#18267](https://github.com/emberjs/ember.js/pull/18267) [BUGFIX] Router#url should not error when `location` is a string
- [#18270](https://github.com/emberjs/ember.js/pull/18270) [BUGFIX] Prevent cycle dependency with owner association.
- [#18274](https://github.com/emberjs/ember.js/pull/18274) [BUGFIX] Allow CPs to depend on nested args
- [#18276](https://github.com/emberjs/ember.js/pull/18276) [BUGFIX] Change the assertion for @each dependencies into a deprecation
- [#18281](https://github.com/emberjs/ember.js/pull/18281) [BUGFIX] Check length of targets
- [#18248](https://github.com/emberjs/ember.js/pull/18248) [BUGFIX] Ensures that observers are flushed after CPs are updated
- [#18217](https://github.com/emberjs/ember.js/pull/18217) [BUGFIX] Adds ability for computed props to depend on args
- [#18222](https://github.com/emberjs/ember.js/pull/18222) [BUGFIX] Matches assertion behavior for CPs computing after destroy

## v3.12.4 (May 21, 2020)

- [#18879](https://github.com/emberjs/ember.js/pull/18879) Ensure errors thrown during component construction do not cause (unrelated) errors during application teardown (fixes a common issue when using `setupOnerror` with components asserting during `constructor`/`init`/`didInssertElement`).
- [#18273](https://github.com/emberjs/ember.js/pull/18273) [BUGFIX] Fix issues with SSR rehydration of <title>.

## v3.12.3 (March 12, 2020)

- [#18809](https://github.com/emberjs/ember.js/pull/18809) [BUGFIX] Do not error (RE: `elementId` changing) if `elementId` is not changed

## v3.12.2 (December 4, 2019)

- [#18576](https://github.com/emberjs/ember.js/pull/18576) [BUGFIX] Fix leftover `const` expressions in legacy builds

## v3.12.1 (November 20, 2019)

- [#18244](https://github.com/emberjs/ember.js/pull/18244) Fix query param assertion when using the router services `transitionTo` to redirect _during_ an existing transition.
- [#18458](https://github.com/emberjs/ember.js/pull/18458) / [#18555](https://github.com/emberjs/ember.js/pull/18555) Ensure `(query-params)` helper can be used outside of direct `{{link-to}}` / `<LinkTo />` invocation.

## v3.12.0 (August 5, 2019)

- [#18159](https://github.com/emberjs/ember.js/pull/18159) [BUGFIX] Update router.js to ensure buildRouteInfoMetadata does not eagerly cache routes in lazy Engines
- [#18226](https://github.com/emberjs/ember.js/pull/18226) [BUGFIX] Fix routing path with double slash (#18226)
- [#17406](https://github.com/emberjs/ember.js/pull/17406) [BUGFIX] Properties observed through `Ember.Observer` can be set to `undefined`
- [#18150](https://github.com/emberjs/ember.js/pull/18150) [BUGFIX] Fix a memory retention issue with string-based event listeners
- [#18124](https://github.com/emberjs/ember.js/pull/18124) [CLEANUP] Remove deprecated `NAME_KEY`

## v3.11.1 (June 27, 2019)

- [#18159](https://github.com/emberjs/ember.js/pull/18159) Ensure `RouteInfo` object's do not eagerly cache routes in lazy Engines
- [#18150](https://github.com/emberjs/ember.js/pull/18150) Ensure string based event listeners that are removed are not retained

## v3.11.0 (June 24, 2019)

- [#17842](https://github.com/emberjs/ember.js/pull/17842) / [#17901](https://github.com/emberjs/ember.js/pull/17901) [FEATURE] Implement the [Forwarding Element Modifiers with "Splattributes" RFC](https://github.com/emberjs/rfcs/blob/master/text/0435-modifier-splattributes.md).
- [#17941](https://github.com/emberjs/ember.js/pull/17941) / [#17961](https://github.com/emberjs/ember.js/pull/17961) [FEATURE] Implement the [{{fn}} rfc](https://github.com/emberjs/rfcs/blob/master/text/0470-fn-helper.md).
- [#17960](https://github.com/emberjs/ember.js/pull/17960) / [#18026](https://github.com/emberjs/ember.js/pull/18026) [FEATURE] Implement the [{{on}} modifier RFC](https://github.com/emberjs/rfcs/blob/master/text/0471-on-modifier.md)
- [#17858](https://github.com/emberjs/ember.js/pull/17858) / [#18026](https://github.com/emberjs/ember.js/pull/18026) [FEATURE] Implement the [Inject Parameter Normalization RFC](https://github.com/emberjs/rfcs/blob/master/text/0451-injection-parameter-normalization.md).
- [#17910](https://github.com/emberjs/ember.js/pull/17910) [DEPRECATION] Add deprecation for Function.prototype extensions.
- [#17845](https://github.com/emberjs/ember.js/pull/17845) [CLEANUP] Removes various deprecated APIs
- [#17843](https://github.com/emberjs/ember.js/pull/17843) [CLEANUP] Remove deprecated intimate apis in the router
- [#17940](https://github.com/emberjs/ember.js/pull/17940) [CLEANUP] Remove `sync` queue from @ember/runloop.
- [#18110](https://github.com/emberjs/ember.js/pull/18110) [BUGFIX] Ensure calling `recompute` on a class-based helper causes it to recompute

## v3.10.2 (June 18, 2019)

- [#17971](https://github.com/emberjs/ember.js/pull/17971) [BUGFIX] Ensure query param only link-to's work in error states.
- [#18080](https://github.com/emberjs/ember.js/pull/18080) [BUGFIX] Ensure that `ember-template-compiler` can be used during FastBoot runtime.

## v3.10.1 (June 4, 2019)

- [#18071](https://github.com/emberjs/ember.js/pull/18071) [BUGFIX] Ensure modifiers do not run in FastBoot modes. (#18071)
- [#18064](https://github.com/emberjs/ember.js/pull/18064) [BUGFIX] Fix 'hasAttribute is not a function' when jQuery is disabled (#18064)

## v3.10.0 (May 13, 2019)

- [#17836](https://github.com/emberjs/ember.js/pull/17836) [BREAKING] Explicitly drop support for Node 6
- [#17719](https://github.com/emberjs/ember.js/pull/17719) / [#17745](https://github.com/emberjs/ember.js/pull/17745) [FEATURE] Support for nested components in angle bracket invocation syntax (see [emberjs/rfcs#0457](https://github.com/emberjs/rfcs/blob/master/text/0457-nested-lookups.md)).
- [#17735](https://github.com/emberjs/ember.js/pull/17735) / [#17772](https://github.com/emberjs/ember.js/pull/17772) / [#17811](https://github.com/emberjs/ember.js/pull/17811) / [#17814](https://github.com/emberjs/ember.js/pull/17814) [FEATURE] Implement the Angle Bracket Invocations For Built-in Components RFC (see [emberjs/rfcs#0459](https://github.com/emberjs/rfcs/blob/master/text/0459-angle-bracket-built-in-components.md)).
- [#17548](https://github.com/emberjs/ember.js/pull/17548) / [#17604](https://github.com/emberjs/ember.js/pull/17604) / [#17690](https://github.com/emberjs/ember.js/pull/17690) / [#17827](https://github.com/emberjs/ember.js/pull/17827) / [#17828](https://github.com/emberjs/ember.js/pull/17828) [FEATURE] Implement the Decorators RFC (see [emberjs/rfcs#0408](https://github.com/emberjs/rfcs/blob/master/text/0408-decorators.md)).
- [#17256](https://github.com/emberjs/ember.js/pull/17256) / [#17664](https://github.com/emberjs/ember.js/pull/17664) [FEATURE] Implement RouteInfo Metadata RFC (see [emberjs/rfcs#0398](https://github.com/emberjs/rfcs/blob/master/text/0398-RouteInfo-Metadata.md)).
- [#17938](https://github.com/emberjs/ember.js/pull/17938) [BUGFIX] Expose mechanism to detect if a property is a computed
- [#17974](https://github.com/emberjs/ember.js/pull/17974) [BUGFIX] Ensure inheritable observers on object proxies are string based
- [#17930](https://github.com/emberjs/ember.js/pull/17930) [BUGFIX] Update assertion for events in tagless component to include method names
- [#17859](https://github.com/emberjs/ember.js/pull/17859) [BUGFIX] Fixes a regression in the legacy build
- [#17891](https://github.com/emberjs/ember.js/pull/17891) [BUGFIX] Loosen "engines" restriction for Node versions
- [#17900](https://github.com/emberjs/ember.js/pull/17900) [BUGFIX] Fix version for APP_CTRL_ROUTER_PROPS deprecation flag
- [#17846](https://github.com/emberjs/ember.js/pull/17846) [BUGFIX] Fix issues with template-only components causing errors in subsequent updates.
- [#17872](https://github.com/emberjs/ember.js/pull/17872) [BUGFIX] Fix issue where `{{link-to}}` is causing unexpected local variable shadowing assertions.
- [#17841](https://github.com/emberjs/ember.js/pull/17841) [BUGFIX] Ensure `@sort` works on non-`Ember.Object`s.
- [#17855](https://github.com/emberjs/ember.js/pull/17855) [BUGFIX] Expose (private) computed `_getter` functions.
- [#17860](https://github.com/emberjs/ember.js/pull/17860) [BUGFIX] Add assertions for required parameters in computed macros, when used as a decorator.
- [#17868](https://github.com/emberjs/ember.js/pull/17868) [BUGFIX] Fix controller injection via decorators.
- [#17747](https://github.com/emberjs/ember.js/pull/17747) [BUGFIX] Correct component-test blueprint for ember-cli-mocha
- [#17788](https://github.com/emberjs/ember.js/pull/17788) [BUGFIX] Fix native DOM events in Glimmer Angle Brackets
- [#17833](https://github.com/emberjs/ember.js/pull/17833) [BUGFIX] Reverts the naming of setClassicDecorator externally
- [#17818](https://github.com/emberjs/ember.js/pull/17818) [BUGFIX] Fix event dispatcher to not rely on `elementId`.
- [#17740](https://github.com/emberjs/ember.js/pull/17740) [BUGFIX] Fix octane component blueprint and octane blueprint tests
- [#17411](https://github.com/emberjs/ember.js/pull/17411) / [#17732](https://github.com/emberjs/ember.js/pull/17732) / [#17412](https://github.com/emberjs/ember.js/pull/17412) Update initializer blueprints for ember-mocha 0.14
- [#17702](https://github.com/emberjs/ember.js/pull/17702) Extend from glimmer component for octane blueprint

## v3.9.1 (April 09, 2019)

- [#17870](https://github.com/emberjs/ember.js/pull/17870) / [#17871](https://github.com/emberjs/ember.js/pull/17871) [BUGFIX] Fix issue where `...attributes` may incorrectly overwrite attributes, depending on its position.
- [#17874](https://github.com/emberjs/ember.js/pull/17874) [BUGFIX] Fix issue with `event.stopPropagation()` in component event handlers when jQuery is disabled.
- [#17876](https://github.com/emberjs/ember.js/pull/17876) [BUGFIX] Fix issue with multiple `{{action}}` modifiers on the same element when jQuery is disabled.

## v3.8.3 (June 28, 2019)

- [#18159](https://github.com/emberjs/ember.js/pull/18159) [BUGFIX] Ensure `RouteInfo` object's do not eagerly cache routes in lazy Engines
- [#18150](https://github.com/emberjs/ember.js/pull/18150) [BUGFIX] Ensure string based event listeners that are removed are not retained
- [#18080](https://github.com/emberjs/ember.js/pull/18080) [BUGFIX] Fix `ember-template-compiler` compatibility with Fastboot.

## v3.8.2 (June, 4, 2019)

- [#18071](https://github.com/emberjs/ember.js/pull/18071) [BUGFIX] Ensure modifiers do not run in FastBoot modes. (#18071)
- [#18064](https://github.com/emberjs/ember.js/pull/18064) [BUGFIX] Fix 'hasAttribute is not a function' when jQuery is disabled (#18064)
- [#17974](https://github.com/emberjs/ember.js/pull/17974) [BUGFIX] Ensure inheritable observers on object proxies are string based
- [#17859](https://github.com/emberjs/ember.js/pull/17859) [BUGFIX] Fixes a regression in the legacy build

## v3.8.1 (April 02, 2019)

- [#17684](https://github.com/emberjs/ember.js/pull/17684) [BUGFIX] Enable maximum rerendering limit to be customized.
- [#17823](https://github.com/emberjs/ember.js/pull/17823) Update router_js to 6.2.4

## v3.9.0 (April 01, 2019)

- [#17470](https://github.com/emberjs/ember.js/pull/17470) [DEPRECATION] Implements the Computed Property Modifier deprecation RFCs
  * Deprecates `.property()` (see [emberjs/rfcs#0375](https://github.com/emberjs/rfcs/blob/master/text/0375-deprecate-computed-property-modifier.md)
  * Deprecates `.volatile()` (see [emberjs/rfcs#0370](https://github.com/emberjs/rfcs/blob/master/text/0370-deprecate-computed-volatile.md)
  * Deprecates computed overridability (see [emberjs/rfcs#0369](https://github.com/emberjs/rfcs/blob/master/text/0369-deprecate-computed-clobberability.md)
- [#17488](https://github.com/emberjs/ember.js/pull/17488) [DEPRECATION] Deprecate this.$() in curly components (see [emberjs/rfcs#0386](https://github.com/emberjs/rfcs/blob/master/text/0386-remove-jquery.md))
- [#17489](https://github.com/emberjs/ember.js/pull/17489) [DEPRECATION] Deprecate Ember.$() (see [emberjs/rfcs#0386](https://github.com/emberjs/rfcs/blob/master/text/0386-remove-jquery.md))
- [#17540](https://github.com/emberjs/ember.js/pull/17540) [DEPRECATION] Deprecate aliasMethod
- [#17823](https://github.com/emberjs/ember.js/pull/17823) Update router_js to 6.2.4
- [#17733](https://github.com/emberjs/ember.js/pull/17733) [BUGFIX] Assert on use of reserved component names (`input` and `textarea`)
- [#17710](https://github.com/emberjs/ember.js/pull/17710) [BUGFIX] Allow accessors in mixins
- [#17684](https://github.com/emberjs/ember.js/pull/17684) [BUGFIX] Enable maximum rerendering limit to be customized.
- [#17691](https://github.com/emberjs/ember.js/pull/17691) [BUGFIX] Ensure tagForProperty works on class constructors
- [#17618](https://github.com/emberjs/ember.js/pull/17618) [BUGFIX] Migrate autorun microtask queue to Promise.then
- [#17649](https://github.com/emberjs/ember.js/pull/17649) [BUGFIX] Revert decorator refactors
- [#17487](https://github.com/emberjs/ember.js/pull/17487) [BUGFIX] Fix scenario where aliased properties did not update in production mode

## v3.8.0 (February 18, 2019)

- [#17143](https://github.com/emberjs/ember.js/pull/17143) / [#17375](https://github.com/emberjs/ember.js/pull/17375) [FEATURE] Implement Element Modifier Manager RFC (see [emberjs/rfcs#0373](https://github.com/emberjs/rfcs/blob/master/text/0373-Element-Modifier-Managers.md)).
- [#17054](https://github.com/emberjs/ember.js/pull/17054) / [#17376](https://github.com/emberjs/ember.js/pull/17376) [FEATURE] Implement `array` helper RFC (see [emberjs/rfcs#0318](https://github.com/emberjs/rfcs/blob/master/text/0318-array-helper.md))
- [#16735](https://github.com/emberjs/ember.js/pull/16735) [BUGFIX] Observed properties not being marked as enum
- [#17498](https://github.com/emberjs/ember.js/pull/17498) [BUGFIX] Don't remove dep keys in `didUnwatch`
- [#17467](https://github.com/emberjs/ember.js/pull/17467) [BUGFIX] Fix substate interactions with aborts
- [#17413](https://github.com/emberjs/ember.js/pull/17413) [BUGFIX] Fix missing import in instance-initializer blueprint for ember-mocha
- [#17319](https://github.com/emberjs/ember.js/pull/17319) [CLEANUP] Remove deprecated 'POSITIONAL_PARAM_CONFLICT'
- [#17394](https://github.com/emberjs/ember.js/pull/17394) [CLEANUP] Remove deprecated code in mixins/array
- [#17244](https://github.com/emberjs/ember.js/pull/17244) / [#17499](https://github.com/emberjs/ember.js/pull/17499) Upgrade to Glimmer VM 0.37.1
Fixes a few issues:
  * Usage of positional arguments with custom components.
  * Forwarding attributes via `...attributes` to a dynamic component.
  * Prevent errors when rendering many template blocks (`Error: Operand over 16-bits. Got 65536`).
- [#17166](https://github.com/emberjs/ember.js/pull/17166) Improve performance of get() / set()
- [#16710](https://github.com/emberjs/ember.js/pull/16710) Deprecation of private `NAME_KEY`
- [#17216](https://github.com/emberjs/ember.js/pull/17216) Use native Error instead of custom Error subclass.
- [#17340](https://github.com/emberjs/ember.js/pull/17340) Remove unused `hooks` variable from qunit-rfc-232 util-test blueprint
- [#17357](https://github.com/emberjs/ember.js/pull/17357) Allow notifyPropertyChange to be imported from @ember/object

## v3.7.3 (February 6, 2019)

- [#17563](https://github.com/emberjs/ember.js/pull/17563) [BUGFIX] Transition.send/trigger call signature
- [#17552](https://github.com/emberjs/ember.js/pull/17552) [BUGFIX] Support numbers in component names for Angle Brackets

## v3.7.2 (January 22, 2019)

* Upgrade @glimmer/* packages to 0.36.6. Fixes a few issues:
  * Usage of positional arguments with custom components.
  * Forwarding attributes via `...attributes` to a dynamic component.
  * Prevent errors when rendering many template blocks (`Error: Operand over 16-bits. Got 65536`).

## v3.7.1 (January 21, 2019)

- [#17461](https://github.com/emberjs/ember.js/pull/17461) [BUGFIX] Fix substate interactions with aborts

## v3.7.0 (January 7, 2019)

- [#17254](https://github.com/emberjs/ember.js/pull/17254) [BREAKING] Explicitly drop support for Node 4
- [#17426](https://github.com/emberjs/ember.js/pull/17426) [BUGFIX] Fix 'strict mode does not allow function declarations'
- [#17431](https://github.com/emberjs/ember.js/pull/17431) [BUGFIX] Fix ability to override a computed.volatile
- [#17398](https://github.com/emberjs/ember.js/pull/17398) [BUGFIX] Avoid console.trace for every Ember.warn
- [#17399](https://github.com/emberjs/ember.js/pull/17399) [BUGFIX] Local variable shadowing assert
- [#17403](https://github.com/emberjs/ember.js/pull/17403) [BUGFIX] Ensure legacy build of template compiler can be loaded.
- [#17328](https://github.com/emberjs/ember.js/pull/17328) [BUGFIX] Ensure that delayed transition retrys work
- [#17374](https://github.com/emberjs/ember.js/pull/17374) [BUGFIX] Fix cyclic references on Array.prototype
- [#17134](https://github.com/emberjs/ember.js/pull/17134) [CLEANUP] Remove deprecated '_router'
- [#17133](https://github.com/emberjs/ember.js/pull/17133) [CLEANUP] Remove deprecated 'property{Did,Will}Change'
- [#16898](https://github.com/emberjs/ember.js/pull/16898) Add RFC 232 style util test blueprint for Mocha

## v3.6.1 (December 18, 2018)

- [#17328](https://github.com/emberjs/ember.js/pull/17328) [BUGFIX] Ensure that delayed transition retrys work
- [#17374](https://github.com/emberjs/ember.js/pull/17374) [BUGFIX] Fix cyclic references on Array.prototype

## v3.6.0 (December 6, 2018)

- [#17025](https://github.com/emberjs/ember.js/pull/17025) / [#17034](https://github.com/emberjs/ember.js/pull/17034) / [#17036](https://github.com/emberjs/ember.js/pull/17036) / [#17038](https://github.com/emberjs/ember.js/pull/17038) / [#17040](https://github.com/emberjs/ember.js/pull/17040) / [#17041](https://github.com/emberjs/ember.js/pull/17041) / [#17061](https://github.com/emberjs/ember.js/pull/17061) [FEATURE] Final stage of the router service RFC (see [emberjs/rfcs#95](https://github.com/emberjs/rfcs/blob/master/text/0095-router-service.md)
- [#16795](https://github.com/emberjs/ember.js/pull/16795) [FEATURE] Native Class Constructor Update (see [emberjs/rfcs#337](https://github.com/emberjs/rfcs/blob/master/text/0337-native-class-constructor-update.md)
- [#17188](https://github.com/emberjs/ember.js/pull/17188) / [#17246](https://github.com/emberjs/ember.js/pull/17246) [BUGFIX] Adds a second dist build which targets IE and early Android versions. Enables avoiding errors when using native classes without transpilation.
- [#17238](https://github.com/emberjs/ember.js/pull/17238) [DEPRECATION] Deprecate calling `A` as a constructor
- [#16956](https://github.com/emberjs/ember.js/pull/16956) [DEPRECATION] Deprecate Ember.merge
- [#17220](https://github.com/emberjs/ember.js/pull/17220) [BUGFIX] Fix cycle detection in Ember.copy
- [#17227](https://github.com/emberjs/ember.js/pull/17227) [BUGFIX] Fix mouseEnter/Leave event delegation w/o jQuery for SVG & IE11
- [#17233](https://github.com/emberjs/ember.js/pull/17233) [BUGFIX] Reverts EmberError to be a standard function
- [#17251](https://github.com/emberjs/ember.js/pull/17251) [BUGFIX] Prevent errors with debug compiled templates in prod.
- [#17241](https://github.com/emberjs/ember.js/pull/17241) [BUGFIX] Fix line endings of component blueprint on Windows
- [#17271](https://github.com/emberjs/ember.js/pull/17271) [BUGFIX] Update backburner.js to 2.4.2.
- [#17184](https://github.com/emberjs/ember.js/pull/17184) [BUGFIX] Ensures removeAllListeners does not break subsequent adds
- [#17169](https://github.com/emberjs/ember.js/pull/17169) [BUGFIX] Add default implementations of Component lifecycle hooks
- [#17137](https://github.com/emberjs/ember.js/pull/17137) [BUGFIX] Assert when local variables shadow modifier invocations
- [#17132](https://github.com/emberjs/ember.js/pull/17132) [BUGFIX] Assert when local variables shadow helper invocations
- [#17135](https://github.com/emberjs/ember.js/pull/17135) [BUGFIX] Ensure local variables win over helper invocations
- [#16923](https://github.com/emberjs/ember.js/pull/16923) [BUGFIX] ES6 classes on/removeListener and observes/removeObserver interop
- [#17153](https://github.com/emberjs/ember.js/pull/17153) [BUGFIX] Blueprints can generate components with a single word name
- [#16865](https://github.com/emberjs/ember.js/pull/16865) / [#16899](https://github.com/emberjs/ember.js/pull/16899) / [#16914](https://github.com/emberjs/ember.js/pull/16914) / [#16897](https://github.com/emberjs/ember.js/pull/16897) / [#16913](https://github.com/emberjs/ember.js/pull/16913) / [#16894](https://github.com/emberjs/ember.js/pull/16894) / [#16896](https://github.com/emberjs/ember.js/pull/16896) [BUGFIX] Support RFC 232 and RFC 268 style tests with Mocha blueprints
- [#17051](https://github.com/emberjs/ember.js/pull/17051) Update glimmer-vm packages to 0.36.4

## v3.5.1 (October 29, 2018)

- [#17028](https://github.com/emberjs/ember.js/pull/17028) Mark `defineProperty` as public (yet low level) API.
- [#17115](https://github.com/emberjs/ember.js/pull/17115) [BUGFIX] Pass the event parameter to sendAction
- [#17128](https://github.com/emberjs/ember.js/pull/17128) [BUGFIX] Fix sourcemaping issues due to multiple sourcemap directives.
- [#17130](https://github.com/emberjs/ember.js/pull/17130) [BUGFIX] Ensure that timers scheduled after a system sleep are fired properly.

## v3.5.0 (October 8, 2018)

- [#16978](https://github.com/emberjs/ember.js/pull/16978) [BUGFIX] Properly teardown alias
- [#16877](https://github.com/emberjs/ember.js/pull/16877) [CLEANUP] Allow routes to be named "array" and "object"

## v3.4.8 (January 22, 2019)

* Upgrade @glimmer/* packages to 0.35.10. Fixes a few issues:
  * Usage of positional arguments with custom components.
  * Forwarding attributes via `...attributes` to a dynamic component.
  * Prevent errors when rendering many template blocks (`Error: Operand over 16-bits. Got 65536`).

## v3.4.7 (December 7, 2018)

- [#17271](https://github.com/emberjs/ember.js/pull/17271) [BUGFIX] Update `backburner.js` to 2.4.2.

## v3.4.6 (October 29, 2018)

- [#17115](https://github.com/emberjs/ember.js/pull/17115) [BUGFIX] Ensure `{{input` continues to pass the event to the actions that it fires.
- [#17128](https://github.com/emberjs/ember.js/pull/17128) [BUGFIX] Fix invalid sourcemap declarations.
- [#17130](https://github.com/emberjs/ember.js/pull/17130) [BUGFIX] Ensure that timers scheduled after a system sleep are fired properly.

## v3.4.5 (October 4, 2018)

- [#17029](https://github.com/emberjs/ember.js/pull/17029) [BUGFIX] Update backburner.js to 2.4.0.

## v3.4.4 (September 27, 2018)

- [#17013](https://github.com/emberjs/ember.js/pull/17013) [BUGFIX] Fix rendering of empty content with `{{{...}}}` or `{{...}}` with `htmlSafe('')` in IE11

## v3.4.3 (September 25, 2018)

- [#17003](https://github.com/emberjs/ember.js/pull/17003) [BUGFIX] Fix rendering of empty content with `{{{...}}}` or `{{...}}` with `htmlSafe('')`

## v3.4.2 (September 24, 2018)

- [#16860](https://github.com/emberjs/ember.js/pull/16860) [BUGFIX] Clear chains in ProxyMixin when destroyed
- [#16999](https://github.com/emberjs/ember.js/pull/16999) [BUGFIX] Fix mouseEnter/Leave event delegation without jQuery

## v3.4.1 (September 10, 2018)

- [#16933](https://github.com/emberjs/ember.js/pull/16933) [BUGFIX] Update glimmer-vm packages to 0.35.8

## v3.4.0 (August 27, 2018)

- [#16603](https://github.com/emberjs/ember.js/pull/16603) [BUGFIX] Support mouseEnter/Leave events w/o jQuery
- [#16857](https://github.com/emberjs/ember.js/pull/16857) [BUGFIX] Prevents the recursive redefinition of root chains
- [#16854](https://github.com/emberjs/ember.js/pull/16854) [BUGFIX] Don't thread FactoryManager through createComponent
- [#16773](https://github.com/emberjs/ember.js/pull/16773) [FEATURE] Custom component manager (see [emberjs/rfcs#213](https://github.com/emberjs/rfcs/blob/master/text/0213-custom-components.md) for more details)
- [#16708](https://github.com/emberjs/ember.js/pull/16708) [FEATURE] Angle bracket component invocation (see [emberjs/rfcs#311](https://github.com/emberjs/rfcs/blob/master/text/0311-angle-bracket-invocation.md) for more details)
- [#16744](https://github.com/emberjs/ember.js/pull/16744) [DEPRECATION] Deprecate `component#sendAction` (see [emberjs/rfcs#335](https://github.com/emberjs/rfcs/blob/master/text/0335-deprecate-send-action.md) for more details)
- [#16720](https://github.com/emberjs/ember.js/pull/16720) Upgrade `backburner.js` to 2.3.0
- [#16783](https://github.com/emberjs/ember.js/pull/16783) [BUGFIX] Allow setting length on ArrayProxy.
- [#16785](https://github.com/emberjs/ember.js/pull/16785) [BUGFIX] Ensure `ArrayMixin#invoke` returns an Ember.A.
- [#16784](https://github.com/emberjs/ember.js/pull/16784) [BUGFIX] Setting ArrayProxy#content in willDestroy resets length.
- [#16794](https://github.com/emberjs/ember.js/pull/16794) [BUGFIX] Fix instance-initializer-test blueprint for new QUnit testing API ([emberjs/rfcs#232](https://github.com/emberjs/rfcs/pull/232))
- [#16797](https://github.com/emberjs/ember.js/pull/16797) [BUGFIX] Drop autorun assertion

## v3.3.2 (August 20, 2018)

- [#16853](https://github.com/emberjs/ember.js/pull/16853) [BUGFIX] Allow ArrayProxy#pushObjects to accept ArrayProxy again
- [#16870](https://github.com/emberjs/ember.js/pull/16870) [BUGFIX] Enable @ember/object#get to be called with an empty string

## v3.3.1 (July 23, 2018)

- [#16836](https://github.com/emberjs/ember.js/pull/16836/commits) [DOC] Fix Broken 3.3 API Documentation

## v3.3.0 (July 16, 2018)

- [#16687](https://github.com/emberjs/ember.js/pull/16687) [FEATURE] Implement optional jQuery integration (see [emberjs/rfcs#294](https://github.com/emberjs/rfcs/blob/master/text/0294-optional-jquery.md) for more details).
- [#16690](https://github.com/emberjs/ember.js/pull/16690) [DEPRECATION] [emberjs/rfcs#294](emberjs/rfcs#294) Deprecate accessing `jQuery.Event#originalEvent`.
- [#16691](https://github.com/emberjs/ember.js/pull/16691) [DEPRECATION] [emberjs/rfcs#237](https://github.com/emberjs/rfcs/pull/237) Implement `Ember.Map`, `Ember.MapWithDefault`, and `Ember.OrderedSet` deprecation.
- [#16692](https://github.com/emberjs/ember.js/pull/16692) [DEPRECATION] [emberjs/rfcs#322](https://github.com/emberjs/rfcs/pull/322) Implement `Ember.copy`/`Ember.Copyable` deprecation.
- [#16709](https://github.com/emberjs/ember.js/pull/16709) [BUGFIX] Avoid ordered set deprecation in @ember/ordered-set addon.
- [#16729](https://github.com/emberjs/ember.js/pull/16729) [BUGFIX] Throw error if run.bind receives no method.
- [#16731](https://github.com/emberjs/ember.js/pull/16731) [BUGFIX] Better error when a route name is not valid.
- [#16743](https://github.com/emberjs/ember.js/pull/16743) [BUGFIX] Update glimmer-vm to 0.35.4.
- [#16767](https://github.com/emberjs/ember.js/pull/16767) [BUGFIX] Ensure meta._parent is initialized.
- [#16781](https://github.com/emberjs/ember.js/pull/16781) [BUGFIX] Ensure tests from @ember/* are excluded from debug/prod builds.
- [#16619](https://github.com/emberjs/ember.js/pull/16619) [BUGFIX] Update router_js to ensure `(hash` works in query params.
- [#16632](https://github.com/emberjs/ember.js/pull/16632) [BUGFIX] computed.sort array should update if sort properties array is empty/

## v3.2.2 (June 21, 2018)

- [#16754](https://github.com/emberjs/ember.js/pull/16754) [BUGFIX] Fix container destroy timing

## v3.2.1 (June 19, 2018)

- [#16750](https://github.com/emberjs/ember.js/pull/16750) [BUGFIX] Bring back isObject guard for ember-utils/is_proxy

## v3.2.0 (May 31, 2018)

- [#16613](https://github.com/emberjs/ember.js/pull/16613) [BUGFIX] Prevent errors in ember-engines + 3.1 + proxies.
- [#16597](https://github.com/emberjs/ember.js/pull/16597) [BUGFIX] Ensure `Ember.run.cancelTimers` is present.
- [#16605](https://github.com/emberjs/ember.js/pull/16605) [BUGFIX] Use resetCache on container destroy.
- [#16615](https://github.com/emberjs/ember.js/pull/16615) [BUGFIX] Fix NAMESPACES_BY_ID leaks.
- [#16539](https://github.com/emberjs/ember.js/pull/16539) [BUGFIX] Ember is already registered by the libraries registry already.
- [#16559](https://github.com/emberjs/ember.js/pull/16559) [BUGFIX] Fix property normalization, Update glimmer-vm to 0.34.0.
- [#16563](https://github.com/emberjs/ember.js/pull/16563) [BUGFIX] Ensure `ariaRole` can be initially false.
- [#16550](https://github.com/emberjs/ember.js/pull/16550) [BUGFIX] Decrement counter of pending requests in the next tick.
- [#16551](https://github.com/emberjs/ember.js/pull/16551) [BUGFIX] Fix `proto` return value for native classes.
- [#16558](https://github.com/emberjs/ember.js/pull/16558) [BUGFIX] Ensure ComponentDefinitions do not leak heap space.
- [#16560](https://github.com/emberjs/ember.js/pull/16560) [BUGFIX] avoid strict assertion when object proxy calls thru for function.
- [#16564](https://github.com/emberjs/ember.js/pull/16564) [BUGFIX] Ensure Ember.isArray does not trigger proxy assertion.
- [#16572](https://github.com/emberjs/ember.js/pull/16572) [BUGFIX] Fix curly component class reference setup.
- [#16493](https://github.com/emberjs/ember.js/pull/16493) [BUGFIX] Ensure proxies have access to `getOwner(this)`.
- [#16494](https://github.com/emberjs/ember.js/pull/16494) [BUGFIX] Adjust assertion to allow for either undefined or null.
- [#16499](https://github.com/emberjs/ember.js/pull/16499) [BUGFIX] Object to string serialization.
- [#16514](https://github.com/emberjs/ember.js/pull/16514) [BUGFIX] Bring back (with deprecation) Ember.EXTEND_PROTOTYPES.
- [#16520](https://github.com/emberjs/ember.js/pull/16520) [BUGFIX] Adds options checking ability to debug/deprecation test helpers.
- [#16526](https://github.com/emberjs/ember.js/pull/16526) [BUGFIX] Ensure setting a `NAME_KEY` does not error.
- [#16527](https://github.com/emberjs/ember.js/pull/16527) [BUGFIX] Update glimmer-vm to 0.33.5.
- [#16250](https://github.com/emberjs/ember.js/pull/16250) [DEPRECATION] Deprecation of `Ember.Logger`.
- [#16436](https://github.com/emberjs/ember.js/pull/16436) [BUGFIX] Refactor `CoreObject` to leverage native JS semantics.
- [#16382](https://github.com/emberjs/ember.js/pull/16382) Upgrade `backburner.js` to 2.2.2.
- [#16387](https://github.com/emberjs/ember.js/pull/16387) [BUGFIX] Add an assertion that actions cannot be sent from a destroyed/destroying object.
- [#16386](https://github.com/emberjs/ember.js/pull/16386) [BUGFIX] Add an assertion if you attempt a `transitionTo` when the app is destroyed.
- [#16399](https://github.com/emberjs/ember.js/pull/16399) [BUGFIX] `{{#each}}` and `{{#each-in}}` now support objects implementing the native iteration protocol, including `Map` and `Set`.
- [#16399](https://github.com/emberjs/ember.js/pull/16399) [BUGFIX] `{{#each-in}}` now correctly handles `key="@index"` (using the index/position). The new `key="@key"` option uses the item's key.
- [#16433](https://github.com/emberjs/ember.js/pull/16433) [CLEANUP] Remove `content` alias.
- [#16462](https://github.com/emberjs/ember.js/pull/16462) [CLEANUP] Remove deprecated `MODEL_FACTORY_INJECTIONS`.
- [emberjs/rfcs#286](https://github.com/emberjs/rfcs/blob/master/text/0286-block-let-template-helper.md) [FEATURE] Enabled block `let` handlebars helper by default.

## v3.1.4 (August 07, 2018)

- [#16565](https://github.com/emberjs/ember.js/pull/16565) Fix template / component caching during rendering.
- [#16853](https://github.com/emberjs/ember.js/pull/16853) [BUGFIX] Allow ArrayProxy#pushObjects to accept ArrayProxy again

## v3.1.3 (June 21, 2018)
- [#16754](https://github.com/emberjs/ember.js/pull/16754) [BUGFIX] Fix container destroy timing

## v3.1.2 (May 7, 2018)
- [#16600](https://github.com/emberjs/ember.js/pull/16600) [BUGFIX] Fix SimpleHelper memory leak
- [#16605](https://github.com/emberjs/ember.js/pull/16605) [BUGFIX] Use resetCache on container destroy.
- [182fc3](https://github.com/emberjs/ember.js/commit/182fc315664e8b4847f03133cc01e38767cad41e) [BUGFIX] Update glimmer-vm to ensure arguments are properly garbage collected.
- [#16281](https://github.com/emberjs/ember.js/pull/16281) [BUGFIX] Ensure warning from `{{#link-to` RE: loading state does not throw an assertion.

## v3.1.1 (April 23, 2018)
- [#16559](https://github.com/emberjs/ember.js/pull/16559) [BUGFIX] Fix property normalization, Update glimmer-vm to 0.34.0
- [#16493](https://github.com/emberjs/ember.js/pull/16493) [BUGFIX] Ensure proxies have access to `getOwner(this)`.
- [#16496](https://github.com/emberjs/ember.js/pull/16496) [BUGFIX] Add exception for `didRemoveListener` so evented proxy objects can function
- [#16494](https://github.com/emberjs/ember.js/pull/16494) [BUGFIX] Adjust assertion to allow for either undefined or null
- [#16558](https://github.com/emberjs/ember.js/pull/16558) [BUGFIX] Ensure ComponentDefinitions do not leak heap space.
- [#16560](https://github.com/emberjs/ember.js/pull/16560) [BUGFIX] Avoid strict assertion when object proxy calls thru for function
- [#16563](https://github.com/emberjs/ember.js/pull/16563) [BUGFIX] Ensure `ariaRole` can be initially false.
- [#16564](https://github.com/emberjs/ember.js/pull/16564) [BUGFIX] Ensure Ember.isArray does not trigger proxy assertion.
- [#16572](https://github.com/emberjs/ember.js/pull/16572) [BUGFIX] Fix curly component class reference setup

## v3.1.0 (April 10, 2018)
- [#16293](https://github.com/emberjs/ember.js/pull/16293) [BUGFIX] Ignore --pod for -addon blueprints: helper, initializer, and instance-initializer
- [#16312](https://github.com/emberjs/ember.js/pull/16312) [DEPRECATION] Deprecate `Route.prototype.router` in favor of `Route.prototype._router`
- [#16326](https://github.com/emberjs/ember.js/pull/16326) [BUGFIX] Expanded syntax error for if handlebars helper to include source of error
- [#16350](https://github.com/emberjs/ember.js/pull/16350) [BUGFIX] Fix initializers tests blueprints
- [#16294](https://github.com/emberjs/ember.js/pull/16294) [BUGFIX] Fix input macro params handling
- [#16307](https://github.com/emberjs/ember.js/pull/16307) [BUGFIX] Ensure proper .toString() of default components.
- [#16287](https://github.com/emberjs/ember.js/pull/16287) [BUGFIX] Update to router_js@2.0.0-beta.2.
- [#16245](https://github.com/emberjs/ember.js/pull/16245) [BUGFIX] Ensure errors in deferred component hooks can be recovered.
- [#16246](https://github.com/emberjs/ember.js/pull/16246) [BUGFIX] computed.sort should not sort if sortProperties is empty
- [emberjs/rfcs#276](https://github.com/emberjs/rfcs/blob/master/text/0276-named-args.md) [FEATURE named-args] enabled by default.
- [emberjs/rfcs#278](https://github.com/emberjs/rfcs/blob/master/text/0278-template-only-components.md) [FEATURE template-only-glimmer-components] Enable-able via `@ember/optional-features` addon.
- [emberjs/rfcs#280](https://github.com/emberjs/rfcs/blob/master/text/0280-remove-application-wrapper.md) [FEATURE application-template-wrapper] Enable-able via `@ember/optional-features` addon.
- [emberjs/rfcs#281](https://github.com/emberjs/rfcs/blob/master/text/0281-es5-getters.md) [FEATURE native-es5-getters] Enabled by default.
- [#15828](https://github.com/emberjs/ember.js/pull/15828) Upgrade glimmer-vm to latest version.

## v3.0.0 (February 13, 2018)

- [#16218](https://github.com/emberjs/ember.js/pull/16218) [BUGFIX beta] Prevent errors when using const `(get arr 1)`.
- [#16241](https://github.com/emberjs/ember.js/pull/16241) [BUGFIX lts] Avoid excessively calling Glimmer AST transforms.
- [#16199](https://github.com/emberjs/ember.js/pull/16199) [BUGFIX] Mention "computed properties" in the assertion message
- [#16200](https://github.com/emberjs/ember.js/pull/16200) [BUGFIX] Prevent test error by converting illegal characters
- [#16179](https://github.com/emberjs/ember.js/pull/16179) [BUGFIX] Fix a few bugs in the caching ArrayProxy implementation
- [#16160](https://github.com/emberjs/ember.js/pull/16160) [BUGFIX] Remove humanize() call from generated test descriptions
- [#16101](https://github.com/emberjs/ember.js/pull/16101) [CLEANUP] Remove legacy ArrayProxy features
- [#16116](https://github.com/emberjs/ember.js/pull/16116) [CLEANUP] Remove private enumerable observers
- [#16117](https://github.com/emberjs/ember.js/pull/16117) [BUGFIX] link-to active class applied when params change
- [#16132](https://github.com/emberjs/ember.js/pull/16132) [BUGFIX] Bring back `sync` queue with deprecation (until: 3.5.0).
- [#16156](https://github.com/emberjs/ember.js/pull/16156) [BUGFIX] Update to backburner.js@2.1.0.
- [#16157](https://github.com/emberjs/ember.js/pull/16157) [BUGFIX] Mutating an arranged ArrayProxy is not allowed
- [#16162](https://github.com/emberjs/ember.js/pull/16162) [CLEANUP] Remove unused private listener methods
- [#16163](https://github.com/emberjs/ember.js/pull/16163) [CLEANUP] Remove unused path caches
- [#16169](https://github.com/emberjs/ember.js/pull/16169) [BUGFIX] Fix various issues with descriptor trap.
- [#16174](https://github.com/emberjs/ember.js/pull/16174) [BUGFIX] Enable _some_ recovery of errors thrown during render.
- [#16095](https://github.com/emberjs/ember.js/pull/16095) [CLEANUP] Fix ember-2-legacy support for Ember.Binding.
- [#16097](https://github.com/emberjs/ember.js/pull/16097) / [#16110](https://github.com/emberjs/ember.js/pull/16110) [CLEANUP] Remove `sync` runloop queue.
- [#16099](https://github.com/emberjs/ember.js/pull/16099) [CLEANUP] Remove custom eventManager support.
- [#16067](https://github.com/emberjs/ember.js/pull/16067) [BUGFIX] Fix issues with `run.debounce` with only method and wait.
- [#16045](https://github.com/emberjs/ember.js/pull/16045) [BUGFIX] Fix double debug output
- [#16050](https://github.com/emberjs/ember.js/pull/16050) [BUGFIX] Add inspect and constructor to list of descriptor exceptions
- [#16080](https://github.com/emberjs/ember.js/pull/16080) [BUGFIX] Add missing modules docs for tryInvoke, compare, isEqual #16079
- [#16084](https://github.com/emberjs/ember.js/pull/16084) [BUGFIX] Update `computed.sort` docs to avoid state leakage
- [#16087](https://github.com/emberjs/ember.js/pull/16087) [BUGFIX] Ensure `App.visit` resolves when rendering completed.
- [#16090](https://github.com/emberjs/ember.js/pull/16090) [CLEANUP] Remove Ember.Binding support
- [#15901](https://github.com/emberjs/ember.js/pull/15901) [CLEANUP] Remove Ember.Handlebars.SafeString
- [#15894](https://github.com/emberjs/ember.js/pull/15894) [CLEANUP] removed `immediateObserver`
- [#15897](https://github.com/emberjs/ember.js/pull/15897) [CLEANUP] Remove controller wrapped param deprecation
- [#15883](https://github.com/emberjs/ember.js/pull/15883) [CLEANUP] Remove this.resource from RouterDSL
- [#15882](https://github.com/emberjs/ember.js/pull/15882) [CLEANUP] Remove Ember.String.fmt
- [#15892](https://github.com/emberjs/ember.js/pull/15892) [CLEANUP] removed `Ember.required`
- [#15223](https://github.com/emberjs/ember.js/pull/15223) Preserve current history state on app boot
- [#15886](https://github.com/emberjs/ember.js/pull/15886) [CLEANUP] Remove arity check from initializer
- [#15893](https://github.com/emberjs/ember.js/pull/15893) [CLEANUP] removed `providing reversed arguments to observer`
- [#15881](https://github.com/emberjs/ember.js/pull/15881) [CLEANUP] Removed console polyfills/shims
- [#15999](https://github.com/emberjs/ember.js/pull/15999) Update acceptance test blueprint to conform to emberjs/rfcs#268
- [#15927](https://github.com/emberjs/ember.js/pull/15927) [BUGFIX] Extend test framework detection to `ember-qunit` and `ember-mocha`
- [#15912](https://github.com/emberjs/ember.js/pull/15912) [CLEANUP] Remove deprecated `{Application,Engine,ApplicationInstance}.registry`
- [#15910](https://github.com/emberjs/ember.js/pull/15910) [CLEANUP] removed `transform-input-on-to-onEvent`
- [#15922](https://github.com/emberjs/ember.js/pull/15922) [CLEANUP] Remove legacy controller proxy behavior
- [#15914](https://github.com/emberjs/ember.js/pull/15914) [CLEANUP] Remove ability to specify `_actions` in `Ember.Route`, `Ember.Controller`, and `Ember.Component`
- [#15923](https://github.com/emberjs/ember.js/pull/15923) [CLEANUP] Remove didInitAttrs lifecycle method
- [#15915](https://github.com/emberjs/ember.js/pull/15915) [CLEANUP] Remove {{render}}
- [#15950](https://github.com/emberjs/ember.js/pull/15950) blueprints/mixin-test: Added RFC-232 variant
- [#15951](https://github.com/emberjs/ember.js/pull/15951) blueprints/service-test: Added RFC-232 variant
- [#15949](https://github.com/emberjs/ember.js/pull/15949) [CLEANUP canary] use `Set` for uniqBy and uniq
- [#15947](https://github.com/emberjs/ember.js/pull/15947) blueprints/util-test: Add RFC232 variants
- [#15943](https://github.com/emberjs/ember.js/pull/15943) blueprints/controller-test: Add RFC232 variants
- [#15948](https://github.com/emberjs/ember.js/pull/15948) [CLEANUP] remove ArrayMixin#contains
- [#15946](https://github.com/emberjs/ember.js/pull/15946) blueprints/initializer-test: Add RFC232 variants
- [#15945](https://github.com/emberjs/ember.js/pull/15945) blueprints/instance-initializers-test: Add RFC232 variants
- [#15957](https://github.com/emberjs/ember.js/pull/15957) RFC 232 route-test blueprints
- [#15934](https://github.com/emberjs/ember.js/pull/15934) blueprints/component-test: Add RFC232 variants
- [#16010](https://github.com/emberjs/ember.js/pull/16010) Cleanup ember-template-compiler's tests
- [#16015](https://github.com/emberjs/ember.js/pull/16015) [CLEANUP] Convert ember-router tests to new style
- [#16036](https://github.com/emberjs/ember.js/pull/16036) [CLEANUP] Convert ember-metal accessors tests to new style
- [#16023](https://github.com/emberjs/ember.js/pull/16023) Make event dispatcher work without jQuery

## 2.18.2 (February 14, 2018)

- [#16245](https://github.com/emberjs/ember.js/pull/16245) [BUGFIX] Ensure errors in deferred component hooks can be recovered.

## 2.18.1 (February 13, 2018)

- [#16174](https://github.com/emberjs/ember.js/pull/16174) [BUGFIX] Enable _some_ recovery of errors thrown during render.
- [#16241](https://github.com/emberjs/ember.js/pull/16241) [BUGFIX] Avoid excessively calling Glimmer AST transforms.

## 2.18.0 (January 1, 2018)

- [95b449](https://github.com/emberjs/ember.js/commit/95b4499b3667712a202bef834268e23867fc8842) [BUGFIX] Ensure `Ember.run.cancel` while the run loop is flushing works properly.
- [#15952](https://github.com/emberjs/ember.js/pull/15952) [BUGFIX] fix regression of clicking link-to with disabled=true
- [#15982](https://github.com/emberjs/ember.js/pull/15982) [BUGFIX] Fix issue with unchaining ChainNodes (again)
- [#15924](https://github.com/emberjs/ember.js/pull/15924) / [#15940](https://github.com/emberjs/ember.js/pull/15940) [BUGFIX] Assert that `classNameBinding` items are non-empty strings
- [#15927](https://github.com/emberjs/ember.js/pull/15927) [BUGFIX] Extend test framework detection to `ember-qunit` and `ember-mocha`
- [#15935](https://github.com/emberjs/ember.js/pull/15935) [BUGFIX] Fix framework detection in blueprints to work with prerelease versions of ember-cli-mocha
- [#15902](https://github.com/emberjs/ember.js/pull/15902) [BUGFIX] Fix link-to throwing in integration tests
- [#15905](https://github.com/emberjs/ember.js/pull/15905) [BUGFIX] Improve error message when calling `inject()`.
- [#15919](https://github.com/emberjs/ember.js/pull/15919) [BUGFIX] Upgrade Backburner.js to v1.3.3, fixing an issue canceling tasks scheduled by scheduleOnce.
- [#14590](https://github.com/emberjs/ember.js/pull/14590) [DEPRECATION] Deprecate using `targetObject`.
- [#15754](https://github.com/emberjs/ember.js/pull/15754) [CLEANUP] Remove `router.router` deprecation.

## 2.17.1 (February 13, 2018)

- [#16174](https://github.com/emberjs/ember.js/pull/16174) [BUGFIX] Enable _some_ recovery of errors thrown during render.
- [#16241](https://github.com/emberjs/ember.js/pull/16241) [BUGFIX] Avoid excessively calling Glimmer AST transforms.

## 2.17.0 (November 29, 2017)

- [#15855](https://github.com/emberjs/ember.js/pull/15855) [BUGFIX] fix regression with computed `filter/map/sort`
- [#15871](https://github.com/emberjs/ember.js/pull/15871) [BUGFIX lts] Refactor / fix error handling scenarios.
    * Revert changes made in 2.11.3 which made all errors thrown within a run loop unable to be caught with normal `try` / `catch`.
    * Prevent unhandled rejections from being thrown twice (once by the `RSVP` unhandled rejection system, and again by `Ember.onerror` if present).
- [#15873](https://github.com/emberjs/ember.js/pull/15873) [BUGFIX] Update to `backburner.js@1.2.3` to prevent issues with swallowing errors thrown within `run.join` callbacks when `Ember.onerror` is present.
- [#15848](https://github.com/emberjs/ember.js/pull/15848) [BUGFIX] Ensure helpers have a consistent API.
- [#15849](https://github.com/emberjs/ember.js/pull/15849) [BUGFIX] Fix issue when observing a computed property that is clobbered during creation.
- [#15797](https://github.com/emberjs/ember.js/pull/15797) [BUGFIX] Fix issues with using partials nested within other partials.
- [#15808](https://github.com/emberjs/ember.js/pull/15808) [BUGFIX] Fix a memory leak in certain testing scenarios.
- [#15746](https://github.com/emberjs/ember.js/pull/15746) [BUGFIX] Fix computed sort regression when array property is initially `null`.
- [#15777](https://github.com/emberjs/ember.js/pull/15777) [BUGFIX] Fix various issues around accessing dynamic data within a partial.
- [#15606](https://github.com/emberjs/ember.js/pull/15606) [BUGFIX] Add fs-extra to deps
- [#15697](https://github.com/emberjs/ember.js/pull/15697) [BUGFIX] Move accessing meta out of the loop
- [#15710](https://github.com/emberjs/ember.js/pull/15710) [BUGFIX] Correctly reset container cache
- [#15613](https://github.com/emberjs/ember.js/pull/15613) [BUGFIX] Don't throw an error, when not all query params are passed to routerService.transitionTo
- [#15707](https://github.com/emberjs/ember.js/pull/15707) [BUGFIX] Fix `canInvoke` for edge cases
- [#15722](https://github.com/emberjs/ember.js/pull/15722) [BUGFIX] empty path in `get` helper should not throw assertion
- [#15733](https://github.com/emberjs/ember.js/pull/15733) [BUGFIX] Fix computed sort regression when array prop initially null
- [#15265](https://github.com/emberjs/ember.js/pull/15265) [BUGFIX] fixed issue when passing `false` to `activeClass` for `{{link-to}}`
- [#15672](https://github.com/emberjs/ember.js/pull/15672) Update router_js to 2.0.0.

## 2.16.3 (February 13, 2018)

- [#15927](https://github.com/emberjs/ember.js/pull/15927) blueprints: Extend test framework detection to `ember-qunit` and `ember-mocha`
- [#15935](https://github.com/emberjs/ember.js/pull/15935) [BUGFIX] blueprints: fix framework detection to work with prerelease versions of ember-cli-mocha
- [#16174](https://github.com/emberjs/ember.js/pull/16174) [BUGFIX] Enable _some_ recovery of errors thrown during render.
- [#16241](https://github.com/emberjs/ember.js/pull/16241) [BUGFIX] Avoid excessively calling Glimmer AST transforms.

## 2.16.2 (November 1, 2017)

- [#15797](https://github.com/emberjs/ember.js/pull/15797) [BUGFIX] Fix issues with using partials nested within other partials.

## 2.16.1 (October 29, 2017)

- [#15722](https://github.com/emberjs/ember.js/pull/15722) [BUGFIX] Avoid assertion when using `(get` helper with empty paths.
- [#15746](https://github.com/emberjs/ember.js/pull/15746) [BUGFIX] Fix computed sort regression when array property is initially `null`.
- [#15613](https://github.com/emberjs/ember.js/pull/15613) [BUGFIX] Prevent an error from being thrown when partial set of query params are passed to the router service.
- [#15777](https://github.com/emberjs/ember.js/pull/15777) [BUGFIX] Fix various issues around accessing dynamic data within a partial.

## 2.16.0 (October 9, 2017)

- [#15604](https://github.com/emberjs/ember.js/pull/15604) Data Adapter: Only trigger model type update if the record live array count actually changed
- [#15610](https://github.com/emberjs/ember.js/pull/15610) [BUGFIX] add inflection to dependencies
- [#15695](https://github.com/emberjs/ember.js/pull/15695) [BUGFIX] Avoid creating event dispatcher in FastBoot with Engines
- [#15702](https://github.com/emberjs/ember.js/pull/15702) [BUGFIX] Correctly escape values in `Ember.CoreObject` assertions
- [#15718](https://github.com/emberjs/ember.js/pull/15718) [BUGFIX] bump backburner (fixes clock + autorun interop)
- [#15577](https://github.com/emberjs/ember.js/pull/15577) [BUGFIX] Include missing sourcemaps in vendorTree.
- [#15552](https://github.com/emberjs/ember.js/pull/15552) [FEATURE] Update blueprints and tests to RFC #176.
- [#15600](https://github.com/emberjs/ember.js/pull/15600) [BUGFIX] ensure “pause on exception” pauses in the right place.
- [#15616](https://github.com/emberjs/ember.js/pull/15616) [DOC release] Improve documentation for RouterService and mount helper.
- [#15600](https://github.com/emberjs/ember.js/pull/15600) [BUGFIX] ensure “pause on exception” pauses in the right place.
- [#15667](https://github.com/emberjs/ember.js/pull/15667) [BUGFIX] Allow `0` to work with `get` helper.
- [#15676](https://github.com/emberjs/ember.js/pull/15676) [BUGFIX] Fix `<input type="range">` so that it can properly bind `min`, `max`, and `value`.
- [#15689](https://github.com/emberjs/ember.js/pull/15689) [BUGFIX] Mark error as handled before transition for error routes and substates.
- [#14764](https://github.com/emberjs/ember.js/pull/14764) Fixed string capitalize for accented characters.
- [#15528](https://github.com/emberjs/ember.js/pull/15528) [DEPRECATION] Deprecate `Controller#content` alias.
- [#15552](https://github.com/emberjs/ember.js/pull/15552) [FEATURE] Update blueprints and tests to RFC #176.

## 2.15.3 (October 9, 2017)

- [#15718](https://github.com/emberjs/ember.js/pull/15718) [BUGFIX] bump backburner (fixes clock + autorun interop)

## 2.15.2 (October 4, 2017)

- [#15604](https://github.com/emberjs/ember.js/pull/15604) [BUGFIX] Ember Inspector Data Adapter: Only trigger model type update if the record live array count actually changed.
- [#15695](https://github.com/emberjs/ember.js/pull/15695) [BUGFIX] Avoid creating event dispatcher in FastBoot with Engines.

## 2.15.1 (October 2, 2017)

- [#15600](https://github.com/emberjs/ember.js/pull/15600) [BUGFIX] ensure “pause on exception” pauses in the right place.
- [#15689](https://github.com/emberjs/ember.js/pull/15689) [BUGFIX] Mark error as handled before transition for error routes and substates.

## 2.15.0 (August 31, 2017)

- [#15577](https://github.com/emberjs/ember.js/pull/15577) [BUGFIX] Include missing sourcemaps in vendorTree.
- [#14848](https://github.com/emberjs/ember.js/pull/14848) [BUGFIX] Allow boolean values for current-when
- [#15572](https://github.com/emberjs/ember.js/pull/15572) [BUGFIX] Fix issue with using negative numbers as an argument passed in from the template.
- [#15535](https://github.com/emberjs/ember.js/pull/15535) [BUGFIX] Ensure that properties of functions are able to be rendered.
- [#14753](https://github.com/emberjs/ember.js/pull/14753) [BUGFIX] Fix `<input type=XXX>` feature detect issue affecting Safari.
- [#15176](https://github.com/emberjs/ember.js/pull/15176) [BUGFIX] Ensure `Controller.prototype.replaceRoute` considers engine's mount point.
- [#15513](https://github.com/emberjs/ember.js/pull/15513) [BUGFIX] Release root components after they are destroyed.
- [#15511](https://github.com/emberjs/ember.js/pull/15511) [BUGFIX] Fixes `onFulfillment` being `undefined` when stepping through RSVP code.
- [#15510](https://github.com/emberjs/ember.js/pull/15510) [BUGFIX] Make sure notification changes are properly triggered for firstObject/lastObject.
- [#15502](https://github.com/emberjs/ember.js/pull/15502) [BUGFIX] Work around a browser bug that causes `getOwner` to sometimes return `undefined`.
- [#14338](https://github.com/emberjs/ember.js/pull/14338) [FEATURE] Remove explicit names from initializers.
- [#15325](https://github.com/emberjs/ember.js/pull/15325) / [#15326](https://github.com/emberjs/ember.js/pull/15326) [FEATURE ember-engines-mount-params] Allow `{{mount` to accept a `model` named parameter.
- [#15347](https://github.com/emberjs/ember.js/pull/15347) [BUGFIX] Make better errors for meta updates after object destruction.
- [#15411](https://github.com/emberjs/ember.js/pull/15411) [CLEANUP] Remove deprecated `Ember.Backburner`.
- [#15366](https://github.com/emberjs/ember.js/pull/15366) [BUGFIX] Allow numeric keys for the `get` helper.
- [#14805](https://github.com/emberjs/ember.js/pull/14805) / [#14861](https://github.com/emberjs/ember.js/pull/14861) / [#14979](https://github.com/emberjs/ember.js/pull/14979) / [#15414](https://github.com/emberjs/ember.js/pull/15414) / [#15415](https://github.com/emberjs/ember.js/pull/15415) [FEATURE ember-routing-router-service] Enable by default.
- [#15193](https://github.com/emberjs/ember.js/pull/15193) [CLEANUP] Remove `owner._lookupFactory` support.

## 2.14.0 (July 5, 2017)

- [#15312](https://github.com/emberjs/ember.js/pull/15312) [BUGFIX] Avoid re-freezing already frozen objects.
- [#15315](https://github.com/emberjs/ember.js/pull/15315) [FEATURE] Add minlength to TextSupport
- [#15321](https://github.com/emberjs/ember.js/pull/15321) [BUGFIX] Improve fastboot debugger/repl experience
- [#15366](https://github.com/emberjs/ember.js/pull/15366) [BUGFIX] Allow numeric keys for the `get` helper.
- [#15242](https://github.com/emberjs/ember.js/pull/15242) [BUGFIX] Fix EmberError import in system/router
- [#15204](https://github.com/emberjs/ember.js/pull/15204) [DEPRECATION] `Ember.MODEL_FACTORY_INJECTIONS` is now always false, and issues a deprecation if set.
- [#15239](https://github.com/emberjs/ember.js/pull/15239) [BUGFIX] Ensure `Ember.deprecate` is exported properly.
- [glimmerjs/glimmer-vm#529](https://github.com/glimmerjs/glimmer-vm/pull/529) [BUGFIX] Fix issues identified with custom element support.
- [#15277](https://github.com/emberjs/ember.js/pull/15277) [BUGFIX] Fix issues with retrying an initial transition.
- [#15138](https://github.com/emberjs/ember.js/pull/15138) [BUGFIX] Fix mocha blueprint service test filename
- [#15193](https://github.com/emberjs/ember.js/pull/15193) [BUGFIX] Ensure `factoryFor` does validation.
- [#15207](https://github.com/emberjs/ember.js/pull/15207) [BUGFIX] Ensure that an engines container is only destroyed once.
- [#15218](https://github.com/emberjs/ember.js/pull/15218) [BUGFIX] Update route-recognizer to v0.3.3.
- [#15015](https://github.com/emberjs/ember.js/pull/15015) Allow mounting routeless engines with a bound engine name
- [#15078](https://github.com/emberjs/ember.js/pull/15078) [DEPRECATION] Deprecate `EventManager#canDispatchToEventManager`.
- [#15085](https://github.com/emberjs/ember.js/pull/15085) Add missing instrumentation for compilation/lookup phase
- [#15150](https://github.com/emberjs/ember.js/pull/15150) [PERF] Cleanup Proxy invalidation tracking.
- [#15168](https://github.com/emberjs/ember.js/pull/15168) [BUGFIX] Ensure that retrying a transition created with `replaceWith` causes a history replacement.
- [#15148](https://github.com/emberjs/ember.js/pull/15148) [BUGFIX] Ensure that using `replace` with `refreshModel` works properly.
- [#15178](https://github.com/emberjs/ember.js/pull/15178) Refactor route to lookup controller for QPs.
- [#15129](https://github.com/emberjs/ember.js/pull/15129) Fix access to service:-document in ember-engines

## 2.13.4 (July 5, 2017)

- [#15321](https://github.com/emberjs/ember.js/pull/15321) [BUGFIX] Improve fastboot debugger/repl experience.

## 2.13.3 (May 31, 2017)

- [#15284](https://github.com/emberjs/ember.js/pull/15284) [BUGFIX] remove nested transaction assertion from glimmer.
- [glimmerjs/glimmer-vm#529](https://github.com/glimmerjs/glimmer-vm/pull/529) [BUGFIX] Fix issues identified with custom element support.

## 2.13.2 (May 18, 2017)

- Revert over eager dependency upgrades in 2.13.1.

## 2.13.1 (May 17, 2017)

- [#15129](https://github.com/emberjs/ember.js/pull/15129) Fix access to document service in `ember-engines`.
- [#15138](https://github.com/emberjs/ember.js/pull/15138) [BUGFIX] Fix mocha blueprint service test filename
- [#15204](https://github.com/emberjs/ember.js/pull/15204) [DEPRECATION] `Ember.MODEL_FACTORY_INJECTIONS` is now always false, deprecate setting it.
- [#15207](https://github.com/emberjs/ember.js/pull/15207) [BUGFIX] Ensure child engines do not have their container destroyed twice.
- [#15242](https://github.com/emberjs/ember.js/pull/15242) [BUGFIX] Fix `EmberError` import in system/router.
- [#15247](https://github.com/emberjs/ember.js/pull/15247) [BUGFIX] Ensure nested custom elements render properly.

## 2.13.0 (April 27, 2017)

- [#15111](https://github.com/emberjs/ember.js/pull/15111) / [#15029](https://github.com/emberjs/ember.js/pull/15029) [PERF] `factoryFor` should cache when possible.
- [#14961](https://github.com/emberjs/ember.js/pull/14961) [BUGIX] [Fixes #14925] remove duplicate `/` in pathname
- [#15065](https://github.com/emberjs/ember.js/pull/15065) [BUGFIX] Guard jQuery access in `setupForTesting`.
- [#15103](https://github.com/emberjs/ember.js/pull/15103) [BUGFIX] Allow calling `Ember.warn` without test.
- [#15106](https://github.com/emberjs/ember.js/pull/15106) [DOC] Introduce a more debugging data to warnings about CP dependencies.
- [#15107](https://github.com/emberjs/ember.js/pull/15107) [PERF] avoid toBoolean conversion when possible (chains).
- [#14011](https://github.com/emberjs/ember.js/pull/14011) [FEATURE ember-unique-location-history-state] Implements [RFC #186](https://github.com/emberjs/rfcs/pull/186).
- [#13231](https://github.com/emberjs/ember.js/pull/13231) [BUGFIX] Fix a bug when using commas in computer property dependent keys.
- [#14890](https://github.com/emberjs/ember.js/pull/14890) [BUGFIX] Fix a race condition where actions are invoked on destroyed DOM nodes.
- [#14894](https://github.com/emberjs/ember.js/pull/14894) [FEATURE ember-no-double-extend] Enable by default.
- [#14781](https://github.com/emberjs/ember.js/pull/14781) / [#14954](https://github.com/emberjs/ember.js/pull/14954) Upgrade to Glimmer VM v0.22
- [#14919](https://github.com/emberjs/ember.js/pull/14919) [DEPRECATION] Deprecate the private `Ember.Router.router` property in favor of `Ember.Router._routerMicrolib`.
- [#14970](https://github.com/emberjs/ember.js/pull/14970) [BUGFIX] Generate integration tests for template helpers by default.
- [#14976](https://github.com/emberjs/ember.js/pull/14976) [BUGFIX] Remove "no use strict" workaround for old versions of iOS 8.

## 2.12.2 (April 27, 2017)

- [#15160](https://github.com/emberjs/ember.js/pull/15160) [BUGFIX] Ensure `Ember.Test` global is setup when including `ember-testing.js`.
- [#15142](https://github.com/emberjs/ember.js/pull/15142) / [#15163](https://github.com/emberjs/ember.js/pull/15163) [BUGFIX] Don’t leak deprecated `container`.
- [#15161](https://github.com/emberjs/ember.js/pull/15161) [BUGFIX] Prevent errors from being triggered during error processing on non ES6 platforms.
- [#15180](https://github.com/emberjs/ember.js/pull/15180) [BUGFIX] Correct `until` values for `this.container` deprecations.


## 2.12.1 (April 7, 2017)

- [#14961](https://github.com/emberjs/ember.js/pull/14961) [BUGIX] Remove duplicate trailing `/` in pathname.
- [#15029](https://github.com/emberjs/ember.js/pull/15029) [PERF] [BUGFIX] cache `factoryFor` injections when possible
- [#15089](https://github.com/emberjs/ember.js/pull/15089) [BUGFIX] Fixing IE and Edge issue causing action handlers to be fired twice.

## 2.12.0 (March 14, 2017)

- [#15000](https://github.com/emberjs/ember.js/pull/15000) / [#15002](https://github.com/emberjs/ember.js/pull/15002) / [#15006](https://github.com/emberjs/ember.js/pull/15006) / [#15008](https://github.com/emberjs/ember.js/pull/15008) / [#15009](https://github.com/emberjs/ember.js/pull/15009) / [#15011](https://github.com/emberjs/ember.js/pull/15011) [PERF] Assorted performance improvements for modern browsers.
- [#14872](https://github.com/emberjs/ember.js/pull/14872) / [#14871](https://github.com/emberjs/ember.js/pull/14871) / [#14883](https://github.com/emberjs/ember.js/pull/14883) [PERF] Simplify action event handler.
- [#14360](https://github.com/emberjs/ember.js/pull/14360) [FEATURE factory-for] Implement `factoryFor`.
- [#14751](https://github.com/emberjs/ember.js/pull/14751) [DEPRECATION] Deprecate `Ember.K`.
- [#14756](https://github.com/emberjs/ember.js/pull/14756) [PERF] Disable costly `eventManager` support when unused.
- [#14794](https://github.com/emberjs/ember.js/pull/14794) [BUGFIX] Fix query param stickiness between models in ember-engines.
- [#14851](https://github.com/emberjs/ember.js/pull/14851) [PERF] only `LOG_VIEW_LOOKUPS` in debug
- [#14829](https://github.com/emberjs/ember.js/pull/14829) [PERF] only `logLibraryVersions` in debug mode
- [#14852](https://github.com/emberjs/ember.js/pull/14852) [PERF] only `LOG_TRANSITIONS` and `LOG_TRANSITIONS_INTERNAL` in debug
- [#14854](https://github.com/emberjs/ember.js/pull/14854) [PERF] only `LOG_ACTIVE_GENERATION` and `LOG_RESOLVER` in debug

## 2.11.3 (March 8, 2017)

- [#14987](https://github.com/emberjs/ember.js/pull/14987) [BUGFIX] Fix a memory leak when components are destroyed.
- [#14986](https://github.com/emberjs/ember.js/pull/14986) [BUGFIX] Fix a memory leak in RSVP.js.
- [#14985](https://github.com/emberjs/ember.js/pull/14985) [BUGFIX] Fix a bug that added babel helpers to the global scope.
- [#14898](https://github.com/emberjs/ember.js/pull/14898) [BUGFIX] Fix an issue where errors in tests sometimes do not cause a failure.
- [#14707](https://github.com/emberjs/ember.js/pull/14707) [BUGFIX] Improve deprecation message for unsafe `style` attribute bindings.

## 2.11.2 (February 19, 2017)

- [#14937](https://github.com/emberjs/ember.js/pull/14937) [BUGFIX] Fix issue preventing `ember generate *` from creating test files as appropriate.

## 2.11.1 (February 16, 2017)

- [#14762](https://github.com/emberjs/ember.js/pull/14762) [BUGFIX] Make ember-template-compiler handle {{input}} helpers with sub-expression "type"
- [#14791](https://github.com/emberjs/ember.js/pull/14791) [BUGFIX] exempt routes that share a controller from duplicate assertion
- [#14860](https://github.com/emberjs/ember.js/pull/14860) [BUGFIX] Add back `mainContext` to loader #14859 (fixes issue with non ember-cli template compilation).
- [#14878](https://github.com/emberjs/ember.js/pull/14878) [DOC] Fix yuidoc package paths to ensure RSVP is properly included in API documentation.
- [#14910](https://github.com/emberjs/ember.js/pull/14910) [BUGFIX] Include blueprints in NPM release, to ensure `ember-source` blueprints are used over `ember-cli-legacy-blueprints`.
- [e94799c](https://github.com/emberjs/ember.js/commit/e94799c54cd464f5ba3642dec83f0000a52eb3b6) [BUGFIX] Update to `route-recognizer@0.2.9` to prevent errors for duplicate route name definitions in `Router.map`.


## 2.11.0 (January 23, 2017)

- [#14762](https://github.com/emberjs/ember.js/pull/14762) [BUGFIX] Ensure subexpressions can be used for `{{input}}`'s `type`.
- [#14723](https://github.com/emberjs/ember.js/pull/14723) [BUGFIX] Improved backtracking re-render assertion message.
- [#14750](https://github.com/emberjs/ember.js/pull/14750) [BUGFIX] Add assertion when a component's `tagName` is a computed property.
- [#14685](https://github.com/emberjs/ember.js/pull/14685) [BUGFIX] Fix `this.$()` returning `undefined` in `willDestroyElement`.
- [#14717](https://github.com/emberjs/ember.js/pull/14717) [BUGFIX] Fix an issue with block params named `attrs`.
- [#14671](https://github.com/emberjs/ember.js/pull/14671) [BUGFIX] Fix an issue with the `list` attribute in `<input>` elements.
- [#14681](https://github.com/emberjs/ember.js/pull/14681) [BUGFIX] Fix an issue with computed properties when using aliases as dependent keys.
- [#14682](https://github.com/emberjs/ember.js/pull/14682) [BUGFIX] Ensure closure actions do not trigger unnecessary re-renders.
- [#14658](https://github.com/emberjs/ember.js/pull/14658) [BUGFIX] Make the ember-source build work.
- [#14389](https://github.com/emberjs/ember.js/pull/14389) [BUGFIX] Move `classNames` and `classNameBindings` properties into the component's prototype.
- [#14389](https://github.com/emberjs/ember.js/pull/14389) [BUGFIX] Disallow mutation of shared concatenatedProperties, such as `classNames` and `classNameBindings`.
- [#14441](https://github.com/emberjs/ember.js/pull/14441) [DEPRECATION] Deprecate remaining usage of the `{{render}}` helper.
- [#14482](https://github.com/emberjs/ember.js/pull/14482) [DEPRECATION] Deprecate `Component#renderToElement`.

## 2.10.2 (December 19, 2016)

- [#14685](https://github.com/emberjs/ember.js/pull/14685) [BUGFIX] Fix `this.$()` returning `undefined` in `willDestroyElement`.
- [#14717](https://github.com/emberjs/ember.js/pull/14717) [BUGFIX] Fix an issue with block params named `attrs`.

## 2.10.1 (December 13, 2016)

- [#14671](https://github.com/emberjs/ember.js/pull/14671) [BUGFIX] Fix an issue with the list attribute in <input> elements.
- [#14681](https://github.com/emberjs/ember.js/pull/14681) [BUGFIX] Fix an issue with computed properties when using aliases as dependent keys.
- [#14682](https://github.com/emberjs/ember.js/pull/14682) [BUGFIX] Ensure closure actions do not trigger unnecessary re-renders.

## 2.10.0 (November 28, 2016)

- [#14293](https://github.com/emberjs/ember.js/pull/14293) [BUGFIX] Remove style warning when the binding is quoted.
- [#12708](https://github.com/emberjs/ember.js/pull/12708) [BUGFIX] Improve compatibility between `Ember.isArray` and the native `Array.isArray` for `FileList`.
- [#14546](https://github.com/emberjs/ember.js/pull/14546) [BUGFIX] Update route-recognizer to v0.2.8.
- [#14575](https://github.com/emberjs/ember.js/pull/14575) [BUGFIX] Disallow calling `Ember.get` with empty paths.
- [#14591](https://github.com/emberjs/ember.js/pull/14591) [BUGFIX] Avoid run.next in `app.visit` resolve handler.
- [#14537](https://github.com/emberjs/ember.js/pull/14537) [BUGFIX] Improve behavior for query params with undefined values.
- [#14545](https://github.com/emberjs/ember.js/pull/14545) [BUGFIX] Fixes a number of issues with loading/error substates in ember-engines.
- [#14571](https://github.com/emberjs/ember.js/pull/14571) [BUGFIX] Prevent errors in watching infrastructure for non-object paths.
- [tildeio/router.js#197](https://github.com/tildeio/router.js/pull/197) [BUGFIX] Fix redirects performed during the routers validation stages. Properly handles `replaceWith` / `transitionTo` for initial and subsequent transitions.
- [#14520](https://github.com/emberjs/ember.js/pull/14520) [BUGFIX] Ensure local variables (block params) have higher precedence over helpers.
- [#14156](https://github.com/emberjs/ember.js/pull/14156) [FEATURE ember-glimmer] Enable by default.

## 2.9.1 (November 1, 2016)

- [#14528](https://github.com/emberjs/ember.js/pull/14528) [BUGFIX] Fix memory leak (leaking component instances in the component registry).
- [#14509](https://github.com/emberjs/ember.js/pull/14509) [BUGFIX] Fix overwriting rest positional parameters when passed as named parameters. Allows `link-to` to be used as a contextual component.
- [#14550](https://github.com/emberjs/ember.js/pull/14550) [BUGFIX] Allow canceling items queued by `run.schedule`.

## 2.9.0 (October 17, 2016)

- No changes from 2.8.2.

## 2.8.3 (November 1, 2016)

- [#14528](https://github.com/emberjs/ember.js/pull/14528) [BUGFIX] Fix memory leak (leaking component instances in the component registry).
- [#14509](https://github.com/emberjs/ember.js/pull/14509) [BUGFIX] Fix overwriting rest positional parameters when passed as named parameters. Allows `link-to` to be used as a contextual component.
- [#14550](https://github.com/emberjs/ember.js/pull/14550) [BUGFIX] Allow canceling items queued by `run.schedule`.

## 2.8.2 (October 6, 2016)

- [#14365](https://github.com/emberjs/ember.js/pull/14365) [BUGFIX] Fix an issue with URLs with encoded characters and a trailing slash.
- [#14382](https://github.com/emberjs/ember.js/pull/14382) [BUGFIX] Allow bound `id` on tagless components.
- [#14421](https://github.com/emberjs/ember.js/pull/14421) [BUGFIX] Fix an issue with local components lookup.

## 2.8.1 (September 14, 2016)

- [#14184](https://github.com/emberjs/ember.js/pull/14184) [BUGFIX] Ensure that promises that reject with non Errors (i.e. something without a `.stack`) do not trigger an error during Ember's internal error processing.
- [#14237](https://github.com/emberjs/ember.js/pull/14237) [BUGFIX] Ensure Engine Routes are deactivated before destruction.
- [#14262](https://github.com/emberjs/ember.js/pull/14262) [BUGFIX] Ensure Controller#transitionToRoute and Route#intermediateTransitionTo work in Engines.
- [#14272](https://github.com/emberjs/ember.js/pull/14272) [BUGFIX] Bump router.js to v1.2.1.
- [#14281](https://github.com/emberjs/ember.js/pull/14281) [BUGFIX] Ensure referencing `parentView` in a computed property / observer dependent key (or in the template) does not cause an error during teardown.
- [#14281](https://github.com/emberjs/ember.js/pull/14281) [BUGFIX] Prevent errors from scheduling a rerender (by setting a property in `willDestroyElement`) after a component is destroyed.
- [#14291](https://github.com/emberjs/ember.js/pull/14291) [BUGFIX] Fix component action bubbling semantics. Actions should not bubble out of a component when returning `true`.

## 2.8.0 (September 8, 2016)

- [#14229](https://github.com/emberjs/ember.js/pull/14229) [BUGFIX] Fix boot errors with `location: 'auto'` when using IE9.
- [#14219](https://github.com/emberjs/ember.js/pull/14219) [BUGFIX] Fix issue with template meta (i.e. compiled template `moduleName`) was being mutated during the rendering process.
- [#14159](https://github.com/emberjs/ember.js/pull/14159) [BUGFIX] Fix rendering system cleanup.
- [#14123](https://github.com/emberjs/ember.js/pull/14123) [BUGFIX] Avoid rerendering outlet state during router destruction.
- [#14077](https://github.com/emberjs/ember.js/pull/14077) [BUGFIX] Update route-recognizer.
- [#14087](https://github.com/emberjs/ember.js/pull/14087) [BUGFIX] Check that route handler exists before triggering actions.
- [#14106](https://github.com/emberjs/ember.js/pull/14106) [BUGFIX] Avoid assertion when `id=` is provided to tagless components.
- [#14110](https://github.com/emberjs/ember.js/pull/14110) [BUGFIX] Fix issues with revalidation during teardown.
- [#14117](https://github.com/emberjs/ember.js/pull/14117) [BUGFIX] Call ArrayProxy's content change hooks
- [#14135](https://github.com/emberjs/ember.js/pull/14135) [BUGFIX] Fix issues around Engine setup and teardown.
- [#14140](https://github.com/emberjs/ember.js/pull/14140) [BUGFIX] Ensure component injections happen in engine instances.
- [#14009](https://github.com/emberjs/ember.js/pull/14009) [BUGFIX] Fix usage of `role` when used in `attributeBindings`.
- [#14044](https://github.com/emberjs/ember.js/pull/14044) / [#14062](https://github.com/emberjs/ember.js/pull/14062) / [#14066](https://github.com/emberjs/ember.js/pull/14066) [BUGFIX] Update `router.js` so that `getHandlers` is invoked lazily.
- [#14054](https://github.com/emberjs/ember.js/pull/14054) [BUGFIX] Ensure substates properly work with `resetNamespace`.
- [#14033](https://github.com/emberjs/ember.js/pull/14033) [BUGFIX] Ensure `fillIn` acceptance test helper only sets value to first matched element.
- [#14058](https://github.com/emberjs/ember.js/pull/14058) [BUGFIX] Fix issues related to `Ember.Router.map` changes in 2.7.0.
- [#14068](https://github.com/emberjs/ember.js/pull/14068) [BUGFIX] Prevent errors when clicking a `{{link-to}}` during an existing transition.
- [#13887](https://github.com/emberjs/ember.js/pull/13887) [BUGFIX] Add assertions for illegal component invocations.
- [#13892](https://github.com/emberjs/ember.js/pull/13892) [CLEANUP] Remove `View#createElement` / `View#destroyElement`.
- [#13895](https://github.com/emberjs/ember.js/pull/13895) [BUGFIX] Fix template meta lookup for nested tagless and blockless components.
- [#13911](https://github.com/emberjs/ember.js/pull/13911) [BUGFIX] Avoid using clobbering `.env` property on components.
- [#13913](https://github.com/emberjs/ember.js/pull/13913) [BUGFIX] Disallow paths beginning with @ in templates.
- [#13920](https://github.com/emberjs/ember.js/pull/13920) [BUGFIX] Add more info to the `Ember.Binding` deprecation.
- [#13757](https://github.com/emberjs/ember.js/pull/13757) / [#13773](https://github.com/emberjs/ember.js/pull/13773) [CLEANUP] Remove legacy view layer features.
- [#13819](https://github.com/emberjs/ember.js/pull/13819) [DOC] Add documentation for container (getOwner, etc.)
- [#13855](https://github.com/emberjs/ember.js/pull/13855) [FEATURE ember-string-ishtmlsafe] Enable by default.
- [#13855](https://github.com/emberjs/ember.js/pull/13855) [FEATURE ember-application-engines] Enable by default.
- [#13855](https://github.com/emberjs/ember.js/pull/13855) [FEATURE ember-runtime-enumerable-includes] Enable by default.
- [#13855](https://github.com/emberjs/ember.js/pull/13855) [FEATURE ember-testing-check-waiters] Enable by default.

## 2.7.3 (September 6, 2016)

- [#14219](https://github.com/emberjs/ember.js/pull/14219) [BUGFIX] Fix issue with mutating template's metadata.

## 2.7.2 (August 30, 2016)

- [#13895](https://github.com/emberjs/ember.js/pull/13895) [BUGFIX] Fix template meta lookup with tagless and blockless components.
- [#14075](https://github.com/emberjs/ember.js/pull/14075) [BUGFIX] In which we revert route-recognizer to the version used in Ember 2.6. 😢

## 2.7.1 (August 15, 2016)

- [#13920](https://github.com/emberjs/ember.js/pull/13920) [BUGFIX] Add more info to the `Ember.Binding` deprecation.
- [#14058](https://github.com/emberjs/ember.js/pull/14058) [BUGFIX] Fix issues related to `Ember.Router.map` changes in 2.7.0.
- [#14068](https://github.com/emberjs/ember.js/pull/14068) [BUGFIX] Prevent errors when clicking a `{{link-to}}` during an existing transition.

## 2.7.0 (July 25, 2016)

- [#13764](https://github.com/emberjs/ember.js/pull/13764) [BUGFIX] Keep rest positional parameters when nesting contextual components if needed.
- [#13781](https://github.com/emberjs/ember.js/pull/13781) [BUGFIX] Fix NoneLocation#getURL
- [#13797](https://github.com/emberjs/ember.js/pull/13797) [BUGFIX] Ensure didInitAttrs deprecation is stripped in prod.
- [#13768](https://github.com/emberjs/ember.js/pull/13768) [BUGFIX] Update route-recognizer to v0.2.0. This addresses a large number of per-existing bugs related to URL encoding. However, in doing so, it might inevitably break existing workarounds in this area. Please refer to the linked pull request for more details.
- [#13634](https://github.com/emberjs/ember.js/pull/13634) [BUGFIX] Fix issues with rerendering blockless and tagless components.
- [#13605](https://github.com/emberjs/ember.js/pull/13605) [BUGFIX] Ensure `pauseTest` runs after other async helpers.
- [#13655](https://github.com/emberjs/ember.js/pull/13655) [BUGFIX] Make debugging `this._super` much easier (remove manual `.call` / `.apply` optimizations).
- [#13672](https://github.com/emberjs/ember.js/pull/13672) [BUGFIX] Fix issue with `this.render` and `this.disconnectOutlet` in routes.
- [#13716](https://github.com/emberjs/ember.js/pull/13716) [BUGFIX] Ensure that `Ember.Test.waiters` allows access to configured test waiters.
- [#13273](https://github.com/emberjs/ember.js/pull/13273) [BUGFIX] Fix a number of query param related issues reported.
- [#13424](https://github.com/emberjs/ember.js/pull/13424) [DEPRECATE] Deprecate Ember.Binding. See [the deprecation guide](https://emberjs.com/deprecations/v2.x/#toc_ember-binding) for more details.
- [#13599](https://github.com/emberjs/ember.js/pull/13599) [FEATURE] Enable `ember-runtime-computed-uniq-by` feature.

## 2.6.2 (July 11, 2016)

- [#13781](https://github.com/emberjs/ember.js/pull/13781) [BUGFIX] Fix NoneLocation#getURL
- [#13797](https://github.com/emberjs/ember.js/pull/13797) [BUGFIX] Ensure didInitAttrs deprecation is stripped in prod.

## 2.6.1 (June 27, 2016)

- [#13634](https://github.com/emberjs/ember.js/pull/13634) [BUGFIX] Fix issues with rerendering blockless and tagless components.
- [#13655](https://github.com/emberjs/ember.js/pull/13655) [BUGFIX] Make debugging `this._super` much easier (remove manual `.call` / `.apply` optimizations).
- [#13672](https://github.com/emberjs/ember.js/pull/13672) [BUGFIX] Fix issue with `this.render` and `this.disconnectOutlet` in routes.

## 2.6.0 (June 8, 2016)

- [#13520](https://github.com/emberjs/ember.js/pull/13520) [BUGFIX] Fixes issues with `baseURL` and `rootURL` in `Ember.HistoryLocation` and ensures that `Ember.NoneLocation` properly handles `rootURL`.
- [#13590](https://github.com/emberjs/ember.js/pull/13590) [BUGFIX] Avoid `_lazyInjections` in production builds.
- [#13442](https://github.com/emberjs/ember.js/pull/13442) [BUGFIX] Revert `Ember.Handlebars.SafeString` deprecation.
- [#13449](https://github.com/emberjs/ember.js/pull/13449) [BUGFIX] Ensure that `Ember.get(null, 'foo')` returns `undefined`.
- [#13465](https://github.com/emberjs/ember.js/pull/13465) [BUGFIX] Propagate loc information for inline link-to transform.
- [#13461](https://github.com/emberjs/ember.js/pull/13461) [BUGFIX] Prevent `Ember.get` from attempting to retrieve properties on primitive objects.
- [#13418](https://github.com/emberjs/ember.js/pull/13418) [BUGFIX] Ensure that passing `run.later` a timeout value of `NaN` does not break all future
  timers.
- [#13435](https://github.com/emberjs/ember.js/pull/13435) [BUGFIX] Fix positional parameters when used with component helper.
- [#13438](https://github.com/emberjs/ember.js/pull/13438) [BUGFIX] Ensure custom components extending from `Ember.LinkComponent` can operate
  in both block and inline form.
- [#13356](https://github.com/emberjs/ember.js/pull/13356) [BUGFIX] Update `Registry#has` to always return true/false.
- [#13359](https://github.com/emberjs/ember.js/pull/13359) [BUGFIX] Fix `{{if}}` and `{{unless}}` subexpression sometimes not updating.
- [#13344](https://github.com/emberjs/ember.js/pull/13344) [BUGFIX] Revert `Ember.merge` deprecation.
- [#13335](https://github.com/emberjs/ember.js/pull/13335) [BUGFIX] Ensure injected property assertion checks `container`. Fixes issues
  with usage of objects created by older addons that are attempting to use `Ember.inject.service()`.
- [#13333](https://github.com/emberjs/ember.js/pull/13333) [BUGFIX] Prevent the `toString` property from being added to the objects own
  properties. Fixes scenarios where the list of own properties changed in debug builds.
- [#13327](https://github.com/emberjs/ember.js/pull/13327) [CLEANUP] Remove deprecate-test-as-function deprecation.
- [#13326](https://github.com/emberjs/ember.js/pull/13326) [CLEANUP] Remove `View.prototype.currentState` deprecation.
- [#13315](https://github.com/emberjs/ember.js/pull/13315) [CLEANUP] Remove legacy view related exports.
- [#13310](https://github.com/emberjs/ember.js/pull/13310) [BUGFIX] Fix `mouseenter` typo in ember-testing helpers.
- [#13314](https://github.com/emberjs/ember.js/pull/13314) [CLEANUP] Remove Metamorph view and mixin.
- [#13144](https://github.com/emberjs/ember.js/pull/13144) / [#13195](https://github.com/emberjs/ember.js/pull/13195) / [#13193](https://github.com/emberjs/ember.js/pull/13193) [CLEANUP] Remove support for `ember-legacy-views` addon.
- [#13192](https://github.com/emberjs/ember.js/pull/13192) [CLEANUP] Remove support for `ember-legacy-controllers` addon.
- [#13295](https://github.com/emberjs/ember.js/pull/13295) [CLEANUP] Disable `render` helper in block form.
- [#13204](https://github.com/emberjs/ember.js/pull/13204) [DEPRECATE] Deprecate Ember.Handlebars.SafeString in favor of Ember.String.htmlSafe
- [#13207](https://github.com/emberjs/ember.js/pull/13207) [DEPRECATE] Depreacte `didInitAttrs` in components
- [#13268](https://github.com/emberjs/ember.js/pull/13268) [DEPRECATE] Deprecate usage of `{{render}}` helper with a model param
- [#13285](https://github.com/emberjs/ember.js/pull/13285) [BUGFIX] Make `Enumerable#firstObject` read only.
- [#13289](https://github.com/emberjs/ember.js/pull/13289) [BUGFIX] Make `Enumerable#lastObject` read only.

## 2.5.1 (April 21, 2016)

- [#13310](https://github.com/emberjs/ember.js/pull/13310) [BUGFIX] Fix `mouseenter` typo in ember-testing helpers.
- [#13333](https://github.com/emberjs/ember.js/pull/13333) [BUGFIX] Prevent the `toString` property from being added to the objects own
  properties. Fixes scenarios where the list of own properties changed in debug builds.
- [#13335](https://github.com/emberjs/ember.js/pull/13335) [BUGFIX] Ensure injected property assertion checks `container`. Fixes issues
  with usage of objects created by older addons that are attempting to use `Ember.inject.service()`.
- [#13344](https://github.com/emberjs/ember.js/pull/13344) [BUGFIX] Revert `Ember.merge` deprecation.

## 2.5.0 (April 11, 2016)

- [#13239](https://github.com/emberjs/ember.js/pull/13239) [BUGFIX] Prevent warnings for unknown feature flags
- [#13287](https://github.com/emberjs/ember.js/pull/13287) [BUGFIX] Fix a recent regression with `Ember.A(null)`
- [#13290](https://github.com/emberjs/ember.js/pull/13290) [BUGFIX] `isStream` is no longer a reserved property name in Components
- [#13294](https://github.com/emberjs/ember.js/pull/13294) [DEPRECATE] Deprecate usage of `{{render}}` with a block
- [#13031](https://github.com/emberjs/ember.js/pull/13031) [BUGFIX] Fix mergedProperties at create time modifying proto
- [#13049](https://github.com/emberjs/ember.js/pull/13049) [BUGFIX] Fixes `{{#with proxy as |foo|}}`
- [#12829](https://github.com/emberjs/ember.js/pull/12829) [BUGFIX] Support tagless components in fastboot
- [#12575](https://github.com/emberjs/ember.js/pull/12575) [FEATURE] Make acceptance helpers fire native events instead of jQuery ones.
- [#12929](https://github.com/emberjs/ember.js/pull/12929) [BUGFIX] Fix bug causing an initial capital to be interpreted as a global.
- [#12928](https://github.com/emberjs/ember.js/pull/12928) [FEATURE ember-htmlbars-component-generation] Remove feature.
- [#13024](https://github.com/emberjs/ember.js/pull/13024) [BUGFIX] Change internal async acceptance test helpers to be somewhat more efficient in determining router transition status.
- [FEATURE] Add helper method named `Ember.assign` to roughly emulate `Object.assign`.

## 2.4.5 (April 11, 2016)

- [#13239](https://github.com/emberjs/ember.js/pull/13239) [BUGFIX] Prevent warnings for unknown feature flags.
- [#13294](https://github.com/emberjs/ember.js/pull/13294) [DEPRECATE] Deprecate usage of `{{render}}` with a block.

## 2.4.4 (April 3, 2016)

- [#13177](https://github.com/emberjs/ember.js/pull/13177) [BUGFIX] Allow contextual component attributes are mutable (allowing for two way binding).
- [#13185](https://github.com/emberjs/ember.js/pull/13185) [BUGFIX] Ensure `{{render}}` sets up target properly (fixes issues with `{{render}}`'ed templates using actions).
- [#13202](https://github.com/emberjs/ember.js/pull/13202) [BUGFIX] Merge in active transition QPs when doing a transition.
- [#13218](https://github.com/emberjs/ember.js/pull/13218) [BUGFIX] Do not refresh routes on initial transition.
- [#13228](https://github.com/emberjs/ember.js/pull/13228) [BUGFIX] re-enable link-to when disabledWhen changes values.

## 2.4.3 (March 17, 2016)

- [#13118](https://github.com/emberjs/ember.js/pull/13118) [BUGFIX] Work around Chrome 49/50 optimization bug affecting helper usage.

## 2.4.2 (March 8, 2016)

- [#13031](https://github.com/emberjs/ember.js/pull/13031) [BUGFIX] Fix mergedProperties at create time modifying proto
- [#13049](https://github.com/emberjs/ember.js/pull/13049) [BUGFIX] Fixes `{{#with proxy as |foo|}}`

## 2.4.1 (February 29, 2016)

- [#13030](https://github.com/emberjs/ember.js/pull/13030) [BUGFIX] Fix legacy addon deprecations

## 2.4.0 (February 29, 2016)

- [#12996](https://github.com/emberjs/ember.js/pull/12996) [BUGFIX] Fixes 12995 #with array yields true
- [#13013](https://github.com/emberjs/ember.js/pull/13013) [BUGFIX] Do not set model on `{{render}}` rerender when only a single argument was provided.
- [#13015](https://github.com/emberjs/ember.js/pull/13015) Add deprecation when legacy addon flag is enabled.
- [#12922](https://github.com/emberjs/ember.js/pull/12922) [BUGFIX] Special case `{{#with}}` for `isTruthy`
- [#12934](https://github.com/emberjs/ember.js/pull/12934) [BUGFIX] Ensure `Route#transitionTo` returns a `Transition` object.
- [#12941](https://github.com/emberjs/ember.js/pull/12941) [BUGFIX] Update Backburner to latest ([compare view](https://github.com/ebryn/backburner.js/compare/22a4df33f23c40257bc49972e5833038452ded2e...325a969dbc7eae42dc1edfbf0ae9fb83923df5a6)).
- [#12939](https://github.com/emberjs/ember.js/pull/12939) [BUGFIX] Avoid allocating a binding map in meta when possible.
- [#12947](https://github.com/emberjs/ember.js/pull/12947) [BUGFIX] Avoid using prototype extensions if possible ({add,remove}ArrayObserver).
- [#12942](https://github.com/emberjs/ember.js/pull/12942) [BUGFIX] Do not rely prototype extensions (objectAt).
- [#12991](https://github.com/emberjs/ember.js/pull/12991) [BUGFIX] Fix a regression in `Ember.computed.sort`.
- [#12491](https://github.com/emberjs/ember.js/pull/12491) [BUGFIX] allow watching of ES5+ Getter
- [#12829](https://github.com/emberjs/ember.js/pull/12829) [BUGFIX] Support tagless components in fastboot
- [#12847](https://github.com/emberjs/ember.js/pull/12847) [BUGFIX] Add warning for “deep @each” usage in dependent keys.
- [#12848](https://github.com/emberjs/ember.js/pull/12848) Make dependencies that end in `@each` expand to `[]`.
- [#12877](https://github.com/emberjs/ember.js/pull/12877) [BUGFIX] Upgrade htmlbars to 0.14.14. Fixes bug with lost cursor position with `<input oninput={{action 'foo'}}>`.
- [#12908](https://github.com/emberjs/ember.js/pull/12908) [BUGFIX] Fix issue that prevented recomputation of `ArrayProxy` values under certain circumstances.
- [#12348](https://github.com/emberjs/ember.js/pull/12348) Route#disconnectOutlet should not be private
- [#12648](https://github.com/emberjs/ember.js/pull/12648) Move `packages/**/lib/main.js` to `packages/**/lib/index.js`.
- [#12647](https://github.com/emberjs/ember.js/pull/12647) update cli
- [#12638](https://github.com/emberjs/ember.js/pull/12638) Update references to find methods
- [#12757](https://github.com/emberjs/ember.js/pull/12757) Update build related deps.
- [#12662](https://github.com/emberjs/ember.js/pull/12662) correction for Ember.String.capitalize docs
- [#12674](https://github.com/emberjs/ember.js/pull/12674) removed unused `name` prop
- [#12664](https://github.com/emberjs/ember.js/pull/12664) Include NaN as a falsey value in the `with` helper's docstring
- [#12698](https://github.com/emberjs/ember.js/pull/12698) convert all this._super.apply(this, arguments) to this._super(...arguments)

## v2.3.2 (March 17, 2016)

- [#13118](https://github.com/emberjs/ember.js/pull/13118) [BUGFIX] Work around Chrome 49/50 optimization bug affecting helper usage.

## v2.3.1 (February 4, 2016)

- [#12829](https://github.com/emberjs/ember.js/pull/12829) [BUGFIX] Support tagless components in fastboot.
- [#12848](https://github.com/emberjs/ember.js/pull/12848) Make dependencies that end in `@each` expand to `[]`.
- [#12877](https://github.com/emberjs/ember.js/pull/12877) [BUGFIX] Upgrade htmlbars to 0.14.14. Fixes bug with lost cursor position with `<input oninput={{action 'foo'}}>`.
- [#12908](https://github.com/emberjs/ember.js/pull/12908) [BUGFIX] Fix issue that prevented recomputation of `ArrayProxy` values under certain circumstances.


## 2.3.0 (January 17, 2016)

- [#12712](https://github.com/emberjs/ember.js/pull/12712) [BUGFIX] Create a new hash parameter when creating a component cell
- [#12746](https://github.com/emberjs/ember.js/pull/12746) [BUGFIX] Update htmlbars to 0.14.11 to fix [CVE-2015-7565](https://emberjs.com/blog/2016/01/14/security-releases-ember-1-11-4-1-12-2-1-13-12-2-0-3-2-1-2-2-2-1.html).
- [#12752](https://github.com/emberjs/ember.js/pull/12752) [BUGFIX] Do not re-raise on errors handled in route error action.
- [#12764](https://github.com/emberjs/ember.js/pull/12764) [BUGFIX] Read values of `action` helper parameters
- [#12793](https://github.com/emberjs/ember.js/pull/12793) [BUGFIX] Remove jQuery version assertion.
- [#12659](https://github.com/emberjs/ember.js/pull/12659) [BUGFIX] Update HTMLBars to 0.14.7.
- [#12666](https://github.com/emberjs/ember.js/pull/12666) [BUGFIX] Prevent triggering V8 memory leak bug through registry / resolver access.
- [#12677](https://github.com/emberjs/ember.js/pull/12677) [BUGFIX] Remove FastBoot monkeypatches.
- [#12680](https://github.com/emberjs/ember.js/pull/12680) [BUGFIX] Clear cached instances when factories are unregistered.
- [#12682](https://github.com/emberjs/ember.js/pull/12682) [BUGFIX] Fix rerendering contextual components when invoked with dot syntax and block form.
- [#12686](https://github.com/emberjs/ember.js/pull/12686) [BUGFIX] Ensure HTML safe warning is not thrown for `null` and `undefined` values.
- [#12699](https://github.com/emberjs/ember.js/pull/12699) [BUGFIX] Only add deprecated container after create when present (prevents errors when non-extendable factory is frozen after creation).
- [#12705](https://github.com/emberjs/ember.js/pull/12705) [BUGFIX] Fix FastBoot URL parsing crash.
- [#12728](https://github.com/emberjs/ember.js/pull/12728) [BUGFIX] Fix incorrect export for `Ember.computed.collect`.
- [#12731](https://github.com/emberjs/ember.js/pull/12731) [BUGFIX] Ensure `container` can still be provided to `.create` (prevents an error and provides a helpful deprecation).
- [#12626](https://github.com/emberjs/ember.js/pull/12626) [BUGFIX] Fix "rest" style positional params in contextual components when using dot syntax.
- [#12627](https://github.com/emberjs/ember.js/pull/12627) [CLEANUP] Remove unused `ENV` flags.
  * `Ember.ENV.ENABLE_ALL_FEATURES` is removed (wasn't functionally different than `Ember.ENV.ENABLE_OPTIONAL_FEATURES`).
  * `Ember.SHIM_ES5` is removed (Ember 2.x only supports ES5 compliant browsers so this flag was unused).
  * `Ember.ENV.DISABLE_RANGE_API` is removed (unused since HTMLBars landed in 1.10).
- [#12628](https://github.com/emberjs/ember.js/pull/12628) [BUGFIX] Fix processing arguments in rerender for contextual components.
- [#12629](https://github.com/emberjs/ember.js/pull/12629) [BUGFIX] Expose `ownerInjection` method on `ContainerProxy`.
- [#12636](https://github.com/emberjs/ember.js/pull/12636) [BUGFIX] Ensure `Ember.Mixin.prototype.toString` is defined (prevents issues with `Object.seal(Ember.Mixin.prototype)` in debug builds.
- [#12532](https://github.com/emberjs/ember.js/pull/12532) Bump RSVP dependency from 3.0.6 to 3.1.0.
- [#12422](https://github.com/emberjs/ember.js/pull/12422) / [#12495](https://github.com/emberjs/ember.js/pull/12495) / [#12517](https://github.com/emberjs/ember.js/pull/12517) / [#12561](https://github.com/emberjs/ember.js/pull/12561) / [#12542](https://github.com/emberjs/ember.js/pull/12542) / [#12570](https://github.com/emberjs/ember.js/pull/12570) [FEATURE ember-contextual-components]
- [#11874](https://github.com/emberjs/ember.js/pull/11874) / [#12562](https://github.com/emberjs/ember.js/pull/12562) / [#12557](https://github.com/emberjs/ember.js/pull/12557) / [#12578](https://github.com/emberjs/ember.js/pull/12578) / [#12599](https://github.com/emberjs/ember.js/pull/12599) / [#12570](https://github.com/emberjs/ember.js/pull/12570) / [#12604](https://github.com/emberjs/ember.js/pull/12604) / [#12609](https://github.com/emberjs/ember.js/pull/12609) [FEATURE ember-container-inject-owner]
- [#12314](https://github.com/emberjs/ember.js/pull/12314) [BUGFIX] Mandatory setter should check prototype descriptors.
- [#12485](https://github.com/emberjs/ember.js/pull/12485) [BUGFIX] Access property only once during `Ember.get`.
- [#12503](https://github.com/emberjs/ember.js/pull/12503) Add helpful assertion when a tagless component includes event handler methods.

## v2.2.0 (November 16, 2015)

- [#12600](https://github.com/emberjs/ember.js/pull/12600) [BUGFIX beta] Guard against `null` `attrs` in `getRoot` hook.
- [#12445](https://github.com/emberjs/ember.js/pull/12445) [BUGFIX] Ensure rest arg positionalParams can be supplied as hash arguments.
- [#12456](https://github.com/emberjs/ember.js/pull/12456) [BUGFIX] Allow usage of bound properties in `{{link-to}}` for `bubbles`, `preventDefault`, `target`, `replace`, and `disabledWhen`.
- [#12503](https://github.com/emberjs/ember.js/pull/12503) [BUGFIX] Add assertions for tagless components that include event handler functions (i.e. `click`).
- [#12464](https://github.com/emberjs/ember.js/pull/12464) [BUGFIX] `Ember.String.htmlSafe()` should return a instance of SafeString for `null` / `undefined`.
- [#12463](https://github.com/emberjs/ember.js/pull/12463) [BUGFIX] Fix uglification introduced bug with super wrapping.
- [#12519](https://github.com/emberjs/ember.js/pull/12519) [BUGFIX] Ensure closure actions are wrapped in a run loop.
- [#12214](https://github.com/emberjs/ember.js/pull/12214) Remove most of defeaturEify in favor of babel-plugin-filter-imports.
- [#12253](https://github.com/emberjs/ember.js/pull/12253) [BUGFIX] Remove superfluous `routing-service` initializer.
- [#12247](https://github.com/emberjs/ember.js/pull/12247) [BUGFIX] Avoid dirtying based on `Ember.Object`'s when `Ember.set` is not used.
- [#12262](https://github.com/emberjs/ember.js/pull/12262) [BUGFIX] Break circular references in rejected jqXhr promises.
- [#12289](https://github.com/emberjs/ember.js/pull/12289) [BUGFIX] Prevent creating `view` and `controller` template locals when their respective legacy addon's are not loaded.
- [#12309](https://github.com/emberjs/ember.js/pull/12309) [BUGFIX] Use `Cache` for tagname operations.
- [#12318](https://github.com/emberjs/ember.js/pull/12318) [BUGFIX] Ensure attributeBindings work when legacy view addon is not present.
- [#12370](https://github.com/emberjs/ember.js/pull/12370) [DEPRECATION] Deprecate passing function as test argument to `Ember.deprecate` / `Ember.warn` / `Ember.assert`.
- [#12416](https://github.com/emberjs/ember.js/pull/12416) [BUGFIX] Ensure components actions function without controller addon.

## v2.1.1 (November 16, 2015)

- [#12445](https://github.com/emberjs/ember.js/pull/12445) [BUGFIX] Ensure rest arg style positionalParams can be omitted.
- [#12456](https://github.com/emberjs/ember.js/pull/12456) [BUGFIX]Allow usage of bound properties in `{{link-to}}` for `bubbles`, `preventDefault`, `target`, `replace`, and `disabledWhen`.
- [#12463](https://github.com/emberjs/ember.js/pull/12463) [BUGFIX] Fix uglification introduced bug with super wrapping.
- [#12464](https://github.com/emberjs/ember.js/pull/12464) [BUGFIX] `Ember.String.htmlSafe()` should return a instance of SafeString for `null` / `undefined`.

## v2.1.0 (October 5, 2015)

- [#12396](https://github.com/emberjs/ember.js/pull/12396) [BUGFIX] Ensure that `this._super` is called when extending from `Ember.Component`.
- [#12383](https://github.com/emberjs/ember.js/pull/12383) [BUGFIX] Fix `Ember.String.classify` to underscore items with a leading dash/underscore.
- [#12350](https://github.com/emberjs/ember.js/pull/12350) [BUGFIX] Provide a helpful assertion when using positional parameters with a param of the same name.
- [#12345](https://github.com/emberjs/ember.js/pull/12345) [BUGFIX] Ensure `{{link-to}}` properly handles bound values for `activeClass`, `disabledClass`, and `loadingClass`.
- [#12359](https://github.com/emberjs/ember.js/pull/12359) [BUGFIX] Ensure that functions are properly super wrapped if they include `.call` or `.apply` (this is in addition to `._super`).
- [#12075](https://github.com/emberjs/ember.js/pull/12075) [PERF] Avoid creating a run-loop for events that are unhandled.
- [#12260](https://github.com/emberjs/ember.js/pull/12260) [BUGFIX] Ensure `init` is completed before `didReceiveAttrs` is fired.
- [#12323](https://github.com/emberjs/ember.js/pull/12323) [BUGFIX beta] Make `{{get something 'path.goes.here'}}` work.
- [#12331](https://github.com/emberjs/ember.js/pull/12331) [BUGFIX beta] Update backburner.js to prevent issues when interleaving `run.later` and `run.next`.
- [#12157](https://github.com/emberjs/ember.js/pull/12157) [DEPRECATION] Allow deprecated access to registry from `Application` (argument to initializers) and `ApplicationInstance` (argument to instance initializers) instances.
- [#12156](https://github.com/emberjs/ember.js/pull/12156) [BUGFIX] Add helpful error message when providing incorrect arguments to `Ember.computed`.
- [#12253](https://github.com/emberjs/ember.js/pull/12253) [BUGFIX] Remove initializer causing errors during `App.reset`.
- [#12272](https://github.com/emberjs/ember.js/pull/12272) [BUGFIX] Update HTMLBars to fix memory leak when an `{{each}}` is inside an `{{if}}`.
- [#12184](https://github.com/emberjs/ember.js/pull/12184) [BUGFIX] Prevent `classNames` from being duplicated.
- [#12198](https://github.com/emberjs/ember.js/pull/12198) [BUGFIX] Further cleanup of the `link-to` component, allow for extending `{{link-to}}` via `Ember.LinkComponent.extend`.
- [#12208](https://github.com/emberjs/ember.js/pull/12208) [BUGFIX] Ember.computed.sort was crashing when it hit a null value. Fixes #12207.
- [#12188](https://github.com/emberjs/ember.js/pull/12188) [BUGFIX] Ensure `_actions` specified to extend works.
- [#12241](https://github.com/emberjs/ember.js/pull/12241) [BUGFIX] Provide a helpful error for undefined closure actions.
- [#12256](https://github.com/emberjs/ember.js/pull/12256) [BUGFIX] Ensure concat streams unsubscribe properly.
- [#12262](https://github.com/emberjs/ember.js/pull/12262) [BUGFIX] Breaks circular references in rejected jqXhr promises
- [#12297](https://github.com/emberjs/ember.js/pull/12297) / [#12299](https://github.com/emberjs/ember.js/pull/12299) [BUGFIX] Remove extra work per component on initial render.
- [#12163](https://github.com/emberjs/ember.js/pull/12163) [BUGFIX] Move `View#currentState` to `View#_currentState`.
- [#12163](https://github.com/emberjs/ember.js/pull/12163) [DEPRECATION] Deprecate using the private `currentState` property on views/components.
- [#12132](https://github.com/emberjs/ember.js/pull/12132) [BUGFIX] Fix stack overflow issue in `_super` wrapper updates.
- [#12138](https://github.com/emberjs/ember.js/pull/12138) [BUGFIX] Do not require `this._super(...arguments)` when components implement `didReceiveAttrs`.
- [#12170](https://github.com/emberjs/ember.js/pull/12170) [BUGFIX release] Ensure `Ember.computed.sum` returns `0` if the array to be operated on is `null` or `undefined`.
- [#12176](https://github.com/emberjs/ember.js/pull/12176) [BUGFIX] Enable extending `Ember.LinkComponent` for customizations.
- [#10173](https://github.com/emberjs/ember.js/pull/10173) [BUGFIX] Ensure non-singleton injections are not cached incorrectly.
- [#11966](https://github.com/emberjs/ember.js/pull/11966) [PERF] Refactor Meta.
- [#12057](https://github.com/emberjs/ember.js/pull/12057) Allow `instanceInitializers` to set `customEvents`.
- [#12059](https://github.com/emberjs/ember.js/pull/12059) [BUGFIX] Allow setting an entry in `Application#customEvents` to `null` to opt out of event listeners.
- [#12034](https://github.com/emberjs/ember.js/pull/12034) [BUGFIX] Ensure `currentRouteName` and `currentPath` are set properly for loading and error routes.
- [#12062](https://github.com/emberjs/ember.js/pull/12062) Remove the need for `this.__nextSuper`, and make debugging methods with `this._super` calls much easier.
- [#12116](https://github.com/emberjs/ember.js/pull/12116) [FEATURE ember-debug-handlers] Enable by default.
- [#12117](https://github.com/emberjs/ember.js/pull/12117) [FEATURE ember-registry-container-reform] Enable by default.
- [#11440](https://github.com/emberjs/ember.js/pull/11440) [DEPRECATION] Deprecate using `instance.container.lookup` on first argument to `instanceInitializers`. Use `instance.lookup` instead.
- [#11440](https://github.com/emberjs/ember.js/pull/11440) [DEPRECATION] Deprecate passing two arguments to an initializers `initialize` function.

## 2.0.0 (August 13, 2015)

- [#11213](https://github.com/emberjs/ember.js/pull/11213) [BREAKING] Remove chaining in Observable.set
- [#12036](https://github.com/emberjs/ember.js/pull/12036) Cleanup CP Set and  Volatile
- [#11993](https://github.com/emberjs/ember.js/pull/11993) [CLEANUP] Remove `Ember.TrackedArray` and `Ember.SubArray`.
- [#11550](https://github.com/emberjs/ember.js/pull/11550) [BUGFIX] Ensure that specifying an observer in a child class only observes changes to the childs dependent keys.
- [#10259](https://github.com/emberjs/ember.js/pull/10259) [BUGFIX] Make `Ember.computed.or` return the last falsey value (similar to `||`).
- [#11957](https://github.com/emberjs/ember.js/pull/11957) [BUGFIX] Enable `Ember.DefaultResolver` to properly normalize hyphens (`-`).
- [#11969](https://github.com/emberjs/ember.js/pull/11969) / [#11959](https://github.com/emberjs/ember.js/pull/11959) [DEPRECATE] Deprecate usage of `Ember.String.fmt`.
- [#11990](https://github.com/emberjs/ember.js/pull/11990) [PERF] `@each` should remain a stable node for chains.
- [#11964](https://github.com/emberjs/ember.js/pull/11964) [BUGFIX] Update htmlbars to v0.14.2.
- [#11965](https://github.com/emberjs/ember.js/pull/11965) [CLEANUP] Remove `Ember.HTMLBars.makeViewHelper`.
- [#11965](https://github.com/emberjs/ember.js/pull/11965) [CLEANUP] Remove `Ember.HTMLBars._registerHelper`.
- [#11965](https://github.com/emberjs/ember.js/pull/11965) [CLEANUP] Remove `Ember.Handlebars.registerHelper`.
- [#11965](https://github.com/emberjs/ember.js/pull/11965) [CLEANUP] Remove `Ember.Handlebars.makeBoundHelper`.
- [#11965](https://github.com/emberjs/ember.js/pull/11965) [CLEANUP] Remove `Ember.Handlebars.makeViewHelper`.
- [#11965](https://github.com/emberjs/ember.js/pull/11965) [CLEANUP] Remove `Ember.Handlebars.helper`.
- [#11965](https://github.com/emberjs/ember.js/pull/11965) [CLEANUP] Remove `Ember.Handlebars.registerBoundHelper`.
- [#12024](https://github.com/emberjs/ember.js/pull/12024) [CLEANUP] Remove `ComponentTemplateDeprecation` mixin.
- [#12001](https://github.com/emberjs/ember.js/pull/12001) [CLEANUP] Remove {{with}} keyword's controller option.
- [#12027](https://github.com/emberjs/ember.js/pull/12027) [CLEANUP] Remove deprecated `template` access in Ember.Component.
- [#12019](https://github.com/emberjs/ember.js/pull/12019) [DOC] Add helpful assertion when using @each as a leaf in DK.
- [#12020](https://github.com/emberjs/ember.js/pull/12020) [CLEANUP] Remove specifying `.render` method to views and components.
- [#12027](https://github.com/emberjs/ember.js/pull/12027) [CLEANUP] Remove `positionalParams` specified to `Ember.Component` at extend time.
- [#12027](https://github.com/emberjs/ember.js/pull/12027) [CLEANUP] Remove support for specifying `template` in a component.
- [#12027](https://github.com/emberjs/ember.js/pull/12027) [CLEANUP] Remove deprecated `template` access in Ember.Component.
- [#12028](https://github.com/emberjs/ember.js/pull/12028) [CLEANUP] Store actions in `actions` not `_actions`.
- [#11854](https://github.com/emberjs/ember.js/pull/11854) [CLEANUP] Remove `length` from `OrderedSet` and `Map`.
- [#11854](https://github.com/emberjs/ember.js/pull/11854) [CLEANUP] Remove `OrderedSet.prototype.length`.
- [#11854](https://github.com/emberjs/ember.js/pull/11854) [CLEANUP] Remove `Ember.libraries.each`.
- [#11854](https://github.com/emberjs/ember.js/pull/11854) [CLEANUP] Remove deprecated special `{{each}}` keys.
- [#11854](https://github.com/emberjs/ember.js/pull/11854) [CLEANUP] Remove Ember.Location.registerImplementation.
- [#11854](https://github.com/emberjs/ember.js/pull/11854) [CLEANUP] Remove `{{template}}` support.
- [#11854](https://github.com/emberjs/ember.js/pull/11854) [CLEANUP] Remove Ember.Route#setupControllers deprecation.
- [#11854](https://github.com/emberjs/ember.js/pull/11854) [CLEANUP] Remove Ember.Route#renderTemplates deprecation.
- [#11845](https://github.com/emberjs/ember.js/pull/11845) [CLEANUP] Remove Ember.Application#initialize.
- [#11845](https://github.com/emberjs/ember.js/pull/11845) [CLEANUP] Remove support for `Ember.Application.resolver`.
- [#11845](https://github.com/emberjs/ember.js/pull/11845) [CLEANUP] Remove support for resolver without `normalize`.
- [#11845](https://github.com/emberjs/ember.js/pull/11845) [CLEANUP] Remove IE6 & IE7 deprecation.
- [#11845](https://github.com/emberjs/ember.js/pull/11845) [CLEANUP] Remove returning string of attrs from helper support.
- [#11845](https://github.com/emberjs/ember.js/pull/11845) [CLEANUP] Remove support for returning string of attrs from helper.
- [#11845](https://github.com/emberjs/ember.js/pull/11845) [CLEANUP] Remove support for `view` and `viewClass` with `{{outlet}}`.
- [#11771](https://github.com/emberjs/ember.js/pull/11771) [CLEANUP] Remove deprecated `Controller#controllerFor`.
- [#11750](https://github.com/emberjs/ember.js/pull/11750) [CLEANUP] Remove `metaPath`, `getMeta` and `setMeta`.
- [#11854](https://github.com/emberjs/ember.js/pull/11854) [CLEANUP] Lots of deprecation removals.
- [#11820](https://github.com/emberjs/ember.js/pull/11820) [CLEANUP] Remove sendEvent hook.
- [#11815](https://github.com/emberjs/ember.js/pull/11815) [CLEANUP] Remove `{chainWatchers: null}` from `Meta.prototype`.
- [#11819](https://github.com/emberjs/ember.js/pull/11819) [CLEANUP] Abstract chainWatchers into an object.
- [#11824](https://github.com/emberjs/ember.js/pull/11824) Revert "[CLEANUP] Remove support for reversed args in `Ember.observer`.
- [#11822](https://github.com/emberjs/ember.js/pull/11822) [BUGFIX] Deprecate `currentWhen` with `{{link-to}}`.
- [#11838](https://github.com/emberjs/ember.js/pull/11838) [CLEANUP] Only register `Ember.ContainerView` when legacy view support enabled.
- [#11852](https://github.com/emberjs/ember.js/pull/11852) [CLEANUP] Remove `Ember.RenderBuffer`.
- [#11853](https://github.com/emberjs/ember.js/pull/11853) [CLEANUP] Remove deprecated `Registry` and `Container` behavior.
- [#11850](https://github.com/emberjs/ember.js/pull/11850) [CLEANUP] Remove context switching `{{each}}` helper variant.
- [#11878](https://github.com/emberjs/ember.js/pull/11878) [BUGFIX] Fix issue with QP routes named after `Object.prototype` properties.
- [#11903](https://github.com/emberjs/ember.js/pull/11903) [BUGFIX] Upgrade RSVP + Backburner. Fixes a number of scenarios around testing rejected promise scenarios.
- [#11914](https://github.com/emberjs/ember.js/pull/11914) [CLEANUP] Remove `Ember.oneWay`.
- [#11895](https://github.com/emberjs/ember.js/pull/11895) [BUGFIX] Properly detect if the environment is Node.
- [#11897](https://github.com/emberjs/ember.js/pull/11897) [CLEANUP] Remove globals lookup from templates.
- [#11777](https://github.com/emberjs/ember.js/pull/11777) [CLEANUP] Remove context switching form of `{{#each model}}{{/each}}`, use `{{#each model as |item|}}{{/each}}` instead.
- [#11484](https://github.com/emberjs/ember.js/pull/11484) [CLEANUP] Remove `Ember.ArrayController` support, use `ember-legacy-controllers` addon for support until 2.4.
- [#11782](https://github.com/emberjs/ember.js/pull/11782) [CLEANUP] Remove support for reversed args in `Ember.observer`.
- [#11722](https://github.com/emberjs/ember.js/pull/11722) [BUGFIX] Provide a better error when `InjectedProperty` is misused.
- [#11691](https://github.com/emberjs/ember.js/pull/11691) [BUGFIX] `{{get}}` helper subscribes to values and can be updated.
- [#11792](https://github.com/emberjs/ember.js/pull/11792) [CLEANUP] Remove `Application#then` support.
- [#11737](https://github.com/emberjs/ember.js/pull/11737) [BUGFIX] Ensure `this` context inside former reduced computed macros is correct.
- [#11790](https://github.com/emberjs/ember.js/pull/11790) [CLEANUP] Remove context switching `{{with foo}}` support.
- [#11754](https://github.com/emberjs/ember.js/pull/11754) [CLEANUP] Remove `emptyView="Global.foo"` for Ember.View instances.
- [#11746](https://github.com/emberjs/ember.js/pull/11746) [CLEANUP] Cleanup `Ember.get`:
  - Remove support for globals: `Ember.get('App.foo')` and `Ember.get(null, 'App.foo')`.
  - Remove support for `this`: `Ember.get(object, 'this.foo')`.
  - Enforce strict usage with two arguments: `Ember.get(object, path)`.
  - Assert object is a non-null object & path is a string.
- [#11761](https://github.com/emberjs/ember.js/pull/11761) [CLEANUP] Cleanup `Ember.set`:
  - Removes support for set with global paths.
  - Removes support for set with 'this' paths.
  - Removes support for set with null as first parameter.
  - Path must be a string.
  - Requires set to be passed in three or four arguments.
- [#11797](https://github.com/emberjs/ember.js/pull/11797) [CLEANUP] Move support of `itemController`, `itemViewClass`, `itemView`, etc into `ember-legacy-views` addon.
- [#11776](https://github.com/emberjs/ember.js/pull/11776) [CLEANUP] Remove deprecated support for `{{each foo as bar}}`.
- [#11770](https://github.com/emberjs/ember.js/pull/11770) [CLEANUP] Remove deprecated `Controller#needs`, use `Ember.inject.controller()` instead.
- [#11800](https://github.com/emberjs/ember.js/pull/11800) [CLEANUP] Move support of `{{view}}` helper into `ember-legacy-views` addon.
- [#11804](https://github.com/emberjs/ember.js/pull/11804) [CLEANUP] Remove `EmberObject.createWithMixins`.
- [#11786](https://github.com/emberjs/ember.js/pull/11786) [CLEANUP] Remove `{{with foo as bar}}` support.
- [#11805](https://github.com/emberjs/ember.js/pull/11805) [CLEANUP] Remove deprecated `anyBy`, `everyProperty`, and `some`.
- [#11788](https://github.com/emberjs/ember.js/pull/11788) [CLEANUP] Remove slash for a namespace in the `{{render}}` helper
- [#11791](https://github.com/emberjs/ember.js/pull/11791) [CLEANUP] Remove support for actions in `events` key.
- [#11794](https://github.com/emberjs/ember.js/pull/11794) [CLEANUP] Move `Ember.View` and `Ember.CoreView` into `ember-legacy-views` addon.
- [#11796](https://github.com/emberjs/ember.js/pull/11796) [CLEANUP] Remove  `Ember.beforeObserver`, `Ember.addBeforeObserver`, `Ember.removeBeforeObserver`, `Ember.beforeObserversFor`, `Ember._suspendBeforeObserver`, `Ember._suspendBeforeObservers`, and `Function.prototype.observesBefore`.
- [#11806](https://github.com/emberjs/ember.js/pull/11806) [CLEANUP] Remove deprecated `Controller#transitionTo` and `Controller#replaceWith`.
- [#11807](https://github.com/emberjs/ember.js/pull/11807) [CLEANUP] Remove deprecated `Ember.Handlebars.get`.
- [#11808](https://github.com/emberjs/ember.js/pull/11808) [CLEANUP] Remove deprecated `Binding#oneWay`.
- [#11809](https://github.com/emberjs/ember.js/pull/11809) [CLEANUP] Remove deprecated `Map#remove`.
- [#11438](https://github.com/emberjs/ember.js/pull/11438) [CLEANUP] Remove CP semantics
- [#11447](https://github.com/emberjs/ember.js/pull/11447) [CLEANUP] Remove `Ember.Set` (**not** `Ember.set`).
- [#11443](https://github.com/emberjs/ember.js/pull/11443) [CLEANUP] Remove `Ember.LinkView`.
- [#11439](https://github.com/emberjs/ember.js/pull/11439) [CLEANUP] Remove computed macros.
- [#11648](https://github.com/emberjs/ember.js/pull/11648) [CLEANUP] Remove `Ember.computed.mapProperty`.
- [#11460](https://github.com/emberjs/ember.js/pull/11460) [CLEANUP] Remove `Object.create` polyfill.
- [#11448](https://github.com/emberjs/ember.js/pull/11448) [CLEANUP] Remove `Ember.DeferredMixin`.
- [#11458](https://github.com/emberjs/ember.js/pull/11458) [CLEANUP] Remove `Ember.ArrayPolyfils`.
- [#11449](https://github.com/emberjs/ember.js/pull/11449) [CLEANUP] Remove `Ember.RSVP.prototype.fail`.
- [#11459](https://github.com/emberjs/ember.js/pull/11459) [CLEANUP] Remove `Ember.keys`.
- [#11456](https://github.com/emberjs/ember.js/pull/11456) [CLEANUP] Remove `Ember.View.prototype.state & `Ember.View.prototype._states`.
- [#11455](https://github.com/emberjs/ember.js/pull/11455) [CLEANUP] Remove `Ember.EnumerableUtils`.
- [#11462](https://github.com/emberjs/ember.js/pull/11462) [CLEANUP] Remove `Object.defineProperty` polyfill.
- [#11517](https://github.com/emberjs/ember.js/pull/11517) [DEPRECATION] Deprecate `this.resource` in `Router.map`.
- [#11479](https://github.com/emberjs/ember.js/pull/11479) [CLEANUP] Remove `Ember.ObjectController`.
- [#11513](https://github.com/emberjs/ember.js/pull/11513) [BUGFIX] Replace array computed macros with plain array versions.
- [#11513](https://github.com/emberjs/ember.js/pull/11513) [CLEANUP] Remove `Ember.arrayComputed`, `Ember.reduceComputed`, `Ember.ArrayComputed`, and `Ember.ReduceComputed`.
- [#11547](https://github.com/emberjs/ember.js/pull/11547) [CLEANUP] Remove work around for Safari's double finally on error bug.
- [#11528](https://github.com/emberjs/ember.js/pull/11528) [BUGFIX] Add helpful assertion when using `Ember.computed.map` without a function callback.
- [#11528](https://github.com/emberjs/ember.js/pull/11528) [BUGFIX] Add helpful assertion when using `Ember.computed.mapBy` without a string property name.
- [#11587](https://github.com/emberjs/ember.js/pull/11587) [CLEANUP] Remove `{{bind-attr}}`.
- [#11611](https://github.com/emberjs/ember.js/pull/11611) [CLEANUP] Remove `Ember.computed.filterProperty`.
- [#11608](https://github.com/emberjs/ember.js/pull/11608) [CLEANUP] Remove `{{linkTo}}` helper (**not** `{{link-to}}`).
- [#11706](https://github.com/emberjs/ember.js/pull/11706) [CLEANUP] Remove `Enumerable.rejectProperty`.
- [#11708](https://github.com/emberjs/ember.js/pull/11708) [BUGFIX] Update `fillIn` test helper to trigger the `input` event.
- [#11710](https://github.com/emberjs/ember.js/pull/11710) Add repository field to package.json
- [#11700](https://github.com/emberjs/ember.js/pull/11700) [CLEANUP] Removes `Enumerable.findProperty`.
- [#11707](https://github.com/emberjs/ember.js/pull/11707) [CLEANUP] Remove `Enumerable.everyBy`.
- [#10701](https://github.com/emberjs/ember.js/pull/10701) Refactor `lazyGet`.
- [#11262](https://github.com/emberjs/ember.js/pull/11262) Fix basic Fastboot usage.
- [#11375](https://github.com/emberjs/ember.js/pull/11375) Transition feature flag infrastructure to modules.
- [#11383](https://github.com/emberjs/ember.js/pull/11383) Update {{each-in}} to use ember-metal/should-display.
- [#11396](https://github.com/emberjs/ember.js/pull/11396) Make Ember.Checkbox extend from Ember.Component.

## 1.13.13 (January 17, 2016)

- [12793](https://github.com/emberjs/ember.js/pull/12793) [BUGFIX] Remove jQuery version assertion/error.
- [#12414](https://github.com/emberjs/ember.js/pull/12414) [BUGFIX] Fix multiplicative observation of controllers in views
- [#12784](https://github.com/emberjs/ember.js/pull/12784) [BUGFIX] Prevent `classNames` from being duplicated.

## 1.13.12 (January 14, 2016)

- [CVE-2015-7565](https://emberjs.com/blog/2016/01/14/security-releases-ember-1-11-4-1-12-2-1-13-12-2-0-3-2-1-2-2-2-1.html)

## 1.13.11 (November 16, 2015)

- [#12334](https://github.com/emberjs/ember.js/pull/12334) [BUGFIX] Fix for Array.prototype.filter polyfill on IE8.
- [#12344](https://github.com/emberjs/ember.js/pull/12344) [BUGFIX] Allow `{{link-to}}`'s `current-when` param be specified as a bound value.
- [#12449](https://github.com/emberjs/ember.js/pull/12449) [BUGFIX] Updated backburner.js. Backported from master.
- [#12471](https://github.com/emberjs/ember.js/pull/12471) [BUGFIX] Added deprecation for `Ember.SortableMixin`.
- [#12481](https://github.com/emberjs/ember.js/pull/12481) [BUGFIX] Add deprecation options to some 1.13 deprecations (to make handling with ember-cli-deprecation-workflow easier).
- [#12596](https://github.com/emberjs/ember.js/pull/12596) [BUGFIX] Fix `{{input}}` helper on IE8.

## 1.13.10 (September 6, 2015)

- [#12104](https://github.com/emberjs/ember.js/pull/12104) [BUGFIX] Ensure `concatenatedProperties` are not stomped.
- [#12256](https://github.com/emberjs/ember.js/pull/12256) [BUGFIX] Ensure concat streams unsubscribe properly. Fixes memory leak with attributes specified within quotes in the template (i.e. `<div data-foo="{{something}}"></div>`).
- [#12272](https://github.com/emberjs/ember.js/pull/12272) [BUGFIX] Update HTMLBars to fix memory leak when an `{{each}}` is inside an `{{if}}`.

## 1.13.9 (August 22, 2015)

- [#12138](https://github.com/emberjs/ember.js/pull/12138) [BUGFIX] Do not require calling `this._super(...arguments)` in views/components when implementing `didReceiveAttrs`.
- [#12164](https://github.com/emberjs/ember.js/pull/12164) [BUGFIX] Properly handle block-less usage of a component without a template or layout specified in the component definition.

## 1.13.8 (August 13, 2015)

- [#12056](https://github.com/emberjs/ember.js/pull/12056) [BUGFIX] Ensure initializers can augment `customEvents`.
- [#12037](https://github.com/emberjs/ember.js/pull/12037) [BUGFIX] Fix error in some query params scenarios.
- [#12058](https://github.com/emberjs/ember.js/pull/12058) [BUGFIX] Fix link-to with only qps linking to outdated route.
- [#12061](https://github.com/emberjs/ember.js/pull/12061) [PERF] Improve performance of guidFor when reading an existing Ember.Object.
- [#12067](https://github.com/emberjs/ember.js/pull/12067) [BUGFIX] Prevent `helper:@content-helper` lookup errors when using a paramless helper.
- [#12071](https://github.com/emberjs/ember.js/pull/12071) [BUGFIX] Fix issue with accessing component attributes before initial render.
- [#12073](https://github.com/emberjs/ember.js/pull/12073) [BUGFIX] Fix issue with events when invoking a component and specifying `classNames=`.

## 1.13.7 (August 9, 2015)

- [#12000](https://github.com/emberjs/ember.js/pull/12000) [DEPRECATION] Deprecate using `controller` for {{with}}
- [#11946](https://github.com/emberjs/ember.js/pull/11946) [PERF] Speed up `AttrProxy` implementation.
- [#11956](https://github.com/emberjs/ember.js/pull/11956) [BUGFIX] Ensure that `Ember.View.views` is present on deprecated `Ember.View`.
- [#11960](https://github.com/emberjs/ember.js/pull/11960) [BUGFIX] Fix issue preventing proper rerendering when specifying bound properties to `{{link-to}}`.
- [#12018](https://github.com/emberjs/ember.js/pull/12018) [DEPRECATION] Deprecate `{{#unbound}}{{/unbound}}`.
- [#12018](https://github.com/emberjs/ember.js/pull/12018) [DEPRECATION] Deprecate `{{unbound}}` with multiple params.
- [#11964](https://github.com/emberjs/ember.js/pull/11964) [BUGFIX] Update htmlbars to v0.13.35.
- [#12017](https://github.com/emberjs/ember.js/pull/12017) [DEPRECATION] Deprecate specifying `render` function to `Ember.View` or `Ember.Component` at extend time.
- [#11993](https://github.com/emberjs/ember.js/pull/11993) [DEPRECATION] Deprecate `Ember.TrackedArray` and `Ember.SubArray`.
- [#11994](https://github.com/emberjs/ember.js/pull/11994) [DEPRECATION] Deprecate using `@each` as a leaf node in a dependent key. Refactor from `Ember.computed('foo.@each', function() {});` to `Ember.computed('foo.[]', function() { });`.
- [#12026](https://github.com/emberjs/ember.js/pull/12026) [BUGFIX] Remove wasted dependent keys for `template` and `layout` properties of `Ember.View`/`Ember.Component`.

## 1.13.6 (July 31, 2015)

- [#11900](https://github.com/emberjs/ember.js/pull/11900) [DEPRECATION] Deprecate `Ember.Handlebars.makeViewHelper`.
- [#11900](https://github.com/emberjs/ember.js/pull/11900) [DEPRECATION] Deprecate `Ember.HTMLBars.makeViewHelper`.
- [#11900](https://github.com/emberjs/ember.js/pull/11900) [DEPRECATION] Deprecate `Ember.HTMLBars._registerHelper` (manual registration is no longer needed).
- [#11900](https://github.com/emberjs/ember.js/pull/11900) [DEPRECATION] Deprecate `Ember.HTMLBars.makeBoundHelper` in favor of `Ember.Helper.helper`.
- [#11900](https://github.com/emberjs/ember.js/pull/11900) [DEPRECATION] Deprecate `Ember.Handlebars.makeBoundHelper` in favor of `Ember.Helper.helper`.
- [#11900](https://github.com/emberjs/ember.js/pull/11900) [DEPRECATION] Deprecate `Ember.Handlebars.registerBoundHelper` in favor of `Ember.Helper.helper`.
- [#11900](https://github.com/emberjs/ember.js/pull/11900) [DEPRECATION] Deprecate `Ember.Handlebars.helper` in favor of `Ember.Helper.helper` and automatic helper resolution.
- [#11900](https://github.com/emberjs/ember.js/pull/11900) [DEPRECATION] Deprecate `Ember.Handlebars.registerHelper` in favor of `Ember.Helper.helper` and automatic helper resolution.
- [#11832](https://github.com/emberjs/ember.js/pull/11832) [BUGFIX] Fix memory leaks with application creation and acceptance test helpers.
- [#11826](https://github.com/emberjs/ember.js/pull/11826) [DEPRECATION] Deprecate Ember.ContainerView
- [#11864](https://github.com/emberjs/ember.js/pull/11864) [BUGFIX] Ensure acceptance test helpers are removed during teardown.
- [#11861](https://github.com/emberjs/ember.js/pull/11861) [BUGFIX] Update HTMLBars to allow duplicate {{each}} keys.
- [#11889](https://github.com/emberjs/ember.js/pull/11889) [BUGFIX] Fix `attributeBindings` for `id` attribute.
- [#11866](https://github.com/emberjs/ember.js/pull/11866) [BUGFIX] Fix DeprecatedView (and friends) reopen function to delegate to original.
- [#11891](https://github.com/emberjs/ember.js/pull/11891) [DEPRECATION] Deprecate Ember.CollectionView
- [#11910](https://github.com/emberjs/ember.js/pull/11910) [BUGFIX] Ensure `Ember.CollectionView.CONTAINER_MAP` is present on deprecated `CollectionView`.
- [#11917](https://github.com/emberjs/ember.js/pull/11917) [BUGFIX] Ensure `"use strict";` is properly added for modules.
- [#11934](https://github.com/emberjs/ember.js/pull/11934) [DEPRECATION] Deprecate specifying `positionalParams` at extend time in favor of using static factory properties.
- [#11935](https://github.com/emberjs/ember.js/pull/11935) [BUGFIX] Avoid unnecessary change events during initial render.

## 1.13.5 (July 19, 2015)

- [#11767](https://github.com/emberjs/ember.js/pull/11767) [DEPRECATION] Deprecate Controller#needs
- [#11468](https://github.com/emberjs/ember.js/pull/11468) [DEPRECATION] Deprecate `Ember.Freezable` and `frozenCopy`.
- [#11762](https://github.com/emberjs/ember.js/pull/11762) / [#11744](https://github.com/emberjs/ember.js/pull/11744) [BUGFIX] Ensure deprecated `Ember.beforeObserver` is available in production.
- [#11765](https://github.com/emberjs/ember.js/pull/11765) [DEPRECATION] Mark `Ember.oneWay` as deprecated
- [#11774](https://github.com/emberjs/ember.js/pull/11774) [BUGFIX] Add deprecation warnings to deprecated Enumerable methods.
- [#11778](https://github.com/emberjs/ember.js/pull/11778) [DEPRECATION] Deprecate reverse argument ordering in `Ember.observer`.
- [#11787](https://github.com/emberjs/ember.js/pull/11787) [DEPRECATION] Deprecate slash for a namespace in the `{{render}}` helper.
- [#11798](https://github.com/emberjs/ember.js/pull/11798) [DEPRECATION] Deprecate `Function#observesBefore`.
- [#11812](https://github.com/emberjs/ember.js/pull/11812) [DEPRECATION] Add deprecation messages when using `Ember.get` / `Ember.set` in a certain ways.

## 1.13.4 (July 13, 2015)

- [#11651](https://github.com/emberjs/ember.js/pull/11651) [BUGFIX] Ensure child views of non-dirty components get the correct parentView when rerendered.
- [#11662](https://github.com/emberjs/ember.js/pull/11662) [BUGFIX] Prevent ArrayController deprecation on generated controllers.
- [#11655](https://github.com/emberjs/ember.js/pull/11655) [BUGFIX] Fix issue with blockless link-to with only query params.
- [#11664](https://github.com/emberjs/ember.js/pull/11664) [BUGFIX] Ensure Route actions can be unit tested.
- [#11667](https://github.com/emberjs/ember.js/pull/11667) [BUGFIX] Fix memory leak in rendering engine.

## 1.13.3 (July 5, 2015)

- [#11510](https://github.com/emberjs/ember.js/pull/11510) [DEPRECATION] Deprecate `Ember.Object.createWithMixins`.
- [#11512](https://github.com/emberjs/ember.js/pull/11512) [DEPRECATION] Deprecate `Ember.oneWay` in favor of `Ember.computed.oneWay`.
- [#11525](https://github.com/emberjs/ember.js/pull/11525) [BUGFIX] Add helpful error when using `{{each}}` with duplicate keys. This replaces a difficult to understand error deep in the HTMLBars internals, with an error that explains the duplicate key issue a bit better.
- [#11511](https://github.com/emberjs/ember.js/pull/11511) [DEPRECATION] Deprecate `Ember.keys` in favor of `Object.keys`.
- [#11511](https://github.com/emberjs/ember.js/pull/11511) [DEPRECATION] Deprecate `Ember.create` in favor of `Object.create`.
- [#11543](https://github.com/emberjs/ember.js/pull/11543) / [#11594](https://github.com/emberjs/ember.js/pull/11594) / [#11603](https://github.com/emberjs/ember.js/pull/11603) - [BUGFIX] Fix extending or reopening `Ember.LinkView`.
- [#11561](https://github.com/emberjs/ember.js/pull/11561) [BUGFIX] Fix issue with `{{link-to}}` not properly updating the link for certain routing state changes.
- [#11572](https://github.com/emberjs/ember.js/pull/11572) [BUGFIX] Ensure local component state can shadow attributes provided during invocation.
- [#11570](https://github.com/emberjs/ember.js/pull/11570) [BUGFIX] Prevent infinite loop when a yielded block param is changed.
- [#11577](https://github.com/emberjs/ember.js/pull/11577) [BUGFIX] Ensure route backed views are properly destroyed.
- [#11636](https://github.com/emberjs/ember.js/pull/11636) [BUGFIX] Fix sticky query params for nested and for dynamic routes.
- [#11639](https://github.com/emberjs/ember.js/pull/11639) [BUGFIX] Fix testing of components containing `{{link-to}}`'s.
- [#11650](https://github.com/emberjs/ember.js/pull/11650) [BUGFIX] Update HTMLBars to 0.13.32. Fixes a number of issues with the property first strategy used:
  * for exceptions `input.form`, `input.list`, `button.type` always use `elem.setAttribute`
  * for `form.action` always escape
  * always assign handlers to props, even if the case appears strange

## 1.13.2 (June 17, 2015)

- [#11461](https://github.com/emberjs/ember.js/pull/11461) Remove `{{each}}` without `key=` warning. Deprecates `@guid` and `@item` in favor of the new default `@identity`.
- [#11495](https://github.com/emberjs/ember.js/pull/11495) [PERFORMANCE] Remove debug statements from production builds.

## 1.13.1 (June 16, 2015)

- [#11445](https://github.com/emberjs/ember.js/pull/11445) [BUGFIX] Allow recomputation for `Ember.Helper` with arguments.
- [#11317](https://github.com/emberjs/ember.js/pull/11317) [BUGFIX] Ensure handleURL called after setURL in visit helper.
- [#11464](https://github.com/emberjs/ember.js/pull/11464) [DEPRECATION] Deprecate `Ember.immediateObserver`.
- [#11476](https://github.com/emberjs/ember.js/pull/11476) [DEPRECATION] Deprecate `Ember.ArrayController`.
- [#11478](https://github.com/emberjs/ember.js/pull/11478) [DEPRECATION] Deprecate `Ember.RenderBuffer`.

## 1.13.0 (June 12, 2015)

- [#11270](https://github.com/emberjs/ember.js/pull/11270) [BUGFIX] Ensure view registry is propagated to components.
- [#11273](https://github.com/emberjs/ember.js/pull/11273) [BUGFIX] Downgrade Ember.Service without proper inheritance to a deprecation (instead of an assertion).
- [#11274](https://github.com/emberjs/ember.js/pull/11274) [BUGFIX] Unify template compiler deprecations so that they can report the proper location of the deprecation.
- [#11279](https://github.com/emberjs/ember.js/pull/11279) [DEPRECATION] Deprecate `{{#each foo in bar}}{{/each}}`.
- [#11229](https://github.com/emberjs/ember.js/pull/11229) [BUGFIX] Prevent views from having access to component lifecycle hooks.
- [#11286](https://github.com/emberjs/ember.js/pull/11286) [DEPRECATION] Deprecate `Ember.EnumerableUtils`.
- [#11338](https://github.com/emberjs/ember.js/pull/11338) [BUGFIX] Ensure `parentView` is available properly.
- [#11313](https://github.com/emberjs/ember.js/pull/11313) [DEPRECATION] Allow deprecated access to `template` in component to determine if a block was provided.
- [#11339](https://github.com/emberjs/ember.js/pull/11339) Add special values (`@index` or `@guid`) to `{{each}}`'s keyPath.
- [#11360](https://github.com/emberjs/ember.js/pull/11360) Add warning message when using `{{each}}` without specifying `key`.
- [#11348](https://github.com/emberjs/ember.js/pull/11348) [BUGFIX] Provide useful errors when a closure action is not found.
- [#11264](https://github.com/emberjs/ember.js/pull/11264) Add `{{concat}}` helper.
- [#11362](https://github.com/emberjs/ember.js/pull/11362) / [#11365](https://github.com/emberjs/ember.js/pull/11365) [DOC] Ensure all documentation comments include `@public` or `@private`.
- [#11278](https://github.com/emberjs/ember.js/pull/11278) Implement Ember.Helper. Read [emberjs/rfcs#53](https://github.com/emberjs/rfcs/pull/53) for more details.
- [#11373](https://github.com/emberjs/ember.js/pull/11373) [BUGFIX] Fix issue with multiple actions in a single element.
- [#11387](https://github.com/emberjs/ember.js/pull/11387) [DEPRECATION] Deprecate `Ember.View`.
- [#11389](https://github.com/emberjs/ember.js/pull/11389) [DEPRECATION] Deprecate `{{view}}` helper.
- [#11394](https://github.com/emberjs/ember.js/pull/11394) [DEPRECATION] Add `Ember.LinkComponent` and deprecate `Ember.LinkView`.
- [#11400](https://github.com/emberjs/ember.js/pull/11400) [DEPRECATION] Deprecate `Ember.computed.any`.
- [#11330](https://github.com/emberjs/ember.js/pull/11330) [BUGFIX] Ensure that `{{each}}` can properly transition into and out of its inverse state.
- [#11416](https://github.com/emberjs/ember.js/pull/11416) [DEPRECATION] Deprecate `Ember.Select`.
- [#11403](https://github.com/emberjs/ember.js/pull/11403) [DEPRECATION] Deprecate `Ember.arrayComputed`, `Ember.ReduceComputedProperty`, `Ember.ArrayComputedProperty`, and  `Ember.reduceComputed`.
- [#11401](https://github.com/emberjs/ember.js/pull/11401) [DEPRECATION] Deprecate `{{view` and `{{controller` template local keywords.
- [#11329](https://github.com/emberjs/ember.js/pull/11329) [BUGFIX] Fix issue with `{{component}}` helper not properly cleaning up components after they have been replaced.
- [#11393](https://github.com/emberjs/ember.js/pull/11393) Implement support for automatic registration of all helpers (with or without a dash). Requires ember-resolver@0.1.17 or higher if using ember-cli. Read [emberjs/rfcs#58](https://github.com/emberjs/rfcs/pull/58) for more details.
- [#11425](https://github.com/emberjs/ember.js/pull/11425) [BUGFIX] Prevent `willDestroyElement` from being called multiple times on the same component.
- [#11138](https://github.com/emberjs/ember.js/pull/11138) Add a better deprecation for `{{bind-attr}}`.
- [#11201](https://github.com/emberjs/ember.js/pull/11201) [BUGFIX] Fix `currentURL` test helper.
- [#11161](https://github.com/emberjs/ember.js/pull/11161) [BUGFIX] Fix initial selection for select with optgroup.
- [#10980](https://github.com/emberjs/ember.js/pull/10980) [BUGFIX] Fix `Ember.String.dasherize`, `Ember.String.underscore`, `Ember.String.capitalize`, `Ember.String.classify` for multi-word input values.
- [#11187](https://github.com/emberjs/ember.js/pull/11187) [BUGFIX] Handle mut cell action names.
- [#11194](https://github.com/emberjs/ember.js/pull/11194) [BUGFIX] Ensure `classNameBindings` properly handles multiple entries.
- [#11203](https://github.com/emberjs/ember.js/pull/11203) [BUGFIX] Ensure components for void tagNames do not have childNodes.
- [#11205](https://github.com/emberjs/ember.js/pull/11205) [BUGFIX] Ensure `Ember.get` works on empty string paths.
- [#11220](https://github.com/emberjs/ember.js/pull/11220) [BUGFIX] Fix issue with `Ember.computed.sort` where array observers were not properly detached.
- [#11222](https://github.com/emberjs/ember.js/pull/11222) [BUGFIX] Only attempt to lookup components with a dash.
- [#11227](https://github.com/emberjs/ember.js/pull/11227) [BUGFIX] Ensure `role` is properly applied to views if `ariaRole` attribute is present.
- [#11228](https://github.com/emberjs/ember.js/pull/11228) [BUGFIX] Fix `{{each}}` with `itemViewClass` specified `tagName`.
- [#11231](https://github.com/emberjs/ember.js/pull/11231) [BUGFIX] Fix `{{each}}` with `itemViewClass` and `{{else}}`.
- [#11234](https://github.com/emberjs/ember.js/pull/11234) [BUGFIX] Fix `{{each item in model itemViewClass="..."}}`.
- [#11235](https://github.com/emberjs/ember.js/pull/11235) [BUGFIX] Properly handle `isVisible` as a computed property.
- [#11242](https://github.com/emberjs/ember.js/pull/11242) [BUGFIX] Use the proper value for `options.data.view` with Handlebars compat helpers.
- [#11252](https://github.com/emberjs/ember.js/pull/11253) [BUGFIX] Ensure `instanceInitializers` are called with the proper arguments when calling `App.reset`.
- [#11257](https://github.com/emberjs/ember.js/pull/11257) [BUGFIX] Fix (and deprecate) `{{input on="..." action="..."}}`.
- [#11260](https://github.com/emberjs/ember.js/pull/11260) [BUGFIX] Ensure that passing an array argument to `(action` helper is handled properly.
- [#11261](https://github.com/emberjs/ember.js/pull/11261) Add helpful assertion when exporting the wrong type of factory (for Routes, Components, Services, and Views).
- [#11266](https://github.com/emberjs/ember.js/pull/11266) [BUGFIX] Ensure `parentView` includes yielding component.
- [#11267](https://github.com/emberjs/ember.js/pull/11267) Disable angle bracket components. See [#11267](https://github.com/emberjs/ember.js/pull/11267) and [emberjs/rfcs#60](https://github.com/emberjs/rfcs/pull/60) for more details.
- [#3852](https://github.com/emberjs/ember.js/pull/3852) [BREAKING BUGFIX] Do not assume null Ember.get targets always refer to a global
- [#10501](https://github.com/emberjs/ember.js/pull/10501) Implement Glimmer Engine.
- [#11029](https://github.com/emberjs/ember.js/pull/11029) Allow bound outlet names.
- [#11035](https://github.com/emberjs/ember.js/pull/11035) {{#with}} helper should not render if passed variable is falsey.
- [#11104](https://github.com/emberjs/ember.js/pull/11104) /  [#10501](https://github.com/emberjs/ember.js/pull/10501) Remove support for non-HTMLBars templates.
- [#11116](https://github.com/emberjs/ember.js/pull/11116) / [emberjs/rfcs#50](https://github.com/emberjs/rfcs/pull/50) [FEATURE ember-routing-htmlbars-improved-actions].
- [#11028](https://github.com/emberjs/ember.js/pull/11028) Add positional parameter support to components.
- [#11084](https://github.com/emberjs/ember.js/pull/11084) Enable {{yield to="inverse"}} in components.
- [#11141](https://github.com/emberjs/ember.js/pull/11141) Implement angle-bracket components.

## 1.12.0 (May 13, 2015)

- [#10874](https://github.com/emberjs/ember.js/pull/10874) Include all files in jspm package.
- [#10876](https://github.com/emberjs/ember.js/pull/10876) [BUGFIX] Make the `{{component}}` helper deal with dynamically set falsey values.
- [#10883](https://github.com/emberjs/ember.js/pull/10883) [BUGFIX] Fix `View.prototype.replaceIn` functionality.
- [#10920](https://github.com/emberjs/ember.js/pull/10920) [BUGFIX] Fix `Component.prototype.layout` so that it can now be set and recompute properly.
- [#10968](https://github.com/emberjs/ember.js/pull/10968) [BUGFIX] Fix assertion that incorrectly fired on legacy settable computed properties.
- [CVE-2015-1866] Ember.js XSS Vulnerability With {{view "select"}} Options
- [#3852](https://github.com/emberjs/ember.js/pull/3852) [BREAKING BUGFIX] Do not assume null Ember.get targets always refer to a global
- [#10200](https://github.com/emberjs/ember.js/pull/10200) Add 'autocomplete' to Ember.Select view
- [#10464](https://github.com/emberjs/ember.js/pull/10464) Ensure templates were compiled with the current compiler version.
- [#10494](https://github.com/emberjs/ember.js/pull/10494) Make it easier to write lazy streams.
- [#10483](https://github.com/emberjs/ember.js/pull/10483) [REFACTOR] Lazily reify router’s location.
- [#10673](https://github.com/emberjs/ember.js/pull/10673) Remove EachProxy and EachArray from exports.
- [#10572](https://github.com/emberjs/ember.js/pull/10572) Fix UnrecognizedURLError not being an Error.
- [#10585](https://github.com/emberjs/ember.js/pull/10585) Deprecate direct use of `Ember.CoreView`.
- [#10599](https://github.com/emberjs/ember.js/pull/10599) Don’t share view registry across containers.
- [#10667](https://github.com/emberjs/ember.js/pull/10667) Deprecate `Ember.tryFinally` and `Ember.tryCatchFinally`.
- [#10668](https://github.com/emberjs/ember.js/pull/10668) Deprecate `Ember.required`.
- [#10678](https://github.com/emberjs/ember.js/pull/10678) Fix typos in deprecations of unescaped style attribute
- [#10679](https://github.com/emberjs/ember.js/pull/10679) Ensure docs are not detected for deprecation mixins.
- [#10672](https://github.com/emberjs/ember.js/pull/10672) Do not export `Ember.Descriptor`.
- [#10695](https://github.com/emberjs/ember.js/pull/10695) Require that `base` `href` and `embed` `src` are escaped.
- [#10690](https://github.com/emberjs/ember.js/pull/10690) [BUGFIX canary] Prevent unknown input types from erroring.
- [#10731](https://github.com/emberjs/ember.js/pull/10731) [FEATURE] Enable `new-computed-syntax` feature.  See [emberjs/rfcs#11](https://github.com/emberjs/rfcs/pull/11) for more details.
- [#10731](https://github.com/emberjs/ember.js/pull/10731) [FEATURE] Enable `ember-application-instance-initializers` feature.
- [#10731](https://github.com/emberjs/ember.js/pull/10731) [FEATURE] Enable `ember-application-initializer-context` feature.

## 1.11.0 (March 28, 2015)

- [#10736](https://github.com/emberjs/ember.js/pull/10736) [BUGFIX] Fix issue with Query Params when using `Ember.ObjectController` (regression from `ObjectController` deprecation).
- [#10726](https://github.com/emberjs/ember.js/pull/10726) / [router.js#ed45bc](https://github.com/tildeio/router.js/commit/ed45bc5c5e055af0ab875ef2c52feda792ee23e4) [BUGFIX] Fix issue with nested `{{link-to}}` active and transition classes getting out of sync.
- [#10709](https://github.com/emberjs/ember.js/pull/10709) [BUGFIX] Clear `src` attributes that are set to `null` or `undefined`.
- [#10695](https://github.com/emberjs/ember.js/pull/10695) [SECURITY] Add `<base>` and `<embed>` to list of tags where `src` and `href` are sanitized.
- [#10683](https://github.com/emberjs/ember.js/pull/10683) / [#10703](https://github.com/emberjs/ember.js/pull/10703) / [#10712](https://github.com/emberjs/ember.js/pull/10712) [BUGFIX] Fix regressions added during the `{{outlet}}` refactor.
- [#10663](https://github.com/emberjs/ember.js/pull/10663) / [#10711](https://github.com/emberjs/ember.js/pull/10711) [SECURITY] Warn when using dynamic style attributes without a `SafeString` value. [See here](https://emberjs.com/deprecations/v1.x/#toc_warning-when-binding-style-attributes) for more details.
- [#10463](https://github.com/emberjs/ember.js/pull/10463) [BUGFIX] Make async test helpers more robust. Fixes hanging test when elements are not found.
- [#10631](https://github.com/emberjs/ember.js/pull/10631) Deprecate using `fooBinding` syntax (`{{some-thing nameBinding="model.name"}}`) in templates.
- [#10627](https://github.com/emberjs/ember.js/pull/10627) [BUGFIX] Ensure specifying `class` as a sub-expression (`{{input value=foo class=(some-sub-expr)}}`) works properly.
- [#10613](https://github.com/emberjs/ember.js/pull/10613) [BUGFIX] Ensure `{{view id=bar}}` sets `id` on the view.
- [#10612](https://github.com/emberjs/ember.js/pull/10612) [BUGFIX] Ensure `Ember.inject.controller()` works for all Controller types.
- [#10604](https://github.com/emberjs/ember.js/pull/10604) [BUGFIX] Fix regression on iOS 8 crashing on certain platforms.
- [#10556](https://github.com/emberjs/ember.js/pull/10556) [BUGFIX] Deprecate `{{link-to}}` unwrapping a controllers model.
- [#10528](https://github.com/emberjs/ember.js/pull/10528) [BUGFIX] Ensure custom Router can be passed to Ember.Application.
- [#10530](https://github.com/emberjs/ember.js/pull/10530) [BUGFIX] Add assertion when calling `this.$()` in a tagless view/component.
- [#10533](https://github.com/emberjs/ember.js/pull/10533) [BUGFIX] Do not allow manually specifying `application` resource in the `Router.map`.
- [#10544](https://github.com/emberjs/ember.js/pull/10544) / [#10550](https://github.com/emberjs/ember.js/pull/10550) [BUGFIX] Ensure that `{{input}}` can be updated multiple times, and does not loose cursor position.
- [#10553](https://github.com/emberjs/ember.js/pull/10553) [BUGFIX] Fix major regression in the non-block form of `{{link-to}}` that caused an application crash after a period of time.
- [#10554](https://github.com/emberjs/ember.js/pull/10554) [BUGFIX] Remove access to `this` in HTMLBars helpers. To fix any usages of `this` in a helper, you can access the view from `env.data.view` instead.
- [#10475](https://github.com/emberjs/ember.js/pull/10475) [BUGFIX] Ensure wrapped errors are logged properly.
- [#10489](https://github.com/emberjs/ember.js/pull/10489) [BUGFIX] Fix an issue with bindings inside of a yielded template when the yield helper is nested inside of another view
- [#10493](https://github.com/emberjs/ember.js/pull/10493) [BUGFIX] Fix nested simple bindings inside of nested yields within views.
- [#10527](https://github.com/emberjs/ember.js/pull/10527) [BUGFIX] Ensure that Component context is not forced to parent context.
- [#10525](https://github.com/emberjs/ember.js/pull/10525) [BUGFIX] Fix issue causing cursor position to be lost while entering into an `{{input}}` / `Ember.TextField`.
- [#10372](https://github.com/emberjs/ember.js/pull/10372) / [#10431](https://github.com/emberjs/ember.js/pull/10431) / [#10439](https://github.com/emberjs/ember.js/pull/10439) / [#10442](https://github.com/emberjs/ember.js/pull/10442) Decouple route transition from view creation.
- [#10436](https://github.com/emberjs/ember.js/pull/10436) [BUGFIX] Ensure `instrument.{subscribe,unsubscribe,reset}` aren’t accidentally clobbered.
- [#10462](https://github.com/emberjs/ember.js/pull/10462) [BUGFIX] Fix incorrect export of `Ember.OutletView`.
- [#10398](https://github.com/emberjs/ember.js/pull/10398) [BUGFIX] `undefined` and `null` values in bind-attr should remove attributes.
- [#10413](https://github.com/emberjs/ember.js/pull/10413) Update to use inclusive `morph-range` (via HTMLBars v0.11.1).
- [#10464](https://github.com/emberjs/ember.js/pull/10464) Add helpful assertion if templates are compiled with a different template compiler revision.
- [#10160](https://github.com/emberjs/ember.js/pull/10160) [FEATURE] Add index as an optional parameter to #each blocks [@tim-evans](https://github.com/tim-evans)
- [#10186](https://github.com/emberjs/ember.js/pull/10186) Port attributeBindings to AttrNode views [@mixonic](https://github.com/mixonic)
- [#10184](https://github.com/emberjs/ember.js/pull/10184) Initial support basic Node.js rendering.
- [#10179](https://github.com/emberjs/ember.js/pull/10179) [FEATURE] Execute initializers in their respective context [@gf3](https://github.com/gf3)
- [#10213](https://github.com/emberjs/ember.js/pull/10213) Ensure overriding attribute bindings is possible [@miguelcobain](https://github.com/miguelcobain)
- [#10320](https://github.com/emberjs/ember.js/pull/10320) Start breaking up Ember.View code into mixins based on purpose [@ebryn](https://github.com/ebryn)
- [#10221](https://github.com/emberjs/ember.js/pull/10221) Embed enabled features in debug builds. [@rwjblue](https://github.com/rwjblue)
- [#10215](https://github.com/emberjs/ember.js/pull/10215) [Bugfix beta] Prevent Ember from erroring when the errorThrown property is `undefined` [@bmac](https://github.com/bmac)
- [#10326](https://github.com/emberjs/ember.js/pull/10326) Let `View#appendChild` instantiate `SimpleBoundView`s rather than doing it manually ourselves [@ebryn](https://github.com/ebryn)
- [#10280](https://github.com/emberjs/ember.js/pull/10280) Moves route-recognizer to a NPM dep, bumps emberjs-build [@danmcclain](https://github.com/danmcclain)
- [#10256](https://github.com/emberjs/ember.js/pull/10256) Simplify and modularize app/router initialization [@emberjs](https://github.com/emberjs)
- [#10254](https://github.com/emberjs/ember.js/pull/10254) Make computed.or and computed.and return truthy values [@soulcutter](https://github.com/soulcutter)
- [#10271](https://github.com/emberjs/ember.js/pull/10271) Clean up boot process [@emberjs](https://github.com/emberjs)
- [#10268](https://github.com/emberjs/ember.js/pull/10268) Bumped sha to get tildeio/route-recognizer#40, which fixes #10190 [@jayphelps](https://github.com/jayphelps)
- [#10316](https://github.com/emberjs/ember.js/pull/10316) Make LinkView FastBoot™-compatible [@emberjs](https://github.com/emberjs)
- [#10321](https://github.com/emberjs/ember.js/pull/10321) `View#element` isn’t observable, we don’t need to use `set` [@ebryn](https://github.com/ebryn)
- [#10323](https://github.com/emberjs/ember.js/pull/10323) Remove `meta.descs` [@ebryn](https://github.com/ebryn)
- [#10324](https://github.com/emberjs/ember.js/pull/10324) Don’t run this mandatory setter test in prod [@ebryn](https://github.com/ebryn)
- [#10329](https://github.com/emberjs/ember.js/pull/10329) Update transpiler to Esperanto. [@rwjblue](https://github.com/rwjblue)
- [#10352](https://github.com/emberjs/ember.js/pull/10352) Add internal `_willDestroyElement` hook to prevent using instance-based events [@ebryn](https://github.com/ebryn)
- [#10336](https://github.com/emberjs/ember.js/pull/10336) Remove unnecessary check for `NativeArray` [@tricknotes](https://github.com/tricknotes)
- [#10334](https://github.com/emberjs/ember.js/pull/10334) Update to HTMLBars v0.10.0. [@rwjblue](https://github.com/rwjblue)
- [#10338](https://github.com/emberjs/ember.js/pull/10338) Ensure computed.oneWay is exported properly. [@linstula](https://github.com/linstula)
- [#10345](https://github.com/emberjs/ember.js/pull/10345) Update to QUnit 1.17.1. [@rwjblue](https://github.com/rwjblue)
- [#10350](https://github.com/emberjs/ember.js/pull/10350) Make meta.cache & meta.cacheMeta lazy [@ebryn](https://github.com/ebryn)
- [#10353](https://github.com/emberjs/ember.js/pull/10353) Avoid creating context bindings for collection views [@mmun](https://github.com/mmun)
- [#10093](https://github.com/emberjs/ember.js/pull/10093) [FEATURE] Implement {{component}} helper [@lukemelia](https://github.com/lukemelia)

## 1.10.0 (February 7, 2015)

* [BUGFIX] Ensure that property case is normalized.
* [BUGFIX] Prevent an error from being thrown if the errorThrown property is a string when catching unhandled promise rejections.
* [BUGFIX] `contenteditable` elements should fire focus events in `ember-testing` click helper.
* [BUGFIX] Remove HTMLBars from builds `ember.debug.js` and `ember.prod.js` builds. Please see https://emberjs.com/blog/2015/02/05/compiling-templates-in-1-10-0.html for more details.
* [BUGFIX] Ensure that calling the `wait` testing helper without routing works properly.
* [BUGFIX] Ensure that a plus sign in query params are treated as spaces.
* [BUGFIX] Fix broken `Ember.Test.unregisterWaiter` semantics.
* [BUGFIX] Allow unbound helpers to add attributes.
* [BUGFIX] Ensure compat helpers calling `options.fn` work.
* [BUGFIX] Fix memory leak in view streams.
* [BUGFIX] Don't render default layout for `Ember.TextField`.
* Update HTMLBars version to v0.8.5:
  * Allow numbers to be parsed as HTML in IE.
  * Add namespace detection.
  * Include line number in error thrown for unclosed HTML element.
  * `removeAttribute` fix for IE <11 and SVG.
  * Disable `cloneNodes` in IE8.
  * Improve HTML validation and error messages thrown.
  * Fix a number of template compilation issues in IE8.
  * Use the correct namespace in `parseHTML` (fixes various issues that occur
    when changing to and from alternate namespaces).
  * Ensure values are converted to `String`'s when setting attributes (fixes issues in IE10 & IE11).
  * Change `setProperty` and `morph` to remove an `undefined` attr value.
* Remove dots from default resolver descriptions.
* Add helpful assertion if a block helper is not found.
* Make Ember.HTMLBars version of registerHelper private.
* [BUGFIX] Add `options.types` and `options.hashTypes` for Handlebars compatible helpers.
* [BUGFIX] Fix usage of `emptyView` with `{{#each}}` helper.
* Assert if an attribute set statically and via bind-attr.  For example:
  `<div class="foo" {{bind-attr class="bar"}}></div>` will now trigger an assertion (instead of
  silently failing).
* [BUGFIX] Fix deprecated bindAttr helper.
* [BUGFIX] Do not allow both keyword and block params.
* Cleanup HTMLBars public API
  * Remove `Ember.HTMLBars.helper`.
  * Remove internal `registerBoundHelper` function (use
    `registerHelper('blah', makeViewHelper(SomeView))` or `registerHelper('blah', makeBoundHelper(func))`).
* [BUGFIX] Fix Handlebars compat mode `registerHelper` interop with `makeViewHelper`.
* [BUGFIX] Ensure that `mergedProperties` are properly merged when all properties are not present.
* Add options argument to pass url to `Ember.deprecate`.
* Deprecate `{{bind}}` helper.
* Pass array to `Ember.computed.filter` callback
* [BUGFIX] Prevent mandatory-setter when setter is already present.
* Remove Handlebars from dependencies.
* Fix error when parsing templates with invalid end tags.
* [BUGFIX] Allow makeBoundHelper to be a sub-expression.
* [BUGFIX] Allow compat makeBoundHelpers to be sub-expressions.
* [BUGFIX] Export Ember.Handlebars compat shim for `Ember.Handlebars.SafeString` and `Ember.Handlebars.Utils.escapeExpression`.
* [BUGFIX] Allow `Ember.inject` injected properties to be overridden (makes testing significantly easier).
* [BUGFIX] Don’t assert uncaught RSVP rejections. We are already logging the error, but asserting breaks everything else on the run loop queue.
* [BUGFIX] Allow tagName to be a CP (with deprecation).
* [BUGFIX] Allow view instances in {{view}}.
* [BUGFIX] Ensure bound attrs flush immediately.
* [PERFORMANCE] Initialize views in preRender state.
* [PERFORMANCE] `View#element` should not be observable.
* Add ember-template-compiler package.
* Rename `Ember.HTMLBars.registerASTPlugin` to `Ember.HTMLBars.registerPlugin`.
* Export `ember-template-compiler.js`.
* Escape `href`, `src`, and `background` attributes for `a`, `link`, `img`, and `iframe` elements.
* Move debugging file output from `ember.js` to `ember.debug.js`.
* Remove `templateData` property from views.
* Restructure `Ember.libraries` to be more idiomatic.
* Prevent creating an extra view for each select option.
* Deprecate the block form of the bind helper.
* Cleanup `Ember.CoreObject` init argument passing.
* Allow all rejection types to be handled by default RSVP error handler.
* Deprecate setting ContainerView#childViews.
* [FEATURE] ember-htmlbars - Enable the HTMLBars rendering engine.
* [FEATURE] ember-htmlbars-block-params - Enable block params feature for HTMLBars.

## 1.9.1 (December 23, 2014)

* Allow `{{view}}` helper to properly handle view instances.
* Escape `href`, `src`, and `background` attributes for `a`, `link`, `img`, and `iframe` elements.

## 1.9.0 (December 8, 2014)

* Add deprecation for quoteless outlet names (`{{outlet main}}` should be `{{outlet 'main'}}`).
* [BUGFIX] Update the `Ember.Map#forEach` callback to include the map being iterated over.
* [BUGFIX] Ensure that tagless container views are rendered properly.
* [PERF] `Ember.View#_outlets` is no longer observable.
* [PERF] Avoid extending a view for every `{{each}}`.
* Ensure initializers have a `name` property (provides a helpful assertion if missing).
* [BUILD TOOLING] Enable easier cross-browser testing by publishing builds and tests to S3.
* Enable `Ember.run.join` to return a value even if within an existing run loop.
* Update `Ember.EventDispatcher` to use `Ember.run.join`. This is required so that synchronous
  events (like focus) do not spawn a nested run loop.
* Deprecate context switching form of {{each}}.
* Deprecate context switching form of {{with}}.
* Add improved error message when a component lookup fails.
* Ensure that component actions that are subscribed to, trigger an assertion when unhandled. Consider the following example:

```handlebars
{{!component-a.hbs}}

{{some-other-component action="saveMe"}}
```

Clearly, `component-a` has subscribed to `some-other-component`'s `action`. Previously, if `component-a` did not handle the action, it would silently continue.  Now, an assertion would be triggered.

* [PERF] Speedup Mixin creation.
* [BREAKING] Require Handlebars 2.0. See [blog post](https://emberjs.com/blog/2014/10/16/handlebars-update.html) for details.
* Allow all rejection types in promises to be handled.
* Mandatory setter checks for configurable, and does not clobber non-configurable properties.
* Remove long deprecated `Ember.empty` and `Ember.none`.
* Refactor `Ember.platform`.
* `Ember.HashLocation` no longer assumes any hash is a route, uses forward slash prefix convention `#/foo`.
* Log unhandled promise rejections in testing.
* Deprecate `Ember.Handlebars.get`.
* Warn if FEATURES flagging is used in non-canary, debug builds.
* Streamify template bindings.
* Make Ember.Namespace#toString ember-cli aware.
* Prevent extra `method.toString` checks when setting `_super`.
* [PERF] Speedup watchKey by preventing for in related deopt.
* [FEATURE] ember-routing-fire-activate-deactivate-events.
* [FEATURE] ember-testing-pause-test.


## Ember 1.8.1 (November, 4, 2014)

* [BUGFIX] Make sure that `{{view}}` can accept a Ember.View instance.
* [BUGFIX] Throw an assertion if `classNameBindings` are specified on a tag-less view.
* [BUGFIX] Setting an `attributeBinding` for `class` attribute triggers assertion.
* [BUGFIX] Fix `htmlSafe` to allow non-strings in unescaped code.
* [BUGFIX] Add support for null prototype object to mandatory setter code. Prevents errors when operating on Ember Data `meta` objects.
* [BUGFIX] Fix an issue with select/each that causes the last item rendered to be selected.

## Ember 1.8.0 (October, 28, 2014)

* [BUGFIX] Ensure published builds do not use `define` or `require` internally.
* [BUGFIX] Remove strict mode for Object.create usage to work around an [iOS bug](https://bugs.webkit.org/show_bug.cgi?id=138038).
* Enable testing of production builds by publishing `ember-testing.js` along with the standard builds.
* [DOC] Make mandatory setter assertions more helpful.
* Deprecate location: 'hash' paths that don't have a forward slash. e.g. #foo vs. #/foo.
* [BUGFIX] Ensure `Ember.setProperties` can handle non-object properties.
* [BUGFIX] Refactor buffer to be simpler, single parsing code-path.
* [BUGFIX] Add assertion when morph is not found in RenderBuffer.
* [BUGFIX] Make computed.sort generate an answer immediately.
* [BUGFIX] Fix broken `Ember.computed.sort` semantics.
* [BUGFIX] Ensure ember-testing is not included in production build output.
* Deprecate usage of quoted paths in `{{view}}` helper.
* [BUGFIX] Ensure `{{view}}` lookup works properly when name is a keyword.
* [BUGFIX] Ensure `Ember.Map` works properly with falsey values.
* [BUGFIX] Make Ember.Namespace#toString ember-cli aware.
* [PERF] Avoid using `for x in y` in `Ember.RenderBuffer.prototype.add`.
* [BUGFIX] Enable setProperties to work on Object.create(null) objects.
* [PERF] Update RSVP to 3.0.14 (faster instrumentation).
* [BUGFIX] Add SVG support for metal-views.
* [BUGFIX] Allow camelCase attributes in DOM elements.
* [BUGFIX] Update backburner to latest.
* [BUGFIX] Use contextualElements to properly handle omitted optional start tags.
* [BUGFIX] Ensure that `Route.prototype.activate` is not retriggered when the model for the current route changes.
* [PERF] Fix optimization bailouts for `{{view}}` helper.
* [BUGFIX] Add `attributeBindings` for `lang` and `dir` (for bidirectional language support) in `Ember.TextField` and `Ember.TextAra`.
* [BUGFIX] Fix finishChains for all chains that reference an obj not just the ones rooted at that object.
* [BUGFIX] Refactor ES3 `Ember.keys` implementation.
* Rewrite Ember.Map to be faster and closer to ES6 implementation:
  * [PERF + ES6] No longer clone array before enumeration (dramatically reduce allocations)
  * [PERF] Don’t Rebind the callback of forEach if not needed
  * [PERF + ES6] No longer allow Map#length to be bindable
  * [PERF] Don’t double guid keys, as they are passed from map to ordered set (add/remove)
  * [ES6] Deprecate Map#remove in-favor of the es6 Map#delete
  * [ES6] Error if callback is not a function
  * [ES6] Map#set should return the map. This enables chaining map.`map.set(‘foo’,1).set(‘bar’,3);` etc.
  * [ES6] Remove length in-favor of size.
  * [ES6] Throw if constructor is invoked without new
  * [ES6] Make inheritance work correctly
* [BUGFIX] Allow for bound property {{input}} type.
* [BUGFIX] Ensure pushUnique targetQueue is cleared by flush.
* [BUGFIX] instrument should still call block even without subscribers.
* [BUGFIX] Remove unneeded normalization in query param controller lookup.
* [BUGFIX] Do not use defineProperty on each View instance.
* [PERF] Speedup `watchKey` by preventing for in related deopt.
* [PERF] Change `ENV.MANDATORY_SETTER` to FEATURES so it can be compiled out of production builds.
* [PERF] Object.create(null) in Ember.inspect.
* [PERF] Extracts computed property set into a separate function.
* [BUGFIX] Make `GUID_KEY = intern(GUID_KEY)` actually work on ES3.
* [BUGFIX] Ensure nested routes can inherit model from parent.
* Remove `metamorph` in favor of `morph` package (removes the need for `<script>` tags in the DOM).
* [FEATURE] ember-routing-linkto-target-attribute
* [FEATURE] ember-routing-multi-current-when
* [FEATURE] ember-routing-auto-location-uses-replace-state-for-history
* [FEATURE] ember-metal-is-present
* [FEATURE] property-brace-expansion-improvement
* Deprecate usage of Internet Explorer 6 & 7.
* Deprecate global access to view classes from template (see the [deprecation guide](https://emberjs.com/guides/deprecations/)).
* Deprecate `Ember.Set` (note: this is NOT the `Ember.set`).
* Deprecate `Ember.computed.defaultTo`.
* Remove long deprecated `Ember.StateManager` warnings.
* Use intelligent caching for `Ember.String` (`camelize`, `dasherize`, etc.).
* Use intelligent caching for container normalization.
* Polyfill `Object.create` (use for new caching techniques).
* Refactor internals to make debugging easier (use a single assignment per `var` statement).
* [BREAKING] Remove deprecated controller action lookup. Support for pre-1.0.0 applications with actions in the root
  of the controller (instead of inside the `actions` hash) has been removed.
* [BREAKING] Ember.View didInsertElement is now called on child views before their parents. Before
  1.8.0-beta.1 it would be called top-down.

## Ember 1.7.0 (August 19, 2014)

* Update `Ember.computed.notEmpty` to properly respect arrays.
* Bind `tabindex` property on LinkView.
* Update to RSVP 3.0.13 (fixes an error with `RSVP.hash` in IE8 amongst other changes).
* Fix incorrect quoteless action deprecation warnings.
* Prevent duplicate message getting printed by errors in Route hooks.
* Deprecate observing container views like arrays.
* Add `catch` and `finally` to Transition.
* [BUGFIX] paramsFor: don’t clobber falsy params.
* [BUGFIX] Controllers with query params are unit testable.
* [BUGFIX] Controllers have new QP values before setupController.
* [BUGFIX] Fix initial render of {{input type=bound}} for checkboxes.
* [BUGFIX] makeBoundHelper supports unquoted bound property options.
* [BUGFIX] link-to helper can be inserted in DOM when the router is not present.
* [PERFORMANCE] Do not pass `arguments` around in a hot-path.
* Remove Container.defaultContainer.
* Polyfill contains for older browsers.
* [BUGFIX] Ensure that `triggerEvent` handles all argument signatures properly.
* [BUGFIX] Stub meta on AliasedProperty (fixes regression from beta.2 with Ember Data).
* [DOC] Fixed issue with docs showing 'Ember.run' as 'run.run'.
* [BUGFIX] SimpleHandlebarsView should not re-render if normalized value is unchanged.
* Allow Router DSL to nest routes via `this.route`.
* [BUGFIX] Don't pass function UNDEFINED as oldValue to computed properties.
* [BUGFIX] dramatically improve performance of eachComputedProperty.
* [BUGFIX] Prevent strict mode errors from superWrapper.
* Deprecate Ember.DeferredMixin and Ember.Deferred.
* Deprecate `.then` on Ember.Application.
* Revert ember-routing-consistent-resources.
* [BUGFIX] Wrap es3 keywords in quotes.
* [BUGFIX] Use injected integration test helpers instead of local functions.
* [BUGFIX] Add alias descriptor, and replace `Ember.computed.alias` with new descriptor.
* [BUGFIX] Fix `{{#with view.foo as bar}}`.
* [BUGFIX] Force remove `required` attribute for IE8.
* [BUGFIX] Controller precedence for `Ember.Route.prototype.render` updated.
* [BUGFIX] fixes variable argument passing to triggerEvent helper.
* [BUGFIX] Use view:toplevel for {{view}} instead of view:default.
* [BUGFIX] Do not throw uncaught errors mid-transition.
* [BUGFIX] Don't assume that the router has a container.
* Fix components inside group helper.
* [BUGFIX] Fix wrong view keyword in a component block.
* Update to RSVP 3.0.7.
* [FEATURE query-params-new]
* [FEATURE ember-routing-consistent-resources]
* `uuid` is now consistently used across the project.
* `Ember.uuid` is now an internal function instead of a property on `Ember` itself.
* [BREAKING BUGFIX] On Controllers, the content property is now derived from model. This reduces many
  caveats with model/content, and also sets a simple ground rule: Never set a controllers content,
  rather always set it's model and ember will do the right thing.

## Ember 1.6.1 (July, 15, 2014)

* Fix error routes/templates. Changes in router promise logging caused errors to be
  thrown mid-transition into the `error` route. See [#5166](https://github.com/emberjs/ember.js/pull/5166) for further details.

## Ember 1.6.0 (July, 7, 2014)

* [BREAKING BUGFIX] An empty array is treated as falsy value in `bind-attr` to be in consistent
  with `if` helper. Breaking for apps that relies on the previous behavior which treats an empty
  array as truthy value in `bind-attr`.
* [BUGFIX] Ensure itemController's do not leak by tying them to the parent controller lifecycle.
* [BUGFIX] Spaces in brace expansion throws an error.
* [BUGFIX] Fix `MutableEnumerable.removeObjects`.
* [BUGFIX] Allow controller specified to `{{with}}` to be the target of an action.
* [BUGFIX] Ensure that using keywords syntax (`{{with foo as bar}}`) works when specifying a controller.
* [BUGFIX] Ensure that controllers instantiated by `{{with}}` are properly destroyed.
* [BUGFIX] Wrap the keyword specified in `{{with foo as bar}}` with the controller (if specified).
* [BUGFIX] Fix `Ember.isArray` on IE8.
* [BUGFIX] Update backburner.js to fix issue with IE8.
* [BUGFIX] `Ember.computed.alias` returns value of aliased property upon set.
* Provide better debugging information for view rendering.
* [BUGFIX] Don't fire redirect on parent routes during transitions from one child route to another.
* [BUGFIX] Make errors thrown by Ember use `Ember.Error` consistently.
* [BUGFIX] Ensure controllers instantiated by the `{{render}}` helper are properly torn down.
* [BUGFIX] sync back burner: workaround IE's issue with try/finally without Catch. Also no longer force deoptimization of the run loop queue flush.
* [BUGFIX] Ember.onerror now uses Backburner's error handler.
* [BUGFIX] Do not rely on Array.prototype.map for logging version.
* [BUGFIX] RSVP errors go to Ember.onerror if present.
* [BUGFIX] Ensure context is unchanged when using keywords with itemController.
* [BUGFIX] Does not disregard currentWhen when given explicitly.
* [DOC] Remove private wording from makeBoundHelper.
* [BUGFIX] Invalidate previous sorting if sortProperties changes.
* [BUGFIX] Properly resolve helpers from {{unbound}}.
* [BUGFIX] reduceComputed detect retain:n better. Fixes issue with `Ember.computed.filterBy` erroring when items removed from dependent array.
* [BUGFIX] Namespaces are now required to start with uppercase A-Z.
* [BUGFIX] pass context to sortFunction to avoid calling `__nextSuper` on `undefined`.
* [BUGFIX] Allow setting of `undefined` value to a `content` property.
* [BUGFIX] Resolve bound actionName in Handlebars context instead of direct lookup on target.
* [BUGFIX] isEqual now supports dates.
* [BUGFIX] Add better debugging for DefaultResolver.
* [BUGFIX] {{yield}} works inside a Metamorph'ed component.
* [BUGFIX] Add `title` attribute binding to Ember.TextSupport.
* [BUGFIX] Ember.View's concreteView now asks its parentView's concreteView.
* [BUGFIX] Drop dead code for * in paths.
* [BUGFIX] Route#render name vs viewName precedence fix.
* [BUGFIX] Use parseFloat before incrementing via incrementProperty.
* [BUGFIX] Add `which` attribute to event triggered by keyEvent test helper.
* [Performance] Improve cache lookup throughput.
* [FEATURE ember-routing-add-model-option]
* [FEATURE ember-runtime-test-friendly-promises]
* [FEATURE ember-metal-computed-empty-array]

## Ember 1.5.0 (March 29, 2014)

* [BUGFIX beta] Move reduceComputed instanceMetas into object's meta.
* [BUGFIX beta] Total invalidation of arrayComputed by non-array dependencies should be synchronous.
* [BUGFIX] run.bind keeps the arguments from the callback.
* [BUGFIX] Do not attach new listeners on each setupForTesting call.
* [BUGFIX] Ember.copy now supports Date.
* [BUGFIX] Add `which` attribute to event triggered by test helper.
* [BUGFIX beta] The `each` helper checks that the metamorph tags have the same parent.
* Allow Ember Inspector to access models with custom resolver.
* [BUGFIX] Allow components with layoutName specified by parent class to specify templateName.
* [BUGFIX] Don't raise error when a destroyed array is assigned to ArrayProxy.
* [BUGFIX] Use better ajax events for ember-testing counters.
* [BUGFIX] Move AJAX listeners into Ember.setupForTesting.
* [BUGFIX] PromiseProxyMixin reset isFulfilled and isRejected.
* Use documentElement instead of body for ember-extension detection.
* Many documentation updates.
* [SECURITY] Ensure that `ember-routing-auto-location` cannot be forced to redirect to another domain.
* [BUGFIX beta] Handle ES6 transpiler errors.
* [BUGFIX beta] Ensure namespaces are cleaned up.
* [FEATURE ember-handlebars-log-primitives]
* [FEATURE ember-testing-routing-helpers]
* [FEATURE ember-testing-triggerEvent-helper]
* [FEATURE computed-read-only]
* [FEATURE ember-metal-is-blank]
* [FEATURE ember-eager-url-update]
* [FEATURE ember-routing-auto-location]
* [FEATURE ember-routing-bound-action-name]
* [FEATURE ember-routing-inherits-parent-model]
* [BREAKING CHANGE] `Ember.run.throttle` now supports leading edge execution. To follow industry standard leading edge is the default.
* [BUGFIX] Fixed how parentController property of an itemController when nested. Breaking for apps that rely on previous broken behavior of an itemController's `parentController` property skipping its ArrayController when nested.

## Ember 1.4.0 (February 13, 2014)

* [SECURITY] Ensure link-to non-block escapes title.
* Deprecate quoteless action names.
* [BUGFIX] Make Ember.RenderBuffer#addClass work as expected.
* [DOC] Display Ember Inspector hint in Firefox.
* [BUGFIX] App.destroy resets routes before destroying the container.
* [BUGFIX] reduceComputed fires observers when invalidating with undefined.
* [BUGFIX] Provide helpful error even if Model isn't found.
* [BUGFIX] Do not deprecate the block form of {{render}}.
* [BUGFIX] allow enumerable/any to match undefined as value
* [BUGFIX] Allow canceling of Timers in IE8.
* [BUGFIX] Calling toString at extend time causes Ember.View to memoize and return the same value for different instances.
* [BUGFIX] Fix ember-testing-lazy-routing.
* [BUGFIX] Fixed how parentController property of an itemController when nested. Breaking for apps that rely on previous broken behavior of an itemController's `parentController` property skipping its ArrayController when nested.
* Document the send method on Ember.ActionHandler.
* Document Ember.Route #controllerName and #viewName properties.
* Allow jQuery version 1.11 and 2.1.
* [BUGFIX] Fix stripping trailing slashes for * routes.
* [SECURITY] Ensure primitive value contexts are escaped.
* [SECURITY] Ensure {{group}} helper escapes properly.
* Performance improvements.
* [BUGFIX] Template-less components properties should not collide with internal properties.
* Unbound helper supports bound helper static strings.
* Preserve `<base>` URL when using history location for routing.
* Begin adding names for anonymous functions to aid in debugging.
* [FEATURE with-controller] {{#with}} can take a controller= option for wrapping the context. Must be an `Ember.ObjectController`
* [FEATURE propertyBraceExpansion] Add support for brace-expansion in dependent keys, observer and watch properties.
* [FEATURE ember-metal-run-bind] Enables `Ember.run.bind` which is ember run-loop aware variation of jQuery.proxy.

## Ember 1.3.1 (January 14, 2014)

* [SECURITY] Ensure primitive value contexts are escaped.
* [SECURITY] Ensure {{group}} helper escapes properly.

## Ember 1.3.0 (January 6, 2014)

* Many documentation updates.
* Update to RSVP 3.0.3.
* Use defeatureify to strip debug statements allowing multi-line assert statements.
* Added fail(), catch() and finally() methods to PromiseProxyMixin.
* [BUGFIX] Add 'view' option to {{outlet}} helper
* Make `Ember.compare` return `date` when appropriate.
* Prefer `EmberENV` over `ENV`, and do not create a global `ENV` if it was not supplied.
* `{{unbound}}` helper supports bound helper static strings.
* [BUGFIX] Make sure mandatory setters don't change default enumerable.
* [BUGFIX] The `render` helper now sets a `parentController` property on the child controller.
* `{{render}}` helper now creates the controller with its model.
* Fix bug in Metamorph.js with nested `if` statements.
* Label promises for debugging.
* Deprecate `RSVP.Promise.prototype.fail`.
* Cleanup header comment: remove duplication and add version.
* [BUGFIX] Do not attempt to serialize undefined models.
* [BUGFIX] Ensure {{link-to}} path observers are reregistered after render.
* [BUGFIX] Ensure that the rootURL is available to location.
* [BUGFIX] Make routePath smarter w/ stacked resource names
* Better link-to error for invalid dest routes
* Use imported handlebars before global Handlebars
* Update router.js
* Update RSVP.js
* Improved a handful of error messages
* Provide more information for debugging
* Added more assertions and deprecation warnings
* [BUGFIX] Add preventDefault option to link-to and action.
* [BUGFIX] contextualizeBindingPath should be aware of empty paths
* Expose helpful vars in {{debugger}} helper body
* [BUGFIX] container.has should not cause injections to be run.
* [BUGFIX] Make flag LOG_TRANSITIONS_INTERNAL work again
* [BUGFIX] Fix default {{yield}} for Components.
* [BUGFIX] Ensure aliased {{with}} blocks are not shared.
* [BUGFIX] Update to latest Backburner.js.
* [BUGFIX] Fix issue with Ember.Test.unregisterHelper.
* [BUGFIX] Make Ember.Handlebars.makeViewHelper warning useful.
* [FEATURE reduceComputed-non-array-dependencies] `ReduceComputedProperty`s may have non-array dependent keys. When a non-array dependent key changes, the entire property is invalidated.
* [FEATURE ember-testing-lazy-routing] Uses an initializer to defer readiness while testing. Readiness is advanced upon the first call to `visit`.
* [FEATURE ember-testing-wait-hooks] Allows registration of additional functions that the `wait` testing helper will call to determine if it's ready to continue.
* [FEATURE propertyBraceExpansion] Add simple brace expansion for dependent keys and watched properties specified declaratively.  This is primarily useful with reduce computed properties, for specifying dependencies on multiple item properties of a dependent array, as with `Ember.computed.sort('items.@each.{propertyA,propertyB}', userSortFn)`.
* [BUGFIX release] Update to Handlebars 1.1.2.
* [BUGFIX] Register a default RSVP error handler.
* Update to latest RSVP (80cec268).
* [BUGFIX] Ember.Object.create now takes `undefined` as an argument.
* Components are lazily looked up.
* Renaming everyBy and anyBy to isEvery and isAny.

## Ember 1.2.1 _(January 14, 2014)_

* [SECURITY] Ensure primitive value contexts are escaped.
* [SECURITY] Ensure {{group}} helper escapes properly.

## Ember 1.2.0 _(November 22, 2013)_

* [BUGFIX] Publish ember-handlebars-compiler along with builds.
* [BUGFIX] Use RegExp.test() for Ember.computed.match.
* [BUGFIX] {{partial}} helper now works with bound params
* [BUGFIX] Added assert mismatched template compiler version.
* [BUGFIX] Allow Ember.Object.create to accept an Ember.Object.
* [BUGFIX] Allow keyboard events to work with the action helper.
* [BUGFIX] Enumerable#any no longer returns false if NaN is matched - Fixes #3736
* [BUGFIX] PromiseProxy should merely observe promises. - Fixes #3714
* [BUGFIX] Fix issue with templateName in Route and render. - Fixes #3502
* [BUGFIX] Sort guid fallback unconfused by ObjectProxy.
* [BUGFIX] The router should cleanup itself upon destroy.
* Correct `Em.typeOf` docs re: boxed types.
* Update for Handlebars 1.1
* Allow test helpers to be injected on specific object.
* Update router.js
* [BUGFIX] Give precedence to routes with more static segments. Fixes #3573
* [BUGFIX] Improve unhandled action error messages
* [BUGFIX] Bubble `loading` action above pivot route
* [BUGFIX] reduceComputed ignore changes during reset.
* [BUGFIX] reduceComputed handle out-of-range index.
* [FEATURE] Add support for nested loading/error substates. A loading substate will be entered when a slow-to-resolve promise is returned from one of the Route#model hooks during a transition and an appropriately-named loading template/route can be found.  An error substate will be entered when one of the Route#model hooks returns a rejecting promise and an appropriately-named error template/route can be found.
* [FEATURE] Components and helpers registered on the container can be rendered in templates via their dasherized names. E.g. {{helper-name}} or {{component-name}}
* [FEATURE] Add a `didTransition` hook to the router.
* [FEATURE] Add a non-block form link-to helper. E.g {{link-to "About us" "about"}} will have "About us" as link text and will transition to the "about" route. Everything works as with the block form link-to.
* [FEATURE] Add sortBy using Ember.compare to the Enumerable mixin
* [FEATURE reduceComputedSelf] reduceComputed dependent keys may refer to @this.
* [BUGFIX] reduceComputed handle out of range indexes.
* Update Ember.immediateObserver and Ember.beforeObserver to match the new Ember.observer style.
* Make Ember.observer work with the function as the last argument.
* Ember.run.debounce and throttle accept string numbers like time interval
* Use Ember.Error consistently.
* Add assertion upon too many ajaxStop's.
* Introduce registerAsyncHelper which allows for unchained async helpers
* Ember-testing should not cause a test failure when aborting transitions
* Ember.Test Helpers no longer need to be chained
* Refactored promises usage
* Should not reference global `Handlebars` object, use `Ember.Handlebars` instead
* Added support for jQuery as a `require` module
* Decamelize handles strings with numbers
* disallow container registration if the corresponding singleton lookup has already occurred
* collection view will now defer all normalization to the resolver
* Remove Route#redirect soft deprecation
* Universalize {{view}} helper quoteless binding syntax, prevent id binding
* prefer Ember.Logger.assert over Logger error + setTimeout throw.
* Allow for the initial router to be resolved.
* Don't allow registration of undefined factories.
* Add `Ember.Subarray.prototype.toString`.
* [Improved assert for #3457] provide helpful assertion if needs is specified but no container is present.
* Update router.js to bc22bb4d59e48d187f8d60db6553d9e157f06789
* Update route recognizer
* Allow apps with custom jquery builds to exclude the event-alias module
* Removes long-deprecated getPath/setPath

## Ember 1.1.3 _(January 13, 2014)_

* [SECURITY] Ensure primitive value contexts are escaped.
* [SECURITY] Ensure {{group}} helper escapes properly.

## Ember 1.1.2 _(October 25, 2013)_

* [BUGFIX] Fix failures in component rendering. - Fixes #3637

## Ember 1.1.1 _(October 23, 2013)_

* [BUGFIX] Allow Ember.Object.create to accept an Ember.Object.

## Ember 1.1.0 _(October 21, 2013)_

* Make Ember.run.later more flexible with arguments - Fixes #3072
* Add assertion upon too many ajaxStop's.
* [BUGFIX] Fix an issue with concatenatedProperties.
* [BUGFIX] Throw a sensible exception from SubArray.removeItem when not found.
* [BUGFIX] Fix evaluateUnboundHelper properties
* Use Ember.Error consistently.
* [BUGFIX] Make Component.sendAction behave the same as {{action}} helper.
* [BUGFIX] Unique reduceComputed dependent keys.
* Don't allow registration of undefined factories.
* Decamelize handles strings with numbers
* [BUGFIX] Allow a reduceComputed to have an undefined initialValue.
* [BUGFIX] Soft-deprecate mixed binding syntax in view helper
* Universalize {{view}} helper quoteless binding syntax, prevent id binding
* disallow container registration if the corresponding singleton lookup has already occurred
* [BUGFIX] Fix edge case in `TrackedArray`
* Remove Route#redirect soft deprecation
* [BUGFIX] link-to, bound helper issues with arrays of primitives
* [BUGFIX] Don't use incompatible array methods
* [BUGFIX] `Ember.Object.extend` should allow any property
* [BUGFIX] Fix to return `undefined` for `href` of {{link-to}}
* [BUGFIX] `Ember.keys` should return own property
* [BUGFIX] Fixes #3332 - Array Computed Properties should update synchronously
* [BUGFIX] Fixes issue when content is undefined for Ember.Select with optgroup
* [BUGFIX] `Ember.SubArray` operation composition fix.
* [BUGFIX] Fire observers for array computed changes.
* [BUGFIX] Added tests failing for issue #3331
* Fix a bug in suspendListeners
* [BUGFIX] Optimization: Clear the meta cache without using observers.
* [BUGFIX] Calling `replaceIn` would incorrectly move views from the `hasElement` to `inDOM`
* [BUGFIX] ReduceComputedProperty ignore invalidated property observers.
* Set source object as context for callbacks in computed array property
* allow to inject falsy values like 'false' and 'null'
* `Ember.TargetActionSupport`'s `sendAction` should support `null` as context.
* Create Ember.libraries for keeping track of versions for debugging. emberjs/data#1051
* components should declare actions in the actions hash
* Close #3307 – Fix unexpected behavior with functions in concatenated properties
* Add shortcut for whitelisting all modifier keys on {{action}} Modifier key-independent action helper use cases can be less verbose and more future-proof.
* Only throw an initialValue error if it is null or undefined (i.e. not 0 or some other falsy value)
* Improve message and logic around UnrecognizedURLError
* Incorrect error message in router.js
* Install default error handler on ApplicationRoute#actions, not #events

## Ember 1.0.0 _(August 31, 2013)_

* Fix nested `{{yield}}`
* `ReduceComputed` groups changed properties.
* Multiple fixes and improvements to the new Array Computed Properties
* Adds the ability to specify view class for render
* Restructure controller init, to minimize property lookups
* Provide hook for persistence libraries to inject custom find behavior.
* Sync router.js
* Controller#controllers property should be readOnly
* Invalid Controller#controllers accesses throw runtime exceptions
* Inform about the Ember Inspector if not installed
* Don't force a layout on registered components
* Make TextField and TextArea components
* Adds Function.prototype.observesImmediately
* Move ember-states into a plugin: https://github.com/emberjs/ember-states
* Update Backburner
* Disabled model factory injections by default.
* Fix bug where link-to wouldn't be active even if resource is active
* Add Ember.PromiseProxyMixin
* Some fixes to grouped each
* Update to rsvp-2.0.2; fixes unit tests for RSVP#rethrow in IE 6,7,8
* Rename computed array macros to match #3158
* Consider `controllerName` in Ember.Route#render()
* Allow a template explicitly set on a view to be used when rendering a route.


## Ember 1.0.0-rc.8 _(August 28, 2013)_

* View, controller & route action handlers are now expected to be defined on an `actions` object.
* registerBoundHelper won't treat quoted strings / numbers as paths
* Array Computed Properties
* Rename bindAttr to bind-attr.
* Rename linkTo to link-to.
* Improved default route.serialize behavior. It will now attempt to populate named properties with the corresponding property on the model.
* Added Ember.getProperties
* Smarter linkTo observers
* Fix `Ember.EnumerableUtils#replace` to allow large size of array
* rsvp.js refresh with RSVP#rethrow and promise#fail
* Make sets during init behave the same as create(props)
* Continue to make view creation container aware
* Sync router.js - Closes #3153, #3180
* Application#resolver -> Application#Resolver
* The resolver now provides the normalization
* Add currentRouteName to ApplicationController
* Lookup itemViewClass and emptyView of collectionView if given as string
* Change behavior around uncached computed properties.
* Aliased xProperty methods in enumerable to xBy and aliased some and someProperty to any and anyBy respectively
* Factory Injections
* Support replaceURL on HashLocation
* Assorted performance improvements
* Add Ember.on, Function.prototype.on, init event
* Fix some `{{yield}}` bugs
* Improved `Route#controllerFor` to support `controllerName` and non-route lookups


## Ember 1.0.0-rc.7 _(August 14, 2013)_

* correctly preserve a views container
* Reference to RSVP repo for documentation
* Remove obsolete paragraph from ObjectController comments
* Add rel attribute binding to linkTo helper
* Add Ember.DataAdapter in ember-extension-support
* Asserts that a target element is in the DOM on `appendTo` and `replaceIn`.
* add Ember.create unit test, preventing parent object's pollute
* Sync with router.js
* fix #3094
* View event handlers inside eventManager should be wrapped in run loop
* fix #3093
* Handlebars template properties should not be methods
* Add assert that `this` is correct in deferReadiness and advanceReadiness. @stefanpenner / @lukemelia
* Remove `previousObject` argument from `Ember.Enumerable#nextObject`
* Remove `context` argument from `Ember.Enumerable#nextObject`
* Fixed some docs for Ember.Route
* Added the ability to send a context with actions in components
* Fixed a typo in documentation for {{log}}
* Added `mergedProperties` to ember-metal, Ember.Route's `events`
* render helper: falsy contexts no longer treated as absent
* Fix yield helper to only be craycray for components
* Components should not be singleton (just like views)
* Make methods on the router overridable. Denote private methods with _
* router.js sync - don't overwrite URL's on noop transitions
* adding docs for observers
* Clearer messaging for  changes and removal of bad assert
* Removed old-router
* Clarified Ember.warn message for linkTo loading state
* linkTo param of 0 should be treated as a url param
* Aborts/redirects in willTransition don't enter LoadingRoute
* Assertion if incrementProperty given non-numeric value
* Add sendAction() to Ember.Component
* {{yield}} view should be virtual
* Remove warning about route rendering that was inaccurate and confusing
* Fix {{template}} deprecation warnings in tests
* Ember.controllerFor and Route#controllerFor no longer generate controllers
* improve readability of some exceptions caught b
* update release rakefile to work with the updated website
* Clean up Handlebars helpers registered in tests
* Better route assertions - Fixes #2003
* Mixins don't technically extend Ember.Mixin
* Docs and whitespace cleanup
* Re-add Ember.Object.create docs and document createWithMixins
* Revert "document the create method in for subclasses of Ember.Object"
* router.js sync - simplified transition promise chain
* Added a License to the gemspec - Fixes #3050
* Only use valueNormalizer if one is present insideGroup. Fixes #2809
* Remove unnecessary assertion for `Ember.inspect`
* Fixed problem with dependentKeys on registerBoundHelper.
* Should allow numbers in tagNames i.e. h1-6
* [CVE-2013-4170] Fix for Potential XSS Exploit When Binding to User-Supplied Data
* Update component_registration_test.js to use component vs. control
* Fix test to normalize URL for IE7
* Fix date assertion that returned by `Ember.inspect`
* fix tests, isolate keywords in component, yield back controller and keywords in addition to context
* Add some more tests to stress-test yield
* Make yielded content look at the original context
* Don't set context in Ember.controllerFor
* Tweak htmlSafe docs
* Improve error message for missing itemView
* Improve assertion for non-Array passed to #each
* Add Example for Ember.computed.alias
* Remove unreferenced property `Ember.Comparable#isComparable`
* Remove unused argument for `Ember.Array#objectAt`
* Fix indeterminate checkbox that is set on insert
* Add jQuery 1.9 to testing rake task
* Support object with `Ember.String.fmt`
* Add 'date', 'regexp' and 'error' support to `Ember.inspect`
* Improve `Ember.inspect` for array
* Fix replacement for `Ember.String.fmt` to be parsed as decimal digit
* Upgrade to latest router.js
* {{input}} helper doesn't override default type
* Deprecate `template` in favor of `partial`
* Document htmlSafe
* upgrade RSVP
* Expose `options` arg in `debugger` HB helper
* Use the original arg length of wrapped CP funcs, still call the wrapper
* Documentation for sendEvent and doc change in removeListeners
* Fixed incorrect example of multi-arg registerBoundHelper
* Support indeterminate property in checkboxes
* Fix: didInsertElement was fired twice
* upload prod builds to s3
* Application#setupForTesting should set `Ember.testing = true`
* remove un-needed context preservation
* Don't push childViews if undefined/invalid (issue #2967)
* keyEvent integration test helper to simulate keydown, keypress etc.
* Add documentation to cover the `{{each}}` helper's `emptyViewClass` option.
* Removes an unused Ember.get include
* Improve Ember.Logger setup - Fixes #2962
* Better documentation for Ember.run.throttle and debounce
* Update Backburner.js
* View helper learns about the container
* Fix the jQuery patch code for ember-testing click in Firefox.
* update ember-dev to give proper assertion test failures
* [fixes #2947] container#unregister
* Validate fullNames on resolve
* Route#model by default now uses lookupFactory
* add resolveModel to the default resolver
* fix deprecation warning
* ember-application test refactoring
* Specify controller of a route via controllerName
* Remove non ASCII character in handlebars assertion error message
* .jshintrc: set browser:false
* Throw exception on invalid arguments for pushObjects method (issue #2848)
* {{linkTo}} bound contexts, loading class
* Use released handlebars
* Fixed bug in Ember.Application#reset that calls `startRouting` twice.
* assert that item view exists in container and camelize lookup name
* Remove property for compatibility
* Created helpful error message when using @each on an array that does not return objects
* Update Router.js: slashless handleURL, numeric/string params
* Allows itemView option into the each/collection helper. If itemView exists and there is a controller container, then it will attempt to resolve the view via the container.
* Add Ember.Route#disconnectOutlet, to allow for clearing a previously rendered outlet. Fixes #2002
* remove duplication of testing for Ember.run.debounce
* Update supported ruby version
* Updated JSBin And JSFiddle links to point to working fiddle/bin
* Document the container
* Use Ember.isNone instead of Ember.none
* Quoteless route param in linkTo performs lookup
* Allow value of TextField to be 0
* Fire mousedown & mouseup on clicks, plus focus for text fields.
* Add a check for jQuery versions with a specific checkbox click bug.
* warns when trying to get a falsy property
* Updating new Ember.Component documentation to remove confusion
* Stringify linkTo examples
* Update router.js. Fixes #2897.
* Added functionality to Router.map to allow it to be called multiple times without the map being overwritten. Allows routes to be added at runtime. One test with multiple cases also added.
* Revert "Use Ember setter to set Ember.Route controller."
* Calling router.map now appends the routes instead of replacing them
* simplify history.state support check
* Polyfill history.state for non-supporting browsers
* Switch from unbind to off for router location events
* Support grouping option for Ember.Select using optgroup
* Update Handlebars version to 1.0.0
* Show `beforeModel` and `afterModel` in API Route docs
* update lock file
* Add tests for #1866 - loc helper
* add loc helper
* document  ember-testing helpers


## Ember 1.0.0-rc.6 _(June 23, 2013)_

* Refactored `Ember.Route`s teardown mechanism for rendered views. This fixes #2857, previously multiple outlets were not tore down.
* Rename Control to Component. This avoids conflicts with the existing (behind-a-flag) control and is clearer about intent.
* Remove Ember.register to avoid introducing yet-another registration mechanism and move the logic into Ember.Handlebars.helper.
* Add test for parentViewDidChange event.
* Trigger parentViewDidChange event.[Fixes #2423]
* Make `control` helper more resilient.
* Ember.Select 0 can now be the selected value [Fixes #2763]
* Fix Ember.Select example.
* Ember.Control add inline docs.
* Add Ember.Control
* Make template loader an initializer
* Add lookupFactory
* Fix to support jQuery 1.7
* In mid-transition, `modelFor` accepts both camelCase and underscore naming
* In StateManager, use instanceof check instead of the legacy isState attribute. This is potentially breaking, but very unlikely to affect real-world code.
* StateManager and states now pass their `container` to child states.
* Ember.Test tests refactor
* Ember.Test fix wait helper resolution value
* Router facelift – Async transitions
* Ember.Test find helper no longer throws an error if the selector is not found.
* Additional API docs for LinkView
* [Fixes #2840] - textfield binding issue with null
* Update Backburner.js
* Make sure we are inside a run loop before syncing
* Inline helper function, remove unneeded function call.
* Remove unnecessary function call from `Ember.normalizeTuple`
* Ember.SortableMixin: new option sortFunction
* Update docs so that `Ember.View.$` is a method, not a property.
* Add documentation to cover LinkView's `eventName` property
* Improve docs for event names
* Remove expectAssertion in favor of ember-dev
* Added ability to change event type on which Ember.LinkView is triggered
* ContainerView#initializeViews learns about the container
* Improve Ember.View#createChildView container support
* Ensure assertion failures are test failures.
* Fix failing tests for non-blocking assertions
* Make the test suite work with non-blocking assertions
* Utilize the browser console.assert when possible
* Added custom test helper for testing assertions: expectAssertion
* Ember assertions work more like console.assert e.g. they are now uncatchable
* Update ember-dev
* Visit helper update router url before handling it
* Moved set of events to listen on by default to a property of EventDispatcher so it can be overridden
* Fix typo in array mixin docs
* Clarify subclasses of Ember.CoreView #2556
* Fix naming of _displayPropertyDidChange in comment
* Assert keyName not null and not undefined in get() and set()
* Add `debounce` to Ember.run. Uses `backburner.debounce`
* Cleaned up a bad check inside of `Ember.View._hasEquivalentView` that was causing routes with the same template and controller, but different view classes, not to render.
* Add documentation and test for Ember.Handlebars.helper
* Fix ember-dev s3 push.
* Fix App#reset to correctly reset even when Router.map was never called.
* Added test case that the render helper throws when a controller name doesn't resolve
* Release tooling improvements
* Adds assertion for misnamed controller name provided to render helper. [Fixes #2385]


## Ember 1.0.0-rc.5 _(June 01, 2013)_

* Added assertion for incorrect container lookup names
* adding docs for Ember.beforeObserver
* Remove ember-testing from production build
* Fixed bug with promises on startup. Fixes #2756.
* sync router.js fixes App#reset in ember-testing issue
* Notes that replaceWith only works with 'history' - Fixes #2744
* Fix failing tests in IE7 by normalizing URL
* Update backburner to fix IE8 failing test
* Update Backburner.js fixing the performance regression introduce in rc4
* maintain ruby'esq version string for gems
* remove starter_kit upload task (we just use the github tarballs)


## Ember 1.0.0-rc.4 _(May 27, 2013)_

* Loader: improve missing module error message
* Fix click test helper selector context
* fixes #2737: 'In the Router, if ApplicationController is an ObjectController, currentPath is proxied to the content.'
* Update backburner with autorun release
* use Ember.run.join internally for App#reset
* Add Ember.run.join
* Include 1.10 in jQuery version check
* Fix to ignore internal property in `Ember.keys`
* ensure willDestroy happens in action queue so live objects have a chance to respond to it before destroy
* Fix view leak (issue #2712)
* Added logging of view lookups
* App learns to LOG_ACTIVE_GENERATION
* Added support for calling multiple async test helpers concurrently
* fix misleading docs [fixes https://github.com/emberjs/website/issues/485]
* Added the ability to chain test helpers
* BREAKING: Move setting controller's `model` into setupController
* Updated ember-latest jsbin starting point URL
* Documentation for ComputedProperty cacheable
* Mask deprecation warning in metaPath testing
* mask deprecation warnings (when knowingly triggering them)
* Deprecate Ember.metaPath
* Treat {{#each}} as {{#each this}}
* Set actions as the default run loop queue
* Replace Ember.RunLoop with Backburner.js
* Deactivate route handlers before destroying container in App.reset() - Upgrade router.js micro-framework
* Create Test Adapter to keep ember-testing framework agnostic
* Simplify not-null-or-undefined checks
* [fixes #2697]
* update doc example to current router
* Ember.computed learns oneWay computed
* Find helper now throws when element not found and added selector context
* Fix downloads link for starter-kit
* Move /** @scope */ comments inline to their extend calls
* fixing JSON syntax error and upgrading ember-handlebars-compiler dependency to 1.0.0-rc.3
* Documentation: fix code block of Ember.String.capitalize
* Ember.Deferred now handles optional then handlers.
* upgrade ember-dev
* App#reset now only brings it's own run-loop if needed.
* gitignore bundler/* this allows for a local bundle --standalone
* Small corrections to Route.events documentation.
* Add assertion about setting the same current view to multiple container views
* Remove SC compatibility in Ember.Array
* Document and add assertion reflecting that helpers created with registerBoundHelper don't support invocation with Handlebars blocks.
* Trigger change in fillIn helper in ember testing
* Fix undefined error when promise rejected on startup
* Ember testing capture exceptions thrown in promises
* Rewrite `EMBER_VERSION` with `Ember::VERSION`
* Fix docs to use extend instead of create when setting observers
* Makes partial helper only lookup the deprecated template name if the first try is unsuccessful.
* Removed duplicate test for normalizeTuple
* Ember testing update url in visit helper
* bump RSVP (it now has RSVP.reject)
* Make parentController available from an itemController
* Stop unnecessary `jQuery.fn` extension
* Include `Ember::VERSION` in 'ember-source' gem
* Create Ember.Test with registerHelper method
* Improve {{render}} docs.
* Don't add disabled class if disabledWhen not provided
* More accurate, helpful error message for handlebars version errors.
* Adds disabledWhen option to {{linkTo}} helper
* Clean up pendingDisconnections properly
* Make router's render idempotent
* Switch from bind to on for routing handlers.
* Switch from delegate/undelegate to on/off for EventDispatcher.
* Remove IE specified test
* Adding regression test
* Remove unused helper function
* This function is already defined as `set`
* Deferred self rejection does not need special handling
* Fix rejecting a deferred with itself
* Fix CollectionView.arrayDidChange documentation
* ember-testing: Make wait a promise and a helper
* tests on chained helpers added ember-testing for running in qunit
* Added `routeTo` for event-based transitions
* Prevent unnecessary re-rendering when only route context has changed
* Add test for visit helper in ember testing
* Reduce the polling interval to make tests run much faster
* Update route-recognizer - Fixes #2559
* Revert "Use isNone to check tag name"
* Support for redirection from ApplicationRoute
* Improving Ember.Select's null-content regression test
* Prevent another exception on empty Ember.Select.content
* prevent exception on empty Em.Select content
* deprecate the defaultContainer (see: http://git.io/EKPpnA)
* RSVP is now promise/a+ 1.1 compliant
* Fix test for setTimeout with negative wait for older IE
* Use `Function.prototype.apply` to call `setTimeout` on older IE
* Use Ember.isNone
* Fixed view subclasses being instrumented as render.render.*
* Fixes #2526 - Updates JsFiddle and JsBin links for rc.3
* Add tests to deferred mixin
* Allow missing whitespace for assertion fot html text
* Fix incrementProperty/decrementProperty to be able to use with 0
* RSVP2
* Adds the ability to specify the view class used by the outlet Handlebars helper
* Make view helpers work with bindings
* get of property in false values should return undefined
* Really normalize hash params this time
* Normalize Ember.Handlebars.helper hashes
* Fix bug with Ember.Handlebars.helper
* Ember.EventDispatcher is now container managed.
* typeInjection's public api is via injection
* App#reset now triggers a eventDispatcher teardown
* Added docs of ArrayContentDidChange for array
* Move linkTo docs to helper instead of LinkView
* Use tag name supported by html 4
* Fix to use `Ember.ArrayPolyfills.forEach`
* Switch assertion for simulated Ember.create
* document {{input}} and {{textarea}} helpers
* convert bools to flags so it is easier to add new ones
* Fix to use `Ember.ArrayPolyfills.forEach` for IE8
* Skip Object.getOwnPropertyDescriptor only IE8
* Use stub `Object.create` for IE8
* Force downcase tag name for IE8
* rake release:gem + some cleanup
* Reduce late time to less than resolution capability of `setTimeout`
* Kepp timers order
* Adjust wait time to tick next run loop for more browsers
* additional Controller#needs documentation
* make use of Ember.isNone explicit in Ember.isEmpty
* Added API docs for 'needs' property of controller
* Use isNone to check tag name
* Added length property to Ember.Map


## Ember 1.0.0-rc.3 _(April 19, 2013)_

* fn.call is wasteful when the thisArg is not needed.
* don't needlessly close-over and rebuild insertViewCollection
* Don't apply href to LinkView that isn't using 'a' tag
* Documents {{linkTo}}
* Include ember-testing in full build
* Use `jQuery.is(':disabled')` instead of `jQuery(':disbled').length` for Opera
* Remove assigned but unused variable
* Document run.scheduleOnce, truncate run.once docs. Fixes #2132.
* fix failing tests for outerHTML fallback
* don't rely on EXTEND_PROTOTYPES == true
* Fixes Ember.EnumerableUtils without extend prototypes
* Do not flag .generateController for documentation.
* Do not build the docs for `.cacheable`. Fixes #2329.
* cleanup MutableEnumerable documentation
* Add Ember.Application#removeTestHelpers
* Fix a couple issues
* First pass of work for the ember-testing package
* Fixes error in documentation referring to non-existent 'Customizing Your Bindings' section
* Fix method comments
* Fix redirecting to child routes
* Fixes to MetamorphView's DOMManager replace
* Fixes #870 Lazy destruction + App#reset issues
* Eliminate unused variables
* Point to updated preconfigured starting points for JSFiddle/JSBin with latest Ember build that is now being auto-posted to builds.emberjs.com
* Fixes #2388: Added if statement to _resetSubControllers
* scope cached state transition hashes to the state manager class, so extending and mixins work with StateMangers as expected
* Fixes for upload of published builds.
* Update to latest ember-dev so that publish task can work properly
* Configure Travis for automatic deploy to AWS
* Add missing item type
* Do no emit Ember.alias deprecation warnings during alias tests
* add invokeRecursively to ViewCollection
* Failing test showing StateManagers using mixins to get some of their states have unexpected behavior
* Fix HistoryLocation rootURL handling and webkit workaround
* Remove unused argument from helper functions
* Use `toArray` to remove duplication
* Allow option view for Ember.Select overwritable
* Actually make Ember.alias() print deprecation warnings.
* use ``Ember.String.fmt`` instead of String extension
* automatically upload all passing builds to s3
* [Fixes #2424] App#reset
* s/nexts/these (nexts is not a word)
* More verbose error message on failed linkTo routing attempts
* viewName is a property
* remove unneeded closures
* JSDoc should use {*} for mixed types instead of {anything} and {any}
* add an "includeSelf" parameter to "invokeRecursively"
* Fix ArrayController#length when content is not explicitly set
* Close #2043 - fix issue with removing last element in collection
* Stop application template from duplicating on re-render
* assertion to catch mixins being passed to Object.create
* Enhance Ember.TargetActionSupport and introduce Ember.ViewTargetActionSupport
* fix {{textarea}} assert message
* Test for unwatch methods on object length property
* Tests for watch methods on length properties
* Test for isWatching on length property of an object
* Move Ember.typeOf to metal
* Fix array watching issue. Was affecting more than just plain arrays due to differences between typeOf and isArray.
* Remove mention of passing mixins to create.
* Revert "Fix Application#reset destroy issue"
* Fix view helper documentation and example to reflect context
* Ignore webkitStorageInfo during namespace lookup to avoid warning
* Fix Application#reset destroy issue
* Make Chrome initial popstate workaround account for rootURL
* Use a string instead of an array in RenderBuffer
* Convert a for in loop to a plain for loop
* Improve view container lookup performance
* remove unneeded asynchrony from Ember.Deferred tests
* remove unneeded asynchrony from routing tests
* Add {{text area}}
* Default text input action to 'enter'
* Add {{input action="foo" on="keyPress"}}
* More metal cleanup
* Better organize ember-metal and cache function lookups.
* remove sync from render to buffer
* make tests not depend on synchronous change events
* fix test not to expect synchronous observers
* Define Mixin properties in prototype
* Update ember-dev gem to latest version
* Share empty arrays in Ember.View prototype. Lazily slice it upon manipulation.
* Add views to Ember.View.views upon insertion in DOM rather than on init. Fixes #1553
* Make object destruction async so we can reduce churn when destroying interconnected object graphs.
* Define Ember.CoreObject#willDestroy. Fixes #1438.
* cleanup unneeded volatile()
* Match the transitionTo APIs.
* Avoid recursively calling transitionTo.
* Improve the performance of view notifications and transitions.
* Extract a private ViewCollection class to aid in manipulating several views at once.
* Add support for {{input type="checkbox"}}
* Add Ember.Handlebars.helper
* Add {{input type="text"}}
* Insert adjacent child views in batches rather than individually.


## Ember 1.0.0-rc.2 _(March 29, 2013)_

* Improved the App initialization process and deprecated Ember.Application#initialize. If you were using this, use deferReadiness and advanceReadiness instead.
* Added support for Ember.Application#then which fires similarly to the isReady hook
* Added more Ember.computed macros
* Added readOnly flag for computed properties
* Enumerable#compact now removes undefined values
* Fixed issue with unregistering actions on virtual views
* Make Ember.LinkView public
* Add support for jQuery 2.0
* Support browsers (FF 10 or less) that don't support domElement.outerHTML
* Made it easier to augment the Application's container's resolver
* Support tag as an alias for tagName in the {{view}} helper
* Add 'name' to attributeBinding for Ember.TextField and Ember.Select
* Return merged object from Ember.merge
* Deprecate setting tagNames on Metamorphs - Refs #2248
* Avoid parent's implicit index route clobbering child's explicit index.
* App#reset behaves more closely to App#create
* Make Evented#on, #off, and #one chainable
* Add basic implementation of allowedKeys for the {{action}} helper
* Improved Ember.Array#slice implementation
* Fix ArrayProxy arrangedObject handling - Fixes #2120, #2138
* Added ability to customize default generated controllers and routes
* Better HistoryLocation popstate handling - Fixes #2234
* Fix an issue with IE7
* Normalized Ember.run.later and Ember.run.next behavior.
* Fix issue where classNameBindings can try to update removed DOM element.
* Ember.Array methods always return Ember.Arrays
* RSVP is now exposed as Ember.RSVP
* ObjectProxy does not attempt to proxy unknown properties on create
* Can now set ENV.LOG_VERSION to false to disable version logging
* Ember.ArrayController#lastObject no longer raises when empty
* Fixes to {{render}} helper when used with model
* Improvements to {{linkTo}} controller handling
* Fix {{bindAttr}} when targeting prop in {{#each prop in array}} - #1523
* String#camelize lowercases the first letter
* Other miscellaneous bug fixes and documentation improvements


## Ember 1.0.0-rc.1 _(February 15, 2013)_

* Upgrade to Handlebars 1.0.0-rc.3
* Update RSVP.js
* Update router.js
* Support 0 values for input tags
* Support for jQuery 1.9
* ArrayController now defaults to empty array
* Added Vagrant support for setting up a development environment
* Adds {{each itemController="..."}}
* Fix issues where route transitions would not register properly
* Initial support for Application#reset
* Fix handling of keywords in bind helpers
* Better handling of DOM properties
* Better handling of complex {{#if}} targets
* {{linkTo}} shouldn't change view context
* Router#send accepts multiple params
* Provide a view's template name for debugging
* Create activate and deactivate hooks for router
* {{action}} targets are now looked up lazily
* The model for Route#render is now bound
* Improvements to ContainerView
* Added 'pattern' attribute to text field for iOS.
* CollectionView context is now its content
* Various enhancements to bound helpers: adds multiple property support to bound helpers, adds bind-able options hash properties, adds {{unbound}} helper support to render unbound form of helpers.
* Add App.inject
* Add Ember.EnumerableUtils.intersection
* Deprecate Controller#controllerFor in favor of Controller#needs
* Adds `bubbles` property to Ember.TextField
* Allow overriding of Ember.Router#handleURL
* Allow libraries loaded before Ember to tie into Ember load hooks
* Fixed behavior with Route#render and named outlets
* Fix bug where history location does not account for root URL
* Allow redirecting from mid-route
* Support string literals as param for {{linkTo}} and {{action}}
* Empty object proxies are no longer truthy in {{#if}}


## Ember 1.0.0-pre.4 _(January 17, 2013)_

* Add {{partial}}
* Fix regressions in router.js
* Support jQuery 1.9.0
* Use the controller with the same name as the template passed to render, if it exists


## Ember 1.0.0-pre.3 _(January 17, 2013)_

* BREAKING CHANGE: New Router API
* BREAKING CHANGE: `Ember.Object.create` behaves like `setProperties`. Use `createWithMixins` for the old behavior.
* BREAKING CHANGE: No longer default a view's context to itself
* BREAKING CHANGE: Remove the nearest view computed properties
* Significant performance improvements
* Bound handlebars helpers with `registerBoundHelper`
* Ember.String improvements
* TextSupport handles input, cut, and paste events
* Add `action` support to Ember.TextField
* Warn about using production builds in localhost
* Update Metamorph
* Deprecate Ember.alias in favor of Ember.aliasMethod
* Add Ember.computed.alias
* Allow chaining on DeferredMixin#then
* ArrayController learned itemControllerClass.
* Added VagrantFile and chef cookbooks to ease ember build for developers.
* Provide an Ember.Handlebars precompilation package
* Removed Tab controls
* Fix Chrome (pre v25) MutationObserver Memory Leak
* Update to Promises/A+ compatible RSVP
* Improved instrumentation
* Rename empty to isEmpty and none to isNone
* Added support for toStringExtension to augment toString
* Implement a default computed property setter.
* Add support for unhandledEvent to StateManager.
* Load external dependencies via an AMD shim
* Pass in the old value into the CP as a third argument
* Deep copy support for NativeArray
* Added an afterRender queue for scheduling code to run after the render queue has been drained
* Implement _super() for computed properties
* Miscellaneous bug fixes
* General cleanup


## Ember 1.0.0-pre.2 _(October 25, 2012)_

* Ember.SortableMixin: don't remove and reinsert items when their sort order doesn't change.  Fixes #1486.
* Fix edge cases with adding/removing observers
* Added 'disabled' attribute binding to Select
* Deprecate usage of {{collection}} without a class in favor of {{each}}
* Changing `Ember.Handlebars.getPath` to `Ember.Handlebars.get` for consistency. This addresses #1469.
* Since `$.uuid` was removed from jQuery master, we're switching to using `Ember.uuid` instead.
* Add Ember.View#nearestOfType, deprecate nearestInstanceOf
* Adds support for globbed routes
* Remove CP_DEFAULT_CACHEABLE flag
* Remove VIEW_PRESERVES_CONTEXT flag
* Replace willRerender with willClearRender
* Bumped jQuery requirement to 1.7.2+, explicitly forbidding 1.7 and 1.7.1 (see: #1448)
* Add Ember.String.classify() to string extensions
* HistoryLocation now utilizes history.replaceState
* Add a basic instrumentation API
* Allow extension of chosen prototypes instead of the current all or none.
* Remove dependency on `window` throughout Ember
* Don't attempt to concat a concatenatedProperty onto an object that doesn't have a concat method
* Remove ember-views dependency from ember-states
* Multiselect updates array content in place.
* Support applications without a router
* Add Ember.Deferred mixin which implements promises using RSVP.js
* Fix for popstate firing on page load.
* Fixed bug in CP setter where observers could be suspended and never restored.
* Fixed a bug with setting computed properties that modify the passed in value.
* Initial work to allow operation with handlebars runtime only
* A listener registered with one can be removed with off
* Calling removeListener without method should remove all listeners
* Add autoinit flag to Application to call initialize on DOM ready.
* Create view for application template if no ApplicationView.
* Remove support for inline anonymous templates.
* Rename createRouter to setupRouter to make clear.
* Extract createRouter from Application#initialize
* Extract runInjections from Application#initialize
* Simplify syntax so we can extract more easily
* Extract createEventDispatcher from Application#init
* Update for Handlebars 1.0.rc.1
* Fix State.transitionTo to handle multiple contexts
* Cleanup classNameBindings on remove
* Support defining injections to occur after other injections
* Computed prop setter improvements
* fix :: syntax in classNameBindings to work with falsy values
* Fix Ember.Error properties
* Improved error handling with Ember.onerror
* Adds currentPath to Ember.StateManager
* Provide default args to tryInvoke - fixes #1327
* Fix a bug in multi-selects with primitive options
* Fix formatURL to use rootURL and remove formatPath
* Fixing Ember.Router.route when rootURL is used
* ContainerViews should invalidate `element` on children when rendering.
* Add test for selecting in multi selects with prompts
* Fix: Passing a regex to split in IE8 returns a single item array, causing class names beginning with a colon to fail to render in IE8.
* Adding itemViewClass attribute to the each helper.
* Reorganize load hooks to be more sane
* Improve application readiness framework
* Small restructuring of ArrayProxy
* Add #setObjects to mutable array. A helper for replacing whole content of the array with a new one.
* Fixed selecting items in ember multi-selects
* Add disconnectOutlet method to controller
* The content property of an ArrayProxy instance should be defined before modifying it
* Adds a has() method to Ember.OrderedSet
* Adds hooks for suspending observers
* Check that a controller inherits from Ember.Object before instantiating it to the router.
* Support jQuery 1.8 - fixes #1267
* Ember.empty returns true if empty Ember.ArrayProxy
* add scheduleOnce and remove flag
* add various lifecycle tests to check updated ContainerView path. Expose problem with flag for scheduling one time.
* Moving location tests to routing package
* Make outlet a Metamorph view
* Tests showing problem with adding and replacing
* refactor ContainerView children rendering to not make assumptions at scheduling time, just at render time.
* Remove remaining references to viewstates
* Select element should initialize with the correct selectedIndex when using valueBinding
* Remove deprecated Ember.ViewState.
* Handle undefined element in bindAttr and classNameBindings
* Render now uses context instead of _context
* Better version replacement regexp
* Outlets reference context instead of controller.
* Rakefile :clean remove 'tmp' folder
* Performance improvements


## Ember 1.0.pre _(August 03, 2012)_

* Return undefined instead of empty jQuery object for Ember.View#$ when not in DOM
* Adds didDefineProperty hook
* Implement immediateObserver placeholder in preparation for making observers asynchronous
* Change {{action}} API for more explicit contexts
* Add connectControllers convenience
* Assert that transitionTo at least matched a state
* Delay routing while contexts are loading
* Also rename trySetPath to trySet
* Replaced getPath/setPath with get/set
* Remove LEGACY_HANDLEBARS_TAG flag
* Add two new core methods to allow invoking possibly unknown methods on objects
* Change ternary syntax to double colon syntax
* Add tests for ternary operator in class bindings
* Test for defined Router lacking App(View|Controller)
* Allow alternate clicks for href handling - Fixes #1096
* Respect initialState when transitioning to parent of current state - Fixes #1144
* add reverseObjects
* Fixing rootURL when path is empty
* HistoryLocation appends paths to router rootURL
* Make Ember.Logger support the 'info' and 'debug' methods on fallback (for IE8).
* Support currentView on init if ContainerView is created with one
* {{bindAttr class="this"}} now works; fixes #810
* Allow connectOutlet(outletName, name, context) syntax
* turn on mandatory setter for ember-debug if not set
* Change the default setUnknownProperty to define it before setting.
* {{view}} now evaluates the context of class bindings using the same rules applied to other bindings
* dataTransfer property for drag and drop events
* require jQuery 1.7, no longer accept 1.6
* add mandatory setter assertion
* Add date comparison to Ember.compare
* We use jquery event handling for hashchange/popstate
* Deprecate Ember.Tabs - Fixes #409
* Remove data-tag-name "feature" from <script> tags
* Only register Ember.View.views for non virtual views
* Add support for tabindex in Ember Controls.
* Only push new history when initialURL has changed
* Support basic States inside of Routes
* Refactor context handling for States and Routes
* Make Map copyable
* Assert that path passed to urlFor is valid
* Do not run functions passed to Ember.assert, Ember.warn, and Ember.deprecate
* Allowing developer to turn off verbose stacktrace in deprecation warnings
* Ember.Route.serialize must return a hash
* lazy setup of ComputedProperties
* change convention from var m = meta(obj) to var meta = metaFor(obj)
* add hook for desc for willWatch and didUnwatch
* Call transitionEvent for each nested state - Fixes #977
* Define a 'store' property in ControllerMixin, to avoid proxy-like handling at router initialization (controllers store injection).
* if there is no context, allow for views without controllers
* Add MapWithDefault
* serialize route states recursively
* urlForEvent for a route with a dynamic part doesn't serialize the context
* Don't stopPropagation on action handling by default
* Implement a route's navigateAway event
* Change app.stateManager to app.router
* Allow a one-time event listener on Ember.Evented
* Rename `fire` to `trigger`
* change sendEvent signature from sendEvent(obj, name, …) to sendEvent(obj, name, params) to avoid copying the arguments. Conflicts:
* Deprecate Ember.ViewState
* remove Ember.MixinDelegate
* Call preventDefault on events handled through {{action}}
* Call transitionEvent on initialStates as well as targeted state
* During apply not applyPartial, chains maybe setup, this makes sure they are updated.
* allow computed properties to be overridden
* Change connectOutlet API to prefer Strings
* Fix bug with Ember.Router#route not reflecting redirections in location
* Give Ember.Select prompt an empty value
* Create Ember.ArrayPolyfills
* Rename ArrayUtils to EnumerableUtils
* Use transitionTo rather than goToState
* Improve ArrayUtils by removing unnecessary slices
* Use evented system for dom events on views
* Fix switchToUnwatched so ObjectProxy tests pass.
* Skip mixin properties with undefined values
* Make defineProperty override native properties
* Fix unsupported method errors in older browsers
* Improved Ember.create shim
* Can't use lib/ember.js because we use that for precompiling, so let's use dist/distold instead
* Use `getPath` instead of `get` in computed macros in order to allow 'foo.bar' dependencies
* A route's `serialize` should handle null contexts
* Router.location cannot be null or undefined
* Use 'hash' as default location implementation on Router
* Clean up location stubbing in routable_test
* Instantiate Ember.Location implementation from Router
* Add NoneLocation
* Add options hash syntax to connectOutlet.
* Added 'ember-select' CSS class to Ember.Select, as per the convention with other included views.
* Fix Ember.setPath when used on Ember.Namespaces
* Remove async transitions.
* Enumerate all properties per injection.
* Injections can specify the order they are run.
* Make sortable test deterministic
* Improve invalidation of view's controller prop
* Cleaning up in history location
* Removing lastSetURL from setURL
* Fix bug with computed properties setters not triggering observers when called with a previous value
* Fix failing test
* Adding popstate tests for history based location
* Splitting location implementations from Location
* Use accessors for eventTransitions
* Finish implementation of Sortable mixin
* Move sorting into separate mixin
* Crude sorting on ArrayController
* Split ArrayProxy into content and arrangedContent
* Fix broken upload_latest task by specifying version for github_api
* Add some convenience computed property macros to replace the major usages of binding transforms
* Initial pushState based location implementation
* Support #each foo in this and #with this as bar
* `collection` should take emptyViewClass as string
* Don't update the route if we're routing
* Don't special-case the top-level '/'
* Make routing unwind properly
* Replace occurrences of goToState with transitionTo.
* No longer support RunLoop instantiation without `new`.
* Improve naming and code style
* Guard mergeMixins parameters more generally
* Guard against implicit function application by Ember.assert
* Use Ember.assert instead of throw
* Guard against undefined mixins
* Remove unused local variables
* Update gems
* Enable selection by value in Ember.Select.
* Update build URL
* Fix issue with Ember.Select when reselecting the prompt
* Call setupStateManager in initialize, not in didBecomeReady
* Let ES5 browsers actually work
* Lookup event transitions recursively in the ancestor states.
* Support global paths in the with/as helper. Fixes #874
* Views should inherit controllers from their parent
* Semi-hackish memory management for Ember.Application
* Transition to root to enable the back-button
* Insert ApplicationView by default
* Respect href parameter for {{action}}
* Allow setting `target` on `ObjectController`
* Remove deprecated functionality from get/set
* urlFor should raise an error when route property is not defined
* fix build by checking VIEW_PRESERVES_CONTEXT
* Only call formatURL if a location is defined
* URL generation takes into account location type
* Rename templateContext to context
* Change default template context to controller
* Removes deprecated label wrapping behavior and value property of Ember.Checkbox
* ControllerObject class can be initialized with target, controllers and view properties
* Add Ember.State.transitionTo
* Wire up {{action}} to emit URLs
* Use standard StateManager send/sendRecursively and convert state method arguments to include options hash when necessary.
* Correct state transition name to reflect StateMachine state nesting.
* Add urlFor to Router
* make transitionEvent on state manager configurable
* The router's initialState is `root`
* Add redirectsTo in routes
* Make identical assertion messages distinguishable
* Check that tests don't leave open RunLoops behind
* Better Handlebars log helper
* Disallow automatic creating of RunLoops during testing; Require manual Ember.run setup.
* ObjectController
* rename location `style` to `implementation` and add `registerImplementation` method to ease custom implementations
* some sugar for Router initialization
* Fix initialization with non routable stateManager
* bindAttr should work with global paths
* Unbundled Handlebars
* Add Ember.Controller and `connectOutlet`
* Initial implementation of outlets
* Implement modelType guessing.
* Add support for modelType in the router


## Ember 0.9.8.1 _(May 22, 2012)_

* Fix bindAttr with global paths
* Fix initialization with non routable stateManager
* Better jQuery warning message
* Documentation fixes


## Ember 0.9.8 _(May 21, 2012)_

* Better docs
* Preliminary routing support
* Properly handle null content in Ember.Select - fixes #775
* Allow a context to be passed to the action helper
* Notify parentView of childView changes for virtual views
* Extract Ember.Application into a separate package
* Better console handling
* Removed warnings about element not being present in willInsertElement
* Removed old deprecated RunLoop syntax
* Add support for "input" event handlers
* Removed deprecated getPath/setPath global support, deprecated star paths
* Removed Ember.Set.create with enumerable
* Add Ember.Binding.registerTransform
* States should create a childStates array
* Always send Array#contentWillChange with contentDidChange
* Updated Metamorph - fixes #783
* Re-enable enumerable properties: [], firstObject and lastObject
* Add support for #each foo in bar
* Implement {{#with foo as bar}} syntax
* Fixed ordering of MutableArray#unshiftObjects
* Fix Em namespace in dev mode
* Add currentView property to Ember.ContainerView
* Namespace debugging functions, ember_assert, ember_deprecate, and ember_warn are now Ember.assert, Ember.deprecate, and Ember.warn.
* Rename BindableSpanView -> HandlebarsBoundView
* Updated Handlebars to 1.0.0.beta.6
* Ember.cacheFor should return falsy values
* Handlebars actions use a stateManager by default
* Bindings should connect to `this` and not the prototype.
* Fix security error w/ Opera and Frames - fixes #734
* Warn when attempting to appendTo or replaceIn with an existing Ember.View
* Change the context in which {{view}} renders
* Improve error when sending an unimplemented event
* Change didInsertElement function to event callback - fixes #740
* Precompile defaultTemplates for production builds
* Updated uglifier - fixes #733
* Improved the testing stack
* Using the colon syntax with classBinding should allow truthy values to propagate the associated class
* Add safeHtml method to String
* Improved compatibility with Handlebars.SafeString
* Deprecate Ember.Button - closes #436
* Refactor ember-states/view_states out into ember-viewstates so that states is free of ember-views dependency.
* Prevent classNames from being displayed twice
* Added ComputedProperty#volatile to turn off caching
* Support making Computed Properties cacheable by default


## Ember 0.9.7.1 _(April 19, 2012)_

* Better escaping method for RenderBuffer
* More rigorous XSS escaping from bindAttr


## Ember 0.9.7 _(April 18, 2012)_

* RenderBuffer now properly escapes attribute values. Fixes XSS vulnerability documented in #699.
* Make options an optional argument to Ember.Handlebars.getPath
* getProperties can be called with an array of property names
* Allow for jQuery prereleases and RCs - fixes #678
* Raise if both template and templateName appear
* DRY up createChildView initialization
* Ember.ContainerView should propagate template data
* allows yielded template blocks to be optional
* Fixed substate/parentState test
* Inline views should always have an id - Fixes #655
* Ember.View should not require view method sharing event name.
* Refactor and cleanup Ember.Checkbox
* Normalize keyword paths so that observers work
* Expose view and controller keywords to templates
* Ember.Select allows array selections when multiple=false.
* Ember.ArrayUtils.objectsAt returns correct objects.


## Ember 0.9.6 _(March 30, 2012)_

* Significant internal performance improvements
* Improved performance of RenderBuffer
* Avoid unnecessary ping-ponging in binding updates
* Fix infinite loop caused by jQuery.extend with array in older browsers
* Added ENV.SHIM_ES5 option to improve compatibility with Prototype.js
* Added Ember.Evented mixin for internal events
* Removed YES and NO constants
* No longer alias as SC/Sproutcore
* Deprecate lowercase Namespaces
* Improved "destroy" method and added "willDestroy" and "didDestroy" callbacks
* Support static classes in bindAttr
* Allow 'this' to be used in bindAttr
* Make sure States are exited in the proper order
* Deprecate re-rendering while view is inBuffer
* Add contextmenu event support
* {{action}} helper event includes view and context
* Simplified parameters passed by {{action}} helper to StateManager
* Allow the {{action}} helper to use "send" as the action name
* Collection itemViewClass itemHash bindings should be resolved in the proper context.
* Honor emptyViewClass attribute in collection view helper
* Allow View attributeBindings to be aliased.
* Add Ember.getWithDefault
* Add Ember.computed(key1, key2, func)
* Add Ember.Map
* Improvements to OrderedSet
* Warn if classNames or classNameBindings is set to non-array
* Warn when setting attributeBindings or classNameBindings with {{view}} helper
* Warn if user tries to change a view's elementId after creation
* Remove contained items from Ember.Set when calling #clear
* Treat classNameBindings the same as classBinding in the view helper
* Added maxlength to TextSupport; added size to TextField; added rows and cols to TextArea
* Fix bug where DOM did not update when Ember.Select content changed
* Dereference views from parent when viewName is specified and the view is destroyed
* Added "clear" method to Ember.MutableArray
* Added Ember.cacheFor to peek at computed property cache
* Added support for multiple attributes to Ember.Select
* Fix security warning in older Firefox
* Re-render views if the templateContext is changed
* More sugar for creating complex bindings
* Fixed bug where a class could not be reopened if an instance of it had already been created
* Enable unnamed Handlebars script tags to have a custom id with the `data-element-id` attribute
* Testing improvements including headless tests (rake test) and JSHint
* Improved framework build process
* API documentation improvements
* Added benchmarking harness for internals


## Ember 0.9.5 _(February 17, 2012)_

* Add Handlebars helper for {{yield}}
* Add a .jshintrc
* Add layout support to Ember.View
* Allow state managers to control their own logging
* Print more useful debug information in state manager
* Fix issues that prevented Ember from being used in iframes
* Fix path resolution for states
* State manager should raise if an event is unhandled
* Attribute Bindings should handle String objects - Fixes #497
* Fixed each/else - fixes #389
* Updated Metamorph - fixes #449
* States hashes misbehave when including classes
* The action helper should prevent default behavior on it's attached element
* Pass the event, view, and context to {{action}} helper actions
* #454 State Exit Methods Should Be Called In Reverse Order
* #454 test StateManager should send exit events in the correct order when changing to a top-level state
* Retrieve child views length after potential mutations
* Metamorph's replace now recursively invalidates childView elements
* Fixes a bug where parent views were not being set correctly when multiple views were added or removed from ContainerView
* Views removed from a container should clear rendered children.
* ContainerView should set parentView on new children
* Add state manager compatibility to action helper
* Adds ability to save metadata for computed properties
* Don't parse text/html by default. Use ENV.LEGACY_HANDLEBARS_TAG to restore this functionality. - Fixes #441
* Fix overzealous deprecation warnings
* Fix bug such that initialState *and* start states will be entered
* Miscellaneous documentation improvements
* Better framework warnings and deprecations


## Ember 0.9.4 _(January 23, 2012)_

* Add Ember.Select control
* Added Ember.Handlebars action helper to easily add event handling to DOM elements without requiring a new view
* jQuery 1.7 compatibility
* Added a runtime build target for usage with Node.js
* Instantiate a ViewState's view if it's not already an instance
* In addition to having a rootElement, state managers can now have a rootView property. If this is set, view states will append their view as a child view of that view.
* Views now register themselves with a controller if the viewController property is set
* Other miscellaneous improvements to States
* Allows setting a custom initial substate on states
* ContainerView now sets the parentView property of views that are added to its childViews array.
* Removed ember-handlebars-format, ember-datetime
* Array's [] property no longer notifies of changes. Use @each instead.
* Deprecated getPath/setPath global support
* Ember.Application's default rootElement has changed from document to document.body
* Events are no longer passed to views that are not in the DOM
* Miscellaneous improvements to Ember.Button
* Add return value to Ember.TargetActionSupport.triggerAction()
* Added Ember.Handlebars.precompile for template precompilation
* Fix security exceptions in older versions of Firefox
* Introduce Ember.onerror for improved error handling
* Make {{this}} work with numbers within an #each helper
* Textfield and textarea now bubble events by default
* Fixed issue where Handlebars helpers without arguments were interpreted as bindings
* Add callbacks for isVisible changes to Ember.View
* Fix unbound helper when used with {{this}}
* Add underscore and camelize to string prototype extensions.
* View tagName is now settable from Handlebars <script> template via data-tag-name
* Miscellaneous performance improvements
* Lots of minor bug fixes
* Inline documentation improvements


## Ember 0.9.3 _(December 19, 2011)_

* Make sure willInsertElement actually gets called on all child views. Element is still not guaranteed to work.
* Implement tab views and controller
* Fixed some parse errors and jslint warnings
* allow use of multiple {{bindAttr}}s per element


## Ember 0.9.2 _(December 16, 2011)_

* add replaceIn to replace an entire node's content with something new
* Use prepend() and after() methods of Metamorph
* Update Metamorph to include after() and prepend()
* Fixed some missing commas which prevented bpm from working
* Safer Runloop Unwinding
* Adding support for <script type="text/x-raw-handlebars">
* Remove parentView deprecation warning


## Ember 0.9.1 _(December 14, 2011)_

* Fix jslint warnings related to missing semicolons and variables defined twice
* Alias amber_assert to sc_assert for backwards compat
* Fix toString() for objects in the Ember namespace
* Clear rendered children *recursively* when removing a view from DOM.
* Manually assigns custom message provided new Ember.Error so it will appear in debugging tools.
* Add a currentView property to StateManager
* Duck type view states
* Add license file
* We don't need to support adding Array observers onto @each proxies, so don't bother notifying about them.
* Clean up some verbiage in watching.js
* Cleaned up the build script
* Fixed incorrect test
* Updated references to SproutCore to Ember
* Preserve old behavior for special '@each' keys.
* Making chained keys evaluate lazily and adding unit test
* Adding unit test to demonstrate issue #108.
