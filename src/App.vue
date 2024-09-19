<script setup lang="ts">
import { RouterView } from 'vue-router'
import liff from '@line/liff'
import { onMounted } from 'vue'

onMounted(async () => {
  await liff
    .init({
      liffId: '2005230185-b2jZeev5'
    })
    .then(async () => {
      const profile = await liff.getProfile()
      console.log(profile)
    })
})
</script>

<template>
  <RouterView />
</template>
