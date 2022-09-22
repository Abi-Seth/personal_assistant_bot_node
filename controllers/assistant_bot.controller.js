const { cronJob } = require('../utils/assistant_bot_cron_job.util');

exports.assistantBot = () => {
    console.log('Running a cron job . . .');
    try {
        cronJob();
    } catch(err) {
        console.log(err)
    }
}