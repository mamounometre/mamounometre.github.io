<template>
  <v-container>
    <v-form ref="form" lazy-validation>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="10" lg="10">
          <v-container class="grey transparent lighten-5">
            <v-row>
              <v-col
                cols="12"
                xs="12"
                sm="6"
                md="4"
                lg="3"
                v-for="question in questionnaire.questions"
                :key="question.id"
              >
                <Question :question="question"></Question>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-form>
    <v-btn large dark bottom center color="green" @click="share">
      Mamounoscore: {{ calculatedScore() }} points
    </v-btn>
    <v-snackbar v-model="snackbar">
      <a :href="shareLink" target="_blank">Lien de partage à copier</a> : {{ shareLink }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import Question from "./Question.vue";
import { calculateScore } from "../calcScore";
import { buildShareUrl } from "../share";

export default {
  name: "Questionnaire",
  components: {
    Question,
  },
  props: {
    title: String,
    questionnaire: Object,
  },
  data: () => ({
    snackbar: false,
    shareLink: ""
  }),
  methods: {
    calculatedScore: function () {
      const questionnaireInput = this.$props.questionnaire;
      return calculateScore(questionnaireInput);
    },
    share: async function () {
      this.shareLink = await buildShareUrl(this.$props.questionnaire);
      console.log("Share link: " + this.shareLink);
      this.snackbar = true;
    },
  },
  watch: {
    questionnaire: {
      handler(questionnaire) {
        //do something when the data changes.
        if (questionnaire) {
          this.calculatedScore(questionnaire);
        }
      },
      deep: true,
    },
  },
};
</script>