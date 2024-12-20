import { assert } from '@ember/debug';
import type { AST, ASTPlugin } from '@glimmer/syntax';
import calculateLocationDisplay from '../system/calculate-location-display';
import type { EmberASTPluginEnvironment } from '../types';
import { isPath, trackLocals } from './utils';

export default function errorOnInputWithContent(env: EmberASTPluginEnvironment): ASTPlugin {
  let moduleName = env.meta?.moduleName;
  let { hasLocal, visitor } = trackLocals(env);

  return {
    name: 'assert-input-helper-without-block',

    visitor: {
      ...visitor,
      BlockStatement(node: AST.BlockStatement) {
        if (hasLocal('input')) return;

        if (isPath(node.path) && node.path.original === 'input') {
          assert(assertMessage(moduleName, node));
        }
      },
    },
  };
}

function assertMessage(moduleName: string | undefined, node: AST.BlockStatement): string {
  let sourceInformation = calculateLocationDisplay(moduleName, node.loc);

  return `The {{input}} helper cannot be used in block form. ${sourceInformation}`;
}
