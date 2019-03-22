var detectCapitalUse = function(word) {
  let WORD = word.toUpperCase()
  let _word = word.toLowerCase()
  if (WORD === word) return true
  if (_word === word) return true

  let header = word[0];
  let tail = word.substr(1)
  let whole = header.toUpperCase() + tail.toLowerCase()
  if (whole === word) return true
  return false
}

export default {
  run() {
    let arr = '"FlaG"'
    let a = detectCapitalUse(arr)
    // eslint-disable-next-line
    console.log(a)
  }
}
