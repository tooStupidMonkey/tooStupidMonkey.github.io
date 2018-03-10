<template>
  <div v-if="show">
    <h2>Contact page</h2>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul class="text-left list list-group" >
            <li class="list-group-item"><i class="fab fa-google"></i> toostupidmonkey@gmail.com</li>
            <li class="list-group-item"><i class="fab fa-skype"></i> Yariks6000</li>
            <li class="list-group-item"><i class="fab fa-linkedin-in"></i>
            <a target="_blank"  href="//www.linkedin.com/in/yaroslav-movhan-b4977214b">LinkedIn</a>
</li>
          </ul>
        </div>
      </div>
    </div>
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

