<template>
<div>{{title}}

<ul>
	<li><router-link :to="{ name: 'SettingAvatar'}">头像</router-link></li>
	<li><router-link :to="{ name: 'SettingLogin'}">登录信息</router-link></li>
	<li><router-link :to="{ name: 'SettingPasswd'}">密码</router-link></li>
	<li><router-link :to="{ name: 'SettingUserInfo'  }">个人信息</router-link></li>
	<li><router-link :to="{ name: 'SettingHelp'  }">使用帮助</router-link></li>
	<li><router-link :to="{ name: 'SettingList'  }">设置</router-link></li>
</ul>

<router-view></router-view>

</div>
</template>

<script>
export default {
  data () {
    return {
    	title:'个人中心设置'
    }
  }
}
</script>

<style scoped>

</style>