<template>
  <div id="paper">
    <h3>機関紙「スカウトだより」</h3>
    <div v-for="(paper, key, index) in papers" :key="index">
      <p>
        <a :href=paper.link>{{ paper.name }}</a>
      </p>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const getData = async () => {
  const response = await fetch(`${runtimeConfig.public.backendApi}?type=paper`, {
    method: "GET",
  })
  return await response.json()
}

let papers = []
papers = await getData()
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
