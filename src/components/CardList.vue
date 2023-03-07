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
      <h2 class="py-5">Films</h2>
      <div class="row row-cols-3">
        <BaseCard
          v-for="movie in store.movies"
          :key="movie.id"
          :pic="movie.poster_path"
          :title="movie.title"
          :originalTitle="movie.original_title"
          :language="movie.original_language"
          :vote="movie.vote_average"
          class="mb-5"
        />
      </div>
    </div>

    <div v-if="store.tvSeries.length" class="mt-5">
      <h2 class="my-5">Tv Series</h2>
      <div class="row row-cols-3">
        <BaseCard
          v-for="singleSeries in store.tvSeries"
          :key="singleSeries.id"
          :pic="singleSeries.poster_path"
          :title="singleSeries.name"
          :originalTitle="singleSeries.original_name"
          :language="singleSeries.original_language"
          :vote="singleSeries.vote_average"
          class="mb-5"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  color: white;
}
</style>
