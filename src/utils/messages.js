const generateMessage = (username ,text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const genegrateLocationMessage = (username,url) => {
    return {
        username,
        //trả về object
        url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    genegrateLocationMessage
}