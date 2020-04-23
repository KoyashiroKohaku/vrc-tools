'use strict'

function generate() {
  const x =
    '00000000000000000000000000000' +
    [...Array(3).keys()]
      .map((i) => (document.getElementById(`checkbox${('0' + (32 + i)).slice(-2)}`).checked ? '1' : '0'))
      .reverse()
      .join('')
  const y = [...Array(32).keys()]
    .map((i) => (document.getElementById(`checkbox${('0' + i).slice(-2)}`).checked ? '1' : '0'))
    .reverse()
    .join('')

  const xHex = ('0000000' + parseInt(x, 2).toString(16)).slice(-8)
  const yHex = ('0000000' + parseInt(y, 2).toString(16)).slice(-8)

  const comment = document.getElementById('text1').value

  document.getElementById('textarea1').value = `// ${comment} (${x.slice(-3)}, ${y})
uint2(0x${xHex}, 0x${yHex}),`
}

function clear() {
  for (let i = 0; i < 35; i++) {
    document.getElementById(`checkbox${('0' + i).slice(-2)}`).checked = false
  }
  generate()
}

document.getElementById('text1').addEventListener('input', generate)

for (let i = 0; i < 35; i++) {
  document.getElementById(`checkbox${('0' + i).slice(-2)}`).addEventListener('change', generate)
}

document.getElementById('clearButton').addEventListener('click', clear)

generate()
