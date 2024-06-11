<script>
export default {
  name: 'dashboard',
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
  <div class="center-content" style="">
    <div>
      <v-card class="create-card" width="600px" height="auto">
        <v-text-field
          class="abc"
          placeholder="Title"
          variant="plain"
          v-if="clicked"
          v-slot:append-inner=""
        >
          <v-btn variant="text"><v-icon>mdi-pin-outline</v-icon></v-btn>
        </v-text-field>
        <v-text-field
          placeholder="Take a note..."
          :placeholder="'Take a note...'"
          @click="clicked = true"
          variant="plain"
          v-show="true"
          v-slot:append-inner
        >
          <v-btn variant="text"><v-icon>mdi-clipboard-check-outline</v-icon></v-btn>
          <v-btn variant="text"><v-icon>mdi-brush</v-icon></v-btn>
          <v-btn variant="text"><v-icon>mdi-image-outline</v-icon></v-btn>
        </v-text-field>
        <template v-if="clicked">
          <div style="display: flex; justify-content: space-between">
            <div>
              <v-btn variant="text"><v-icon>mdi-bell-outline</v-icon></v-btn>
              <v-btn variant="text"><v-icon>mdi-account-plus-outline</v-icon></v-btn>
              <v-btn variant="text"><v-icon>mdi-palette</v-icon></v-btn>
              <v-btn variant="text"><v-icon>mdi-image-outline</v-icon></v-btn>
              <v-btn variant="text"><v-icon>mdi-archive-arrow-down-outline</v-icon></v-btn>
              <v-btn variant="text"><v-icon>mdi-dots-vertical</v-icon></v-btn>
            </div>
            <div><v-btn class="close-btn" variant="text">Close</v-btn></div>
          </div>
        </template>
      </v-card>
    </div>
  </div>
  <div class="text-content" height="600px" width="100%">
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationem reiciendis
        aspernatur nesciunt sed expedita molestiae totam facere possimus quisquam adipisci, illum
        obcaecati ex, deserunt natus nam incidunt numquam suscipit?
      </p>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationem reiciendis
        aspernatur nesciunt sed expedita molestiae totam facere possimus quisquam adipisci, illum
        obcaecati ex, deserunt natus nam incidunt numquam suscipit?
      </p>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationem reiciendis
        aspernatur nesciunt sed expedita molestiae totam facere possimus quisquam adipisci, illum
        obcaecati ex, deserunt natus nam incidunt numquam suscipit?
      </p>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.center-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100vh;
  right: 250px;
  bottom: 70px;
  text-align: center;
}

.v-card.create-card {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  padding-left: 10px;
  /* position: relative;
  right: 250px;
  bottom: 100px; */
}

.v-btn.close-btn {
  text-transform: capitalize;
}

.sidebar-items:hover {
  cursor: pointer;
}

.v-text-field.abc::placeholder {
  display: flex;
}

.v-list-item:hover {
  background-color: #dad8d8;
}

.v-btn.btn {
  /* background: none; */
  background-color: transparent;
}
</style>
