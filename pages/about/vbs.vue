<template>
  <div id="vbs">
    <h2>ビーバースカウト</h2>
    <p>ビーバースカウトは、小学校１年から３年までの活動です。</p>
    <p>我々、上尾９団ビーバー隊は、遊びを中心とした活動の中で、集団行動がとれるようになるようにプログラムを実行しています。</p>
    <p>ゲームや工作、野外での料理、サイクリングやアイススケート、ソリ遊びと内容も多彩で、平均月３回、とっても楽しい活動をしてます。</p>
    <p>是非、一度、遊びにきてください。
    </p>
    <div class="center">
      <img src="~/assets/img/BVS_2017_river.jpg">
      <p>川遊び</p>
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
    .get(`${process.env.backendApi}?type=other&key=plan_vbs`)
  return response.data['val']
}

export default {
  name: 'vbs',
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
#vbs {
  padding-left: 5vw;
  margin-right: 5vw;
}

#vbs h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#vbs h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#vbs h4{
  background-color: red;
}

#vbs p{
  margin-left: 20px;
  margin-right: 10vw;
}

#vbs h4{
  margin-left: 20px;
}

#vbs a:link{
  color: #008000;
}
#vbs a:visited{
  color: #556b2f;
}

#vbs ul li{
  list-style-type: none;
}

.center{
  text-align: center;
}
</style>
