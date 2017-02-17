<template>
  <div class="container">
    <cui-navbar v-on:back="back" :title="title">
    </cui-navbar>
    <div class="content">
      <p class="tag">老师</p>
      <hr class="line" />
      <div class="item-wrapper">
        <div class="avatar-group" v-for="tea in teachers" >
          <img :src="tea.avatar">
          <p class="item-name">{{tea.name}}</p>
          <div class="item-title">{{tea.title}}</div>
        </div>
      </div>

      <p class="tag classmate">同学</p>
      <hr />
      <div class="item-wrapper">
        <div class="avatar-group" v-for="classmate in classmates" >
          <img :src="classmate.avatar">
          <p class="item-name">{{classmate.name}}</p>
        </div>
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
      classmates: classmates,
      teachers: teachers
    }
  },
  methods: {
    back: function () {
      console.log("params ..." + this.$route.params);
      var router = new Router();
      router.go(-1);
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

</style>
