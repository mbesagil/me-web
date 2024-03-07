<script setup lang="ts">
definePageMeta({
  layout: "base",
});

const router = useRouter();
</script>

<template>
  <NuxtLayout>
    <div class="dark:bg-slate-900 bg-slate-100 p-10 rounded-lg mb-4">
      <PortfolioDetailsMain />
      <div class="flex justify-end">
        <UButton @click="router.push('/portfolio')">Go Portfolio</UButton>
      </div>
    </div>
    <div class="dark:bg-slate-900 bg-slate-100 p-10 rounded-lg mb-4">
      Medium Account
      <div class="flex justify-end">
        <UButton @click="router.push('/medium')">Go Medium</UButton>
      </div>
    </div>
  </NuxtLayout>
</template>
