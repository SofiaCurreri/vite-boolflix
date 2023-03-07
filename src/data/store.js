import { reactive } from "vue";

export const store = reactive({
  endpoint: "https://api.themoviedb.org/3",
  searchedTerm: "",
  movies: [],
  //   tvSeries: [],
});
