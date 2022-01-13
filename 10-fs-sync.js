const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
console.log(first);

const second = readFileSync('./content/second.txt', 'utf-8')
console.log(second);

writeFileSync(
    './content/third.txt',
    `This is a combination of : ${first} and ${second}`,
    { flag: 'a' }
)