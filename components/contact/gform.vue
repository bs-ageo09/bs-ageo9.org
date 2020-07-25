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
#gform h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#gform p{
  margin-left: 20px;
  margin-right: 10vw;
}

.iframe-wrap {
  position: relative;
  width: 100%;
  padding-top: 120%;
  margin-left: auto;
  margin-right: auto;
}
.iframe-wrap iframe {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
