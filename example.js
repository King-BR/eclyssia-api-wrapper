const eclyssia = require("eclyssia-api-wrapper");
const fs = require("fs");

// show all endpoints
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