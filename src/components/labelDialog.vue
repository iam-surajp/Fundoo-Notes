<script>
import { createLabelServices } from '@/services/noteLabelServices'

export default {
  name: 'labelDialog',
  props: { visible: Boolean },

  data: () => ({
    dialog: false,
    label: null,
    clicked: false,
    hovered: false,
    items: null
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
            this.items = response.data
            console.log('items are', this.items)
          })
          .catch((error) => {
            console.log(error)
          })
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
  <div id="label-container" class="pa-4 text-center">
    <v-dialog v-model="show" max-width="300px">
      <v-card style="padding: 20px">
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
              <v-icon v-if="clicked == false">mdi-check</v-icon>
            </div>
          </div>

          <div
            class="create-label"
            @mouseover="hovered = true"
            @mouseleave="hovered = false"
            v-for="(item, index) in items"
            :key="index"
          >
            <div>
              <v-icon v-if="hovered">mdi-delete</v-icon>
              <v-icon v-else>mdi-label</v-icon>
            </div>
            <div>
              <v-text-field
                class="createlabel-txtfield"
                placeholder="Label1"
                variant="plain"
                model-value="{{item.label}}"
              >
              </v-text-field>
            </div>
            <div>
              <v-icon>mdi-pencil</v-icon>
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
