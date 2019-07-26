<template>
  <div id="information">
    <h2>隊員募集のご案内</h2>
    <!-- <h3>活動体験のお知らせ</h3>
    <h4>ボーイスカウトたいけんイベント開催します！</h4>
    <p>２０１８年１０月１４日（日）１０時～１２時</p>
    <ul>
      <li>場所：こどもの城前公園</li>
      <li>ボーイスカウトの活動を体験しませんか。</li>
      <li>保護者向け説明会も開催します。</li>
      <li>対象年齢：幼稚園年長～小学２年生（他学年も可）</li>
    </ul>
    <p>
      <a href="/doc/taiken20181014.pdf">こちら</a>からたいけんイベントのチラシをご覧になれます。
    </p>-->
    <h3>募集案内</h3>
    <p>
      <a href="/doc/Scoutbosyuu.pdf">こちら</a>からスカウト募集チラシをご覧になれます
    </p>
    <h3>ボーイスカウト日本連盟 PR動画</h3>
    <p class="movie-wrap">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/faa-NzT5qwo"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </p>
    <p class="movie-wrap">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fys0y9livbI"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </p>
    <h3>お問い合わせ</h3>
    <p>
      お問い合わせは
      <a href="contact_us/">こちら</a>から
    </p>
  </div>
</template>

<script>
export default {
  name: 'information',
  data () {
    return {}
  }
}
</script>

<style>
#information h2 {
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#information h3 {
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#information p {
  margin-left: 20px;
  margin-right: 10vw;
}

#information h4 {
  margin-left: 20px;
}

#information ul li {
  list-style-type: none;
}

a:link {
  color: #008000;
}
a:visited {
  color: #556b2f;
}

/* 埋め込みyotubeの幅をレスポンシブに */
div.iframeWrapper {
  position: relative;
  width: 75%;
  padding-top: 530%;
  margin-left: auto;
  margin-right: auto;
}
div.iframeWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.movie-wrap {
  position: relative;
  padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
  height: 0;
  overflow: hidden;
}

.movie-wrap iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
