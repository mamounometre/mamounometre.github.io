const TinyURL = require('tinyurl');

export async function buildShareUrl(questionnaire) {
    const answers = {};
    for (const question of questionnaire.questions) {
        if (question.value) {
            answers[question.id] = question.value;
        }
    }
    const urlQueryParams = new URLSearchParams(answers);
    const longUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + urlQueryParams.toString();
    const shortUrl =  await TinyURL.shorten(longUrl);
    return shortUrl ;
}