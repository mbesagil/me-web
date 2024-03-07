<script lang="ts" setup>
const jobs = [
  {
    company: "Coredinat/Ikonik Tech",
    companyLink: "https://coredinat.com",
    title: "jobs.Coredinat.title",
    date: "jobs.Coredinat.date",
    description: "jobs.Coredinat.description",
    logo: "/img/coredinat_logo.png",
    projectName: "",
    projectLink: "",
  },
  {
    company: "Zenopix/Ikon R&D",
    companyLink: "https://zenopix.com/",
    title: "jobs.Ikon.title",
    date: "jobs.Ikon.date",
    description: "jobs.Ikon.description",
    logo: "/img/zenopix_logo.png",
    projectName: "",
    projectLink: "",
  },
];
</script>

<template>
  <div>
    <h1 class="text-xl font-bold">{{ $t("workExperience") }}</h1>
    <div class="mt-4 flex flex-col gap-6">
      <template v-for="job in jobs" :key="job.company">
        <div class="flex items-start gap-2">
          <img :src="job.logo" alt="logo" class="w-8 h-8 rounded-full" />
          <div class="flex flex-col justify-start gap-1">
            <h1 class="-mt-1 leading-none">
              <a
                :href="job.companyLink"
                target="_blank"
                class="hover:underline hover:text-blue-600"
                >{{ job.company }}</a
              >
            </h1>
            <div class="flex flex-col sm:flex-row sm:gap-2">
              <h2 class="">{{ $t(job.title) }}</h2>
              <p class="hidden sm:block">•</p>
              <h2 class="text-gray-400">{{ $t(job.date) }}</h2>
            </div>
            <p class="text-sm text-gray-400">{{ $t(job.description) }}</p>
            <a
              v-if="job.projectName"
              :href="job.projectLink"
              target="_blank"
              class="text-sm text-blue-500 underline hover:text-blue-600"
              >{{ job.projectName }}</a
            >
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
