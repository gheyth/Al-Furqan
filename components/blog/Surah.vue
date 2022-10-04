<template>
  <section>
    <div class="container mx-auto my-0 py-11">
      <h1 class="text-center text-basic-02 text-5xl font-black">المحتوى</h1>
      
      <div class="flex justify-end items-center w-4/5 my-0 mx-auto">
        <div class="z-30 cursor-pointer text-xl text-basic-02 flex items-center justify-between">
          <NuxtLink to="/" class=" bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
            <i class="fi fi-rr-angle-double-small-left w-5 h-5"></i>
          </NuxtLink>
        </div>
      </div>
      <div class="list-surah mt-6">
        <LinkSurah name="الفاتحة" link="/alfaatiha/" />
      </div>
    </div>
  </section>
</template>

<script>
import LinkSurah from './LinkSurah.vue';
export default {
    components: { LinkSurah }
}
</script>

<style scoped>
  .list-surah{
    grid-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 162px);
    justify-content: center;
  }
</style>