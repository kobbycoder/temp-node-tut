const {readFile, writeFile} = require('fs')

console.log("Start first task");

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }

    console.log(result)
    console.log("Task completed")
})

console.log("Start next task")