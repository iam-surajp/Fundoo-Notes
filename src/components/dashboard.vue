<script>
export default {
  name: 'dashboard',
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Notes',
        value: 'notes'
      },
      {
        title: 'Remainders',
        value: 'remainders'
      },
      {
        title: 'Edit Labels',
        value: 'edit_labels'
      },
      {
        title: 'Archieve',
        value: 'archieve'
      },
      {
        title: 'Trash',
        value: 'trash'
      }
    ],
    clicked: false
  }),

  watch: {
    group() {
      this.drawer = false
    }
  },

  methods: {}
}
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <img src="../assets/keep.png" alt="" />
        <v-toolbar-title>Keep</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn variant="text"><img src="../assets/refresh.svg" alt="" /></v-btn>

          <v-btn variant="text"><img src="../assets/list_view.svg" alt="" /></v-btn>
        </template>

        <v-btn variant="text"><img src="../assets/settings.svg" alt="" /></v-btn>

        <v-btn variant="text"><img src="../assets/apps_icon.svg" alt="" /></v-btn>

        <v-btn variant="text"><img src="../assets/account_circle.svg" alt="" /></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list :items="items"></v-list>
      </v-navigation-drawer>
      <div width="500px">
        <v-text-field
          class="txt-field"
          width="500px"
          placeholder="Title"
          v-if="clicked"
        ></v-text-field>
        <v-text-field
          class="txt-field"
          width="500px"
          placeholder="Take a note..."
          @click="clicked = true"
          v-show="true"
        ></v-text-field>
      </div>
    </v-layout>
  </v-card>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.v-text-field.txt-field {
  outline: none;
  border: none;
}
</style>

<!-- <div>
          <v-main style="height: 400px" color="gray">
            <v-card-text>
              The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
          </v-main>
        </div> -->
