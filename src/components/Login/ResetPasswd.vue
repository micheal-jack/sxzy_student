<template>
  <div class="login-page">
    <div id="centerBg" class="centerBg">
      <div class="login-title">
        <span>
        {{title}}
      </span>
      </div>
      <div class="login-head">
        <img id="step_img" width="139" height="30" src="static/img/assets/login/step_1.png"/></div>
      <div id="step_one_div" v-bind:class="{ 'hidden_div': curSetp==2, 'show_div': curSetp==1 }">
        <div  class="phone_num_input" >
        <input id="phone_num_input"    placeholder="手机号" type="text" @input="checkText('phone_num_input')" ></div>
        <div class="del_text_div" id="phone_num_text_del_div" style="margin-left: 250px;">
          <img id="phone_num_text_del_img"  src="static/img/assets/login/input_del.png" @click="delText('phone_num_text_del_img')"/>
        </div>
        <div class="check_btn_div" >
          <button id="getCheckNumBtn" class="right" type="button" name="button" disabled="true" @click="dogetCheckNum">获取验证码</button>
        </div>
      <div class="login_input">
        <input id="check_num_input" placeholder="验证码" type="text" @input="checkText('check_num_input')"></div>
        <div class="del_text_div" id="check_num_text_del_div" >
          <img id="check_num_text_del_img" src="static/img/assets/login/input_del.png" @click="delText('check_num_text_del_img')" />
        </div>
      <div class="reset_button">
        <button id="nextBtn" class="right" type="button" name="button" disabled="false" @click="deNextSetp()">下一步</button>
      </div>
      </div>
      <div id="step_two_div" v-bind:class="{ 'hidden_div': curSetp==1, 'show_div': curSetp==2 }">
      <div class="login_input">
        <input id="pwd0_input"    placeholder="输入新密码" type="text" @input="checkText('pwd0_input')"></div>
        <div class="del_text_div" id="pwd0_text_del_div">
          <img id="pwd0_text_del_img"  src="static/img/assets/login/input_del.png" @click="delText('pwd0_text_del_img')"/>
        </div>

      <div class="login_input">
        <input id="pwd1_input" placeholder="再次输入新密码" type="text" @input="checkText('pwd1_input')"></div>
        <div class="del_text_div" id="pwd1_text_del_div">
          <img id="pwd1_text_del_img" src="static/img/assets/login/input_del.png" @click="delText('pwd1_text_del_img')" />
        </div>
      <div class="reset_button">
        <button id="resetBtn" class="right" type="button" name="button" disabled="true" @click="doResetPwd">确认修改</button>
      </div>
    </div>
      <div class="login_setting">
        <router-link :to="{ path: '../Login' }" class="setting_server" style="margin-left:200px;margin-right:32px;">取消</router-link>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
      return {

        pwdLengthMin:3,// 登录密码最小长度
        pwdLengthMax:20,// 登录密码最大长度
        phoneNumLength:4,// 电话号码长度
        checkNumLength:4,// 验证码长度
        getCheckNumGap:10,//获取验证码的间隔，单位：秒
        newPwd:'',// 重置的密码
      	title:'找回密码',
        curSetp:1,
        active: 0
      };
    },
    methods: {
      setDelImg(id)
      {
        console.log("setDelImg:"+id)
          var inp=document.getElementById(id);
          var rStr=inp.value;
          rStr=rStr.replace(/(^\s*)/g, "");
          inp.value=rStr;
          var opInput;
          if(id=="pwd0_input")
          {
            opInput=document.getElementById("pwd0_text_del_div");
          }else if(id=="pwd1_input")
          {
            opInput=document.getElementById("pwd1_text_del_div");
          }else if(id=="phone_num_input")
          {
            opInput=document.getElementById("phone_num_text_del_div");
          }else if(id=="check_num_input")
          {
              opInput=document.getElementById("check_num_text_del_div");
          }
          if(rStr.length>0)
          {
            opInput.style.opacity=1;
            console.log("show")
          }else  {
            opInput.style.opacity=0;
            console.log("hidden")
          }
      },
      // 输入检查
      checkText(id)
      {
          console.log(id)
          var inp=document.getElementById(id);
          var rStr=inp.value;
          rStr=rStr.replace(/(^\s*)/g, "");
          inp.value=rStr;
          this.setDelImg(id);
          if(this.curSetp==1)
          {
              if(id=="phone_num_input")
              {
                if(rStr.length==this.phoneNumLength)
                {
                    this.setBtn(true,"getCheckNumBtn");
                }else {
                    this.setBtn(false,"getCheckNumBtn");
                }
              }else if(id=="check_num_input")
              {
                if(rStr.length==this.checkNumLength)
                {
                  this.setBtn(true,"nextBtn");
                }else {
                  this.setBtn(false,"nextBtn");
                }
              }
          }
          else if(this.curSetp==2)
          {
              if(rStr.length>=this.pwdLengthMin&&rStr.length<=this.pwdLengthMax&&
                (document.getElementById("pwd0_input").value==document.getElementById("pwd1_input").value))
              {
                console.log('two pwd is equal');
                //document.getElementById("resetBtn").disabled=false;
                this.setBtn(true,"resetBtn");
                this.newPwd=rStr;

            }else {
              this.setBtn(false,"resetBtn");
              this.newPwd="";
                console.log('two pwd is not equal');
            }
          }
      },

      setBtn(flag,id)
      {
        var btn=document.getElementById(id);
        if(flag)
        {
          btn.disabled=false;
          btn.style.opacity=1;
        }else {
          btn.disabled=true;
          btn.style.opacity=0.5;
        }
      },
      delText(id)
      {
        var delType=id;
        // console.log(delType);
        var opInput;
        var delDiv;
        var btnId;
        if(delType=="pwd0_text_del_img")
        {
            // login.account_input.text='';
          opInput=  document.getElementById('pwd0_input');
          delDiv=document.getElementById('pwd0_text_del_div');
          btnId='resetBtn';
        } else if(delType=="pwd1_text_del_img")
        {
          opInput=  document.getElementById('pwd1_input');
          delDiv=document.getElementById('pwd1_text_del_div');
            btnId='resetBtn';
        }else if(delType=="phone_num_text_del_img")
        {
          opInput=  document.getElementById('phone_num_input');
          delDiv=document.getElementById('phone_num_text_del_div');
          btnId='getCheckNumBtn';
        }else if(delType=="check_num_text_del_img")
        {
          opInput=  document.getElementById('check_num_input');
          delDiv=document.getElementById('check_num_text_del_div');
          btnId='nextBtn';
        }
        opInput.value='';
        delDiv.style.opacity=0;
        this.setBtn(false,btnId)
        this.newPwd="";
      },
      doResetPwd()
      {
        if(this.newPwd!="")
        {
          console.log("重置密码，新密码是："+this.newPwd);
        }else {
          console.log("密码设置错误。");
        }
      },
      // 获取验证码
      dogetCheckNum(event)
      {
        console.log(event.target)
        var inputPhoneNum=document.getElementById("phone_num_input").value;
        // 检查验证码
        // todo
        var flag=true;
        if(true)
        {
          // 发送请求
          // todo
          // 设置倒计时按钮
          this.setBtn(false,"getCheckNumBtn");
          var t = this.getCheckNumGap;
          var i = setInterval(function(){
            if(t > 0) {
              event.target.innerHTML =(t--)+"秒后重试";
              event.target.disabled = true;
            } else {
              window.clearInterval(i);
              event.target.innerHTML ='获取验证码';
              event.target.disabled=false;
              event.target.style.opacity=1;
            }
          }, 1000);
        }else
        {
          // 提示错误信息
          // todo
        }
      },

      // 点击“下一步”按钮
      deNextSetp()
      {
        this.curSetp=2;
        var img=document.getElementById("step_img");
        img.src="static/img/assets/login/step_2.png";
      }
    },
    mounted(){
      console.log('>>>mounted'+this.curSetp)
      this.curSetp=1;
    }
  }

