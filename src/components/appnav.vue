<template>
  <div id="appnav">
    <nav>
      <ul class="gnav">
        <li v-for="(link, key, index) in links" :key="index">
          <a :href=link.url>{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          name: 'ホーム',
          url: '/#/'
        },
        {
          name: 'ボーイスカウトとは',
          url: '/#/about'
        },
        {
          name: '活動報告',
          url: '/#/report'
        },
        {
          name: '資料',
          url: '/#/docment'
        },
        {
          name: 'お問い合わせ',
          url: '/#/contact'
        }
      ]
    }
  }
}
</script>

<style>
body{
  margin: 0;
}

.gnav{
  margin-top: 15px;
  text-align: center;
  display: flex !important;
  list-style-type: none;
  font-weight:bold;
}

.gnav li a{
  display: block;
  padding: 10px 8px;
  color: #000;
  text-decoration: none;
  font-size: 1.4vw
}
</style>
