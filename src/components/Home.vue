<template>
<div class="full-page-div">
  <div class="head-div">
    <div>
      <div class="device-div">

      </div>
    </div>
    <div class="logo-div">
      <div class="logo-logo-div">
        <img src='static/img/assets/home/logo.png'/>
      </div>
      <div class="logo-school-div" ref="schoolName">
          分校名称
      </div>
      <div class="logo-message-div">
          <img ref="logoMessage" src='static/img/assets/home/message.png'/>
      </div>
    </div>
  </div>
  <div class="body-div">
    <div class="body-student bg-div">
      签到
    </div>

    <div class="body-group-div">
      <div class="body-course bg-div">课程</div>
      <div class="body-homework bg-div">作业</div>
      <div class="body-others bg-div">
        <div class="body-item">1</div>
        <div class="body-item">2</div>
        <div class="body-item">3</div>
        <div class="body-item">4</div>
        <div class="body-item">5</div>
        <div class="body-item">6</div>
      </div>
    </div>
  </div>
  <div class="foot-div">
    <router-link :to="{ path: 'mycourse' }">课程</router-link>
    <router-link :to="{ path: 'homework' }">作业</router-link>
    <router-link :to="{ path: 'thread' }">问答</router-link>
    <router-link :to="{ path: 'myclass' }">班级</router-link>
    <router-link :to="{ path: 'class_schedule' }">课表</router-link>
    <router-link :to="{ path: 'mynote' }">笔记</router-link>
    <router-link :to="{ path: 'Login' }">登录</router-link>
    <router-link :to="{ path: 'login/reset_passwd' }">找回密码</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods:{
    setLoginMsg(num){
      if(num>0)
      {
        this.$refs.logoMessage.src="static/img/assets/home/message_alert.png";
      }else {
        this.$refs.logoMessage.src="static/img/assets/home/message.png";
      }
    }
  },
  mounted(){
    this.$refs.logoMessage.src="static/img/assets/home/message_alert.png";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-div{
  opacity: 0.84;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(203,203,203,0.50);
  border-radius: 12px;
}
.full-page-div{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.head-div
{
  width: 100%;
  height: 84px;
  background-color: #FFFFFF;
  position: absolute;
  top:0px;
}
.body-div
{

padding: 100px 32px 150px 32px;
  background-color: #FF00FF;
}
.foot-div
{
  width: 100%;
  height: 150px;
  background-color: #FF0000;
  position: absolute;
  bottom: 0px;
  left: 0px;
}
.device-div
{
  width: 100%;
  height: 2px;
  left: 0;
  top:0;
  position: absolute;
}
.logo-div
{
  width: 100%;
  height: 100%;
  padding-top: 21px;

}
.logo-logo-div
{
  width: 217px;
  height: 52px;
  left: 17px;
  top:21px;
  position: absolute;
}
.logo-school-div
{
  width: 150px;
  height: 24px;
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;
  left:262px;
  top:38px;
  position: absolute;
}
.logo-message-div
{
  width: 42px;
  height: 42px;
  top:26px;
  right: 35px;
  position: absolute;
  cursor: pointer;
}

.body-student
{
  height: 21%;
  margin-top: 15px;
}
.body-group-div
{
   padding-top: 32px;
   margin: 0;
}
.body-course
{
  display:inline-block;
  width: 18%;
  height: 100%;
  margin: 0;

}
.body-homework
{
  display:inline-block;
  width: 18%;


}
.body-others
{
  width: 50%;
  display:inline-block;
  margin-right: 0;
  padding-right: 0;


}
</style>
