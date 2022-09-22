const Say = require('say').Say;
const say = new Say('win32');

exports.speak = (message) => {
    say.speak(message);
}