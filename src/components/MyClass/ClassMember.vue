<template>
  <div class="container">
    <cui-navbar v-on:back="back" :title="title">
    </cui-navbar>
    <div class="content">
      <p class="tag">老师</p>
      <hr class="line" />
      <div class="item-wrapper">
        <div class="avatar-group" v-for="tea in teachers" @click="open(tea)" >
          <img :src="tea.avatar">
          <p class="item-name">{{tea.name}}</p>
          <div class="item-title">{{tea.title}}</div>
        </div>
      </div>

      <p class="tag classmate">同学</p>
      <hr />
      <div class="item-wrapper">
        <div class="avatar-group" v-for="classmate in classmates" @click="open(classmate)">
          <img :src="classmate.avatar">
          <p class="item-name">{{classmate.name}}</p>
        </div>
      </div>
    </div>

    <div class="modal-wrapper" v-if="showModal">
      <div class="modal-container">
         <div class="modal-btn-close">
           <a @click="close"><img src="static/img/assets/classmembers/close2.png" /></a>
           <div class="line"></div>
        </div>
        <div class="avatar" >
            <img width="100%" height="100%" :src="selectedUser.avatar" />
        </div>
        <p>{{selectedUser.name}}</p>
        <el-button class="btn-send">发送消息</el-button>
      </div>
    </div>
  </div>
</template>

<script>

import Router from 'vue-router'

const teachers = [
  {
    avatar: "static/img/avatar-finn.png",
    name: "张老师",
    title: "班主任"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "王老师",
    title: ""
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张老师",
    title: ""
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张老师",
    title: ""
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张老师",
    title: ""
  }
];

const classmates = [
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  },
  {
    avatar: "static/img/avatar-finn.png",
    name: "张同学"
  }
]

export default {
  data () {
    return {
    	title:'班级成员',
      showModal: false,
      selectedUser: {
        avatar: "static/img/avatar-finn.png",
        name: "张同学"
      },
      classmates: classmates,
      teachers: teachers
    }
  },
  methods: {
    back: function () {
      console.log("params ..." + this.$route.params);
      var router = new Router();
      router.go(-1);
    },
    open: function (u) {
       this.selectedUser = u;
       this.showModal = true;
    },
    close: function () {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
p {
  margin: 0 0;
  padding: 0;
}

.container {
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  overflow-y: auto;
}

.content {
  position: relative;
  top: 85px;
  margin: 40px 0px 60px 60px;
}

hr {
  border: 1px solid #EBEBEB;
}

p.tag {
  font-size: 24px;
  color: #000000;
}

.classmate {
  margin-top: 30px;
}

.item-wrapper {
 padding-left: 25px;
}

.item-wrapper > * {
  line-height: normal;
  vertical-align: top;
}

.avatar-group {
  display: inline-block;
  text-align: center;
  margin: 0 20px auto 20px;
}

.avatar-group > img {
  border-radius: 100%;
  margin-top: 21px;
}

.avatar-group > .item-name {
  margin-top: 10px;
  font-size: 14px;
  color: #666666;
}

.avatar-group > .item-title {
  margin: 0 0;
  font-size: 10px;
  color: #999999;
  margin-top: 3px;
}

.modal-wrapper {
  z-index: 9999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
}

.modal-wrapper:after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}

.modal-container {
  width: 323px;
  height: 320px;
  background-color: #fff;
  border-radius: 8px;
  text-align: left;
  vertical-align: middle;
  display: inline-block;
  text-align: center;
}

.modal-btn-close {
  border: none;
  background: none;
  margin-top: -50px;
  float: right;
}

.modal-btn-close > div.line {
  /*border: 1px solid #FFFFFF;*/
  margin: 0 0;
  border-left: 1px solid #fff;
  height: 30px;
  margin-left: 15px;
  margin-top: -5px;
  background: none;
}

.modal-container > div.avatar {
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: 50px;
}

.modal-container > div.avatar > img {
  width: 100px;
  height: 100px;
  text-align: center;
  border-radius: 100%;
}

.modal-container > p {
    margin-top: 20px;
    font-size: 24px;
    color: #333333;
}

.modal-container > .btn-send {
    width: 229px;
    height: 48px;
    background: #36B991;
    border-radius: 100px;
    font-size: 24px;
    color: #FFFFFF;
    margin-top: 34px;
}

</style>
