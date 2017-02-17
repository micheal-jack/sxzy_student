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
      <scroller :on-refresh="refresh"
                :on-infinite="infinite"
                ref="my_scroller"
                style="padding-bottom: 50px; width: 380px;" >
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
      </div>
      <div class="bottom-bar">
        <div class="bar-wrapper">
          <input class="textarea" type="text" placeholder="输入内容"/>
          <div class="camera"></div>
          <el-button  class="enter" type="success">发送</el-button>
        </div>
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
},{
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
},{
  user: {
    name: "张学生",
    username: "zhang",
    avatar: "static/img/avatar-finn.png"
  },
  unread: 12,
  time: "上午10:53",
  lastMessage: "为了确保你的问题可以得到有效的..."
},{
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
          this.session_list.splice(0, 0, i + ' - keep walking, be 2 with you.')
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
          this.session_list.push(i + ' - keep walking, be 2 with you.')
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
.msg-page>nav {
  opacity: 0.9;
  background: #ffffff;
  box-shadow: 0 1px 1px 0 rgba(184, 184, 184, 0.50);
}

.content {
  background: #ffffff;
  margin: 84px 0 0 0;
  width: 100%;
  height: 100vh;
  display: flex;
  display: -webkit-flex;
}

.msg-list {
  width: 380px;
  height: 100%;
  opacity: 0.85;
  background: #FFFFFF;
}

.chat-window {
  flex: 1;
  -webkit-flex: 1;
  opacity: 0.78;
  background: #FFFFFF;
  box-shadow: inset 1px 0 0 0 rgba(0, 0, 0, 0.20);
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
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}

.chat-content {
  width: 100%;
  height: 100vh;
}

.bottom-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
  margin-left: 1px;
}

.bar-wrapper {
	display: flex;
	display: -webkit-flex;
	align-items: center;
	flex-wrap: nowrap;
}

.input-group {
	flex: 1;
}

input.textarea {
	width: 92%;
	height: 50px;
	right: 0;
	background: #333;
	border: none;
	outline: none;
	margin-left: 25px;
	color: #666;
	font-weight: 400;
	background: #FFFFFF;
	border-radius: 4px;
	padding-left: 45px;
	font-size: 16px;
  }

  .camera {
	position: absolute;
	top: 0px;
    background-image: url("http://i.imgur.com/5WUpcPZ.png");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 100;
    cursor: pointer;
    width: 34px;
    height: 34px;
    margin-top: 10px;
    margin-left: 30px;
  }

  .camera:active {
    opacity: 0.9;
  }

  .enter {
    width: 56px;
    height: 34px;
    cursor: pointer;
    background: #36B991;
    border-radius: 4px;
	border: none;
	color: aliceblue;
  }



</style>
