<template>
  <Surah />
</template>

<script>
import Surah from '~/components/blog/Surah.vue';
export default {
  components: { 
    Surah 
  },
  head(){
    return {
      title: "قائمة السور"
    }
  }
}
</script>