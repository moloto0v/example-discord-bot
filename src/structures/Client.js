const { Client, Collection } = require("discord.js");
require('dotenv').config();

module.exports = class extends Client {
    constructor(options) {
        super({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'], ...options });
        this._token = process.env.TOKEN;
        this.commands = new Collection();
        this.aliases = new Collection();
        this.slashCommands = new Collection();

    }
    async run() {
        const handlerLoader = require('./handlerLoader');
        handlerLoader(this);
        this.login(this._token)
    }
}