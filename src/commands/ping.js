module.exports = class {
    constructor() {
        this.name = 'ping';
        this.description = 'Mostra o comando de ping.';
        this.usage = 'ping';
        this.aliases = ['latency'];
        this.permissions = [];

    }
    async run(message, args) {
        message.reply("Pong!")
    }
}