<template>
  <div class="page">
      <Navbar />
      <main>
        <Nuxt />
      </main>
      <Footer />
      <div id="loading">
        <img src="../assets/img/logogheyth.png">
      </div>
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
  },
  mounted() {
    function onReady(callback) {
      var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalId);
          callback.call(this);
        }
      }, 1000);
    }

    function setVisible(selector, visible) {
      document.querySelector(selector).style.display = visible ? 'block' : 'none';
    }

    onReady(function () {
      setVisible('.page', true);
      setVisible('#loading', false);
    });
  },
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

  #loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: #94682A;
  }
  #loading img {
    width:200px;
  }
  @media ( max-width: 400px){
    #loading img {
      width: 30%;
    }
  }
</style>