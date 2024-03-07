<script setup lang="ts">
definePageMeta({
  layout: "base",
});
</script>

<template>
  <NuxtLayout>
    <div
      class="min-h-screen bg-slate-900 font-kanit text-white print:text-black"
    >
      <div class="container mx-auto max-w-3xl p-6 pb-16 md:p-10 md:pb-32">
        <PortfolioHeader />
        <PortfolioMain /> <PortfolioFooter />
      </div>
    </div>
  </NuxtLayout>
</template>
