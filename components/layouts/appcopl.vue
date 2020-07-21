<template>
  <div id="appcopl" >
    <p>Copyright 2017 9th Ageo Group, Saitama Scout Council, SAJ. All Rights Reserved.
    </p>
    <p class="cut">このホームページは、設置者（上山芳範：ボーイスカウト埼玉県連盟上尾9団）＜ueyama362@gmail.com＞の責任の下で掲載するものであり、 ボーイスカウト日本連盟が情報を提供しているものではありません。
    </p>
  </div>
</template>

<script>
export default {
  name: 'appcopl',
  data () {
    return {
    }
  }
}
</script>

<style>
#appcopl {
  text-align: center;
  font-size: 1vw;
  margin-top: 3em;
  word-break: keep-all;
}

@media screen and (min-width:990px) {
  .cut{
    display: none;
  }
}
</style>
