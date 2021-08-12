<template>
  <div>
    <button v-for="hero in heroes" v-bind:key="hero.id">
      {{ hero.firstName }}
    </button>
    <HeroDetail/>
  </div>
</template>

<script>
import Data from "./db.json";
import HeroDetail from './HeroDetail.vue';

export default {
  components: { HeroDetail },
  data() {
    return {
      heroes: Data.heroes,
      villians: Data.villains,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>