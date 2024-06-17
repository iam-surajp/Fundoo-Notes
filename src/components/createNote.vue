<script>
import { createNoteServices } from '../services/notesServices'
import Icon from './Icon.vue'

export default {
  name: 'createNote',
  components: { Icon },
  data: () => ({
    clicked: false,
    title: '',
    description: '',
    dialog: false
  }),

  methods: {
    async submitNote() {
      const reqData = {
        title: this.title,
        description: this.description
      }
      console.log(reqData)

      if (reqData.title !== '' && reqData.description !== '') {
        const token = localStorage.getItem('token')
        console.log('Token is -------->', token)
        createNoteServices(reqData, token)
          .then((res) => {
            console.log(res)
            console.log('data is ---', res.data)
            this.$emit('noteCreated')
            this.clicked = false
          })
          .catch((error) => {
            console.log(error)
          })
      }
      this.clicked = false
      this.title = ''
      this.description = ''
    }
  }
}
</script>

<template>
  <div class="create-card">
    <v-textarea
      class="create-txtarea"
      placeholder="Title"
      variant="plain"
      v-if="clicked"
      v-model="title"
      auto-grow
      rows="1"
      v-slot:append-inner
    >
      <v-btn variant="text"><v-icon>mdi-pin-outline</v-icon></v-btn>
    </v-textarea>

    <v-textarea
      class="create-txtarea"
      placeholder="Take a note..."
      @click="clicked = true"
      variant="plain"
      v-show="true"
      auto-grow
      rows="1"
      v-model="description"
      v-slot:append-inner
    >
      <template v-if="!clicked" v-show="true">
        <v-btn variant="text"><v-icon>mdi-clipboard-check-outline</v-icon></v-btn>
        <v-btn variant="text"><v-icon>mdi-brush</v-icon></v-btn>
        <v-btn variant="text"><v-icon>mdi-image-outline</v-icon></v-btn>
      </template>
    </v-textarea>
    <template v-if="clicked">
      <div style="display: flex; justify-content: space-between">
        <div style="display: flex; max-width: 100%"><Icon /></div>

        <div>
          <v-btn class="close-btn" variant="text" @click="submitNote">Close</v-btn>
        </div>
      </div>
    </template>
  </div>
</template>

<style>
.create-card {
  box-shadow: 0px 1px 4px 1px gray;
  margin: 0;
  padding: 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: space-evenly;
  border-radius: 5px;
}

.create-txtarea {
  padding-left: 10px;
}

.v-input--density-default {
  --v-input-control-height: 0px;
  --v-input-padding-top: 5px;
  --v-input-padding-bottom: 5px;
}

.v-btn.close-btn {
  text-transform: capitalize;
}

.v-btn.btn {
  background-color: transparent;
}
.v-text-field .v-input__details {
  display: none !important;
  border: 2px solid red !important;
  height: 0px;
}
</style>
