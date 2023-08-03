<template>
    <main>
      <LayoutBreadcrumbs v-if="breadcrumbs" :breadcrumbs="breadcrumbs"/>
      <ContentDoc />
    </main>
  </template>
  