<template>
  <div class="flex justify-between items-center sm:items-start">
    <div class="flex flex-col justify-center gap-2">
      <h1 class="text-3xl">Mesut Beşağıl</h1>

      <h1 class="text-xl">{{ $t("title") }}</h1>

      <h1>
        <a
          class="hover:underline hover:text-blue-600"
          href="https://medium.com/@mbesagil"
          target="_blank"
          >Medium Account</a
        >
      </h1>
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
</template>
