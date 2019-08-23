const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '943147825:AAHZhDVBVo1H537Km0lP3QxXwMF-jyGxI7U'

console.log('BOT IS ON!')

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})


const bot = new TelegramBot (TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout:10
        }
    }
})


bot.on('message', (msg) => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, 'Привіт, ти хто?', {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Вова', callback_data: '1' }],
                    [{ text: 'Віра', callback_data: 'data 2' }],
                    [{ text: 'Паша', callback_data: 'text 3' }],
                    [{ text: 'мама Люба', callback_data: 'text 3' }],
                ]
            })

        }
        )
})
