<template>
  <span class="question">
    <v-checkbox
      v-if="question.type === 'boolean'"
      v-model="question.value"
      :label="question.title"
      required
      :hint="questionHint"
      persistent-hint
    ></v-checkbox>
    <v-text-field
      v-if="question.type === 'number'"
      v-model="question.value"
      :label="question.title"
      required
      type="number"
      :hint="questionHint"
      persistent-hint
    />
  </span>
</template>

<script>
import { calculateQuestionScore } from "../calcScore";

export default {
  name: "Question",
  props: {
    question: Object,
  },
  computed: {
    questionHint: function () {
      const questionInput = this.$props.question;
      const questionScore = calculateQuestionScore(questionInput);
      if (questionScore > 0) {
        return `+${questionScore} points mamoune !`;
      }
      return null ;
    },
  }
};
</script>

<style>
.v-messages__message {
  color:pink;
}
</style>