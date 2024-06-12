<script>
export default {
  name: 'createNote',
  data: () => ({
    clicked: false
  })
}
</script>

<template>
  <div class="center-content">
    <div>
      <v-card class="create-card" width="600px">
        <v-text-field
          class="create-txtfield"
          placeholder="Title"
          variant="plain"
          v-if="clicked"
          v-slot:append-inner
        >
          <v-btn variant="text"><v-icon>mdi-pin-outline</v-icon></v-btn>
        </v-text-field>
        <v-text-field
          class="create-txtfield"
          placeholder="Take a note..."
          :placeholder="'Take a note...'"
          @click="clicked = true"
          variant="plain"
          v-show="true"
          v-slot:append-inner
        >
          <template v-if="!clicked" v-show="true">
            <v-btn variant="text"><v-icon>mdi-clipboard-check-outline</v-icon></v-btn>
            <v-btn variant="text"><v-icon>mdi-brush</v-icon></v-btn>
            <v-btn variant="text"><v-icon>mdi-image-outline</v-icon></v-btn>
          </template> </v-text-field
        ><br />
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
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.center-content {
  position: relative;
  width: 100vh;
  right: 250px;
  bottom: 90px;
  height: 35px;
}

.v-card.create-card {
  box-shadow: 0px 1px 4px 1px gray;
  padding-left: 15px;
}

.v-btn.close-btn {
  text-transform: capitalize;
}

.v-btn.btn {
  background-color: transparent;
}

.create-txtfield {
  height: 35px;
}
</style>
