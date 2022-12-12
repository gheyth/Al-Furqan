<template>
  <section class="h-screen">
    <div class="px-5 max-w-4xl py-9 my-0 mx-auto">
      <ul>
        <li v-for="v in info" :key="v" class="bg-white border border-basic-02 border-r-4 rounded-md">
          <NuxtLink :to="{ name: 'oldversion-slug', params: { slug: v.slug } }" class="p-2 inline-block w-full">
            <h1 class="text-basic-02 font-bold">{{ v.surah }}</h1>
            <p class="text-basic-02 text-sm">{{v.info}}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const info = await $content("oldversion")
      .fetch();
    return {
      info
    };
  },
}
</script>