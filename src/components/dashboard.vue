<script>
import createNote from './createNote.vue'
import displayNote from './displayNote.vue'

export default {
  name: 'Dashboard',
  components: { createNote, displayNote },

  data: () => ({
    drawer: true,
    openRail: true,
    group: null,
    items: [
      { title: 'Notes', value: 'notes', icon: 'mdi-lightbulb-outline' },
      { title: 'Reminders', value: 'reminders', icon: 'mdi-bell-outline' },
      { title: 'Edit Labels', value: 'edit_labels', icon: 'mdi-pencil-outline' },
      { title: 'Archive', value: 'archive', icon: 'mdi-archive-arrow-down-outline' },
      { title: 'Trash', value: 'trash', icon: 'mdi-trash-can-outline' }
    ],
    loading: false
  }),

  watch: {
    group() {
      this.drawer = false
    }
  },

  methods: {
    onClick() {
      this.openRail = !this.openRail
    }
  }
}
</script>

<template>
  <v-app>
    <v-container fluid>
      <v-app-bar prominent>
        <v-app-bar-nav-icon @click="onClick"></v-app-bar-nav-icon>
        <img src="../assets/keep.png" alt="Keep" />
        <v-toolbar-title>Keep</v-toolbar-title>

        <v-card-text class="search">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            density="compact"
            label="Search"
            hide-details
            single-line
            @click:append-inner="onClick"
          ></v-text-field>
        </v-card-text>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn><img src="../assets/refresh.svg" alt="Refresh" /></v-btn>
          <v-btn><img src="../assets/list_view.svg" alt="List View" /></v-btn>
        </template>

        <v-btn><img src="../assets/settings.svg" alt="Settings" /></v-btn>
        <v-btn><img src="../assets/apps_icon.svg" alt="Apps" /></v-btn>
        <v-btn><img src="../assets/account_circle.svg" alt="Account" /></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        expand-on-hover
        :rail="openRail"
      >
        <v-list>
          <v-list-item class="sidebar-items" v-for="(item, index) in items" :key="index">
            <template v-slot:prepend>
              <div style="display: flex">
                <div>
                  <v-icon>{{ item.icon }}</v-icon>
                </div>
                <div style="margin-left: 20px">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </div>
              </div>
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container class="main-content">
          <RouterView />
        </v-container>
      </v-main>
    </v-container>
  </v-app>
</template>

<style>
.v-container.main-content {
  margin-left: 250px;
}

.sidebar-items:hover {
  cursor: pointer;
}

.v-list-item:hover {
  background-color: #dad8d8;
}

.v-btn.btn {
  background-color: transparent;
}

.v-card-text.search {
  width: 30%;
}
</style>
