<template>
  <div id="information">
    <h2>ご案内</h2>
    <div v-for="event in events" :key='event'>
      <h3>{{ event.event_name }}のお知らせ</h3>
      <h4>{{ event.heading }}</h4>
      <p>{{ event.date }}</p>
      <ul>
        <li v-for="text in event.text.split('\n')" :key='text'>
         {{ text }}
        </li>
      </ul>
      <p v-if="event.doc_link">
        <a :href="event.doc_link">こちら</a>から{{ event.doc_name }}をご覧になれます。
      </p>
      <p v-if="event.doc_preview">
        <iframe class="doc" :src='`${event.doc_preview}#page=1`' height="700" width="500" frameborder="0"></iframe>
      </p>
    </div>
    <h3>募集案内</h3>
    <p>
      <a :href="recruitment_pdf">こちら</a>からスカウト募集チラシをご覧になれます
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
      <a href="contact/">こちら</a>から
    </p>
  </div>
</template>

<script>
import axios from 'axios'

const getData = async (type, key) => {
  const param = key !== '' ? `type=${type}` : `type=${type}&key=${key}`
  const response = await axios
    .get(`https://script.google.com/macros/s/AKfycby6SnkWMU4vuvC_hyVRdldHGe8q6fCfVNXkNlQy4hXVnPlaSwA/exec?${param}`)

  return key !== '' ? response.data : response.data
}

export default {
  name: 'information',
  data () {
    return {
      events: [],
      recruitment_pdf: null,
    }
  },
  async created() {
    this.events = await getData('event', '')
    const recruitment_pdf = await getData('other', 'recruitment_pdf')
    this.recruitment_pdf = recruitment_pdf['val']
  },
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
