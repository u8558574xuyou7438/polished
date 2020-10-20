// @flow
import parseToHsl from '@polished/color-parse-to-hsl'
import toString from '@polished/color-to-string'
import curry from '@internals/_curry'

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */
function setLightness(lightness: number | string, color: string): string {
  if (color === 'transparent') return color
  return toString({
    ...parseToHsl(color),
    lightness: parseFloat(lightness),
  })
}

// prettier-ignore
const curriedSetLightness = curry/* ::<number | string, string, string> */(setLightness);
export default curriedSetLightness
