<script>
export default {
  name: 'dashboard',
  data: () => ({
    drawer: false,
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
        expand-on-hover
        rail
        temporary
      >
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
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

      <div style="width: 600px">
        <v-text-field
          class="no-border"
          style="width: 100%"
          placeholder="Title"
          v-if="clicked"
        ></v-text-field>
        <v-text-field
          class="no-border"
          style="width: 100%"
          placeholder="Take a note..."
          @click="clicked = true"
          v-show="true"
        ></v-text-field>
      </div>
    </v-layout>
  </v-card>

  <!-- <div class="content" height="600px" width="100%">
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
  </div> -->
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.no-border .v-input__control .v-input__slot::before,
.no-border .v-input__control .v-input__slot::after {
  border-bottom: none !important;
  outline: none !important;
  outline-color: transparent !important;
}

.no-border .v-input__control .v-input__slot:hover::before,
.no-border .v-input__control .v-input__slot:hover::after {
  border-bottom: none !important;
  outline: none !important;
  outline-color: transparent !important;
}

.no-border .v-input__control .v-input__slot:focus::before,
.no-border .v-input__control .v-input__slot:focus::after {
  border-bottom: none !important;
  outline: none !important;
  outline-color: transparent !important;
}

.no-border .v-input__control .v-input__slot {
  border-bottom: none !important;
  outline: none !important;
  outline-color: transparent !important;
}

.content {
  display: flex;
}
</style>
