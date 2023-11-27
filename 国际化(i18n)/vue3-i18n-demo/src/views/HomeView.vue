<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LanguageSwitch from "@/components/LanguageSwitch.vue";

const { t } = useI18n();
</script>

<template>
  <main>
    <h2>{{ t("home.title") }}</h2>
    <h2>{{ $t("home.num-visits", { num: 30 }) }}</h2>
    <!-- <h2>{{ $d(new Date(), "short") }}</h2> -->
    <LanguageSwitch />
  </main>
</template>
