<template>
  <div>
    <div class="container mx-auto my-0">
      <div class="list-surah">
        <!-- add new surah -->
        <LinkSurah name="الفاتحة" link="/alfaatiha/" />
        <LinkSurah name="البقرة" link="/albaqarah/" />
      </div>
    </div>
  </div>
</template>

<script>
import LinkSurah from './blog/LinkSurah.vue';
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