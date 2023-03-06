<script>
import { store } from "../data/store.js";
export default {
  data() {
    return {
      store,
    };
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
  <header>
    <div class="container my-3 d-flex justify-content-end">
      <input
        type="text"
        placeholder="Type to find a movie or tv series"
        @submit.prevent=""
        v-model="store.searchedTerm"
        @keyup.enter="search()"
      />
      <button type="button" @click="search()">Search</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
input {
  width: 35%;
}
</style>
