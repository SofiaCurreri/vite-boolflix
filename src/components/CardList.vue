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
    <div class="row row-cols-3">
      <MovieCard
        v-for="movie in store.movies"
        :key="movie.id"
        :pic="movie.poster_path"
        :title="movie.title"
        :originalTitle="movie.original_title"
        :language="movie.original_language"
        :vote="movie.vote_average"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
