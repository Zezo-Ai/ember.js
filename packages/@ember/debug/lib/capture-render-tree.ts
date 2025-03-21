import type { Renderer } from '@ember/-internals/glimmer';
import type Owner from '@ember/owner';
import type { CapturedRenderNode } from '@glimmer/interfaces';

/**
  @module @ember/debug
*/
/**
  Ember Inspector calls this function to capture the current render tree.

  In production mode, this requires turning on `ENV._DEBUG_RENDER_TREE`
  before loading Ember.

  @private
  @static
  @method captureRenderTree
  @for @ember/debug
  @param app {ApplicationInstance} An `ApplicationInstance`.
  @since 3.14.0
*/
export default function captureRenderTree(app: Owner): CapturedRenderNode[] {
  let domRenderer = app.lookup('renderer:-dom') as Renderer;

  if (!domRenderer) {
    throw new Error(`BUG: owner is missing renderer`);
  }
  // SAFETY: Ideally we'd assert here but that causes awkward circular requires since this is also in @ember/debug.
  // This is only for debug stuff so not very risky.
  let renderer = domRenderer;

  return renderer.debugRenderTree.capture();
}
