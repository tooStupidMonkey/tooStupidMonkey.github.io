<template>
    <div v-lang.about v-if="show"></div>
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
