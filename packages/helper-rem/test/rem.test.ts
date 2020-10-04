// @flow
import rem from '../src'

describe('rem', () => {
  it('should convert a simple number to rems', () => {
    expect({ height: rem(16) }).toEqual({
      height: '1rem',
    })
  })
})
