<template>
  <nav>
      <div class="title">{{title}}</div>
      <a v-on:click="handleClick" class="back-button"><i class="el-icon-arrow-left large"></i></a>
      <div class="nav-right">
      <slot name="right"></slot>
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
    height: 35px;
    padding: 10px 15px;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0px;
    background-color: #fff;
    box-shadow: 0px 1px 1px 0px rgba(184,184,184,0.8);
  }
  .nav-right{
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .back-button{
    display: inline-block;
    width: 40px;
    height: 40px;
    left: 15px;
    top: 10px;
    position: absolute;
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
    text-align: center;
    padding-left: 60px;
    padding-right: 100px;
  }


</style>
