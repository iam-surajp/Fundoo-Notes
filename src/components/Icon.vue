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
      noteList: []
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
  <v-btn class="btn" variant="text"><v-icon>mdi-palette</v-icon></v-btn>
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
