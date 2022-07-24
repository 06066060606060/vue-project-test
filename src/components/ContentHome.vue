<script>
export default {
  data() {
    return {
      todoId: 1,
      tickerId: 'BTCUSDT',
      todoData: null
    }
  },
  methods: {
    async fetchData() {
      this.todoData = null
      const res = await fetch(
        `https://api.binance.com/api/v3/ticker/price?symbol=${this.tickerId}`
      )
      this.todoData = await res.json()
    }
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    todoId() {
      this.fetchData()
    }
  }
}
</script>

<template>
  <button @click="todoId++">Récuperer Prix</button><br>
  <input type="text" class="symbol" placeholder="BTCUSDT" v-model="tickerId">
  <p v-if="!todoData">Loading...</p>
  <div v-else>
  <h1>{{ todoData.symbol }}</h1>
  <p class="price">{{  Math.trunc(todoData.price) }} $</p>
  </div>

</template>

<style lang="scss">
button{
  border-radius: 8px;
  padding: 5px;
}

.price{
  font-size: 1em;
  font-weight: bold;
}
.symbol {
  margin-top: 5px;
  text-transform: uppercase;
}
</style>