<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ContentHome from './components/ContentHome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <div class="home">
    <ContentHome msg2="ok test" />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.home {
  display: block;
  margin: 0 auto 2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


</style>
