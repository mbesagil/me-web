<script lang="ts">
export default {
  name: "base",
  data() {
    return {
      showMenu: false,
      navbarMenuData: [
        {
          key: "home",
          to: "/",
        },
        {
          key: "medium",
          to: "/medium",
        },
        {
          key: "live_projects",
          to: "/live-projects",
        },
        {
          key: "portfolio",
          to: "/portfolio",
        },
      ],
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
          <template v-for="item in navbarMenuData" :key="item.key">
            <li class="nav-item">
              <NuxtLink
                :to="item.to"
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
              >
                <span class="">{{ $t(`navbar.${item.key}`) }}</span>
              </NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>

  <div class="font-kanit print:text-black">
    <div class="container mx-auto">
      <div class="mx-2 md:mx-10 overflow-hidden">
        <slot />
      </div>
    </div>
  </div>

  <div
    class="fixed bottom-4 md:bottom-8 print:hidden mx-auto left-0 right-0 flex w-full px-6 md:px-5 justify-end"
  >
    <div class="">
      <div class="mb-2">
        <ThemeToggle></ThemeToggle>
      </div>
      <LanguageButton></LanguageButton>
    </div>
  </div>
</template>
