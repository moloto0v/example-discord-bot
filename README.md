# Example Discord Bot
Este é um bot de exemplo para o Discord que ensina o básico da biblioteca [discord.js](https://npmjs.com/package/discord.js)
- Em desenvolvimento, em breve serão adicionados mais comandos e sistemas no bot ;)

# Como Rodar
Requisitos:
- Ter o [Git CLI](https://git-scm.com) instalado
- Ter o [Node.js](https://nodejs.org) instalado

## Primeiros passos
Se você estiver usando o sistema operacional Windows, abra o CMD ou o PowerShell. Se você estiver usando alguma distribuição Linux, abra o terminal e digite o comando:
```sh
git clone https://github.com/moloto0v/example-discord-bot.git example-bot
```
O Git pode pedir suas credenciais da primeira vez. Leia [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

Após clonar o repositório, digite este comando abaixo:

```sh
cd example-bot
```
Isso fará que você entre no diretório do bot.

Então, crie um arquivo chamado `.env` e lá dentro cole isso:
```bash
TOKEN=SEU_TOKEN_AQUI
CLIENT_ID=SEU_CLIENT_ID_AQUI
PREFIX=SEU_PREFIXO_PADRÃO_AQUI
```
Substitua as informações conforme pedido. Para obter um token de acesso e um ID de cliente, visite [Discord Developers Portal](https://discord.com/developers/applications)

Guia de como criar uma aplicação:
![Print 1](https://cdn.discordapp.com/attachments/920325637804261377/920327520858030110/unknown.png)
![Print 2](https://cdn.discordapp.com/attachments/920325637804261377/920328374935765002/unknown.png)
![Print 3](https://cdn.discordapp.com/attachments/920325637804261377/920328495492628530/unknown.png)
![Print 4](https://cdn.discordapp.com/attachments/920325637804261377/920328884036190288/unknown.png)
![Print 5](https://cdn.discordapp.com/attachments/920325637804261377/920329112210505778/unknown.png)
![Print 6](https://cdn.discordapp.com/attachments/920325637804261377/920329849019695114/unknown.png)
![Print 7](https://cdn.discordapp.com/attachments/920325637804261377/920330380278640660/unknown.png)
![Print 8](https://cdn.discordapp.com/attachments/920325637804261377/920330767215784007/unknown.png)

Digite os comandos abaixo:
```sh
npm install
```
Isso irá instalar as dependências necessárias

```sh
node .
```
E isso iniciará o BOT.


