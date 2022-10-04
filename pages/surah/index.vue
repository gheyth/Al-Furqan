<template>
  <div>
    <IntroBlog
      title="قائمة السور"
      info="فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ  (98) (النحل)"
    />
    <Surah />
  </div>
</template>

<script>
import Surah from '~/components/blog/Surah.vue';
import IntroBlog from '../../components/blog/intro-blog.vue';
export default {
  components: {
    Surah,
    IntroBlog
},
  head(){
    return {
      title: "قائمة السور"
    }
  }
}
</script>
<style>
  .background{
    background-image: url('~assets/img/koran.jpg');
  }
</style>