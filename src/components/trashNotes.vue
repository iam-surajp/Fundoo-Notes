<script>
import displayNote from './displayNote.vue'
import { getTrashNotesServices } from '@/services/notesServices'

export default {
  name: 'trashNotes',
  components: {
    displayNote
  },
  data() {
    return {
      trash_notes: []
    }
  },
  created() {
    this.getTrashNotes()
  },
  methods: {
    getTrashNotes() {
      getTrashNotesServices()
        .then((res) => {
          this.trash_notes = res.data.data.data.reverse()
          console.log('trash notes are', this.trash_notes)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updateTrashNotes(updatedNotes) {
      this.trash_notes = updatedNotes
    }
  }
}
</script>

<template>
  <div>
    <div>
      <displayNote :totalnotes="trash_notes" @update:notes="getTrashNotes" />
    </div>
  </div>
</template>

<style scoped></style>
