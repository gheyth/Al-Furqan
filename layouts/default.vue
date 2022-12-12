<template>
  <div>
      <Navbar />
      <main>
        <Nuxt />
      </main>
      <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer,
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  }
}
</script>

<style>
.content{
    width: calc(100% - 96px);
    float: left;
  }
  main{
    background-image: url('~assets/img/section-bg.jpg');
  }
  .layout-enter-active,
  .layout-leave-active {
    transition: opacity 0.5s;
  }

  .layout-enter,
  .layout-leave-active {
    opacity: 0;
  }
</style>