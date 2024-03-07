<script lang="ts">
export default {
  name: "base",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-100 dark:bg-slate-900 mb-3 print:hidden"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
        >
          mbesagil
        </a>
        <div class="flex">
          <button
            class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            v-on:click="toggleNavbar()"
          >
            <TechIcon name="i-material-symbols:menu" />
          </button>
        </div>
      </div>
      <div
        :class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <NuxtLink
              to="/home"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
            >
              <span class="ml-2">Home</span>
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink
              to="/medium"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
            >
              <span class="ml-2">Medium</span>
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink
              to="/portfolio"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
            >
              <span class="ml-2">Portfolio</span>
            </NuxtLink>
          </li>

          <li class="nav-item">
            <div
              class="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
            >
              <span class="ml-2">
                <ThemeToggle></ThemeToggle>
              </span>
            </div>
          </li>

          <li class="nav-item flex items-center">
            <div
              class="flex items-center uppercase font-bold leading-snug hover:opacity-75"
            >
              <span class="px-3 ml-2 py-3 lg:py-0">
                <LanguageButton></LanguageButton>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="min-h-screen font-kanit print:text-black">
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>
