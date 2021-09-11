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
      <v-toolbar-title>Le mamounomètre (version alpha)</v-toolbar-title>
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

    <v-main back>
      <Questionnaire :questionnaire="questionnaire" />
    </v-main>
  </v-app>
</template>

<script>
import Questionnaire from "./components/Questionnaire";
import { getQuestionnaire } from "./questionnaire";

export default {
  name: "App",

  components: {
    Questionnaire,
  },

  data: () => ({
    questionnaire: getQuestionnaire(),
  }),

  metaInfo() {
    return {
      title: "Mamounometre",
      meta: [
        {
          name: "description",
          content: "Calculez scientifiquement si vous êtes une mamoune !",
        },
        {
          property: "og:title",
          content: "Mamounometre",
        },
        { property: "og:site_name", content: "Mamounometre" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: "https://mamounometre.github.io/assets/social-preview.png",
        },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
};
</script>

<style>
#app {
  background: url("assets/background.jpg") no-repeat center center fixed !important;
  background-size: cover;
}
</style>