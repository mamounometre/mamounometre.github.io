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
    <v-btn large dark bottom center color="green" @click="calculateScore">
      Mamounoscore: {{ calculatedScore() }} points
    </v-btn>
  </v-container>
</template>

<script>
import Question from "./Question.vue";
import { calculateScore } from "./calcScore";

export default {
  name: "Questionnaire",
  components: {
    Question,
  },
  props: {
    title: String,
    questionnaire: Object,
  },
  methods: {
    calculatedScore: function () {
      const questionnaireInput = this.$props.questionnaire;
      return calculateScore(questionnaireInput);
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