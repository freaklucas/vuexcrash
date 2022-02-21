<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Counter</p>
        <p class="fst-italic">
          "O caminho mais certo de vencer é tentar mais uma vez. O entusiasmo é
          a maior força da alma. Conserva-o e nunca te faltará poder para
          conseguires o que desejas. ... Quem quiser vencer na vida deve fazer
          como os seus sábios: mesmo com a alma partida, ter um sorriso nos
          lábios".
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{ count }}</p>
            <button @click="clickIncrement" class="btn btn-success m-1">
              Increment
            </button>
            <button @click="clickDecrement" class="btn btn-warning m-1">
              Decrement
            </button>
            <button @click="clickIncrementBy(5)" class="btn btn-danger m-1">
              Increment by
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuexCounter",
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    clickIncrement() {
      this.count = this.count + 1;
    },
    clickDecrement() {
      this.count = this.count - 1;
    },
    clickIncrementBy(value) {
      this.count = this.count + value;
    },
  },
};
</script>

<style>
</style>