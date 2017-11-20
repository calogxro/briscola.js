const random = array => array[Math.floor(Math.random() * array.length)]
const clone = object => JSON.parse(JSON.stringify(object))
const noop = () => {}

module.exports = {
  random: random,
  clone: clone,
  noop: noop
}
