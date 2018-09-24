<template>
  <div id="teamnav">
    <div class="boxmas">
      <div class="upbox">
      <a href="/about/vbs">
        <div class="besbox">
          ビーバースカウト
        </div>
      </a>
      <a href="/about/bs">
        <div class="bsbox">
          ボーイスカウト
        </div>
      </a>
      </div>
      <div class="downbox">
      <a href="/about/cs">
        <div class="csbox">
          カブスカウト
        </div>
      </a>
      <a href="/about/Vs">
         <div class="vsbox">
          ベンチャースカウト
        </div>
      </a>
      </div>
      <a href="/about/Rs">
        <div class="rsbox">
          ローバースカウト
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teamnav',
  data () {
    return {
    }
  }
}
</script>

<style>
.boxmas{
  text-align: center;
  color: #fff;
  width: 75vw;
  margin: auto;
  font-size: 2vw;
}

.boxmas a{
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  text-decoration: none;
}

.upbox{
  display: inline-block;
}

.downbox{
  display: inline-block;
}

.besbox{
  padding-top: 20vw;
  padding-bottom: 1vw;
  width: 37vw;
  background-color: #0be8ef;
  background: linear-gradient(rgba(255,255,255,0) 50%, rgba(0, 0, 0,1)), url('/static/img/hed.jpg') center center;
  background-size:cover;
  margin-bottom: 0.7vw;
}

.csbox{
  padding-top: 20vw;
  padding-bottom: 1vw;
  width: 37vw;
  background-color: #efeb0b;
  background: url('/static/img/hed.jpg') center center;
  background: linear-gradient(rgba(255,255,255,0) 50%, rgba(0, 0, 0,1)), url('/static/img/hed.jpg') center center;
  background-size:cover;
  margin-bottom: 0.7vw;
}

.bsbox{
  padding-top: 20vw;
  padding-bottom: 1vw;
  width: 37vw;
  background-color: #2e47d3;
  background: url('/static/img/hed.jpg') center center;
  background: linear-gradient(rgba(255,255,255,0) 50%, rgba(0, 0, 0,1)), url('/static/img/hed.jpg') center center;
  background-size:cover;
  margin-bottom: 0.7vw;
}

.vsbox{
  padding-top: 20vw;
  padding-bottom: 1vw;
  width: 37vw;
  background-color: #ef9115;
  background: url('/static/img/hed.jpg') center center;
  background: linear-gradient(rgba(255,255,255,0) 50%, rgba(0, 0, 0,1)), url('/static/img/hed.jpg') center center;
  background-size:cover;
  margin-bottom: 0.7vw;
}

.rsbox{
  padding-top: 1vw;
  padding-bottom: 1vw;
  width: 74.6vw;
  margin: auto;
  background-color: #8e5c00;
  margin-bottom: 0.7vw;
}
</style>
