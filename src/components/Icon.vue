<script>
export default {
  name: 'Icon',

  data() {
    return {
      items: [
        { title: 'Delete note' },
        { title: 'Add label' },
        { title: 'Add drawing' },
        { title: 'Make a copy' },
        { title: 'Show checkboxes' },
        { title: 'Copy to Google Docs' },
        { title: 'Version history' }
      ],
      location: 'end'
    }
  }
}
</script>

<template>
  <v-btn class="btn" variant="text"><v-icon>mdi-bell-outline</v-icon></v-btn>
  <v-btn class="btn" variant="text"><v-icon>mdi-account-plus-outline</v-icon></v-btn>
  <v-btn class="btn" variant="text"><v-icon>mdi-palette</v-icon></v-btn>
  <v-btn class="btn" variant="text"><v-icon>mdi-image-outline</v-icon></v-btn>
  <v-btn class="btn" variant="text"><v-icon>mdi-archive-arrow-down-outline</v-icon></v-btn>

  <v-menu :location="location">
    <template v-slot:activator="{ props }">
      <v-btn class="btn" variant="text" v-bind="props"><v-icon>mdi-dots-vertical</v-icon></v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style>
.v-btn.btn {
  margin: 0;
  padding: 0;
  min-width: 40px;
  height: 30px;
}

.v-icon {
  font-size: 10px;
}
</style>
