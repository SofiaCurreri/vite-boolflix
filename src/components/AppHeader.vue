<script>
import { store } from "../data/store.js";
export default {
  data() {
    return {
      store,
    };
  },

  props: {
    appTitle: String,
  },

  emits: ["on-search"],

  methods: {
    search() {
      this.$emit("on-search", store.searchedTerm); //puoi omettere store.searchedterm xk in store
      //emit ti serve per aggiornare ogni volta la videata
    },
  },
};
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand"
        ><h1 class="text-danger">{{ appTitle }}</h1></a
      >
      <form class="d-flex" role="search" @submit.prevent="search()">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Type to find a movie or tv series"
          aria-label="Search"
          v-model="store.searchedTerm"
          @keyup.enter="search()"
        />
        <button class="btn btn-danger" type="button" @click="search()">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
input {
  width: 18rem;
}
</style>
