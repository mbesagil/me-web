<script lang="ts" setup>
const { locale, messages } = useI18n();
const languages = Object.keys(messages.value);
</script>

<template>
  <div
    class="fixed bottom-4 md:bottom-8 print:hidden mx-auto left-0 right-0 flex w-full max-w-3xl px-6 md:px-10"
  >
    <LanguageButton></LanguageButton>
  </div>
</template>
