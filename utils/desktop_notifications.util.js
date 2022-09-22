const notifier = require('node-notifier');
const path = require('path');

exports.notify = (message) => {

    notifier.notify(
        {
            title: 'Virtual Assistant Bot',
            message: message,
            icon: path.join(__dirname, 'assets/bot.png'),
            sound: true,
            wait: true
        },
        function (err, response, metadata) {}
    );
}