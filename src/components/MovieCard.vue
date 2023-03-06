<script>
export default {
  props: {
    pic: String,
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
  },
};
</script>

<template>
  <div class="col text-center">
    <img :src="pic" class="img-fluid" alt="title pic" />
    <h3>{{ title }}</h3>
    <h4>{{ originalTitle }}</h4>
    <p>{{ language }}</p>
    <p>{{ vote }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
