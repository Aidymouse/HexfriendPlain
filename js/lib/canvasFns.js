/** import { WorldCoord } from '../types' */

/** @param {CanvasRenderingContext2D} [ctxIn]
 * @returns {WorldCoord}
 */
export const getTranslation = (ctxIn) => {
  const ctx = ctxIn ?? globalThis.ctx;

  const transform = ctx.getTransform();

  return { x: transform.e, y: transform.f };
};
