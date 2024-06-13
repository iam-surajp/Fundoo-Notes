<script>
export default {
  name: 'displayNote'
}
</script>

<template>
  <div class="text-content">
    <div class="txt-card" v-for="i in 7" :key="i">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto exercitationem reiciendis
        asperna
      </p>
    </div>
  </div>
</template>

<style>
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
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 250px;
  box-sizing: border-box;
}
</style>
