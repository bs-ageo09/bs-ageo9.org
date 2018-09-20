<template>
  <div class="about">
    <h2>ボーイスカウトとは</h2>
    <p>ボーイスカウトは世界共通の目的として、青少年が個人として、責任ある市民として、地域、国、国際社会の一員として自らの肉体的、 知的、情緒的、社会的、精神的可能性を十分に達成できるように青少年の発達に貢献すること、『Creating
       a Better World（より良き社会を作る）』 を世界共通の展望とし、スカウト教育法を通して健全な青少年の育成を行っています。
    </p>
  </div>
</template>

<script>
// import information from './about/information'

export default {
  // components: {
  //   information
  // },
  name: 'about',
  data () {
    return {
    }
  }
}
</script>

<style>
#about h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#about h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#about h4{
  background-color: red;
}

#about p{
  margin-left: 20px;
  margin-right: 10vw;
}

#about h4{
  margin-left: 20px;
}

a:link{
  color: #008000;
}
a:visited{
  color: #556b2f;
}

#about ul li{
  list-style-type: none;
}
</style>
