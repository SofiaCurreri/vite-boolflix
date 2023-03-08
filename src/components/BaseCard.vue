<script>
export default {
  props: {
    pic: String,
    title: String,
    originalTitle: String,
    language: String,
    rating: Number,
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
  <div class="col">
    <div class="card">
      <div class="card-front">
        <img :src="getImg(pic)" alt="movie/tvSeries poster" class="card-img" />
      </div>
      <div class="card-back p-4">
        <h4>Title: {{ title }}</h4>
        <h4>
          Original title: <i>{{ originalTitle }}</i>
        </h4>
        <img :src="getFlag(language)" alt="flag" class="flag mb-2" />
        <div>
          <font-awesome-icon
            icon="fa-solid fa-star"
            class="solid-star"
            v-for="i in rating"
          />
          <font-awesome-icon
            icon="fa-regular fa-star"
            v-for="i in 5 - rating"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flag {
  width: 7%;
}

.solid-star {
  color: yellow;
}

.card {
  height: 40vw;
  border-width: 0 !important;
  .card-front {
    height: 100%;
    overflow: hidden;
    .card-img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .card-back {
    height: 100%;
    display: none;
    overflow: auto;
    background-color: #202020;
  }

  &:hover {
    .card-front {
      display: none;
    }
    .card-back {
      display: block;
    }
  }
}
</style>
