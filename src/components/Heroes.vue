<template>
  <div>
    <ul id="example-1">
      <li v-for="hero in heroes" v-bind:key="hero.id">
        {{ hero.firstName }}
      </li>
    </ul>
  </div>
</template>

<script>
import Data from "./db.json";

export default {
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