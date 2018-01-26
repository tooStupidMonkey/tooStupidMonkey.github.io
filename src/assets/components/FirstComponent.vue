<template>
  <div>
      <h2>I`m ready to start master</h2>
      <button class="btn btn-primary" v-on:click="show = !show">Click and give me life</button>
      <transition name="fade">
          <p v-if="show"><br>I`m free</p>
      </transition>
  </div>
</template>

<script>

var myMixin = {
    methods: {
        cons: function () {
            alert('hello from mixin')
        }
    }
}

export default {
    mixins: [myMixin],
    data() {
        return {
            show: false
        }
    },
    methods: {
    },

}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

