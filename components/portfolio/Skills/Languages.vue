<script lang="ts" setup></script>

<template>
  <div>
    <h1 class="text-xl font-bold">{{ $t("languages.title") }}</h1>
    <div class="mt-2 flex gap-2 flex-wrap print:hidden">
      <UButton
        :label="$t('languages.EN')"
        color="sky"
        size="xs"
        square
        variant="soft"
        icon="i-noto-v1-flag-for-flag-united-states"
        class="cursor-default"
      />
      <UButton
        :label="$t('languages.TR')"
        color="sky"
        size="xs"
        square
        variant="soft"
        icon="i-twemoji-flag-for-flag-turkey"
        class="cursor-default"
      />
    </div>
    <div class="mt-2 hidden print:flex gap-2 flex-wrap">
      <p>{{ $t("languages.EN") }}</p>
      <p>{{ $t("languages.TR") }}</p>
    </div>
  </div>
</template>
