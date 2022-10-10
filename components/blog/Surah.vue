<template>
  <div>
    <div class="container mx-auto my-0">
      <div class="list-surah">
        <LinkSurah name="الفاتحة" link="/alfaatiha/" />
      </div>
    </div>
  </div>
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