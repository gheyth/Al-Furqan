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
</style>