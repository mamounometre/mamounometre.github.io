export function getQuestionnaire() {
    const questionnaire = questionnaireMamounometre();
    const questionnaireWithInitValues = initQuestionnaire(questionnaire);
    return questionnaireWithInitValues;
}

function initQuestionnaire(questionnaire) {
    const urlParams = new URLSearchParams(window.location.search);
    questionnaire.questions = questionnaire.questions.map(question => {
        if (urlParams.get(question.id)) {
            const value = urlParams.get(question.id);
            question.value = question.type === 'boolean' ? Boolean.valueOf(value) : question.type === 'number' ? parseInt(value) : value;
        }
        return question;
    });
    return questionnaire;
}

function questionnaireMamounometre() {
    return {
        title: "Mamounomètre (pas de jujemen !)",
        questions: [
            {
                id: "childrenNuber",
                category: "family",
                type: "number",
                title: "Nombre d'enfants ?",
                score: 10,
            },
            {
                id: "fatherNumber",
                category: "family",
                type: "number",
                title: "Nombre de pères différents ?",
                scoreIgnoreValues: [0, 1],
                score: 20,
            },
            {
                id: "fatherLeft",
                category: "family",
                type: "number",
                title: "Nombre de pères partis acheter des clopes et jamais revenus",
                score: 20,
            },
            {
                id: "fatherJail",
                category: "family",
                type: "number",
                title: "Nombre de pères en prison",
                score: 30,
            },
            {
                id: "fatherViolence",
                category: "family",
                type: "number",
                title: "Nombre de pères adeptes de violences conjugales",
                score: 20,
            },
            {
                id: "childrenCareNumber",
                category: "family",
                type: "number",
                title: "Nombre d'enfants placés par l' ASE",
                score: 50,
            },
            {
                id: "motherJobless",
                category: "family",
                type: "boolean",
                title: "Mère au foyer",
                score: 10,
            },
            {
                id: "firstnameTypos",
                category: "family",
                type: "number",
                title: "Nombre de fautes dans les prénoms des enfants",
                score: 20,
                max: 5,
            },
            {
                id: "tatooChildrenName",
                category: "tatoo",
                type: "boolean",
                title: "Tatouage(s) avec les prénoms des enfants",
                score: 10,
            },
            {
                id: "tatooTypos",
                category: "tatoo",
                type: "boolean",
                title: "Fautes d'orthographe dans les tatouages",
                score: 20,
            },
            {
                id: "tatooInfinite",
                category: "tatoo",
                type: "boolean",
                title: "Tatouage avec signe infini",
                score: 5,
            },
            {
                id: "myKidsMyLife",
                category: "profile",
                type: "boolean",
                title: "'Mes enfants ma vie' en profil",
                score: 20,
            },
            {
                id: "dumbJob",
                category: "profile",
                type: "boolean",
                title: "Emploi déclaré de type 'Plus bo métié du mondes: Maman' ou 'CEO chez Guess'",
                score: 10
            },
            {
                id: "socialNetworks",
                category: "profile",
                type: "boolean",
                title: "Influenceuse sur les réseaux sociaux",
                score: 20
            },
            {
                id: "noJudgement",
                category: "post",
                type: "boolean",
                title: "Utilisation de 'Pa de jujement'",
                score: 10,
            },
            {
                id: "babyNumberNaming",
                category: "post",
                type: "boolean",
                title: "Utilisation de 'bb1, bb2, bb3...''",
                score: 10,
            },
            {
                id: "babyMonthCounting",
                category: "post",
                type: "boolean",
                title: "Définit l'âge de son bébé en nombre de mois (+de 24 mois)",
                score: 20,
            },
            {
                id: "motherCaf",
                category: "post",
                type: "boolean",
                title: "Questions concernant la CAF / le calcul des allocations",
                score: 40,
            },
            {
                id: "motherCaf2",
                category: "post",
                type: "boolean",
                title: "Se plaint de la CAF",
                score: 40,
            },
            {
                id: "motherDoctissimo",
                category: "post",
                type: "boolean",
                title: "Demande de conseils médicaux sur internet",
                score: 30,
            },
            {
                id: "motherBadCare",
                category: "post",
                type: "boolean",
                title: "Absence de soins, ou soins inadaptés",
                score: 30,
            },
            {
                id: "motherSexDumb",
                category: "post",
                type: "boolean",
                title: "Grandes carences en éducation sexuelle",
                score: 20,
            },
            {
                id: "childBitching",
                category: "post",
                type: "boolean",
                title: "Sexualisation de ses enfants",
                score: 50,
            },
            {
                id: "postTypos",
                category: "post",
                type: "number",
                title: "Nombre de fautes d'orthographe dans le post",
                max: 20,
                score: 3,
            },
            {
                id: "genius",
                category: "post",
                type: "boolean",
                title: "Mon enfant est surdoué / HPI",
                score: 30,
            },
            {
                id: "verbalAbuse",
                category: "post",
                type: "boolean",
                title: "Menaces envers des membres de neurchis",
                score: 30,
            },
            {
                id: "justiceAbuse",
                category: "post",
                type: "boolean",
                title: "Menaces de porter plinthe",
                score: 50,
            },
        ],
    };
}