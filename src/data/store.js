import { reactive } from "vue";

export const store = reactive({
  endpoint:
    "https://api.themoviedb.org/3/search/movie?api_key=e13ff19427343a816033a4063dcb0d06",
  searchedTerm: "",
  movieList: [],
  //   SeriesList: [],
});
