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

      //gestisco il resto
      return "http://flagsapi.com/" + country + "/flat/64.png";
    },
  },
};
</script>

<template>
  <div class="col text-center">
    <img :src="pic" class="img-fluid" alt="title pic" />
    <h3 class="mt-3">{{ title }}</h3>
    <h4>{{ originalTitle }}</h4>
    <img :src="getFlag(language)" alt="" />
    <p>{{ vote }}</p>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 7%;
}
</style>
