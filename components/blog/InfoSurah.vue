<template>
  <div class="w-full my-7">
    <div ref="BoxInfoSurah" v-on:click="OpenBox()" class="info-surah transition-all border border-basic-02 bg-white rounded-md cursor-pointer mb-3 px-3 py-3">
      <div class="flex justify-between text-basic-02 pb-3">
        <h1 class="text-lg font-bold text-basic-02">مقدمة عن السورة</h1>
        <div class="text-xl flex items-center justify-center">
          <i ref="down" class="fi fi-br-angle-down w-5 h-5"></i>
          <i ref="up" class="fi fi-br-angle-up hidden"></i>
        </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    OpenBox: function OpenBox(){
      this.$refs.BoxInfoSurah.classList.toggle("h-auto");
      this.$refs.down.classList.toggle("hidden");
      this.$refs.up.classList.toggle("hidden");
    }
  },
  
}
</script>


<style scoped>
  .info-surah{
    overflow:hidden;
    height:51px;
  }
  .h-auto{
    height: auto !important;
  }
  .info-surah h2{
    font-size:18px;
    font-weight: bold;
    margin-top: 12px;
  }
  iframe{
    margin-top: 10px;
    border-radius:6px;
  }
</style>