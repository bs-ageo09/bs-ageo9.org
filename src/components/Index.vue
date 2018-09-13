<template>
  <div class="index">
    <!-- <indexcatch/>
    <ul class="wrapper">
      <li class="item">
        <readme/>
      </li>
      <li class="sbar">
        <links/>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import indexcatch from './index/indexcatch'
// import readme from './index/readme'
// import links from './index/links'

export default {
  // components: {
  //   indexcatch,
  //   readme,
  //   links
  // },
  name: 'index',
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

#index ul li{
  list-style-type: none;
}
</style>
