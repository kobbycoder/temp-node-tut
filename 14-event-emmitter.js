const EventEmmitter = require('events')

const customEmmitter = new EventEmmitter()

customEmmitter.on('response', (name, age) => {
    console.log(`Data received for user ${name} with age: ${age}`)
})

customEmmitter.on('response', () => {
    console.log('Data is still emmitted')
})

customEmmitter.emit('response','Alex', 21)