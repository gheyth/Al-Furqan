<template>
  <div class="boxen select-none bg-white border rounded-lg p-4 border-b-8 border-basic-02">
    <i class="fi fi-br-copy mb-2 text-basic-02 cursor-pointer p-2 rounded-full hover:text-basic-01"></i>
    <div class="mt-2 ltr">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .boxen p{
    direction: ltr;
    margin-bottom: 10px;
  }
</style>