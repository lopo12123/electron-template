<script setup lang="ts">
import { shallowRef } from "vue";

type ImageConfig = { base64: string, filePath: string }

const imageConfig = shallowRef<ImageConfig | null>(null)

const handleSelectFile = async () => {
  const r = await window.__ipc__.invoke('select-image')
  if (!r) return

  imageConfig.value = r as unknown as ImageConfig
}

const handleProcessImage = async () => {
  if (!imageConfig.value) {
    // 未选择图片
    return;
  }

  // 请求具体的服务地址
  try {
    // TODO: 改成实际的处理图片的请求
    const re = await fetch('http://localhost:5000', {
      method: 'POST',
      body: JSON.stringify({ image: imageConfig.value.base64 })
    }).then(r => r.json())
    console.log('请求结果', re)
  } catch (err) {
    console.log('请求失败', err)
  }
}
</script>

<template>
  <div>
    <div v-if="imageConfig">
      <p>{{ imageConfig.filePath }}</p>
      <img :src="'data:image/*;base64,' + imageConfig.base64" alt="">
    </div>
    <button @click="handleSelectFile">select image</button>
    <button @click="handleProcessImage">process image</button>
  </div>
</template>

<style scoped>

</style>
