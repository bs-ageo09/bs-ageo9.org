<template>
  <div id="announcement">
    <h2>イベント報告</h2>
    <iframe v-if="path" :src='`${path}#page=1`' height="400" frameborder="0"/>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const getData = async () => {
  const base = runtimeConfig.public.backendApi
  if (!base) return ''
  try {
    const response = await fetch(`${base}?type=other&key=announcement_pdf`)
    if (!response.ok) return ''
    const json = await response.json()
    return json?.val ?? ''
  } catch {
    return ''
  }
}

const path = await getData()
</script>

<style>
#announcement h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

.pdf{
  width: 300px;
}
</style>
