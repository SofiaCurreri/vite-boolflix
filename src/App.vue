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
    fetchTitles() {
      axios.get(store.endpoint).then((response) => {
        store.titles = response.data.results;
        console.log(store.titles);
      });
    },

    fetchFilteredTitles(term) {
      this.fetchTitles(`${store.endpoint}&query=${term}`);
    },
  },
};
</script>

<template>
  <AppHeader @on-search="fetchFilteredTitles(store.searchedTerm)" />

  <CardList />
</template>

<style scoped></style>
