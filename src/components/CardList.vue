<script>
import BaseCard from "./BaseCard.vue";
import { store } from "../data/store.js";

export default {
  data() {
    return {
      store,
    };
  },

  components: { BaseCard },
};
</script>

<template>
  <div class="container">
    <div v-if="store.movies.length">
      <h2 class="py-5">Movies</h2>
      <div class="row row-cols-3 g-4">
        <BaseCard
          v-for="movie in store.movies"
          :key="movie.id"
          :pic="movie.poster_path"
          :title="movie.title"
          :originalTitle="movie.original_title"
          :language="movie.original_language"
          :rating="Math.ceil(movie.vote_average / 2)"
        />
      </div>
    </div>

    <div v-if="store.tvSeries.length" class="mt-5">
      <h2 class="my-5">Tv Series</h2>
      <div class="row row-cols-3 g-5">
        <BaseCard
          v-for="singleSeries in store.tvSeries"
          :key="singleSeries.id"
          :pic="singleSeries.poster_path"
          :title="singleSeries.name"
          :originalTitle="singleSeries.original_name"
          :overview="singleSeries.overview"
          :language="singleSeries.original_language"
          :rating="Math.ceil(singleSeries.vote_average / 2)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
