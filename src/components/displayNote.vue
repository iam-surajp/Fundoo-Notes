<script>
import Icon from './Icon.vue'
import updateDialog from './updateDialog.vue'

export default {
  name: 'displayNote',

  props: {
    totalnotes: Array
  },

  data() {
    return {
      hoveredCard: null,
      menuVisibleCard: null,
      showDialog: false,
      d_note: {}
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

    handleClickOutside() {
      if (this.menuVisibleCard !== null) {
        this.menuVisibleCard = null
        this.hoveredCard = null
      }
    },

    handleNoteChangeAlert() {
      this.$emit('update:notes')
    },

    handleNoteUpdated() {
      this.$emit('update:notes')
    },

    openDialog(note) {
      this.d_note = {
        id: note.id,
        title: note.title,
        description: note.description,
        color: note.color
      }
      console.log('d_note is---', this.d_note)
      this.showDialog = true
    },

    handleColorChanged({ id, color }) {
      const note = this.totalnotes.find((note) => note.id === id)
      if (note) {
        note.color = color
        this.$emit('update:notes')
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
      v-for="note in totalnotes"
      :key="note.id"
      @mouseover="hoveredCard = note.id"
      @mouseleave="hoveredCard = null"
    >
      <v-card
        class="mx-auto"
        max-width="344"
        hover
        :style="{ backgroundColor: note.color || '#FFFFFF' }"
      >
        <v-card-item>
          <div class="title" display="flex">
            <div class="note-title" @click.stop="openDialog(note)">
              <v-card-text>
                <pre><b>{{ note.title }}</b></pre>
              </v-card-text>
            </div>
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
        <v-card-text @click.stop="openDialog(note)">
          <pre>{{ note.description }}</pre>
        </v-card-text>
        <v-card-text>
          <div class="labeltitle">abcd</div>
        </v-card-text>

        <div class="icons">
          <div v-if="hoveredCard === note.id || menuVisibleCard === note.id">
            <Icon
              @menuStateChanged="handleMenuStateChanged(note.id, $event)"
              :id="note.id"
              @changeAlert="handleNoteChangeAlert"
              @colorChanged="handleColorChanged"
            />
          </div>
        </div>
      </v-card>
    </div>
  </div>
  <updateDialog
    :visible="showDialog"
    :note="d_note"
    @close="showDialog = false"
    @noteUpdated="handleNoteUpdated"
  />
</template>

<style scoped>
.labeltitle {
  background-color: rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding: 2px 5px 2px 5px;
  border-radius: 20px;
  font-size: smaller;
}

code,
kbd,
pre,
samp {
  font-family: Georgia, 'Times New Roman', Times, serif !important;
  white-space: pre-wrap;
  word-wrap: break-word;
}

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

.note-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  max-height: calc(1.76em * 3);
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
