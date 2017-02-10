<template>
  <nav>
      <div class="title">{{title}}</div>
      <a v-on:click="handleClick" class="back-button">
         <i class="el-icon-arrow-left large"></i>
      </a>
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
    left: 0;
    top: 0;
    background-color: #fff;
    -webkit-box-shadow: 0px 1px 1px 0px rgba(184,184,184,0.8);
    -moz-box-shadow: 0px 1px 1px 0px rgba(184,184,184,0.8);
    box-shadow: 0px 1px 1px 0px rgba(184,184,184,0.8);
  }

  .back-button{
    width: 40px;
    height: 40px;
    left: 20px;
    top: 29px;
    position: relative;
  }

  .large {
     font-size: 36px;
     color: rgba(102, 102, 102, 0.5);
  }

  .large:hover{
    opacity: 0.9;
    filter: alpha(opacity=0.9);
  }

  nav > div.title{
    font-size: 24px;
    font-family: 黑体,sans-serif;
    position: absolute;
    text-align: center;
    top: 33px;
    left: 60px;
    right: 60px;
  }


</style>
