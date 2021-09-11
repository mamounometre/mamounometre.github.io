<template>
  <v-container>
    <v-form ref="form" lazy-validation>
      <v-row justify="space-around">
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
    <v-row justify="space-around">
      <v-col cols="12" xs="12" sm="6" md="6" lg="4">
        <v-data-table
          :headers="headers"
          :items="scoresTable"
          class="elevation-1"
          hide-default-footer
          disable-sort
        >
          <template v-slot:[`item.score`]="{ item }">
            <v-chip :color="getColor(item.score)" dark>
              {{ item.score }}
            </v-chip>
          </template></v-data-table
        >
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="6"
        lg="4"
        class="d-flex justify-center"
      >
        <v-btn large dark bottom center color="green" @click="share">
          Partager
        </v-btn>
        <v-snackbar v-model="snackbar">
          <a :href="shareLink" target="_blank">Lien de partage à copier</a> :
          {{ shareLink }}
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Fermer
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
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
    shareLink: "",
    headers: [
      { text: "Categorie", value: "category" },
      { text: "Score", value: "score" },
    ],
  }),
  computed: {
    scoresTable: function () {
      return this.$props.questionnaire.categories
        .map((category) => {
          return {
            category: category.label,
            score: calculateScore(this.$props.questionnaire, category.id),
          };
        })
        .concat([
          {
            category: "Mamounoscore total",
            score: calculateScore(this.$props.questionnaire),
          },
        ]);
    },
  },
  methods: {
    calculatedScore: function () {
      return calculateScore(this.$props.questionnaire, null);
    },
    getColor(score) {
      if (score > 250) return "#FF0D0D";
      else if (score > 200) return "#FF4E11";
      else if (score > 100) return "#FF8E15";
      else if (score > 50) return "#FAB733";
      else if (score > 20) return "#ACB334";
      else return "#69B34C";
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