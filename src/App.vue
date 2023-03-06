<script>
import AppHeader from "./components/AppHeader.vue";
import CardList from "./components/CardList.vue";
import axios from "axios";
import { store } from "./data/store.js";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader, CardList },

  methods: {
    fetchTitles(term) {
      axios.get(store.endpoint + "&query=" + term).then((response) => {
        store.movieList = response.data.results;
        console.log(store.movieList);
      });
    },

    fetchFilteredTitles(term) {
      this.fetchTitles(term);
    },
  },
};
</script>

<template>
  <AppHeader @on-search="fetchFilteredTitles(store.searchedTerm)" />

  <CardList />
</template>

<style scoped></style>
