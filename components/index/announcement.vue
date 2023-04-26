<template>
  <div id="announcement">
    <h2>イベント報告</h2>
    <iframe :src='`${path}#page=1`' height="400" frameborder="0"></iframe>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const getData = async () => {
  const response = await fetch(`${runtimeConfig.public.backendApi}?type=other&key=announcement_pdf`, {
    method: "GET",
  })
  const json = await response.json()
  return json['val']
}

let path = await getData()
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
