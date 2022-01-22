<template>
  <div class="vuite-sample">
    <p>The counter was {{ changedBy }} to <b>{{ counter }}</b>.</p>
    <button @click="increment">
      Click +1
    </button>
    <button @click="decrement">
      Click -1
    </button>
    <button @click="increment(5)">
      Click +5
    </button>
    <button @click="decrement(5)">
      Click -5
    </button>
    <button @click="reset">
      Reset
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import type { Ref, UnwrapRef } from 'vue'

  interface Message {
    action: string | null
    amount: number | null
  }

  interface SampleData {
    counter: number
    initCounter: number
    message: Message
  }

export default /* #__PURE__ */defineComponent({
  name: 'Sample',
  setup() {
    const counter = ref(5)
    const initCounter = ref(5)
    const message: Ref<UnwrapRef<Message>> = ref({
      action: null,
      amount: null
    })

    const changedBy = computed(() => {
      if (!message.value.action) return 'initialized'
      return `${message.value.action} ${message.value.amount || ''}`.trim()
    })

    const increment = function(arg: Event | number): void {
      const amount = (typeof arg !== 'number') ? 1 : arg
      counter.value += amount
      message.value.action = 'incremented by'
      message.value.amount = amount
    }

    const decrement = function(arg: Event | number): void {
      const amount = (typeof arg !== 'number') ? 1 : arg
      counter.value -= amount
      message.value.action = 'decremented by'
      message.value.amount = amount
    }
    const reset = function(): void {
      counter.value = initCounter.value
      message.value.action = 'reset'
      message.value.amount = null
    }

    return {
      counter,
      initCounter,
      message,
      changedBy,
      increment,
      decrement,
      reset
    }
  }
})
</script>

<style lang="scss" scoped>
  .vuite-sample {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .vuite-sample p {
    margin: 0 0 1em;
  }
</style>
