<template>
  <div id="plan">
    <h3>年間計画書</h3>
    <div v-for="(doc, key, index) in docs" :key="index">
      <p>
        <a :href=doc.link>{{ doc.name }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const getData = async (key) => {
  const response = await axios
    .get(`${Vue.prototype.$constants.backendApi}?type=other&key=${key}`)
  return response.data['val']
}

export default {
  name: 'plan',
  data () {
    return {
      docs: []
    }
  },
  async created() {
    const request = [
      getData('plan_vbs'),
      getData('plan_cs'),
      getData('plan_bs'),
      getData('plan_vs'),
   ]

    const response = await Promise.all(request)

    this.docs = [
      {
        name: 'ビーバー隊',
        link: response[0]
      },
      {
        name: 'カブ隊',
        link: response[1]
      },
      {
        name: 'ボーイ隊',
        link: response[2]
      },
      {
        name: 'ベンチャー隊',
        link: response[3]
      }
    ]
  },
}
</script>

<style>
#plan h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#plan h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#plan h4{
  background-color: red;
}

#plan p{
  margin-left: 20px;
  margin-right: 10vw;
}

#plan h4{
  margin-left: 20px;
}

#plan a:link{
  color: #008000;
}
#plan a:visited{
  color: #556b2f;
}

#plan ul li{
  list-style-type: none;
}
</style>
