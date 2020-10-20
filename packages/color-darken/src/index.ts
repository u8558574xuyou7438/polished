// @flow
import parseToHsl from '@polished/color-parse-to-hsl'
import toString from '@polished/color-to-string'
import curry from '@internals/_curry'
import guard from '@internals/_guard'

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */
function darken(amount: number | string, color: string): string {
  if (color === 'transparent') return color
  const hslColor = parseToHsl(color)
  return toString({
    ...hslColor,
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount)),
  })
}

// prettier-ignore
const curriedDarken = curry/* ::<number | string, string, string> */(darken);
export default curriedDarken
