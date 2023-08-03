
<template>
  <nav class="mb-4 flex flex-wrap items-center gap-x-2">
    <NuxtLink
      class="border border-solid rounded text-gray-600 border-gray-600 hover:border-accent-600 hover:text-accent-600 transition-colors p-1 inline-flex"
      to="/"
    >
      <Icon name="heroicons:home-20-solid" size="1.2em" />
    </NuxtLink>
    <Icon name="heroicons:chevron-right" />

    <template v-for="(crumb, index) in breadcrumbs" :key="crumb._path">
      <template v-if="index < breadcrumbs.length - 1">
        <NuxtLink class="underline text-accent-600" :to="crumb.path">
          {{ crumb.title }}
        </NuxtLink>
        <Icon name="heroicons:chevron-right" />
      </template>
      <span v-else>
        {{ crumb.title }}
      </span>
    </template>
  </nav>
</template>

<script lang="ts">
export interface Breadcrumb {
  path: string
  title: string
}

export default {
  props: {
    breadcrumbs: {
      type: Array as () => Breadcrumb[],
      required: true
    }
  }
}
</script>
