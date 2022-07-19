
<template>
    <div id="app-2">
       <h1>{{ content.data.title }}</h1>
       <span>{{ content.data.paragraph }}</span>
    </div>
</template>

<script setup>
var content = {
el: '#app-2',
    data: {
        title: 'titre de test',
        paragraph: 'donnée de test contenu',
        }
        }
</script>


<style scoped>
#app-2 {
  padding-top: 20px;
  text-align: center;
  color:whitesmoke;
}
</style>