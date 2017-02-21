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
  <div :style=this.bodyStyleStr  ref="body_div" id="bodyddd">
    <div :style=this.bodyCenterStr class="bg-div">
      <div >
        <img src="static/img/assets/home/avatar.png" ref="studentImg"/>
      </div>
        <div >
          <div>张同学</div>
          <div>上地实验中学 三年二班</div>
          <div>已连续签到20天</div>
        </div>
        <div >
            <div class="date-text" ref="date">2017年2月21日</div>
            <div><el-button class="btn" ref="btn">签到</el-button></div>
        </div>
    </div>
    <div :style=this.infoStyleStr>
      <el-row>
          <el-col :span="2"  ></el-col>
          <el-col :span="20" :style=this.infoStyleStr >
            <el-row gutter="20">
                <el-col :style="this.smallItemStylStr" class="bg-div"></el-col>
                <el-col :style="this.smallItemStylStr" class="bg-div"></el-col>
                <el-col >
                  <div>

                </div>
                </el-col>

            </el-row>
          </el-col>
          <el-col :span="2" ></el-col>
      </el-row>
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
      bodyStyleStr:'',
      bodyCenterStr:'',
      studentStyleStr:'',
      infoStyleStr:'',
      stuInfoStyleStr:'',
      bigItemStylStr:'',
      smallItemStylStr:'',
      itemWidth:'',
      bodyHeight:0,
      bodyWidth:0
    }
  },
  methods:{
    setLogoMsg(num){
      if(num>0)
      {
        this.$refs.logoMessage.src="static/img/assets/home/message_alert.png";
      }else {
        this.$refs.logoMessage.src="static/img/assets/home/message.png";
      }
    },
    resetBody()
    {
      this.bodyHeight=document.body.clientHeight-85-150-15-15;
      this.bodyWidth=document.body.clientWidth;
      this.bodyStyleStr="margin:15px auto;width:"+this.bodyWidth+"px;height:"+this.bodyHeight+"px;background-color: #00ff00;";
      console.log("计算后的高度："+this.bodyHeight+"|"+this.bodyStyleStr)

      this.bodyCenterStr="margin:auto;width:"+(this.bodyWidth-60)+"px;";
      var stuH=Math.floor((this.bodyHeight-50)/3);
      this.studentStyleStr=this.bodyCenterStr+"height:"+stuH+"px;"
      console.log("计算后的宽度："+this.bodyWidth+"|"+this.studentStyleStr)

      this.itemWidth=Math.floor((this.bodyWidth-260)/5);
      this.infoStyleStr=this.bodyCenterStr+"height:"+(stuH*2)+"px;margin-top:20px;"
      this.stuInfoStyleStr="width:"+(this.bodyWidth-465-60)+"px;height:"+stuH+"px;"
      console.log(this.stuInfoStyleStr);
      this.bigItemStylStr="width:"+this.itemWidth+"px;height:"+(stuH*2)+"px;"
      this.smallItemStylStr="width:"+this.itemWidth+"px;height:"+(stuH)+"px;"
    }
  },
  mounted(){
    this.$refs.logoMessage.src="static/img/assets/home/message_alert.png";

    this.resetBody();
    window.onresize = () => {
                return (() => {
                    this.resetBody();
                })()
            }
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
  top:0px;
}

.foot-div
{
  width: 100%;
  height: 150px;
  background-color: #00ffFF;
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
.date-text{
  font-size: 24px;
color: #666666;
letter-spacing: 0;
}
.btn{
  width: 200px;
  height: 52px;
  background: #36B991;
  border-radius: 100px;
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 30px;
}


</style>
