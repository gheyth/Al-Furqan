<template>
  <div>
    <Intro title="مَشْرُوعُ الْفُرْقَانِ" aya=""/>
    <section class="main-for-main">
      <Aya aya="ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ  (2) (البقرة)" />
      <Aya aya="إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ وَيُبَشِّرُ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا كَبِيرًا  (9) (الإسراء)" />
      <Features />
    </section>
  </div>
</template>

<script>
import Intro from '../components/home/Intro.vue'
import Aya from '~/components/home/Aya.vue';
import Features from '~/components/home/Features.vue';
export default {
  components: {
    Intro,
    Aya,
    Features
  }
}
</script>