<script>
import createNote from './createNote.vue'
import displayNote from './displayNote.vue'
import { getAllNotesServices } from '@/services/notesServices'

export default {
  name: 'displayAll',
  data: () => ({
    notes: [],
    totalnotes: []
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
          this.totalnotes = this.notes.filter((note) => !note.isDeleted && !note.isArchived)
          console.log('Notes are =====', this.totalnotes)
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
  <displayNote :totalnotes="totalnotes" @update:notes="updateNotes" />
</template>

<style></style>
