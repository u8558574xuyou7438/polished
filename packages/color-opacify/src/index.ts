// @flow
import curry from '../../internals/_curry'
import guard from '../../internals/_guard'
import rgba from '@polished/color-rgba'
import parseToRgb from '@polished/color-parse-to-rgb'

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */
function opacify(amount: number | string, color: string): string {
  if (color === 'transparent') return color
  const parsedColor = parseToRgb(color)
  const alpha: number = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1
  const colorWithAlpha = {
    ...parsedColor,
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100),
  }
  return rgba(colorWithAlpha)
}

// prettier-ignore
const curriedOpacify = curry/* ::<number | string, string, string> */(opacify)
export default curriedOpacify
