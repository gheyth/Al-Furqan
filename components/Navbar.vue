<template>
  <header class="bg-white z-50 w-full m-auto sticky top-0">
    <div class="h-20 px-8 border-b-2 border-basic-02 flex justify-between items-center">
      <div class="">
        <img class="w-14 border-none" src="../assets/img/logo-navbar.png">
      </div>
      <div @click="OpenAndCloseMenu" class="w-6 h-6 cursor-pointer">
        <i class="fi fi-br-grid text-2xl text-basic-02 w-6 h-6"></i>
      </div>
    </div>
    <div ref="menu" class="p-3 w-72 z-10 absolute left-7 top-16 border-2 border-basic-02 bg-white rounded-lg flex justify-between flex-wrap items-center opacity-0 pointer-events-none">
      
      <a target="_blank" href="https://gheyth.github.io/" class="flex justify-center items-center w-20 h-20 text-basic-02 transition-all p-1 hover:border hover:border-basic-02 hover:rounded-md">
        <div>
          <div class="flex justify-center items-center">
            <img class="w-6" src="~/assets/img/icon.png">
          </div>
        </div>
      </a>

      <NuxtLink @click.native="OpenAndCloseMenu" to="/" class="flex justify-center items-center w-20 h-20 text-basic-02 transition-all p-1 hover:border hover:border-basic-02 hover:rounded-md">
        <div>
          <div class="flex justify-center items-center">
            <i class="text-center w-6 h-6 text-2xl fi fi-sr-home"></i>
          </div>
          <p class="text-center text-sm mt-1">الرئيسية</p>
        </div>
      </NuxtLink>
      
      <NuxtLink @click.native="OpenAndCloseMenu" to="/quran/" class="flex justify-center items-center w-20 h-20 text-basic-02 transition-all p-1 hover:border hover:border-basic-02 hover:rounded-md">
        <div>
          <div class="flex justify-center items-center">
            <i class="text-center w-6 h-6 text-2xl fi fi-sr-book"></i>
          </div>
          <p class="text-center text-sm mt-1">حول القرآن</p>
        </div>
      </NuxtLink>

      <NuxtLink @click.native="OpenAndCloseMenu" to="/surah/" class="mt-1 mb-1 flex justify-center items-center w-20 h-20 text-basic-02 transition-all p-1 hover:border hover:border-basic-02 hover:rounded-md">
        <div>
          <div class="flex justify-center items-center">
            <i class="text-center w-6 h-6 text-2xl fi fi-ss-e-learning"></i>
          </div>
          <p class="text-center text-sm mt-1">قائمة السور</p>
        </div>
      </NuxtLink>
      
      <NuxtLink @click.native="OpenAndCloseMenu" to="/save/" class="mt-1 mb-1 flex justify-center items-center w-20 h-20 text-basic-02 transition-all p-1 hover:border hover:border-basic-02 hover:rounded-md">
        <div>
          <div class="flex justify-center items-center">
            <i class="text-center w-6 h-6 text-2xl fi fi-sr-comment-heart"></i>
          </div>
          <p class="text-center text-sm mt-1">المفضلة</p>
        </div>
      </NuxtLink>

      <NuxtLink @click.native="OpenAndCloseMenu" to="/docs/" class="mt-1 mb-1 flex justify-center items-center w-20 h-20 text-basic-02 transition-all p-1 hover:border hover:border-basic-02 hover:rounded-md">
        <div>
          <div class="flex justify-center items-center">
            <i class="text-center w-6 h-6 text-2xl fi fi-sr-comments-question"></i>
          </div>
          <p class="text-center text-sm mt-1">المستندات</p>
        </div>
      </NuxtLink>

      <NuxtLink @click.native="OpenAndCloseMenu" to="/about/" class="flex justify-center items-center w-20 h-20 text-basic-02 transition-all p-1 hover:border hover:border-basic-02 hover:rounded-md">
        <div>
          <div class="flex justify-center items-center">
            <i class="text-center w-6 h-6 text-2xl fi fi-sr-info"></i>
          </div>
          <p class="text-center text-sm mt-1">عن الفرقان</p>
        </div>
      </NuxtLink>

      <a target="_blank" href="https://github.com/gheyth/al-furqan"
        class="flex justify-center items-center w-20 h-20 text-basic-02 transition-all p-1 hover:border hover:border-basic-02 hover:rounded-md">
        <div>
          <div class="flex justify-center items-center">
            <i class="text-center w-6 h-6 text-2xl fi fi-brands-github"></i>
          </div>
          <p class="text-center text-sm mt-1">للمطورين</p>
        </div>
      </a>

      <a target="_blank" href="https://twitter.com/_frs99" class="flex justify-center items-center w-20 h-20 text-basic-02 transition-all p-1 hover:border hover:border-basic-02 hover:rounded-md">
        <div>
          <div class="flex justify-center items-center">
            <i class="text-center w-6 h-6 text-2xl fi fi-brands-twitter"></i>
          </div>
          <p class="text-center text-sm mt-1">تابع و إتصل</p>
        </div>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    OpenAndCloseMenu(){
      let menu = this.$refs.menu
      menu.classList.toggle("opacity-0")
      menu.classList.toggle("pointer-events-none")
    },
  },
}
</script>

<style scoped>
  a.nuxt-link-exact-active {
    border: 1px solid #94682A;
    border-radius: 0.375rem;
  }
</style>