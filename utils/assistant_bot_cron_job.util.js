const cron_job = require('node-cron');
const { notify } = require('./desktop_notifications.util');
const { speak } = require('./text_to_speech.util');

exports.cronJob = () => {
    cron_job.schedule('0 6 * * *', () => {
        const msg = 'Good morning friend! How was yout night?';
        console.log(msg);
        notify(msg);
        speak(msg)
    });
    cron_job.schedule('0 12 * * *', () => {
        const msg = 'Hello, It\'s time for lunch.';
        console.log(msg);
        notify(msg);
        speak(msg)
    });
    cron_job.schedule('0 19 * * *', () => {
        const msg = 'Hello, It\'s time for supper.';
        console.log(msg);
        notify(msg);
        speak(msg)
    });
    cron_job.schedule('0 22 * * *', () => {
        const msg = 'Bed time!';
        console.log(msg);
        notify(msg);
        speak(msg)
    });
    cron_job.schedule('0 0 1 * *', () => {
        const msg = 'Happy new month frient.';
        console.log(msg);
        notify(msg);
        speak(msg)
    });
    cron_job.schedule('0 0 1 1 *', () => {
        const msg = 'Happy new year friend!';
        console.log(msg);
        notify(msg);
        speak(msg)
    });
}