<template>
  <div>
    <Intro title="مَشْرُوعُ الْفُرْقَانِ" aya=""/>
    <section class="main-for-main">
      <Aya01 aya="ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ  (2) (البقرة)" />
      <Aya01 aya="إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ وَيُبَشِّرُ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا كَبِيرًا  (9) (الإسراء)" />
      <Aya01 aya="فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ  (98) (النحل)" />
    </section>
    
  </div>
</template>

<script>
import Intro from '../components/home/Intro.vue'
import Aya01 from '~/components/home/Aya01.vue';

export default {
  components: {
    Intro,
    Aya01,
    Aya01
  }
}
</script>

<style scoped>
  /* .main-for-main{
    background-image: url('~assets/img/section-bg.jpg');
  } */
</style>