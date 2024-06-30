<script>
import displayNote from './displayNote.vue'
import { getArchiveNoteServices } from '@/services/notesServices'

export default {
  name: 'archiveNotes',
  components: {
    displayNote
  },
  data() {
    return {
      archive_notes: []
    }
  },
  created() {
    this.getArchiveNotes()
  },
  methods: {
    getArchiveNotes() {
      getArchiveNoteServices()
        .then((res) => {
          this.archive_notes = res.data.data.data.reverse()
          console.log('archive notes are', this.archive_notes)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<template>
  <div>
    <div>
      <displayNote
        :totalnotes="archive_notes"
        :archive_icons="true"
        :delete_icons="false"
        @update:notes="getArchiveNotes()"
      />
    </div>
  </div>
</template>

<style scoped></style>
