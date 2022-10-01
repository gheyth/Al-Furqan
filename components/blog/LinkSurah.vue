<template>
  <NuxtLink class="border border-r-8 rounded-md bg-white border-basic-02 text-basic-02 text-xl px-4 py-2 inline-block" :to="'/surah' + link">{{name}}</NuxtLink>
</template>

<script>
export default {
  props:{
    name: String,
    link: String,
  }
}
</script>