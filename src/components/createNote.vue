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
            this.$emit('noteCreated', res.data)

            this.clicked = false
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    refreshAll() {
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
          <v-btn
            class="close-btn"
            variant="text"
            @click="submitNote(), (clicked = false), refreshAll()"
            >Close</v-btn
          >
        </div>
      </div>
    </template>
  </div>

  <!-- Dialog box code -->

  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-account"
          text="Edit Profile"
          variant="tonal"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card min-height="100px">
        <div class="create-card">
          <v-textarea
            class="create-txtarea"
            placeholder="Title"
            variant="plain"
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
            variant="plain"
            v-show="true"
            auto-grow
            rows="1"
            v-model="description"
            v-slot:append-inner
          >
          </v-textarea>
          <div style="display: flex; justify-content: space-between">
            <div style="display: flex; max-width: 100%"><Icon /></div>

            <div>
              <v-btn class="close-btn" variant="text" @click="submitNote(), (dialog = false)"
                >Close</v-btn
              >
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
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

.create-txtarea {
  height: 44px !important;
  margin-bottom: 5px;
  align-items: center;
  /* border: 1px solid black; */
  margin: 0;
  padding: 0;
  padding-left: 10px;
}

.v-input--density-default {
  --v-input-control-height: 10px;
  --v-input-padding-top: 5px;
}

.v-input__details {
  align-items: flex-end;
  display: flex;
  font-size: 0.75rem;
  font-weight: 400;
  grid-area: unset !important;
  letter-spacing: 0.0333333333em;
  line-height: normal;
  min-height: 22px;
  padding-top: 6px;
  overflow: hidden;
  justify-content: space-between;
}

.v-textarea__control {
  min-height: 30px !important;
}

.v-textarea--auto-grow .v-textarea__control {
  min-height: 30px !important;
}

.title-area {
  min-height: 30px !important;
}

.description-area {
  min-height: 30px !important;
}

.v-btn.close-btn {
  text-transform: capitalize;
}

.v-btn.btn {
  background-color: transparent;
}
</style>
