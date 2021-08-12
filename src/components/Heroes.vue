<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
      v-for="hero in heroes"
      v-bind:key="hero.id"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{ hero.firstName }}
          </v-list-item-title>
          <v-list-item-subtitle>{{hero.originDate}}</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey">{{
          hero.description
        }}</v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text> Select Hero </v-btn>
      </v-card-actions>
    </v-card>
    <HeroDetail />
  </div>
</template>

<script>
import Data from "./db.json";
import HeroDetail from "./HeroDetail.vue";

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