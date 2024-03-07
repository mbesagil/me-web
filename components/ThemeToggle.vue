<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();

const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex justify-center items-center">
    <UButton
      @click="toggleDark()"
      color="sky"
      size="sm"
      square
      variant="outline"
      :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
      class="bg-slate-100 dark:bg-slate-900"
    />

  </div>
</template>
