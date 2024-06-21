<script>
import createNote from './createNote.vue'
import displayNote from './displayNote.vue'
import labelDialog from './labelDialog.vue'
import { getAllLabelsServices } from '@/services/noteLabelServices'

export default {
  name: 'Dashboard',
  components: { createNote, displayNote, labelDialog },

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
    loading: false,
    selectedIndex: null,
    showLabelDialog: false,
    allLabels: []
  }),

  watch: {
    group() {
      this.drawer = false
    }
  },

  methods: {
    onClick() {
      this.openRail = !this.openRail
    },

    selectItem(index, title) {
      this.selectedIndex = index
      console.log(index)
      if (title === 'Notes') {
        this.$router.push('/home/displayall')
      } else if (title === 'Archive') {
        this.$router.push('/home/archive')
      } else if (title === 'Trash') {
        this.$router.push('/home/trash')
      } else if (title === 'Edit Labels') {
        if (this.selectedIndex !== 0) {
          this.openLabelDialog()
        }

        getAllLabelsServices()
          .then((result) => {
            console.log(result)
            this.allLabels = result.data.data.details

            this.navigationLabels(this.allLabels)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    getAllLables() {
      getAllLabelsServices()
        .then((result) => {
          console.log(result)
          this.allLabels = result.data.data.details
          return this.allLabels
        })
        .catch((error) => {
          console.log(error)
        })
    },

    openLabelDialog() {
      this.showLabelDialog = true
    },

    navigationLabels(allLabels) {
      this.items = [
        { title: 'Notes', value: 'notes', icon: 'mdi-lightbulb-outline' },
        { title: 'Reminders', value: 'reminders', icon: 'mdi-bell-outline' },
        { title: 'Edit Labels', value: 'edit_labels', icon: 'mdi-pencil-outline' },
        { title: 'Archive', value: 'archive', icon: 'mdi-archive-arrow-down-outline' },
        { title: 'Trash', value: 'trash', icon: 'mdi-trash-can-outline' }
      ]
      const labels = allLabels.map((label) => ({
        title: label.label,
        value: label.label,
        icon: 'mdi-label-outline'
      }))
      this.items.splice(2, 0, ...labels)
    }
  },

  mounted() {
    this.selectItem(0, 'Edit Labels')
  }
}
</script>

<template>
  <v-app>
    <v-container fluid>
      <v-app-bar prominent>
        <v-app-bar-nav-icon @click="onClick"></v-app-bar-nav-icon>
        <img src="../assets/keep.png" alt="Keep" />
        <v-toolbar-title>Fundoo Notes</v-toolbar-title>

        <div class="search">
          <v-responsive style="border-radius: 8px">
            <v-text-field
              id="searchbar"
              class="custom-bg-gray"
              prepend-inner-icon="mdi-magnify"
              density="compact"
              placeholder="Search"
              variant="solo-filled"
              hide-details
              @click:append-inner="onClick"
            ></v-text-field>
          </v-responsive>
        </div>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <div style="display: flex">
            <v-btn><img src="../assets/refresh.svg" alt="Refresh" /></v-btn>
            <v-btn><img src="../assets/list_view.svg" alt="List View" /></v-btn>
            <v-btn><img src="../assets/settings.svg" alt="Settings" /></v-btn>
          </div>
        </template>

        <div style="margin-left: 20px; display: flex">
          <v-btn><img src="../assets/apps_icon.svg" alt="Apps" /></v-btn>
          <v-avatar>
            <v-img alt="John" width="15px" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
          </v-avatar>
        </div>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        expand-on-hover
        :rail="openRail"
      >
        <v-list>
          <v-list-item
            class="sidebar-items"
            v-for="(item, index) in items"
            :key="index"
            :class="{ 'active-item': selectedIndex === index }"
            @click="selectItem(index, item.title)"
          >
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
  <labelDialog
    :visible="showLabelDialog"
    @close="showLabelDialog = false"
    :items="this.allLabels"
    @add:label="getAllLables()"
  />
</template>

<style>
.v-container.main-content {
  margin-left: 200px;
}

.v-main {
  padding-top: 30px !important;
}

.sidebar-items {
  border-radius: 50px;
}

.sidebar-items:hover {
  cursor: pointer;
}

.active-item {
  background-color: #feefc3 !important;
}

.v-list-item:hover {
  background-color: #dad8d8;
}

.v-btn.btn {
  background-color: transparent;
}

#searchbar {
  height: 46px;
  width: 700px;
  border: none;
  border-radius: 10px;
}

element.style {
  --v-layout-left: 0px;
  --v-layout-right: 0px;
  --v-layout-top: 40px !important;
  --v-layout-bottom: 0px;
}
</style>
