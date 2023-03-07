<script>
export default {
  props: {
    pic: String,
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
  },

  methods: {
    getFlag(country) {
      country = country.toUpperCase();

      //gestisco le eccezioni
      if (country == "EN") return "http://flagsapi.com/GB/flat/64.png";
      if (country == "JA") return "http://flagsapi.com/JP/flat/64.png";
      if (country == "KO") return "http://flagsapi.com/KR/flat/64.png";

      //gestisco il resto
      return "http://flagsapi.com/" + country + "/flat/64.png";
    },

    getImg(pic) {
      return "https://image.tmdb.org/t/p/w342" + pic;
    },
  },
};
</script>

<template>
  <div class="col text-center">
    <img :src="getImg(pic)" alt="movie/tvSeries poster" />
    <h3 class="mt-3">{{ title }}</h3>
    <h4>
      <i>{{ originalTitle }}</i>
    </h4>
    <img :src="getFlag(language)" alt="flag" class="flag" />
    <p>{{ vote }}</p>
  </div>
</template>

<style lang="scss" scoped>
.flag {
  width: 7%;
}

h3,
h4,
p {
  color: white;
}
</style>
