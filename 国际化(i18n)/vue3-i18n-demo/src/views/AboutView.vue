<template>
  <div class="about">
    <h1>{{ $t("about.title") }}</h1>
    <br />
    <h2>{{ $t("about.content") }}</h2>
    <h2>
      {{ $t("about.donations", { donations: $n(1234.567, "currency") }) }}
    </h2>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
