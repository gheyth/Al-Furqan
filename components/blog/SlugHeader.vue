<template>
  <div class="flex justify-between items-center w-4/5 my-0 mx-auto">
      <div class="flex flex-wrap">
        <div class="h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2">
          <p class="font-black">سورة {{surah}}</p>
        </div>
        <div class="mr-2 h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2">
          <p class="font-black">نزلت في {{revelation}}</p>
        </div>
      </div>
      <div class="z-30 cursor-pointer text-xl text-basic-02 flex items-center justify-between">
        <NuxtLink :to="link"
          class=" bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-angle-double-small-left w-5 h-5"></i>
        </NuxtLink>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    surah: String,
    start: Number,
    end: Number,
    revelation: String,
    link: String
  }
}
</script>