const { readdirSync } = require('fs');
const { join } = require('path');


module.exports = (client) => {
    const commandsFiles = readdirSync(join(__dirname, '../../commands'));

    for (let commandFile of commandsFiles) {
        const command = require(`../../commands/${commandFile}`);
        const Command = new command();
        client.commands.set(Command.name, Command);
        if (Command.aliases)
            for (let alias of Command.aliases)
                client.aliases.set(alias, Command);

        console.log(`[COMMANDS] | Comando ${Command.name} carregado.`);
    }

}