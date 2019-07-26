<template>
  <div id="other">
    <h3>AWARD</h3>
    <div v-for="(doc, key, index) in docs" :key="index">
      <p>
        <a :href=doc.link>{{ doc.name }}</a>
      </p>
    </div>
  </div>
</template>

<script>
const docs = [
  {
    name: 'ベンチャー隊増田隊員研究発表「窒素酸化物その諸対象に及ぼす影響と実地測定結果」<',
    link: '/doc/chisso.PDF'
  }
]

export default {
  name: 'plan',
  data () {
    return {
      docs: docs
    }
  }
}
</script>

<style>
#other h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#other h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#other h4{
  background-color: red;
}

#other p{
  margin-left: 20px;
  margin-right: 10vw;
}

#other h4{
  margin-left: 20px;
}

#other a:link{
  color: #008000;
}
#other a:visited{
  color: #556b2f;
}

#other ul li{
  list-style-type: none;
}
</style>
