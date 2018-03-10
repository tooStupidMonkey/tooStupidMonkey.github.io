<template>
  <div v-if="show">
      <h2 class="text-left">About site</h2>

      <p class="text-left">
        This is Spa web application based on Github page. I have used boostarap and Vue.js for create it.
      </p>
      <p class="text-left">
        In this work used such Vue plugins like vue-router for create Spa and vue-multilanguage for create multi language application
      </p>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      show: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 700);
  }
};
</script>
