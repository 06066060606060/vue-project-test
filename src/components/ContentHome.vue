<script setup>
defineProps({
  msg2: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="thehome">
       <h1>{{ msg2 }}</h1>
    </div>
</template>

<style scoped>
.thehome h1 {
  text-align: center;
  color:whitesmoke;
}
</style>