<script lang="ts" setup>
import { ref } from "vue";

const skillList = ref([
  {
    label: "Node js",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-nodejs-icon",
    class: "cursor-default",
  },

  {
    label: "Python",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-python",
    class: "cursor-default",
  },
  {
    label: "TypeScript",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-typescript-icon",
    class: "cursor-default",
  },
  {
    label: "Mongodb",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-mongodb-icon",
    class: "cursor-default",
  },
  {
    label: "Postgresql",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-postgresql",
    class: "cursor-default",
  },
  {
    label: "Sequelize",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-sequelize",
    class: "cursor-default",
  },
  {
    label: "VueJS",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-vue",
    class: "cursor-default",
  },
  {
    label: "Nuxt",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-nuxt-icon",
    class: "cursor-default",
  },
  {
    label: "React",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-react",
    class: "cursor-default",
  },
  {
    label: "Pinia",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-pinia",
    class: "cursor-default",
  },
  {
    label: "Tailwind",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-tailwindcss-icon",
    class: "cursor-default",
  },
  {
    label: "Bootstrap",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-bootstrap",
    class: "cursor-default",
  },

  {
    label: "Firebase",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-firebase",
    class: "cursor-default",
  },
  {
    label: "ViteJS",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-vitejs",
    class: "cursor-default",
  },
  {
    label: "HTML5",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-html-5",
    class: "cursor-default",
  },
  {
    label: "CSS3",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-css-3",
    class: "cursor-default",
  },
  {
    label: "Git",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-logos-git-icon",
    class: "cursor-default",
  },
  {
    label: "Agile/Scrum",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-heroicons-user-group",
    class: "cursor-default",
  },

  {
    label: "Kanban",
    color: "sky",
    size: "xs",
    square: true,
    variant: "soft",
    icon: "i-ph-kanban-duotone",
    class: "cursor-default",
  },
]);
</script>

<template>
  <div>
    <h1 class="text-xl font-bold">{{ $t("techAndTools") }}</h1>
    <div class="mt-2 flex gap-2 flex-wrap print:hidden">
      <template v-for="(skill, index) in skillList" :index>
        <UButton
          :label="skill.label"
          :color="skill.color"
          :size="skill.size"
          :square="skill.square"
          :variant="skill.variant"
          :icon="skill.icon"
          :class="skill.class"
        />
      </template>
    </div>
    <div class="mt-2 hidden print:flex gap-2 flex-wrap">
      <template v-for="(skill, index) in skillList" :index>
        <p>{{ skill.label }}</p>
      </template>
    </div>
  </div>
</template>
