<script setup lang="ts">
import { shallowRef } from "vue";

type ImageConfig = { base64: string, filePath: string }

const imageConfig = shallowRef<ImageConfig | null>(null)

const handleSelectFile = async () => {
  const r = await window.__ipc__.invoke('select-image')
  if (!r) return

  imageConfig.value = r as unknown as ImageConfig
}

</script>

<template>
  <div>
    <div v-if="imageConfig">
      <p>{{ imageConfig.filePath }}</p>
      <img :src="'data:image/*;base64,' + imageConfig.base64" alt="">
    </div>
    <button @click="handleSelectFile">select image</button>
  </div>
</template>

<style scoped>

</style>
