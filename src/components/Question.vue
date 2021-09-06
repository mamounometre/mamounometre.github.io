<template>
  <div>
    <v-checkbox
      v-if="question.type === 'boolean'"
      v-model="checkbox"
      :label="question.title"
      required
    ></v-checkbox>
    <v-text-field
      v-if="question.type === 'number'"
      v-model="numberValue"
      :label="question.title"
      type="number"
    />
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: Object,
  },
};
</script>