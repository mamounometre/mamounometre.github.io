<template>
  <span>
    <v-checkbox
      v-if="question.type === 'boolean'"
      v-model="question.value"
      :label="question.title"
      required
      :value="question.value"
    ></v-checkbox>
    <v-subheader v-if="question.type === 'number'"
      >{{ question.title }}
    </v-subheader>
    <v-slider
      v-if="question.type === 'number'"
      v-model="question.value"
      thumb-label="always"
      thumb-size="16"
      :value="question.value"
      :max="question.max || 10"
    ></v-slider>
  </span>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: Object,
  }
};
</script>