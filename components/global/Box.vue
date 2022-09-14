<template>
  <div class="box bg-white border rounded-lg p-4 border-r-8 border-basic-02">
    <i class="fi fi-br-copy mb-2 text-basic-02 cursor-pointer p-2 rounded-full hover:text-basic-01"></i>
    <div class="mt-2">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
  .box h2{
    margin-bottom: 8px;
  }
</style>