<template>
    <div class="language-switcher">
        <a :class="{active_language: language == 'en'}" class="align-middle" href="#" @click.prevent="switchLangEn">en</a>
        <a :class="{active_language: language == 'ru'}" class="align-middle" href="#" @click.prevent="switchLangRu">ru</a>
    </div>
</template>

<script>
export default {
  methods: {
    switchLangRu() {
      this.language = "ru";
    },
    switchLangEn() {
      this.language = "en";
    }
  }
};
</script>
<style>
.language-switcher {
  margin-left: auto;
  line-height: 32px;
}
.active_language {
  border: 1px solid #42b983;
  padding: 5px;
  text-align: center;
  vertical-align: middle;
  border-radius: 4px;
}
</style>

