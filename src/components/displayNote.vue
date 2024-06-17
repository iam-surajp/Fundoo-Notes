<script>
import Icon from './Icon.vue'
import UpdateDialog from './updateDialog.vue'
import updateDialog from './updateDialog.vue'

export default {
  name: 'displayNote',

  props: {
    notes: Array
  },

  data() {
    return {
      hoveredCard: null,
      menuVisibleCard: null,
      showDialog: false
    }
  },

  components: {
    Icon,
    updateDialog
  },

  methods: {
    handleMenuStateChanged(noteId, isVisible) {
      this.menuVisibleCard = isVisible ? noteId : null
    },

    handleClickOutside(event) {
      if (this.menuVisibleCard !== null) {
        this.menuVisibleCard = null
        this.hoveredCard = null
      }
    }
  },

  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<template>
  <div class="text-content">
    <div
      class="txt-card"
      v-for="note in notes"
      :key="note.id"
      @mouseover="hoveredCard = note.id"
      @mouseleave="hoveredCard = null"
    >
      <v-card class="mx-auto" max-width="344" hover>
        <v-card-item @click.stop="showDialog = true">
          <div class="title">
            <v-card-text>{{ note.title }}</v-card-text>
            <div min-height="30px">
              <v-btn
                v-if="hoveredCard === note.id || menuVisibleCard === note.id"
                size="30px"
                variant="text"
                ><v-icon>mdi-pin-outline</v-icon></v-btn
              >
            </div>
          </div>
        </v-card-item>
        <updateDialog :visible="showDialog" @close="showDialog = false" />

        <v-card-text @click.stop="showDialog = true">
          {{ note.description }}
        </v-card-text>
        <div class="icons">
          <div v-if="hoveredCard === note.id || menuVisibleCard === note.id">
            <Icon @menuStateChanged="handleMenuStateChanged(note.id, $event)" :id="note.id" />
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style>
.icons {
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  min-height: 40px;
}

.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.v-card-item {
  padding: 0 !important;
  margin: 0 !important;
}

.v-card.mx-auto {
  border: 1px solid rgb(203, 203, 203);
}

.text-content {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  position: relative;
  right: 300px;
  top: 25px;
}

.txt-card {
  border-radius: 5px;
  padding: 10px;
  width: 270px;
  height: fit-content;
  box-sizing: border-box;
}
</style>
