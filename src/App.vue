<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Mamounometre Logo"
          class="shrink mr-2"
          contain
          src="assets/logo-mamoune.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/mamounometre/mamounometre"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Questionnaire :questionnaire="questionnaire"/>
    </v-main>
  </v-app>
</template>

<script>
import Questionnaire from "./components/Questionnaire";

export default {
  name: "App",

  components: {
    Questionnaire,
  },

  data: () => ({
    questionnaire: getQuestionnaire(),
  }),
};

function getQuestionnaire () {
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
        scoreIgnoreValues: [0],
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
        id: "socialNetworks",
        category: "profile",
        type: "boolean",
        title: "'Mes enfants ma vie' en profil",
      },
      {
        id: "socialNetworks",
        category: "profile",
        type: "boolean",
        title: "Influenceuse sur les réseaux sociaux",
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
        type: "number",
        title: "Définit l'âge de son bébé en nombre de mois (+de 24 mois)",
        scoreIgnoreValues: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21,
        ],
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
        id: "postTypos",
        category: "post",
        type: "boolean",
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
    ],
  };
} 
</script>
