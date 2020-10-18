// @flow

function factorial(a: number): number {
  if (a % 1 || !(+a >= 0)) return NaN
  if (a > 170) return Infinity
  if (a === 0) return 1

  return a * factorial(a - 1)
}

function power(a: number, b: number): number {
  return a ** b
}

function sqrt(a: number): number {
  return Math.sqrt(a)
}

const exponentialSymbols = {
  symbols: {
    '!': {
      postfix: {
        symbol: '!',
        f: factorial,
        notation: 'postfix',
        precedence: 6,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: '!',
      regSymbol: '!',
    },
    '^': {
      infix: {
        symbol: '^',
        f: power,
        notation: 'infix',
        precedence: 5,
        rightToLeft: 1,
        argCount: 2,
      },
      symbol: '^',
      regSymbol: '\\^',
    },
    sqrt: {
      func: {
        symbol: 'sqrt',
        f: sqrt,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: 'sqrt',
      regSymbol: 'sqrt\\b',
    },
  },
}

export default exponentialSymbols
