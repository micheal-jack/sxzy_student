<template>
<div class="msg-page">
  <cui-navbar v-on:back="back" :title="title">
    <a v-on:click="presentContacters" class="menu-button" slot="right">
      <i class="el-icon-menu large"></i>
    </a>
  </cui-navbar>
  <el-row class="content">
    <el-col class="msg-list" :span="10">
      <!-- left scroll list -->
      <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller" style="width: 380px;padding-bottom: 50px;">
        <div class="avatar-list-item" v-for="session in session_list">
          <div class="cui-row">
            <div class="cui-col avatar-col">
              <el-badge :value="session.unread" class="item">
                <img class="avatar-img" :src="session.user.avatar" />
              </el-badge>
            </div>
            <div class="cui-col">
              <p class="avatar-title">{{session.user.name}}<span>{{session.time}}</span></p>
              <p class="avatar-content">{{session.lastMessage}}</p>
            </div>
          </div>
        </div>
      </scroller>
    </el-col>
    <el-col class="chat-window" :span="14">
      <div class="chat-content">
        <ol class="content-list">
          <li>
             <img class="msg-avatar" src="static/img/avatar-finn.png" draggable="false"/>
             <div class="msg me">我昨天的作业成绩优</div>
             <div class="space"></div>
          </li>
          <li>
             <div class="space"></div>
             <div class="msg them">我昨天的作业成绩优</div>
             <img class="msg-avatar" src="static/img/avatar-finn.png" draggable="false"/>
          </li>
        </ol>
      </div>
      <div class="bottom-bar">
        <div class="bar-wrapper">
          <input class="textarea" type="text" placeholder="输入内容" />
          <div class="camera"></div>
        </div>
        <el-button class="enter" type="success">发送</el-button>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import Scroller from "vue-scroller/src/components/Scroller.vue"

const session_list = [{
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "晚安...."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 2,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 5,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 4,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}, {
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
}]

export default {
  data() {
    return {
      title: '消息列表',
      session_list: []
    }
  },
  components: {
    Scroller
  },
  mounted() {
    for (var i = 0; i <= 10; i++) {
      this.session_list.push(session_list[i]);
    }
    this.top = 1
    this.bottom = 10
  },
  methods: {
    back: function(evt) {
      console.log("back btn click");
    },
    presentContacters: function(evt) {

    },
    refresh() {
      setTimeout(() => {
        let start = this.top - 1
        for (let i = start; i > start - 10; i--) {
          // this.session_list.splice(0, 0, i + ' - keep walking, be 2 with you.')
        }
        this.top = this.top - 10;

        if (this.$refs.my_scroller)
          this.$refs.my_scroller.finishPullToRefresh()
      }, 1500)
    },
    infinite() {
      if (this.bottom >= session_list.length) {
        setTimeout(() => {
          this.$refs.my_scroller.finishInfinite(true)
        }, 1500)
        return;
      }

      setTimeout(() => {
        let start = this.bottom + 1
        for (let i = start; i < start + 10; i++) {
          // this.session_list.push(i + ' - keep walking, be 2 with you.')
        }
        this.bottom = this.bottom + 10;
        setTimeout(() => {
          this.$refs.my_scroller.finishInfinite()
        })
      }, 1500)
    }
  }
}
</script>

<style scoped>

.app-bg {
  background-image: none;
}

.msg-page>nav {
  opacity: 0.9;
  /*background: #ffffff;*/
  box-shadow: 0 1px 1px 0 rgba(184, 184, 184, 0.50);
}

.content {
  /*background: #ffffff;*/
  margin: 85px 0 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
}

.msg-list {
  width: 380px;
  height: 100%;
  opacity: 0.85;
  background: #FFFFFF;
}

._v-container {
  opacity: 0.85;
  background: #FFFFFF;
}

.chat-window {
  flex: 1;
  -webkit-flex: 1;
  opacity: 0.78;
  background: #FFFFFF;
  box-shadow: inset 1px 0 0 0 rgba(0, 0, 0, 0.20);
  margin-bottom: -50px;
}

.avatar-list-item {
  background: #FFFFFF;
  box-shadow: 0 1px rgba(184, 184, 184, 0.50);
  margin-left: 20px;
  height: 90px;
  margin-top: 1px;
  width: 360px;
}

.cui-row {
  display: flex;
  display: -webkit-flex;
}

.cui-col {
  flex: 1;
  -webkit-flex: 1;
}

.avatar-col {
  width: 85px;
  flex: none;
}

.avatar-img {
  width: 68px;
  height: 68px;
  border-radius: 100%;
  margin: -11px 0 11px 0;
}

.item {
  margin-top: 22px;
}

.avatar-title {
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
  margin: 0 0;
  margin-top: 20px;
}

.avatar-title>span {
  font-size: 14px;
  color: #B2B2B2;
  letter-spacing: 0.52px;
  float: right;
  margin: 0 0;
  margin-right: 20px;
}

.avatar-content {
  font-size: 16px;
  color: #9B9B9B;
  letter-spacing: 0;
  margin-top: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.chat-content {
  width: 100%;
  height: 100vh;
}

.content-list {
  list-style: none;
  background: none;
  margin: 0 0;
}

.content-list > li {
  padding: 0.5rem;
  overflow: hidden;
  display: flex;
  display: -webkit-flex;
}

.content-list > li > img {
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 100%;
  border-radius: 100%;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.content-list > li > div.space {
  flex: 1;
  -webkit-flex: 1;
}

.content-list > li > div.me {
  background: #F0F0F0;
  border-radius: 44px 44px 44px 4px;
  padding: 26px 26px 26px 26px;
  margin-left: 20px;
  font-size: 16px;
  color: #4A4A4A;
  letter-spacing: 0;
  line-height: 16px;
}

.content-list > li > div.them {
  float: right;
  opacity: 0.8;
  background: #36B991;
  border-radius: 44px 44px 4px 44px;
  padding: 26px 26px 26px 26px;
  margin-right: 20px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 22px;
}

.bottom-bar {
  margin: 0 0;
  padding: 0 0;
  position: fixed;
  bottom: 6px;
  width: inherit;
  margin-left: 2px;
  display: flex;
	display: -webkit-flex;
	align-items: center;
	flex-wrap: nowrap;
}

.bar-wrapper {
  /*display: flex;
	display: -webkit-flex;
	align-items: center;
	flex-wrap: nowrap;
  margin-left: 2px;*/
  flex: 1;
  -webkit-flex: 1;
}

input.textarea {
  width: 100%;
  height: 34px;
  background: #333;
  border: none;
  outline: none;
  margin-left: 25px;
  color: #666;
  font-weight: 400;
  background: #FFFFFF;
  border-radius: 4px;
  padding-left: 25px;
  font-size: 16px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  display: inline-block;
}

.camera {
  position: absolute;
  top: 0px;
  background-image: url("/static/img/assets/msg/camera.png");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 100;
  cursor: pointer;
  width: 24px;
  height: 18px;
  margin: 6px 6px 3px 10px;
}

.camera:active {
  opacity: 0.9;
}

.enter {
  width: 56px;
  height: 34px;
  margin-left: 40px;
  margin-right: -36px;
  cursor: pointer;
  background: #36B991;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0.52px;
  flex: none;
  -webkit-flex: none;
}
</style>
