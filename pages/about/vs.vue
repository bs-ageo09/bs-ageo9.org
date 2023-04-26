<template>
  <div id="vs">
    <h2>ベンチャースカウト</h2>
    <p>ベンチャースカウトは高校生以上の活動です。より高度な活動をとおして、技術と自主性を学びます。</p>
    <div class="center">
      <img src="~/assets/img/vshp001.jpg">
      <p>栗駒山山頂</p>
    </div>
    <h3>資料</h3>
    <p><a :href='path'>年間計画書</a></p>
    <p>活動報告</p>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const getData = async () => {
  const response = await fetch(`${runtimeConfig.public.backendApi}?type=other&key=plan_vs`, {
    method: "GET",
  })
  const json = await response.json()
  return json['val']
}

const path = await getData()
</script>

<style>
#vs {
  padding-left: 5vw;
  margin-right: 5vw;
}

#vs h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#vs h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#vs h4{
  background-color: red;
}

#vs p{
  margin-left: 20px;
  margin-right: 10vw;
}

#vs h4{
  margin-left: 20px;
}

#vs a:link{
  color: #008000;
}
#vs a:visited{
  color: #556b2f;
}

#vs ul li{
  list-style-type: none;
}

.center{
  text-align: center;
}
</style>
