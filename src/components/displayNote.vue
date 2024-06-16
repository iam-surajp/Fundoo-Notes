<script>
import Icon from './Icon.vue'
import updateDialog from './updateDialog.vue'

export default {
  name: 'displayNote',

  props: {
    notes: Array
  },

  data() {
    return {
      hoveredCard: null,
      menuVisibleCard: null
    }
  },

  components: {
    Icon
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
        <v-card-item>
          <div class="title">
            <div margin-right="60px">{{ note.title }}</div>
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

        <v-card-text>
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

.v-card.mx-auto {
  /* box-shadow: 1px 1px 1px gray; */
  border: 1px solid rgb(203, 203, 203);
}

.text-content {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  /* gap: 3px; */
  position: relative;
  right: 300px;
  top: 25px;
}

.txt-card {
  border-radius: 5px;
  padding: 10px;
  /* margin: 5px; */
  width: 270px;
  height: fit-content;
  box-sizing: border-box;
}
</style>
