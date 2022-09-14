<template>
  <section class="all-media calc w-full m-auto relative">
    <video loop muted autoplay class="w-full vd calc">
      <source src="~assets/intro.mp4" type="video/mp4">
    </video>
    <div class="absolute top-0 justify-center items-center flex w-full calc flex-wrap	">
      <div>
        <div>
          <img class="w-56 mt-3 mx-auto" src="~/assets/img/logo-navbar.png">
          <h1 class="text-basic-01 text-6xl mt-7 font-black">{{title}}</h1>
          <p class="text-basic-01 text-2xl mt-3">{{aya}}</p>
          <a class="text-white  text-center inline-block border-2 border-white w-full py-1 mt-5 rounded-xl hover:bg-basic-02 hover:border-basic-01 transition-all" href="#Content">
            اَلذَّهَاب إِلَى اَلْمُحْتَوَى
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    aya:String
  }
}
</script>
<style>
  .all-media{
    overflow: hidden;
  }
  video {
    width: 100vw;
    object-fit: cover;
    position: sticky;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .calc{
    height: calc(100vh - 80px);
  }
  .vd{
        filter: brightness(0.3);
  }
</style>