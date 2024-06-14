<script>
import createNote from './createNote.vue'
import displayNote from './displayNote.vue'
import { getAllNotesServices } from '@/services/notesServices'

export default {
  name: 'getAllNotes',
  components: {
    createNote,
    displayNote
  },

  data() {
    return {
      notes: []
    }
  },
  created() {
    const token = localStorage.getItem('token')
    console.log(token)

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

  methods: {
    handleNoteCreated(note) {
      this.notes.push(note)
    },
    refreshAgain() {}
  }
}
</script>

<template>
  <createNote @noteCreated="handleNoteCreated" />
  <displayNote :notes="notes" @refreshAgain="refreshAgain" />
</template>

<style></style>
