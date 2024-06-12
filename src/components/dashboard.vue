<script>
import createNote from './createNote.vue'

export default {
  name: 'dashboard',
  components: { createNote },

  data: () => ({
    drawer: true,
    openRail: true,
    group: null,
    items: [
      { title: 'Notes', value: 'notes', icon: 'mdi-lightbulb-outline' },
      { title: 'Remainders', value: 'remainders', icon: 'mdi-bell-outline' },
      { title: 'Edit Labels', value: 'edit_labels', icon: 'mdi-pencil-outline' },
      { title: 'Archieve', value: 'archieve', icon: 'mdi-archive-arrow-down-outline' },
      { title: 'Trash', value: 'trash', icon: 'mdi-trash-can-outline' }
    ],
    clicked: false
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
  <v-layout>
    <v-app-bar prominent>
      <v-app-bar-nav-icon variant="text" @click="onClick"></v-app-bar-nav-icon>
      <img src="../assets/keep.png" alt="" />
      <v-toolbar-title>Keep</v-toolbar-title>

      <v-card-text class="search">
        <v-text-field
          :loading="loading"
          prepend-inner-icon="mdi-magnify"
          density="compact"
          label="Search"
          variant="solo"
          hide-details
          single-line
          @click:append-inner="onClick"
        ></v-text-field>
      </v-card-text>

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
  </v-layout>

  <div><createNote /></div>
  <div class="text-content" width="100%">
    <div class="txt-card">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationem reiciendis
        aspernatur nesciunt sed expedita molestiae totam facere possimus quisquam adipisci, illum
        obcaecati ex, deserunt natus nam incidunt numquam suscipit?
      </p>
    </div>
    <div class="txt-card">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationem reiciendis
        aspernatur nesciunt sed expedita molestiae totam facere possimus quisquam adipisci, illum
        obcaecati ex, deserunt natus nam incidunt numquam suscipit?
      </p>
    </div>
    <div class="txt-card">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationem reiciendis
        aspernatur nesciunt sed expedita molestiae totam facere possimus quisquam adipisci, illum
        obcaecati ex, deserunt natus nam incidunt numquam suscipit?
      </p>
    </div>
  </div>
</template>

<style>
/* display notes */
.displayAll {
  height: 600px;
  width: 100%;
  /* display: flex;
  flex-direction: column; */
  overflow-y: scroll;
}

.text-content {
  display: flex;
  justify-content: space-between;
}

.txt-card {
  border: 1px solid black;
  padding: 10px;
}

* {
  margin: 0;
  padding: 0;
}

.v-btn.close-btn {
  text-transform: capitalize;
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
  /* height: 10px; */
}
</style>
