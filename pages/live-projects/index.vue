<script setup lang="ts">
definePageMeta({
  layout: "base",
});

const projectData = [
  {
    name: "Flow Builder",
    link : "https://flow-builder-rust.vercel.app/",
    description:
      "This project allows you to add nodes by dragging and dropping them from tabs in the left sidebar onto the draggable workspace. A right sidebar is available where you can adjust the properties of nodes by clicking on them in the workspace. You can create connections between nodes and modify them.",
  },

  {
    name: "Form Builder",
    link : "https://form-builder-psi-lemon.vercel.app/",
    description:
      "This form builder allows you to create forms by dragging and dropping HTML elements, configuring their settings, and testing them in a live view.",
  },
];

const router = useRouter();
</script>

<template>
  <NuxtLayout>
    <div class="dark:bg-slate-900 bg-slate-100 p-10 rounded-lg overflow-y-auto">
      <template v-for="item in projectData" :key="item.url">
        <div class="border-b border-gray-200 dark:border-gray-800 pb-6">
          <h1 class="text-xl -mt-1 ps-2 leading-none">
              <a
                :href="item.link"
                target="_blank"
                class="hover:underline hover:text-blue-600"
                >{{ item.name }}</a
              >
            </h1>

          <p class="text-sm">{{ item.description }}</p>

          <iframe
            :src="item.link"
            class="w-full"
            style="height: 30rem"
            frameborder="0"
          ></iframe>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>
