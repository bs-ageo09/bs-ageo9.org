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

<script>
const papers = [
  {
    name: '平成23年 3月 1号',
    link: '/doc/tankobu1.pdff'
  },
  {
    name: '平成23年 6月 2号',
    link: '/doc/tankobu2.pd'
  },
  {
    name: '平成23年11月 3号',
    link: '/doc/tankobu3.pdf'
  },
  {
    name: '平成24年 2月 4号',
    link: '/doc/scouttayori4.pdf'
  },
  {
    name: '平成24年 7月 5号',
    link: '/doc/scouttayori5.pdf'
  },
  {
    name: '平成24年11月 6号',
    link: '/doc/scouttayori6.pdf'
  },
  {
    name: '平成25年 3月 7号',
    link: '/doc/scouttayori7.pdf'
  },
  {
    name: '平成25年 7月 8号',
    link: '/doc/scouttayori8.pdf'
  },
  {
    name: '平成25年10月 9号号',
    link: '/doc/scouttayori9.pdf'
  },
  {
    name: '平成26年 3月 10号',
    link: '/doc/scouttayori10.pdf'
  },
  {
    name: '平成26年 7月 11号',
    link: '/doc/scouttayori11.pdf'
  },
  {
    name: '平成26年11月 12号',
    link: '/doc/scouttayori12.pdf'
  },
  {
    name: '平成27年 3月 13号',
    link: '/doc/scouttayori13.pdf'
  },
  {
    name: '平成27年10月 14号',
    link: '/doc/scouttayori14.pdf'
  },
  {
    name: '平成28年 3月 15号',
    link: '/doc/scouttayori15.pdf'
  },
  {
    name: '平成28年10月 16号',
    link: '/doc/scouttayori16.pdf'
  },
  {
    name: '平成29年 3月 17号',
    link: '/doc/scouttayori17.pdf'
  },
  {
    name: '平成29年10月 18号',
    link: '/doc/scouttayori18.pdf'
  },
  {
    name: '平成30年3月 19号',
    link: '/doc/scouttayori19.pdf'
  }
]

export default {
  name: 'paper',
  data () {
    return {
      papers: papers
    }
  }
}
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
