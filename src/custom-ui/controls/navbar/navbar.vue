<template>
  <nav>
      <div>
        <a v-on:click="handleClick" class="back-button"><i class="el-icon-arrow-left large"></i></a>
        <p class="title">{{title}}</p>
        <div class="nav-right">
          <slot name="right"></slot>
        </div>
      </div>
  </nav>
</template>

<script>
  export default {
    name: "cui-navbar",
    props: {
      title: {
        type: String
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('back', evt);
      }
    }
  }
</script>

<style scoped>
  nav {
    position: fixed;
    height: 84px;
    width: 100%;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0px;
    opacity: 0.9;
    background: #FFFFFF;
    box-shadow: 0 1px 1px 0 rgba(184,184,184,0.50);
  }
  nav > div {
    display: flex;
    display: -webkit-flex;
    height: 100%;
    vertical-align: middle;
  }

  .back-button{
    width: 60px;
    margin: 20px 20px 10px 20px;
  }

  .nav-right {
    /*width: 60px;*/
    margin: 20px 20px 10px 20px;
  }

  .large {
     font-size: 36px;
     color: rgba(102, 102, 102, 0.5);
  }

  .large:hover{
    opacity: 0.9;
    filter: alpha(opacity=0.9);
  }

  .title{
    flex: 1;
    -webkit-flex: 1;
    font-size: 24px;
    color: #000000;
    text-align: center;
  }

</style>
