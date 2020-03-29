const fetch = require("node-superfetch")

const BASE_URL = "https://eclyssia-api.tk/api/v1/"

const endpoints = ['blur', 'greyscale', 'invert', 'pixalate', 'posterize', 'sepia', 'beautiful', 'blood', 'bobross', 'brazzers',
    'captcha', 'gay', 'kackolantern', 'phvideo', 'prison', 'treasure', 'triggered', 'whatspokemon', 'meme', 'rainbow']

/**
 * @returns {Array} Returns an Array of suported endpoints
 */
exports.endpoints = endpoints

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.blur = async function(url) {
    let res = await(fetch.get(`${BASE_URL}blur?url=${url}`))
    if(res.status !== 200) {
        throw new Error(res.response)
    }
    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.greyscale = async function(url) {
    let res = await(fetch.get(`${BASE_URL}greyscale?url=${url}`))
    if(res.status !== 200) {
        throw new Error(res.response)
    }
    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.invert = async function(url) {
    let res = await(fetch.get(`${BASE_URL}invert?url=${url}`))
    if(res.status !== 200) {
        throw new Error(res.response)
    }
    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.pixalate = async function(url) {
    let res = await(fetch.get(`${BASE_URL}pixalate?url=${url}`))
    if(res.status !== 200) {
        throw new Error(res.response)
    }
    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.posterize = async function(url) {
    let res = await(fetch.get(`${BASE_URL}posterize?url=${url}`))
    if(res.status !== 200) {
        throw new Error(res.response)
    }
    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.sepia = async function(url) {
    let res = await(fetch.get(`${BASE_URL}sepia?url=${url}`))
    if(res.status !== 200) {
        throw new Error(res.response)
    }
    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.beautiful = async function(url) {
    let res = await(fetch.get(`${BASE_URL}beautiful?url=${url}`))
    if(res.status !== 200) {
        throw new Error(res.response)
    }
    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.blood = async function(url) {
    let res = await(fetch.get(`${BASE_URL}blood?url=${url}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.bobross = async function(url) {
    let res = await(fetch.get(`${BASE_URL}bobross?url=${url}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.brazzers = async function(url) {
    let res = await(fetch.get(`${BASE_URL}brazzers?url=${url}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @param name {String} Name of a user or something else
 * @returns {Buffer} Image Buffer
 */
exports.captcha = async function(url, name) {
    name = encodeURIComponent(name)
    let res = await(fetch.get(`${BASE_URL}captcha?url=${url}&username=${name}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.gay = async function(url) {
    let res = await(fetch.get(`${BASE_URL}gay?url=${url}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.jackolantern = async function(url) {
    let res = await(fetch.get(`${BASE_URL}jackolantern?url=${url}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.phvideo = async function(url) {
    let res = await(fetch.get(`${BASE_URL}phvideo?url=${url}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.prison = async function(url) {
    let res = await(fetch.get(`${BASE_URL}prison?url=${url}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.treasure = async function(url) {
    let res = await(fetch.get(`${BASE_URL}treasure?url=${url}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.triggered = async function(url) {
    let res = await(fetch.get(`${BASE_URL}triggered?url=${url}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.whatspokemon = async function(url) {
    let res = await(fetch.get(`${BASE_URL}whatspokemon?url=${url}`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @param topText {String} Text that appear on the top of the image
 * @param bottomText {String} Text that appear on the bottom of the image
 * @returns {Buffer} Image Buffer
 */
exports.meme = async function(url, topText, bottomText) {
    topText = encodeURIComponent(topText)
    bottomText = encodeURIComponent(bottomText)

    let res = await(fetch.get(`${BASE_URL}meme?url=${url}&top=${topText}&bottom=${bottomText}&width=1024&height=1024`))

    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}

/**
 * @param url {String} Image URL
 * @returns {Buffer} Image Buffer
 */
exports.rainbow = async function(url) {
    let res = await(fetch.get(`${BASE_URL}rainbow?url=${url}`))
    
    if(res.status !== 200) {
        throw new Error(res.response)
    }

    return res.buffer()
}