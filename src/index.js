// Importando a biblioteca discord.js
const { Client } = require('discord.js');


// Importando a função config da biblioteca dotenv, usada para configurar o nosso arquivo .env, onde estão armazenadas as nossas credenciais.

const { config } = require('dotenv');

// Chamando a função config para que as nossas credenciais do .env sejam escritas na variável global process.env

config()

// Instânciando um novo Client
const client = new Client();

// Fazendo log-in no Discord com o seu TOKEN armazenado no arquivo .env
client.login(process.env.TOKEN);