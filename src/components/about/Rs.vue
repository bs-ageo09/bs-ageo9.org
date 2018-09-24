<template>
  <div id="rs">
    <h2>ローバースカウト</h2>
    <p>ローバースカウトは１９歳からの活動です。
    </p>
    <p>スカウト自らが実施する自己研鑽と、隊が行う奉仕活動、社交活動をしています。</p>
    <p>またスカウトから指導者になり隊に貢献するスカウトもいます。</p>
  </div>
</template>

<script>
export default {
  name: 'rs',
  data () {
    return {
    }
  }
}
</script>

<style>
#rs {
  padding-left: 5vw;
  margin-right: 5vw;
}

#rs h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#rs h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#rs h4{
  background-color: red;
}

#rs p{
  margin-left: 20px;
  margin-right: 10vw;
}

#rs h4{
  margin-left: 20px;
}

#rs a:link{
  color: #008000;
}
#rs a:visited{
  color: #556b2f;
}

#rs ul li{
  list-style-type: none;
}

.center{
  text-align: center;
}
</style>
