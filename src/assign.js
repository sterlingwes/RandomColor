module.exports = function assign () {
  const args = [].slice.call(arguments)
  const first = args.shift()
  while (args.length) {
    const next = args.shift()
    Object.keys(next).forEach(key => {
      first[key] = next[key]
    })
  }
  return first
}
