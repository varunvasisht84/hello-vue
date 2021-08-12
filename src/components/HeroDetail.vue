<template>
  <div>
    <v-card elevation="6" class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{ hero.firstName }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ hero.originDate }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey">{{
          hero.description
        }}</v-list-item-avatar>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
    props: {
      hero: {
          type: Object,
          default: () => {}
      },
  },
  data() {
    return {};
  },

  methods() {},
};
</script>

<style lang="scss" scoped>
</style>