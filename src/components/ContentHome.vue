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
  <div class="content-home">
    <button @click="todoId++">Récuperer Prix</button><br>
    <input type="text" class="symbol" placeholder="BTCUSDT" v-model="tickerId">
    <p v-if="!todoData"></p>
    <div v-else>
      <h1>{{ Math.trunc(todoData.price) }} $</h1>
    </div>
  </div>
</template>

<style lang="scss">
.content-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  border-radius: 5px;
  padding: 5px;
}

.symbol {
  margin-top: 5px;
  text-transform: uppercase;
}
</style>