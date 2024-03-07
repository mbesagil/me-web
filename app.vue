<script setup lang="ts">
const nuxtapp = useNuxtApp();
</script>

<template>
  <NuxtPage />
  <UNotifications />
</template>

<style>
.router-link-active {
  @apply text-gray-500 font-bold;
}
.router-link-active:hover {
  @apply text-green-400 font-medium;
}
</style>
