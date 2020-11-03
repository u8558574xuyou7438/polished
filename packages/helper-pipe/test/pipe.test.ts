// @flow
import lighten from '@polished/color-lighten'
import saturate from '@polished/color-saturate'
import tint from '@polished/color-tint'
import pipe from '../src'

describe('pipe', () => {
  it('should pipe functions together top to bottom', () => {
    const colorFunction = pipe(saturate(0.2), lighten(0.3), tint(0.3))
    const saturatedColor = saturate(0.2, '#422')
    const lightenedColor = lighten(0.3, saturatedColor)
    const tintedColor = tint(0.3, lightenedColor)
    expect({ color: colorFunction('#422') }).toEqual({
      color: tintedColor,
    })
  })
})
