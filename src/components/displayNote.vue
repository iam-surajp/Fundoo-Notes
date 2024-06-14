<script>
import Icon from './Icon.vue'

export default {
  name: 'displayNote',

  props: {
    notes: Array
  },

  data() {
    return {
      hoveredCard: null
    }
  },

  components: {
    Icon
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
              <v-btn v-if="hoveredCard === note.id" size="30px" variant="text"
                ><v-icon>mdi-pin-outline</v-icon></v-btn
              >
            </div>
          </div>
        </v-card-item>

        <v-card-text>
          {{ note.description }}
        </v-card-text>
        <div class="icons">
          <div v-if="hoveredCard === note.id"><Icon /></div>
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
  box-shadow: 1px 1px 1px gray;
}

.text-content {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  gap: 5px;
  position: relative;
  right: 300px;
  top: 25px;
}

.txt-card {
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 265px;
  height: fit-content;
  box-sizing: border-box;
}
</style>
