// @flow

/**
 * Helper for composing functions such as polished's color modules from bottom to top.
 *
 * @example
 *
 */

export default function compose(...functions) {
  return function (args) {
    return functions.reduceRight((arg, fn) => fn(arg), args)
  }
}
