<script>
import {
  createLabelServices,
  deleteLabelServices,
  getAllLabelsServices,
  updateLabelServices
} from '@/services/noteLabelServices'
import { deleteNoteServices } from '@/services/notesServices'

export default {
  name: 'labelDialog',
  props: { visible: Boolean, items: Array },

  data: () => ({
    dialog: false,
    label: null,
    clicked: false,
    hovered: false
  }),

  methods: {
    submitLabel() {
      const userid = localStorage.getItem('userid')
      if (this.label !== '') {
        const reqData = {
          label: this.label,
          isDeleted: false,
          userId: userid
        }

        createLabelServices(reqData)
          .then((response) => {
            console.log(response)
            this.$emit('add:label')
          })
          .catch((error) => {
            console.log(error)
          })
      }
      this.clicked = false
      this.label = ''
    },

    updateLabel(labelId, labelName) {
      const userid = localStorage.getItem('userid')
      const reqData = {
        label: labelName,
        userId: userid
      }
      console.log(reqData)
      updateLabelServices(reqData, labelId)
        .then((res) => {
          console.log(res)
          this.$emit('update:label')
        })
        .then((error) => {
          console.log(error)
        })
    },

    deleteLabel(labelId) {
      deleteLabelServices(labelId)
        .then((res) => {
          console.log(res)
          this.$emit('delete:label')
        })
        .catch((error) => {
          console.log(error)
        })
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
  <div id="label-container" class="pa-4 text-center">
    <v-dialog v-model="show" max-width="300px">
      <v-card>
        <div class="scrollable-div">
          <div><h5>Edit Labels</h5></div>
          <div class="create-label">
            <div @click="clicked = !clicked">
              <v-icon v-if="clicked == false">mdi-close</v-icon>
              <v-icon v-if="clicked == true">mdi-plus</v-icon>
            </div>

            <div>
              <v-text-field
                class="createlabel-txtfield"
                placeholder="Create new label"
                variant="underlined"
                @click="clicked = false"
                v-model="label"
              >
              </v-text-field>
            </div>

            <div>
              <v-icon v-if="clicked == false" @click="submitLabel()">mdi-check</v-icon>
            </div>
          </div>

          <div
            class="create-label"
            @mouseover="hovered = true"
            @mouseleave="hovered = false"
            v-for="(item, index) in this.items"
            :key="index"
          >
            <div>
              <v-icon v-if="hovered" @click="deleteLabel(item.id)">mdi-delete</v-icon>
              <v-icon v-else>mdi-label</v-icon>
            </div>
            <div>
              <v-text-field class="createlabel-txtfield" variant="plain" v-model="item.label">
              </v-text-field>
            </div>
            <div>
              <v-icon @click="updateLabel(item.id, item.label)">mdi-pencil</v-icon>
              <!-- <v-icon>mdi-pencil</v-icon> -->
            </div>
          </div>
        </div>
        <v-divider></v-divider>
        <div style="display: flex; justify-content: flex-end">
          <div>
            <v-btn class="done-btn" variant="text" @click.stop="show = false" @click="submitLabel()"
              >Done</v-btn
            >
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.scrollable-div {
  max-height: 500px;
  overflow-y: auto;
}

.scrollable-div[data-v-263c9ea7] {
  max-height: 500px;
  overflow-y: auto;
  padding: 20px;
}

.create-label[data-v-263c9ea7] {
  height: 50px;
}

#label-container {
  padding: 10px;
}

.create-label {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}

.createlabel-txtfield {
  margin: 0;
  padding: 0;
}

h5 {
  font-size: larger;
}

.done-btn {
  text-transform: capitalize;
}

.v-text-field {
  width: 180px;
}

.v-icon {
  cursor: pointer;
}
</style>
