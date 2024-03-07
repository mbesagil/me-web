<script lang="ts" setup>
const stories = [
  {
    title:
      "Micro Frontends: Breaking Big Applications into Small Parts With Vue and Vite",
    link: "https://medium.com/@mbesagil/micro-frontends-breaking-big-applications-into-small-parts-with-vue-and-vite-be3a4d64d731",
    description:
      "Modern web applications are becoming increasingly complex and new approaches are required to manage this complexity. Micro frontends offer an architectural approach that helps reduce this complexity. In this article, we will discuss what micro frontends are, how they work and their advantages.",
    image_link:
      "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*bMB4_23FGZ9owMLL1KeWhA.jpeg",
    publish_date: "Sep 12, 2023",
  },
  {
    title: "I18n Structure Combining JSON Files with Vue.js",
    link: "https://medium.com/@mbesagil/i18n-structure-combining-json-files-with-vue-js-ae35d745be2c",
    description:
      "This stroy provides a basic framework for developers who want to add multi-language support using Vue.js. The stroy uses `vue-i18n` and `vite` to create a framework that combines translation files from different languages.",
    image_link:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Ehs8cPqVBh_UPjEyp-jUMQ.jpeg",
    publish_date: "Feb 28, 2024",
  },
  {
    title:
      "Relationship Problems in Database Models with Node.js and Sequelize: Detailed Examination of Problems, Solution Strategies and Practical Application",
    link: "https://medium.com/@mbesagil/relationship-problems-in-database-models-with-node-js-c41392be1d66",
    description:
      "When working with Node.js and Sequelize, we often try to associate each model with its own properties. However, defining models and relationships in the same file can cause errors when the models have not yet been created. This is a problem encountered especially in large and complex stroys",
    image_link:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*OwQMeQF_isyGg8jlHzwwtA.png",
    publish_date: "Jan 6, 2024",
  },
  {
    title: "AWS S3 and Nodejs File Managment",
    link: "https://medium.com/@mbesagil/aws-s3-and-nodejs-file-managment-261316c6f499",
    description:
      "The example code snippet above demonstrates the process of downloading a file from AWS S3. By defining the name of the file and the path, it downloads the file and saves it to a local file.",
    image_link:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*SpeDa0903MzA2Ny60O9smA.jpeg",
    publish_date: "Sep 9, 2023",
  },
  {
    title:
      "Naming Conventions: Ways to Make Your Code Readable and Understandable",
    link: "https://medium.com/@mbesagil/naming-conventions-ways-to-make-your-code-readable-and-understandable-1706347c290a",
    description:
      "Applying proper naming conventions and standards in coding stroys enhances code readability and comprehensibility. This, in turn, reduces errors, improves code quality, and facilitates collaboration with other developers.",
    image_link:
      "https://miro.medium.com/v2/resize:fit:544/format:webp/1*6B1hrV9pvErYDJxSxNETGA.jpeg",
    publish_date: "May 17, 2023",
  },
];
</script>

<template>
  <div>
    <h1 class="text-xl font-bold">{{ $t("medium.stories") }}</h1>
    <div class="mt-4 flex flex-col gap-6">
      <template v-for="stroy in stories" :key="stroy.title">
        <div class="flex lg:justify-between flex-col lg:flex-row gap-2">
          <div class="flex flex-col justify-start gap-1">
            <h1 class="-mt-1 leading-none">
              <a
                :href="stroy.link"
                target="_blank"
                class="hover:underline hover:text-blue-600"
                >{{ stroy.title }}</a
              >
            </h1>
            <span class="text-gray-600"
              >{{ $t("medium.publish_date") }} : {{ stroy.publish_date }}</span
            >
            <p class="text-sm text-gray-400">{{ $t(stroy.description) }}...</p>
          </div>
          <a
            :href="stroy.link"
            target="_blank"
            class="hover:scale-110 transform transition-transform duration-300 rounded-full flex-shrink-0 flex items-start justify-center"
          >
            <img
              style="height: 90px; width: 200px"
              class="rounded"
              :src="stroy.image_link"
              alt=""
            />
          </a>
        </div>
      </template>
    </div>
  </div>
</template>
