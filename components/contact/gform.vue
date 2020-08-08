<template>
  <div id="gform">
    <h3>問い合わせフォームから</h3>
    <p>下記リンクのフォームに必要事項を入力し送信してください。 その他問合せ欄に体験入隊希望とご記入ください。後日当団よりご連絡いたします。
    </p>
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
    name: 'お問い合わせフォーム（Google Forms）',
    url: 'https://forms.gle/Ym81K4bRQRNyi1A58'
  }
]

export default {
  name: 'gform',
  data () {
    return {
      links: links
    }
  }
}
</script>

<style>
#gform h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#gform h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#gform h4{
  background-color: red;
}

#gform p{
  margin-left: 20px;
  margin-right: 10vw;
}

#gform h4{
  margin-left: 20px;
}

#gform a:link{
  color: #008000;
}
#gform a:visited{
  color: #556b2f;
}

#gform ul li{
  list-style-type: none;
}
</style>
