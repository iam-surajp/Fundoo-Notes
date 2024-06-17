<script>
import { deleteNoteServices } from '@/services/notesServices'

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
    id: String
  },

  emits: ['menuStateChanged'],

  methods: {
    toggleMenu(event) {
      this.showMenu = !this.showMenu
      this.$emit('menuStateChanged', this.showMenu)
      event.stopPropagation()
    },

    trashFunction(title) {
      console.log('hii there============')
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
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
}
</script>

<template>
  <v-btn class="btn" variant="text"><v-icon>mdi-bell-outline</v-icon></v-btn>
  <v-btn class="btn" variant="text"><v-icon>mdi-account-plus-outline</v-icon></v-btn>
  <!-- <v-btn class="btn" variant="text"><v-icon>mdi-palette</v-icon></v-btn> -->

  <v-menu :location="location">
    <template v-slot:activator="{ props }">
      <v-btn class="btn" variant="text" v-bind="props"><v-icon>mdi-palette</v-icon></v-btn>
    </template>

    <v-list class="colors-list">
      <v-list-item v-for="(color, index) in colors" :key="index" @click.stop>
        <v-list-item-title
          ><div
            id="color-chooser"
            :style="{
              display: flex,
              flexDirection: 'column',
              height: '30px',
              width: '30px',
              borderRadius: '50%',
              backgroundColor: color.clr
            }"
          ></div
        ></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>

  <v-btn class="btn" variant="text"><v-icon>mdi-image-outline</v-icon></v-btn>
  <v-btn class="btn" variant="text"><v-icon>mdi-archive-arrow-down-outline</v-icon></v-btn>

  <v-menu :location="location">
    <template v-slot:activator="{ props }">
      <v-btn class="btn" variant="text" @click.stop="toggleMenu" v-bind="props"
        ><v-icon>mdi-dots-vertical</v-icon></v-btn
      >
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        @click="trashFunction(item.title)"
        @click.stop
      >
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
