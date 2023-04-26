<template>
  <div id="appheader">
    <h1>ボーイスカウト上尾9団</h1>
    <h2>9th Ageo Group, Saitama Scout Council, SAJ</h2>
    <p>このホームページは、設置者（上山芳範：ボーイスカウト埼玉県連盟上尾9団）＜ueyama362@gmail.com＞の責任の下で掲載するものであり、</p>
    <p>ボーイスカウト日本連盟が情報を提供しているものではありません。</p>
  </div>
</template>

<script>
export default {
  name: 'appheader',
  data () {
    return {
    }
  }
}
</script>

<style>
body{
  margin: 0;
}

#appheader{
  text-align: center;
  line-height: 1;
  padding: 4.2vw 16.8vw 0.84vw;  /*あとで変える 50px 200px 10px*/
  background: url('~/assets/img/hed.jpg') center center;
  background-blend-mode: multiply;
  background-size: cover;
  background-color: #b5b5b5 ;
}

#appheader h1{
  font-size: 3.5vw;
  color: #FFFFFF;
  line-height: 0;
}

#appheader h2{
  font-size: 2vw;
  color: #FFFFFF;
  line-height: 2;
}

#appheader p{
  font-size: 1vw;
  color: #FFFFFF;
  line-height: 0;
}

@media screen and (max-width:990px) {
  #appheader p{
    display: none;
  }
}
</style>
