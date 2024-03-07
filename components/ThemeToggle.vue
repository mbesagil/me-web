<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="flex justify-center items-center">
    <button @click="toggleDark()" class="flex justify-center items-center">
    <TechIcon v-if="!isDark" name="i-heroicons-solid:sun"></TechIcon>
    <TechIcon v-if="isDark" name="i-material-symbols:dark-mode-rounded"></TechIcon>
  </button>
  </div>
</template>