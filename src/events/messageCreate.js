module.exports = {
    name: 'messageCreate',
    once: false,
    run: async (client, message) => {
        if (message.author.bot || !message.content.startsWith(process.env.PREFIX)) return;
        const args = message.content
            .replace(process.env.PREFIX, '')
            .split(" ");
        const command = args
            .shift()
            .toLowerCase();
        try {
            const Command = client.commands.get(command) || client.aliases.get(command);
            if (!Command) return message.reply(`Este comando não existe!`);
            if (Command.permissions ? !message.member.permissions.has(Command.permissions) : false) {
                message.delete()
                const msg = await message.channel.send(`${message.author} | **Você não tem permissões suficientes para executar esse comando.**\n*Permissões necessárias:* **\`${Command.permissions.join(', ')}\`**`);

                return setTimeout(() => msg.delete(), 10000)
            }
            await Command.run(message, args);
        } catch (error) {
            console.error(`Erro ao tentar executar ${command}.`, error)
        }

    }
}