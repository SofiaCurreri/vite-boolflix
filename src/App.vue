<script>
import AppHeader from "./components/AppHeader.vue";
import CardList from "./components/CardList.vue";
import axios from "axios";
import { store } from "./data/store.js";

export default {
  data() {
    return {
      appName: "BOOLFLIX",
      apiKey: "e13ff19427343a816033a4063dcb0d06",
      store,
    };
  },

  components: { AppHeader, CardList },

  methods: {
    fetchMovies(query) {
      axios
        .get(`${store.endpoint}/search/movie`, {
          params: {
            api_key: this.apiKey,
            query,
          },
        })
        .then((response) => {
          store.movies = response.data.results;
          console.log(store.movies);
        });
    },

    fetchTvSeries(query) {
      axios
        .get(`${store.endpoint}/search/tv`, {
          params: {
            api_key: this.apiKey,
            query,
          },
        })
        .then((response) => {
          store.tvSeries = response.data.results;
          console.log(store.tvSeries);
        });
    },

    fetchResults(query) {
      this.fetchMovies(query);
      this.fetchTvSeries(query);
    },
  },
};
</script>

<template>
  <header>
    <AppHeader @on-search="fetchResults" :appTitle="appName" />
  </header>

  <main>
    <CardList />
  </main>
</template>

<style lang="scss">
header {
  background-color: #1a1919 !important;
}
main {
  min-height: 90vh;
  background-color: rgb(59, 59, 59);
  color: white;
  padding-bottom: 2rem;
}
</style>
