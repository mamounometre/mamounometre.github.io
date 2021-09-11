export function calculateScore(questionnaire,category=null) {
    let totalScore = 0;
    for (const question of questionnaire.questions) {
        if (category && question.category !== category) {
            continue ;
        }
        totalScore += calculateQuestionScore(question);
    }
    return totalScore ;
}

export function calculateQuestionScore(question) {
        // Number
        if (question.type === "number") {
            if (question.value > 0 && !(question.scoreIgnoreValues || []).includes(question.value)) {
                // Manage max value
                let value = question.max && question.value > question.max  ? question.max : question.value;
                // Manage min vvalue
                value = question.min && question.min < value ? question.min : value ;
                return (question.score * value);
            }
        }
        // Checkbox
        else if (question.type === "boolean") {
            if (question.value === true) {
                return question.score;
            }
        }
        else {
            throw new Error('Unknown question type: ' + JSON.stringify(question));
        }
        return 0;
}