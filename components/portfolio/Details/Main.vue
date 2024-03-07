<script lang="ts" setup></script>

<template>
  <div class="flex justify-between items-center sm:items-start">
    <div class="flex flex-col justify-center gap-2">
      <h1 class="text-3xl">Mesut Beşağıl</h1>

      <h1 class="text-xl">{{ $t("title") }}</h1>

      <p class="hidden sm:block text-sm print:max-w-full me-5">
        {{ $t("description") }}
      </p>
      <PortfolioDetailsSocials />
    </div>
    <img
      src="/img/me.png"
      alt="Mesut Beşağıl"
      width="150"
      class="hidden sm:block print:block"
    />
    <img
      src="/img/me.png"
      alt="Mesut Beşağıl"
      width="120"
      class="sm:hidden print:hidden"
    />
  </div>
  <p class="sm:hidden text-sm">{{ $t("description") }}</p>
</template>
