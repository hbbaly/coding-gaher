// /[[\u4e00-\u9fa5]|\w|[-，。？！,\.\?\!]]*/g
let reg = /[[\u4e00-\u9fa5]|\w|[-，。？！,\.\?\!]]*/g,

    str = 'hot👌哈哈哈👌😄好的✈️sd🇺🇸，☎️',
    result = str.match(reg).join('')

console.log(result) // hot哈哈哈好的sd，

