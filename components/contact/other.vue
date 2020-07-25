<template>
  <div id="other">
    <h3>その他</h3>
    <div v-for="(link, key, index) in links" :key="index">
      <p>
        <a :href=link.url>{{ link.name }}</a>
      </p>
    </div>
  </div>
</template>

<script>
const links = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/bsAgeoTroop9/'
  },
  {
    name: 'このホームページについて（Github）',
    url: 'https://github.com/bs-ageo09/bs-ageo9.org'
  }
]

export default {
  name: 'plan',
  data () {
    return {
      links: links
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
