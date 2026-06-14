<template>
  <div id="paper">
    <h3>機関紙「スカウトだより」</h3>
    <div v-for="paper in papers" :key="paper.link">
      <p>
        <a :href=paper.link>{{ paper.name }}</a>
      </p>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const getData = async () => {
  const base = runtimeConfig.public.backendApi
  if (!base) return []
  try {
    const response = await fetch(`${base}?type=paper`)
    if (!response.ok) return []
    const json = await response.json()
    return Array.isArray(json) ? json : []
  } catch {
    return []
  }
}

const { data: papers } = await useAsyncData('papers', getData, { default: () => [] })
</script>

<style>
#paper h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#paper h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#paper h4{
  background-color: red;
}

#paper p{
  margin-left: 20px;
  margin-right: 10vw;
}

#paper h4{
  margin-left: 20px;
}

#paper a:link{
  color: #008000;
}
#paper a:visited{
  color: #556b2f;
}

#paper ul li{
  list-style-type: none;
}
</style>
