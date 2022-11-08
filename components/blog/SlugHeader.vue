<template>
  <section>
    <div class="flex justify-between items-center w-4/5 my-0 mx-auto">
      <div class="flex flex-wrap">
        <div class="h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2">
          <p class="font-black">{{surah}}</p>
        </div>
        <div class="mr-2 h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2">
          <p class="font-black">{{revelation}}</p>
        </div>
      </div>
      <div class="z-30 cursor-pointer text-xl text-basic-02 flex items-center justify-between">
        <div class="print ml-2 bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-print w-5 h-5"></i>
        </div>
        <NuxtLink :to="link" class=" bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-rr-angle-double-small-left w-5 h-5"></i>
        </NuxtLink>
      </div>
    </div>

    <div class="mt-2 flex justify-between items-center w-4/5 my-0 mx-auto">
      <div class="flex flex-wrap">
        <div class="h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2">
          <p class="font-black">آياتها {{ayat}}</p>
        </div>
        <div class="mr-2 h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2 sm:hidden">
          <p class="font-black">مجموعة {{group}}</p>
        </div>
      </div>
      <div class="z-30 text-xl text-basic-02 flex items-center justify-between">
        <div class="mr-2 h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2">
          <p class="start font-black">من {{start}}</p>
        </div>
        <div class="mr-2 h-8 text-base text-basic-02 bg-white flex items-center justify-center rounded-lg border border-basic-02 px-2">
          <p class="end font-black">الى {{end}}</p>
        </div>
      </div>
    </div>
    <div class="w-4/5 my-0 mx-auto border border-basic-02 rounded-lg mt-2 px-3 py-2 text-basic-02 font-semibold bg-white">
      <p>{{destination}}</p>
      <hr class="border-basic-02 mt-2">
      <a target="_blank" class="text-sky-600 mt-2 inline-block" href="https://e-quran.com/index.html">المصحف الإلكتروني</a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    surah: String,
    ayat: Number,
    start: Number,
    end: Number,
    revelation: String,
    link: String,
    destination: String,
    group: Number
  }
}
</script>