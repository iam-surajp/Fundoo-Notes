<script>
import { createNote } from '../services/notesServices'

export default {
  name: 'createNote',
  data: () => ({
    clicked: false,
    title: '',
    description: ''
  }),

  methods: {
    async submitNote() {
      const reqData = {
        title: this.title,
        description: this.description
      }
      createNote(reqData)
    }
  }
}
</script>

<template>
  <div class="create-card">
    <v-text-field
      class="create-txtfield"
      placeholder="Title"
      variant="plain"
      v-if="clicked"
      v-model="title"
      v-slot:append-inner
    >
      <v-btn variant="text"><v-icon>mdi-pin-outline</v-icon></v-btn>
    </v-text-field>

    <v-textarea
      class="create-txtfield"
      placeholder="Take a note..."
      :placeholder="'Take a note...'"
      @click="clicked = true"
      variant="plain"
      v-show="true"
      auto-grow
      row="1"
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
        <div>
          <v-btn variant="text"><v-icon>mdi-bell-outline</v-icon></v-btn>
          <v-btn variant="text"><v-icon>mdi-account-plus-outline</v-icon></v-btn>
          <v-btn variant="text"><v-icon>mdi-palette</v-icon></v-btn>
          <v-btn variant="text"><v-icon>mdi-image-outline</v-icon></v-btn>
          <v-btn variant="text"><v-icon>mdi-archive-arrow-down-outline</v-icon></v-btn>
          <v-btn variant="text"><v-icon>mdi-dots-vertical</v-icon></v-btn>
        </div>
        <div>
          <v-btn class="close-btn" variant="text" @click="clicked = false">Close</v-btn>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
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

.create-txtfield {
  height: 40px;
  margin-bottom: 5px;
  align-items: center;
  padding-left: 10px;
}

.v-input--density-default {
  --v-input-control-height: 40px;
  --v-input-padding-top: 5px;
}

.v-btn.close-btn {
  text-transform: capitalize;
}

.v-btn.btn {
  background-color: transparent;
}
</style>
