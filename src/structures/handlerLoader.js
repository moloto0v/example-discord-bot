const { readdirSync } = require('fs');
const { join } = require('path');

module.exports = (client) => {
    const handlersFiles = readdirSync(join(__dirname, './handlers'));
    for (const handlerFile of handlersFiles) {
        const handler = require(`./handlers/${handlerFile}`);
        handler(client)
    }
}