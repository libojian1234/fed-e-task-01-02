//函数的组合要满足结合律（associalivily）
//我们就可以把g和h组合，还可以把f和g组合，结果都是一样的

//let f = compose(f,g,h)
//let associative = compose(compose(f,g),h) == compose(f,compose(g,h))
//true

const _ = require('lodash')
// const f = _.flowRight(_.toUpper,_.first,_.reverse)
// const f = _.flowRight(_.flowRight(_.toUpper,_.first),_.reverse)
const f = _.flowRight(_.toUpper,_.flowRight(_.first,_.reverse))

console.log(f(['one','two','three']))   //上面三个函数打印的结果一样