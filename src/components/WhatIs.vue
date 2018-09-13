<template>
  <div class="whatIs">
    <ul class="wrapper">
      <li class="item">
        <h2>ボーイスカウトとは</h2>
      </li>
    </ul>
  </div>
</template>

<script>
// import information from './whatIs/information'

export default {
  // components: {
  //   information
  // },
  name: 'whatIs',
  data () {
    return {
    }
  }
}
</script>

<style>
.wrapper{
  list-style-type: none;
  overflow: hidden;
}

@media screen and (min-width:990px){
  .wrapper{
    display: block;
  }

  .item{
    float: left;
  }

  .sbar{
    float: right;
    margin-right: 10vw;
  }
}

#whatIs ul li{
  list-style-type: none;
}
</style>
