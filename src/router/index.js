import Vue from 'vue'
import Router from 'vue-router'

// import Hello from 'components/Hello'

Vue.use(Router)


const CourseDetailCatelog = resolve => require(['components/Course/CourseDetailCatelog.vue'], resolve);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['components/Home.vue'], resolve)
    },
    {
      path: '/mycourse',
      name: 'MyCourse',
      component: resolve => require(['components/Course/MyCourse.vue'], resolve)
    },
    {
      path: '/analytics/work',
      name: 'AnalyticsHomeWork',
      component: resolve => require(['components/Analytics/HomeWork.vue'], resolve)
    },
    {
      path: '/analytics/exercises',
      name: 'AnalyticsExercises',
      component: resolve => require(['components/Analytics/Exercises.vue'], resolve)
    },
    {
      path: '/homework',
      name: 'HomeWorkList',
      component: resolve => require(['components/HomeWork/HomeWorkList.vue'], resolve),
    },
    //作业题
    {
      path: '/homework/:id',
      name: 'HomeworkDetail',
      component: resolve => require(['components/HomeWork/ItemStartAnswer.vue'], resolve),
    },
    {
      path: '/homework/:id/workprogress',
      name: 'HomeWorkList',
      component: resolve => require(['components/HomeWork/ItemStudentAnalytics.vue'], resolve),
    },
    {
      path: '/msg',
      name: 'MsgList',
      component: resolve => require(['components/Msg/MsgList.vue'], resolve),
    },
    {
      path: '/myclass/member',
      name: 'MyClassMember',
      component: resolve => require(['components/MyClass/ClassMember.vue'], resolve),
    },
    {
      path: '/myclass',
      name: 'MyClassTimeline',
      component: resolve => require(['components/MyClass/ClassTimeline.vue'], resolve),
    },
    {
      path: '/mynote',
      name: 'MyNote',
      component: resolve => require(['components/MyNote/NoteList.vue'], resolve),
    },
    {
      path: '/mynote/:id',
      name: 'MyNoteDetail',
      component: resolve => require(['components/MyNote/NoteDetail.vue'], resolve),
    },
    {
      path: '/mynote/:id/edit',
      name: 'MyNoteEdit',
      component: resolve => require(['components/MyNote/NoteEdit.vue'], resolve),
    },
    //课表
    {
      path: '/class_schedule',
      name: 'ClassSchedule',
      component: resolve => require(['components/ClassSchedule/MyClassSchedule.vue'], resolve),
    },
    //问答
    {
      path: '/mythread',
      name: 'MyThread',
      component: resolve => require(['components/MyThread/MyThreadList.vue'], resolve),
    },
    {
      path: '/mythread/add',
      name: 'MyThreadAdd',
      component: resolve => require(['components/MyThread/MyThreadAdd.vue'], resolve),
    },
    //登录
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['components/Login/Login.vue'], resolve),
    },
    //找回密码
    {
      path: '/login/reset_passwd',
      name: 'ResetPasswd',
      component: resolve => require(['components/Login/ResetPasswd.vue'], resolve),
    },
    //课程
    {
      path: '/course_detail/:id',
      name: 'CourseDetail',
      component: resolve => require(['components/Course/CourseDetail.vue'], resolve),
      children: [
      		{
	          path: '',
	          name:'CourseDetailCatelogDefault',
	          component: CourseDetailCatelog,
	        },
	        {
	          path: 'catelog',
	          name:'CourseDetailCatelog',
	          component: CourseDetailCatelog,
	        },
	        {
	          path: 'note',
	          name:'CourseDetailNote',
	          component: resolve => require(['components/Course/CourseDetailNote.vue'], resolve),
	        },
	        {
	          path: 'thread',
	          name:'CourseDetailThread',
	          component: resolve => require(['components/Course/CourseDetailThread.vue'], resolve),
	        }
      ]
    },
    {
      path: '/setting',
      name: 'SettingHome',
      component: resolve => require(['components/Setting/SettingHome.vue'], resolve),
      children: [
      		{
	          path: '',
	          name:'SettingAvatar',
	          component: resolve => require(['components/Setting/SettingAvatar.vue'], resolve),
	        },
	        {
	          path: 'help',
	          name:'SettingHelp',
	          component: resolve => require(['components/Setting/SettingHelp.vue'], resolve),
	        },
	        {
	          path: 'list',
	          name:'SettingList',
	          component: resolve => require(['components/Setting/SettingList.vue'], resolve),
	        },
	        {
	          path: 'login',
	          name:'SettingLogin',
	          component: resolve => require(['components/Setting/SettingLogin.vue'], resolve),
	        },
	        {
	          path: 'passwd',
	          name:'SettingPasswd',
	          component: resolve => require(['components/Setting/SettingPasswd.vue'], resolve),
	        },
	        {
	          path: 'user_info',
	          name:'SettingUserInfo',
	          component: resolve => require(['components/Setting/SettingUserInfo.vue'], resolve),
	        }
      ]
    },
  ]
})
