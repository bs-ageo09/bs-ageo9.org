<template>
  <div id="gform">
    <h3>問い合わせフォームから</h3>
    <p>下のフォームに必要事項を入力し送信してください。 その他問合せ欄に体験入隊希望とご記入ください。後日当団よりご連絡いたします。
    </p>
    <div class="iframe-wrap">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScWXlWmIzC3Jboeoh-DKErojJkDCf_L8nK6IckDnKhDCCJY7g/viewform?embedded=true"
        width="760" height="530%" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます...</iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gform',
  data () {
    return {
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