</script>

<style scoped>
.login-page{
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 0;
}
.centerBg{
  opacity: 0.94;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(203,203,203,0.50);
  border-radius: 10px;
  width: 450px;
  height: 450px;

  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
}
.login-title{

  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
  line-height: 40px;
  width: 80px;
  height: 40px;
  margin: 24px auto;
}
.login-head{
  position: relative;
  width: 139px;
  height: 40px;
  margin: 50px auto;
}

.login_input{
  position: relative;
  background: #EEEEEE;
  border-radius: 4px;
  width: 320px;
  height: 45px;
  margin:11px auto;
}

.login_input input {
  border-style: none;
  background-color:transparent;
  width: 280px;
  height: 45px;
  font-size: 16px;
  color: #3E6373;
  line-height: 16px;
  padding-left: 10px;
  padding-right:30px;

  margin:  auto;
}
.reset_button{
  width: 320px;
  height: 46px;
  margin: auto;
}
.reset_button button{
  width: 320px;
    height: 46px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: #36B991;
    opacity:0.5;
}
.phone_num_input{
  position: relative;
  background: #EEEEEE;
  border-radius: 4px;
  width: 220px;
  height: 45px;
  margin:11px 65px;
}

.phone_num_input input {
  border-style: none;
  background-color:transparent;
  width: 180px;
  height: 45px;
  font-size: 16px;
  color: #3E6373;
  line-height: 16px;
  padding-left: 10px;
  padding-right:30px;
}
.check_btn_div{
  width: 100px;
  height: 46px;
  display:block;
  z-index: 1;
  position: absolute;
  margin-left: 290px;
  margin-top: -55px;
}
.check_btn_div button{
  width: 100px;
    height: 46px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    color: #FFFFFF;
    background-color: #36B991;
    opacity:0.5;
}
.login_setting{
  width:100%;
  height:20px;
  margin:32px auto;
  color:#999999;
}


a{
  text-decoration:none;
  font-size: 16px;
  color: #999999;
}

.del_text_div{
  opacity:0;
  display:block;
  z-index: 1;
  position: absolute;
  width: 16px;
  height: 16px;
  margin-left: 360px;
  margin-top: -40px;
}
.hidden_div{
  display: none;
}
.show_div{
  display:block;;
}
</style>
