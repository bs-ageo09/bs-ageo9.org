<template>
  <div id="cs">
    <h2>カブスカウト</h2>
    <p>カブスカウトは小学３年から５年の活動です。戸外での活動を中心とし、体験を通してよい社会人としての基本を習得します。
    </p>
    <p>カブスカウト活動は４～６人ほどで形成される組が単位となっています。これはデン（ｄｅｎ：動物の巣穴）ともいい、組長・次長と言うわんぱく大将を中心としたグループです。組にはデンリーダーという保護者役の成人がついて、きめ細かく指導にあたります。</p>
    <p>いつでも、男の子も女の子も活動に参加できます。体験入隊も歓迎します。是非、一度、遊びにきてください。
    </p>
    <div class="center">
      <img src="~/assets/img/CS_201708_summerCamp.jpg">
      <p>夏キャンプ</p>
    </div>
    <h3>資料</h3>
    <p><a :href='this.path'>年間計画書</a></p>
    <p><a href="http://bs-ageo9cs.seesaa.net/">ブログ</a></p>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const getData = async () => {
  const response = await axios
    .get(`${process.env.backendApi}?type=other&key=plan_cs`)
  return response.data['val']
}

export default {
  name: 'cs',
  data () {
    return {
      path: '',
    }
  },
  async created() {
    this.path = await getData()
  },
}
</script>

<style>
#cs {
  padding-left: 5vw;
  margin-right: 5vw;
}

#cs h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#cs h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#cs h4{
  background-color: red;
}

#cs p{
  margin-left: 20px;
  margin-right: 10vw;
}

#cs h4{
  margin-left: 20px;
}

#cs a:link{
  color: #008000;
}
#cs a:visited{
  color: #556b2f;
}

#cs ul li{
  list-style-type: none;
}

.center{
  text-align: center;
}
</style>
