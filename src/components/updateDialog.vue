<script>
import Icon from './Icon.vue'
import { updateNoteServices } from '@/services/notesServices'

export default {
  props: { visible: Boolean, note: Object },

  data: () => ({
    dialog: false,
    noteId: '',
    title: '',
    description: ''
  }),

  components: {
    Icon
  },

  methods: {
    submitUpdated() {
      const reqData = {
        noteId: this.$props.note?.id,
        title: this.title,
        description: this.description
      }
      console.log('data is ', reqData)
      updateNoteServices(reqData)
        .then((res) => {
          console.log('Note updated successfully', res)
          this.$emit('noteUpdated')
        })
        .catch((error) => {
          console.log(error)
          console.log('Note updation failed')
        })
    }
  },
  mounted() {},

  watch: {
    note: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.title = newVal.title
          this.description = newVal.description
        }
      }
    }
  },

  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  }
}
</script>

<template>
  <!-- Dialog box code -->

  <div class="pa-4 text-center">
    <v-dialog v-model="show" max-width="600px">
      <v-card>
        <div class="create-card">
          <v-textarea
            class="create-txtarea"
            placeholder="Title"
            variant="plain"
            v-model="title"
            auto-grow
            rows="1"
            :max-rows="15"
            v-slot:append-inner
          >
            <v-btn variant="text"><v-icon>mdi-pin-outline</v-icon></v-btn>
          </v-textarea>

          <v-textarea
            class="create-txtarea"
            placeholder="Take a note..."
            variant="plain"
            v-show="true"
            auto-grow
            rows="1"
            :max-rows="15"
            v-model="description"
            v-slot:append-inner
          >
          </v-textarea>
          <div style="display: flex; justify-content: space-between">
            <div style="display: flex; max-width: 100%"><Icon /></div>

            <div>
              <v-btn
                class="close-btn"
                variant="text"
                @click.stop="show = false"
                @click="submitUpdated()"
                >Close</v-btn
              >
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
