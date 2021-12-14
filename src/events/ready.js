module.exports = {
    name: 'ready',
    once: true,
    run: (client) => {
        console.log(`Logged in as ${client.user.tag}.`)
    }
}