// @flow

/**
 * Helper for composing functions such as polished's color modules from top to bottom.
 *
 * @example
 *
 */
export default function pipe(...functions) {
  return function (args) {
    return functions.reduce((arg, fn) => fn(arg), args)
  }
}
