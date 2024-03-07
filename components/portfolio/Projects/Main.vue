<script lang="ts" setup>
const projects = [
  {
    title: "Generic Menu App",
    link: "https://github.com/mbesagil/eat-menu-app/",
    description: "projectsList.GenericMenuApp.description",
    logo: "",
    techStack: {
      Vite: "i-logos-vitejs",
      Vue: "i-logos-vue",
      Bootstrap: "i-logos-bootstrap",
      Axios: "i-logos-axios",
      Nodejs: "i-logos-nodejs-icon",
      Postgresql: "i-logos-postgresql",
      Sequelize: "i-logos-sequelize",
      JWT: "i-logos-jwt-icon",
      GIT: "i-logos-git-icon",
    },
  },
  {
    title: "E-Commerce Backend",
    link: "https://github.com/mbesagil/nodejs-api-mongoDB-mongoose",
    description: "projectsList.ECommerceBackend.description",
    logo: "",
    techStack: {
      Nodejs: "i-logos-nodejs-icon",
      Mongodb: "i-logos-mongodb-icon",
      JWT: "i-logos-jwt-icon",
      GIT: "i-logos-git-icon",
    },
  },
];
</script>

<template>
  <div>
    <h1 class="text-xl font-bold">{{ $t("projects") }}</h1>
    <div class="mt-4 flex flex-col gap-6">
      <template v-for="project in projects" :key="project.title">
        <div class="flex items-start gap-2">
          <a
            :href="project.link"
            target="_blank"
            class="hover:scale-110 transform transition-transform duration-300 w-8 h-8 rounded-full flex-shrink-0 flex items-start justify-center"
          >
            <img
              v-if="project.logo != ''"
              :src="project.logo"
              alt="logo"
              class=""
          /></a>
          <div class="flex flex-col justify-start gap-1">
            <h1 class="-mt-1 leading-none">
              <a
                :href="project.link"
                target="_blank"
                class="hover:underline hover:text-blue-600"
                >{{ project.title }}</a
              >
            </h1>
            <p class="text-sm text-gray-400">{{ $t(project.description) }}</p>
            <div class="flex gap-2">
              <template v-for="(icon, key) in project.techStack" :key="key">
                <UTooltip :text="key">
                  <TechIcon :name="icon" />
                </UTooltip>
              </template>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
