<script>
import AppHeader from "./components/AppHeader.vue";
import CardList from "./components/CardList.vue";
import axios from "axios";
import { store } from "./data/store.js";

export default {
  data() {
    return {
      appName: "BoolFlix",
      store,
    };
  },

  components: { AppHeader, CardList },

  methods: {
    fetchMovies(term) {
      axios.get(store.endpoint + "&query=" + term).then((response) => {
        store.movies = response.data.results;
        console.log(store.movies);
      });
    },

    fetchFilteredMovies(term) {
      this.fetchMovies(term);
    },
  },
};
</script>

<template>
  <AppHeader
    @on-search="fetchFilteredMovies(store.searchedTerm)"
    :appTitle="appName"
  />

  <CardList />
</template>

<style scoped></style>
