<script lang="ts" setup>
const { locale, messages } = useI18n();
const languages = Object.keys(messages.value);
</script>

<template>
  <UPopover class="ml-auto" :popper="{ placement: 'top-end' }">
    <UButton
      color="sky"
      size="sm"
      square
      variant="outline"
      icon="i-heroicons-globe-alt"
      class="bg-slate-100 dark:bg-slate-900"
    />

    <template #panel="{ close }">
      <div class="p-5 grid grid-cols-2 gap-x-2">
        <template v-for="lang in languages" :key="lang">
          <p
            class="cursor-pointer hover:text-sky-500 py-1"
            :class="
              locale === lang ? ' text-sky-500 font-bold' : ' text-gray-500'
            "
            @click="
              () => {
                locale = lang;
                close();
              }
            "
          >
            {{ $t(`languages.${lang}`) }}
          </p>
        </template>
      </div>
    </template>
  </UPopover>
</template>
