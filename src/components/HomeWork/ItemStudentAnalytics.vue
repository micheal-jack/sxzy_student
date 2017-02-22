<template>
  <div class="container">
    <cui-navbar v-on:back="back" :title="title">
    </cui-navbar>
    <div class="content">
        <p class="tag">已交作业<span class="counter">4人</span></p>
        <hr class="line" />
        <div class="item-wrapper">
          <div class="avatar-group" v-for="stu in commited_list" >
            <img :src="stu.avatar">
            <p class="item-name">{{stu.name}}</p>
            <div class="item-time">{{stu.time}}</div>
          </div>
        </div>

        <p class="tag under-group">正在作业中<span class="counter">6人</span></p>
        <hr class="line" />
        <div class="item-wrapper">
          <div class="avatar-group" v-for="stu in ongoing_list" >
            <img :src="stu.avatar">
            <p class="item-name">{{stu.name}}</p>
          </div>
        </div>

        <p class="tag under-group">尚未做作业<span class="counter">3人</span></p>
        <hr class="line" />
        <div class="item-wrapper">
          <div class="avatar-group" v-for="stu in ongoing_list" >
            <img :src="stu.avatar">
            <p class="item-name">{{stu.name}}</p>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	title:'同学交作业情况',
      commited_list: [
        {
          avatar: "static/img/avatar-finn.png",
          name: "张老师",
          time: "09:20"
        },
        {
          avatar: "static/img/avatar-finn.png",
          name: "王老师",
          time: "09:20"
        },
        {
          avatar: "static/img/avatar-finn.png",
          name: "张老师",
          time: "09:20"
        },
        {
          avatar: "static/img/avatar-finn.png",
          name: "张老师",
          time: "09:20"
        },
        {
          avatar: "static/img/avatar-finn.png",
          name: "张老师",
          time: "09:20"
        }
      ],
      ongoing_list: [
        {
          avatar: "static/img/avatar-finn.png",
          name: "张老师",
          time: "09:20"
        },
        {
          avatar: "static/img/avatar-finn.png",
          name: "王老师",
          time: "09:20"
        },
        {
          avatar: "static/img/avatar-finn.png",
          name: "张老师",
          time: "09:20"
        }
      ]
    }
  },
  methods: {
    back: function () {

    }
  }
}
</script>

<style scoped>
p {
  margin: 0 0;
  padding: 0;
}

p.tag {
    letter-spacing: 2px;
}

p.under-group {
  margin-top: 20px;
}

.counter {
  color: #36B991;
  margin-left: 5px;
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
