<script lang="ts" setup>
import { onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { NFlex } from 'naive-ui'
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'

const router = useRouter()

onMounted(() => {
  router.push({ name: 'home' })
})
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
