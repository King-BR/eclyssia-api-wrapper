
# eclyssia-api-wrapper

unnoficial [eclyssia api](https://eclyssia-api.tk/) wrapper

## installation

```txt
npm install eclyssia-api-wrapper
```

## example

for examples in how to send discord messages see [here](https://github.com/King-BR/eclyssia-api-wrapper/blob/master/Examples/discord-message-example.js)

```js
const eclyssia = require("eclyssia-api-wrapper");
const fs = require("fs");

// show all supported endpoints
console.log(eclyssia.endpoints)

// blur the image
eclyssia.blur('https://cdn.discordapp.com/avatars/375462796697010176/924f4004c4080aa68241b9822a286e1b.png?size=2048')
    .then(data => {
        // data is a buffer
        fs.writeFileSync('./example.png', data, 'binary')
    })
    .catch(console.error)

// captcha endpoint use more parameters (url, name)
eclyssia.captcha('https://cdn.discordapp.com/avatars/375462796697010176/924f4004c4080aa68241b9822a286e1b.png?size=2048', 'KingBR')
    .then(data => {
        // data is a buffer
        fs.writeFileSync('./example2.png', data, 'binary')
    })
    .catch(console.error)

// meme endpoint use more parameters (url, top text, bottom text)
eclyssia.meme('https://cdn.discordapp.com/avatars/375462796697010176/924f4004c4080aa68241b9822a286e1b.png?size=2048', 'top text', 'bottom text')
    .then(data => {
        // data is a buffer
        fs.writeFileSync('./example3.png', data, 'binary')
    })
    .catch(console.error)
```

## endpoints

```js
// returns an array with all supported endpoints
eclyssia.endpoints
```

## links

* [Eclyssia API documentation](https://docs.eclyssia-api.tk/)
* [Discord (Eclyssia)](https://discord.gg/V5X2t9z)
* [Wrapper Source Code (github)](https://github.com/King-BR/eclyssia-api-wrapper)
* [NPM](https://www.npmjs.com/package/eclyssia-api-wrapper)
