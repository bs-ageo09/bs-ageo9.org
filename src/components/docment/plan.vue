<template>
  <div>
    <h3>年間計画書</h3>
    <template v-for="doc in docs">
      <p>
        <a href="{{ doc.link }}">{{ doc.name }}</a>
      </p>
    </template>
    <p><a href="/static/doc/2018BVSkatsudoukeikaku.pdf">ビーバー隊</a></p>
    <p><a href="/static/doc/2018CSkatsudoukeikaku.pdf">カブ隊</a></p>
    <p><a href="/static/doc/2018BSkatsudoukeikaku.pdf">ボーイ隊</a></p>
    <p><a href="/static/doc/2018VSkatsudoukeikaku.pdf">ベンチャー隊</a></p>
  </div>
</template>

<script>
const docs = [
  {
    name: 'ビーバー隊',
    link: '/static/doc/2018BVSkatsudoukeikaku.pdf'
  },
  {
    name: 'カブ隊',
    link: '/static/doc/2018CSkatsudoukeikaku.pdf'
  },
  {
    name: 'ボーイ隊',
    link: '/static/doc/2018BSkatsudoukeikaku.pdf'
  },
  {
    name: 'ベンチャー隊',
    link: '/static/doc/2018VSkatsudoukeikaku.pdf'
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
