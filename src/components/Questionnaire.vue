<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <ul>
      <li v-for="question in questionnaire.questions" :key="question.id">
        <Question :question="question"></Question>
      </li>
    </ul>
  </v-form>
</template>

<script>
import Question from "./Question.vue";

export default {
  name: "Questionnaire",
  components: {
    Question,
  },
  props: {
    title: String,
    questionnaire: Object,
  },
};
</script>