<template>
  <section>
    <IntroBlog
      title="قائمة السور"
      info="فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ  (98) (النحل)"
    />
    <div class="container mx-auto my-0 py-11">
      <h1 class="text-center text-basic-02 text-5xl font-black">المحتوى</h1>
      <div class="list-surah mt-6">
        <LinkSurah name="الفاتحة" link="/alfaatiha/" />
      </div>
    </div>
  </section>
</template>

<script>
import IntroBlog from './intro-blog.vue';
import LinkSurah from './LinkSurah.vue';
export default {
    components: { IntroBlog, LinkSurah }
}
</script>

<style scoped>
  .list-surah{
    grid-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 162px);
    justify-content: center;
  }
  .background{
    background-image: url('~assets/img/koran.jpg');
  }
</style>