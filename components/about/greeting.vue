<template>
  <div id="greeting">
    <h3>団委員長挨拶</h3>
      <p>保護者の皆様へ</p>
      <h4 class="center">「お子さん達にボーイスカウトを体験させてみませんか！」</h4>
      <p>三指　こんにちは！ボーイスカウト上尾９団です。ボーイスカウト運動は今年で１１４年の歴史を持った世界的に青少年を育成する教育活動です。「学校以外のもう一つの教室」と言われ、地域で子供達を育成する唯一の団体です。</p>
      <p>当団は今年で創立50年目を迎え、伝統ある団と自負しております。</p>
      <p>「お子さん達は週末、何してますか？」</p>
      <p>運営に当たってはコロナ感染対策に万全を期し、『そなえよつねに』「団は家族」「明るい団・楽しい活動」「継続は力」をモットーにしております。</p>
      <p>主に小敷谷、今泉、小泉、畔吉、浅間台、春日、井戸木をテリトリーとし、活動は主に、こどもの城公園を中心に活動しています。幼稚園の年長から入隊でき、ビーバー隊、カブ隊、ボーイ隊、ベンチャー隊、ローバー隊の成人に至るまで、年代に応じたきめの細かい活動プログラムが用意され、スカウト達に目標を与え、チャレンジさせます。</p>
      <p>スカウトとは “先駆者のことで、「自ら率先して幸福な人生を切り開き、社会の先頭に立とうとする青少年」という意味を持っています”</p>
      <p>我々成人指導者は永遠に脇役です。主役はあくまでもスカウト達自身です。</p>
      <p>子供達は外で、特に自然の中で走り回って遊ぶことが成長過程でとても大切です。</p>
      <p>活動には「楽しさ、遊び心、チャレンジ精神」が大切です。当団ホームページへアクセス下さい。一緒に遊びませんか！一緒にキャンプしませんか！自然のど真ん中に身を置いてみませんか！女の子も大歓迎です！年長からでしたらどなたでも入隊できます。</p>
      <p>是非、一度、体験してみてください。だ～い歓迎です！！</p>
      <div class="right">
        <p>弥栄</p>
        <p>むさし地区  上尾９団・団委員長・上山芳範</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'greeting',
  data () {
    return {
    }
  }
}
</script>

<style>
#greeting h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#greeting h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#greeting p{
  margin-left: 20px;
  margin-right: 10vw;
}

#greeting h4{
  margin-left: 20px;
}

#greeting a:link{
  color: #008000;
}
#greeting a:visited{
  color: #556b2f;
}

#greeting ul li{
  list-style-type: none;
}

.right{
  text-align: right;
}

.center{
  text-align: center;
}
</style>
