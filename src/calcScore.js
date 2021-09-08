export function calculateScore(questionnaire) {
    let totalScore = 0;
    for (const question of questionnaire.questions) {
        // Number
        if (question.type === "number") {
            if (question.value > 0 && !(question.scoreIgnoreValues || []).includes(question.value)) {
                // Manage max value
                let value = question.max && question.value > question.max  ? question.max : question.value;
                // Manage min vvalue
                value = question.min && question.min < value ? question.min : value ;
                totalScore += (question.score * value);
            }
        }
        // Checkbox
        else if (question.type === "boolean") {
            if (question.value === true) {
                totalScore += question.score;
            }
        }
        else {
            throw new Error('Unknown question type: ' + JSON.stringify(question));
        }
    }
    console.log(`Updated score: ${totalScore}`);
    return totalScore ;
}