<template>
  <div>
      <h2>I`m ready to start master</h2>
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
    methods: {

    },

}
</script>
