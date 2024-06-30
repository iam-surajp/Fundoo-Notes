<script>
import {
  deleteNoteServices,
  changeColorServices,
  archiveNoteServices
} from '@/services/notesServices'

import { getAllLabelsServices } from '@/services/noteLabelServices'

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
      location: 'end',
      showMenu: false,
      clicked: false,
      noteList: [],
      color: null,
      showLabelMenu: false,
      menuPosition: { top: '0px', left: '0px' },
      notelabel: null,
      labels: [],

      colors: [
        { name: 'Default', clr: '#FFFFFF' },
        { name: 'Coral', clr: '#FF7F50' },
        { name: 'Peach', clr: '#FFE5B4' },
        { name: 'Sand', clr: '#CBBD93' },
        { name: 'Mint', clr: '#3EB489' },
        { name: 'Sage', clr: '#B2AC88' },
        { name: 'Fog', clr: '#D5DCDE' },
        { name: 'Storm', clr: '#837a78' },
        { name: 'Dusk', clr: '#4e5481' },
        { name: 'Blossom', clr: '#F9B7FF' },
        { name: 'Clay', clr: '#BDBAA2' },
        { name: 'Chalk', clr: '#DDD0BC' }
      ]
    }
  },

  props: {
    id: String,
    archive_icons: Boolean,
    delete_icons: Boolean
  },

  emits: ['menuStateChanged', 'noteDeleted', 'colorChanged', 'changeAlert'],

  methods: {
    toggleMenu(event) {
      this.showMenu = !this.showMenu
      this.$emit('menuStateChanged', this.showMenu)
      event.stopPropagation()
    },

    toggleLabelMenu(event) {
      // New method for Add Label menu
      this.showLabelMenu = !this.showLabelMenu
      // event.stopPropagation()
    },

    chooseMenuFunction(title) {
      console.log('title of item', title)
      if (title === 'Delete note') {
        console.log('title of item', title)
        this.noteList = {
          noteIdList: [this.id],
          isDeleted: true
        }
        deleteNoteServices(this.noteList)
          .then((res) => {
            console.log(res)
            this.$emit('changeAlert')
          })
          .catch((error) => {
            console.log(error)
          })
      } else if (title === 'Add label') {
        this.toggleLabelMenu()
      }
    },

    restoreDeletedFunc() {
      this.noteList = {
        noteIdList: [this.id],
        isDeleted: false
      }
      deleteNoteServices(this.noteList)
        .then((res) => {
          console.log(res)
          this.$emit('changeAlert')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    archiveFunc() {
      const reqData = {
        noteIdList: [this.id],
        isArchived: true
      }
      archiveNoteServices(reqData)
        .then((res) => {
          console.log(res)
          this.$emit('changeAlert')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    unarchiveFunc() {
      const reqData = {
        noteIdList: [this.id],
        isArchived: false
      }
      archiveNoteServices(reqData)
        .then((res) => {
          console.log(res)
          this.$emit('changeAlert')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    selectColor(color) {
      this.color = color
      this.updateColor()
    },

    updateColor() {
      const reqData = {
        noteIdList: [this.id],
        color: this.color.clr
      }
      changeColorServices(reqData)
        .then((res) => {
          this.$emit('colorChanged', { id: this.id, color: this.color.clr })
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getlabels() {
      getAllLabelsServices()
        .then((result) => {
          this.labels = result.data.data.details
          console.log('labels are', this.labels)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted() {
    this.getlabels()
  }
}
</script>

<template>
  <!-- Icons for delete-forever and delete-restore -->
  <template v-if="delete_icons">
    <v-btn class="btn" variant="text">
      <v-icon>mdi-delete-forever</v-icon>
    </v-btn>
    <v-btn class="btn" variant="text" @click="restoreDeletedFunc()">
      <v-icon>mdi-delete-restore</v-icon>
    </v-btn>
  </template>

  <!-- Icons for All Notes and Archive Pages -->
  <template v-if="!delete_icons">
    <v-btn class="btn" variant="text"><v-icon>mdi-bell-outline</v-icon></v-btn>
    <v-btn class="btn" variant="text"><v-icon>mdi-account-plus-outline</v-icon></v-btn>

    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn class="btn" variant="text" @click.stop="toggleMenu" v-bind="props">
          <v-icon>mdi-palette</v-icon>
        </v-btn>
      </template>
      <v-list class="colors-list">
        <div v-for="(color, index) in colors" :key="index" @click.stop="selectColor(color)">
          <div id="color-chooser" :style="{ backgroundColor: color.clr }"></div>
        </div>
      </v-list>
    </v-menu>

    <v-btn class="btn" variant="text"><v-icon>mdi-image-outline</v-icon></v-btn>

    <!-- Archive Icon Logic -->
    <template v-if="!archive_icons">
      <v-btn class="btn" variant="text" @click="archiveFunc">
        <v-icon>mdi-archive-arrow-down-outline</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-btn class="btn" variant="text" @click="unarchiveFunc">
        <v-icon>mdi-archive-arrow-up-outline</v-icon>
      </v-btn>
    </template>

    <!-- Additional Options Menu -->
    <v-menu :location="location" v-model="showMenu">
      <template v-slot:activator="{ props }">
        <v-btn class="btn" variant="text" @click.stop="toggleMenu" v-bind="props">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="chooseMenuFunction(item.title), (this.showMenu = false)"
          @click.stop
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>

  <!-- Label Menu -->
  <v-menu v-model="showLabelMenu" width="200px" max-height="500px">
    <template v-slot:activator="{ props }"></template>
    <v-list>
      <div>
        <v-list-item>
          <label>Label Note</label>
        </v-list-item>
        <v-list-item>
          <div width="30px">
            <v-text-field
              id=""
              append-inner-icon="mdi-magnify"
              placeholder="Enter label name"
              variant="plain"
              v-model="notelabel"
            ></v-text-field>
          </div>
        </v-list-item>
        <div class="show-labels">
          <div class="lbl" v-for="(label, index) in this.labels">
            <v-checkbox :label="label.label"></v-checkbox>
          </div>
        </div>
        <v-divider></v-divider>
        <div @click.stop="showLabelMenu = true" class="create-btn">
          <v-icon>mdi-plus</v-icon>
          <label style="margin-left: 10px">Create "{{ this.notelabel }}"</label>
        </div>
      </div>
    </v-list>
  </v-menu>
</template>

<style scoped>
.show-labels {
  max-height: 200px;
  overflow-y: auto;
}

.lbl {
  max-height: 40px;
}

.v-checkbox .v-selection-control {
  height: 30px;
}

.create-btn {
  margin: 10px;
}

#color-chooser {
  display: flex;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin: 3px;
}

.v-btn.btn {
  margin: 0;
  padding: 0;
  min-width: 40px;
  height: 30px;
}

.v-icon {
  font-size: 20px;
}

.colors-list {
  display: flex;
}
</style>
