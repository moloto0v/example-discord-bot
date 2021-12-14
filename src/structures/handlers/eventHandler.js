const { readdirSync } = require('fs');
const { join } = require('path');

module.exports = (client) => {
    const eventsFiles = readdirSync(join(__dirname, '../../events'));
    for (let eventFile of eventsFiles) {
        const event = require(`../../events/${eventFile}`);

        console.log(`[EVENTS]   | Evento ${event.name} carregado.`)

        if (event.once)
            client.once(event.name, event.run.bind(null, client));
        else client.on(event.name, event.run.bind(null, client))

    }

}