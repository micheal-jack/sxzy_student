<template>
<div class="login-page">
  <div id="centerBg" class="centerBg" >
    <div class="login-title">
      <span>
      {{title}}
    </span>
    </div>
    <div class="login-head">
      <img id="user_head_img" width="108" height="108" src="static/img/assets/login/default_head.png"/></div>
    <div class="login_input">
      <input id="account_input"   ref="account_input" placeholder="用户名/手机号" type="text" @input="checkText('account_input')"></div>
      <div class="del_text_div" id="account_text_del_div">
        <img id="account_text_del_img"  src="static/img/assets/login/input_del.png" @click="delText('account_text_del_img')"/>
      </div>

    <div class="login_input">
      <input id="pwd_input" placeholder="密码" type="text" @input="checkText('pwd_input')"></div>
      <div class="del_text_div" id="pwd_text_del_div">
        <img id="pwd_text_del_img" src="static/img/assets/login/input_del.png" @click="delText('pwd_text_del_img')" />
      </div>
    <div class="login_button">
      <button class="right" type="button" name="button" disabled="false" @click="doLogin">登录</button>
    </div>
    <div class="login_setting">
      <router-link :to="{ path: 'Login' }" class="setting_server" style="margin-left:117px;margin-right:32px;">设置服务器</router-link>
      <span>|</span>
      <router-link :to="{ path: 'login/reset_passwd' }" class="setting_server" style="margin-left:32px;margin-right:117px;">忘记密码?</router-link>
    </div>
  </div>

  <div id="set_server_div" class="set_div" style="display:none;">
    <div class="set_center_div">
        <div class="login-title" ><span>设置服务器</span></div>
        <div class="login_input"><input id="server_input" placeholder="服务器地址" type="text" @input="checkText('server_input')"></div></div>
        <div class="del_text_div" id="server_text_del_div">
          <img id="server_text_del_img"  src="static/img/assets/login/input_del.png" @click="delText('server_text_del_img')"/>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
    	title:'湖北垄上数字学校 | 学生端'
    }
  },
  methods: {
    doLogin(event){
      var accont=document.getElementById("account_input").value;
      var pwd=document.getElementById("pwd_input").value;
      // 校验输入
      // 提交服务器
    },
    checkText(id)
    {
        // console.log('input text is change')
        var inp=document.getElementById(id);
        var rStr=inp.value;
        rStr=rStr.replace(/(^\s*)/g, "");
        inp.value=rStr;
        // console.log(rStr.length);
        var opInput;
          if(id=="account_input")
          {
            opInput=document.getElementById("account_text_del_div");

          }else if(id=="pwd_input")
          {
            opInput=document.getElementById("pwd_text_del_div");
          }else if(id=="server_input")
          {
            opInput=document.getElementById("server_text_del_div");
            console.log(opInput);
          }
          if(rStr.length>0)
          {
            opInput.style.opacity=1
          }else  {
            opInput.style.opacity=0
          }
        // check
    },
    delText(id)
    {
      var delType=id;
      // console.log(delType);
      var opInput;
      var delDiv;
      if(delType=="account_text_del_img")
      {
          // login.account_input.text='';
        opInput=  document.getElementById('account_input');
        delDiv=document.getElementById('account_text_del_div');
      } else if(delType=="pwd_text_del_img")
      {
        opInput=  document.getElementById('pwd_input');
        delDiv=document.getElementById('pwd_text_del_div');
      }else if(delType=="server_text_del_img")
      {
        opInput=  document.getElementById('server_input');
        delDiv=document.getElementById('server_text_del_div');
      }
      opInput.value='';
      delDiv.style.opacity=0;
    }
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
  width: 250px;
  height: 40px;
  margin: 24px auto;
}
.login-head{
  position: relative;
  width: 107px;
  height: 107px;
  margin: 11px auto;
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
.login_button{
  width: 320px;
  height: 46px;
  margin: auto;
}
.login_button button{
  width: 320px;
    height: 46px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: rgba(54,185,145,1);

}
.login_setting{
  width:100%;
  height:20px;
  margin:32px auto;
}


a{
  text-decoration:none;
  font-size: 16px;
  color:#4990E2;
}

.del_text_div{
  opacity:1;
  display:block;
  z-index: 1;
  position: absolute;
  width: 16px;
  height: 16px;
  margin-left: 360px;
  margin-top: -40px;
}
.set_div{
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  opacity: 0.8;
  background: #000000;
  margin: auto;
}
.set_center_div{
  opacity: 0.94;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(203,203,203,0.50);
  border-radius: 10px;
  width: 445px;
  height: 260px;

  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
}
.set_title{
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
  line-height: 40px;
  width: 250px;
  height: 40px;
  margin: 24px auto;
}

</style>
