<script>
import createNote from './createNote.vue'
import displayNote from './displayNote.vue'
import { getAllNotesServices } from '@/services/notesServices'

export default {
  name: 'getAllNotes',
  data: () => ({
    notes: []
  }),
  components: {
    createNote,
    displayNote
  },

  mounted() {
    this.getAllNotes()
  },

  methods: {
    getAllNotes() {
      const token = localStorage.getItem('token')

      getAllNotesServices(token)
        .then((response) => {
          console.log(response.data.data)
          this.notes = response.data.data.data.reverse()
          console.log('Notes are =====', this.notes)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getAllData() {
      this.getAllNotes()
    },

    updateNotes() {
      this.getAllNotes()
    }
  }
}
</script>

<template>
  <createNote @noteCreated="getAllData" />
  <displayNote :notes="notes" @update:notes="updateNotes" />
</template>

<style></style>
