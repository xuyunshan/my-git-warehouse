const complier = require('vue-template-compiler')

//差值
const template = `<p>{{message}}</p>`
//with(this){return _c('p',[_v(_s(message))])}

const res = complier.compile(template);
console.log(res.render)