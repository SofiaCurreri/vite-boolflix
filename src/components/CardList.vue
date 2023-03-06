<script>
import MovieCard from "./MovieCard.vue";
import { store } from "../data/store.js";

export default {
  data() {
    return {
      store,
    };
  },

  components: { MovieCard },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-4">
      <MovieCard
        v-for="title in store.titles"
        :key="title.id"
        :pic="title.poster_path"
        :title="title.title"
        :originalTitle="title.original_title"
        :language="title.original_language"
        :vote="title.vote_average"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
