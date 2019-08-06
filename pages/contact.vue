<template>
  <div id="contact">
    <h2>スカウト募集</h2>
    <p>私たち、ボーイスカウト埼玉県連盟上尾第９団では、ビーバースカウト、カブスカウト、ボーイスカウトの仲間を 募集しております。</p>
    <p>「ボーイスカウトってなにをするの？」「どんな活動をしているの？」など入隊する前に活動を体験していただくことができます。</p>
    <p>体験入隊は随時受付しております。下記の入力フォームに記入して送信していただくか、問合せ電話番号までご連絡ください。たくさんのお子様の参加をお待ちしております。</p>
    <h2>お問い合わせ</h2>
    <target/>
    <gform/>
  </div>
</template>

<script>
import target from '@/components/contact/target'
import gform from '@/components/contact/gform'

export default {
  components: {
    target,
    gform
  },
  name: 'contact',
  data () {
    return {
      targets: []
    }
  },
  async asyncData({ app }) {
    return {
    }
  }
}
</script>

<style>
#contact h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#contact p{
  margin-left: 20px;
  margin-right: 10vw;
}

#contact {
  padding-left: 5vw;
  margin-right: 5vw;
}
</style>
