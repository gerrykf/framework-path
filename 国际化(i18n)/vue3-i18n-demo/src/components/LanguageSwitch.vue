<template>
  <div>
    <select v-model="locale" @change="onChangeLang">
      <option
        :value="key"
        :key="key"
        v-for="(value, key) in Trans.supportedLanguages"
      >
        {{ value }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import Trans from "@/i18n/transition";

const router = useRouter();
const { locale } = useI18n();

const onChangeLang = async (e: Event) => {
  const value = (e.target as HTMLSelectElement).value;
  Trans.switchLanguage(value);

  try {
    await router.push({
      params: { locale: value },
    });
  } catch (error) {
    console.log(error);
    router.push("/");
  }
};
</script>
