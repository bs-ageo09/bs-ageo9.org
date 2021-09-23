<template>
  <div id="bs">
    <h2>ボーイスカウト</h2>
    <p>ボーイスカウトは小学６年から中学３年生までの活動です。ボーイスカウトは６～８人ほどの班で活動します。</p>
    <p>テントの張り方、地図の読み方、炊事や工作、自然観察などを学びます。</p>
    <p>また、自分のためだけでなく、奉仕の精神を持ち、人のために役に立つことの大切さを学びます。</p>
    <div class="center">
      <img src="~/assets/img/BS_201708_summersCamp.jpg">
      <p>夏キャンプ</p>
    </div>
    <h3>資料</h3>
    <p><a :href='this.path'>年間計画書</a></p>
    <p>活動報告</p>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const getData = async () => {
  const response = await axios
    .get(`${process.env.backendApi}?type=other&key=plan_bs`)
  return response.data['val']
}

export default {
  name: 'bs',
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
#bs {
  padding-left: 5vw;
  margin-right: 5vw;
}

#bs h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#bs h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#bs h4{
  background-color: red;
}

#bs p{
  margin-left: 20px;
  margin-right: 10vw;
}

#bs h4{
  margin-left: 20px;
}

#bs a:link{
  color: #008000;
}
#bs a:visited{
  color: #556b2f;
}

#bs ul li{
  list-style-type: none;
}

.center{
  text-align: center;
}
</style>
