import Vue from 'vue'
import Router from 'vue-router'

// import Hello from 'components/Hello'

Vue.use(Router)


const CourseDetailCatelog = resolve => require(['components/Course/CourseDetailCatelog.vue'], resolve);

export default new Router({
    routes: [

        //登录
        {
            path: '/login',
            name: 'Login',
            component: resolve => require(['components/Login/Login.vue'], resolve),
        },
        //找回密码-手机验证=====================
        //找回密码-修改密码
        {
            path: '/login/reset_passwd',
            name: 'ResetPasswd',
            component: resolve => require(['components/Login/ResetPasswd.vue'], resolve),
        },
        // 首页
        {
            path: '/',
            name: 'Home',
            component: resolve => require(['components/Home.vue'], resolve)
        },
        //课表
        {
            path: '/class_schedule',
            name: 'ClassSchedule',
            component: resolve => require(['components/ClassSchedule/MyClassSchedule.vue'], resolve),
        },
        // 我的课程
        {
            path: '/mycourse',
            name: 'MyCourse',
            component: resolve => require(['components/Course/MyCourse.vue'], resolve)
        },
        //课程
        {
            path: '/course_detail/:id',
            name: 'CourseDetail',
            component: resolve => require(['components/Course/CourseDetail.vue'], resolve),
            children: [{
                    path: '',
                    name: 'CourseDetailCatelogDefault',
                    component: CourseDetailCatelog,
                },
                // 学习内容-目录
                {
                    path: 'catelog',
                    name: 'CourseDetailCatelog',
                    component: CourseDetailCatelog,
                },
                // 学习内容-笔记
                {
                    path: 'note',
                    name: 'CourseDetailNote',
                    component: resolve => require(['components/Course/CourseDetailNote.vue'], resolve),
                },
                // 学习内容-提问
                {
                    path: 'thread',
                    name: 'CourseDetailThread',
                    component: resolve => require(['components/Course/CourseDetailThread.vue'], resolve),
                }
                // 查看回答问题页面=====================
            ]
        },
        // 练习首页=====================
        // 在线问答=====================
        // 我的作业
        {
            path: '/homework',
            name: 'HomeWorkList',
            component: resolve => require(['components/HomeWork/HomeWorkList.vue'], resolve),
        },
        //作业题-开始
        {
            path: '/homework/:id',
            name: 'HomeworkDetail',
            component: resolve => require(['components/HomeWork/ItemStartAnswer.vue'], resolve),
        },
        // 做作业=====================
        // 我的作业-答题卡
        {
            path: '/homework/:id/answersheet',
            name: 'AnswerSheet',
            component: resolve => require(['components/HomeWork/ItemAnswerSheet.vue'], resolve),
        },
        // 我的作业-同学交作业情况
        {
            path: '/homework/:id/workprogress',
            name: 'WorkProgress',
            component: resolve => require(['components/HomeWork/ItemStudentAnalytics.vue'], resolve),
        },
        // 提交作业=====================
        // 查看待批阅作业=====================
        // 提交作业后的答题卡=====================
        // 其他学期作业=====================
        // 搜索作业=====================
        // 学习质量分析-作业
        {
            path: '/analytics/work',
            name: 'AnalyticsHomeWork',
            component: resolve => require(['components/Analytics/HomeWork.vue'], resolve)
        },
        // 学习质量分析-练习
        {
            path: '/analytics/exercises',
            name: 'AnalyticsExercises',
            component: resolve => require(['components/Analytics/Exercises.vue'], resolve)
        },
        //我的问答
        {
            path: '/mythread',
            name: 'MyThread',
            component: resolve => require(['components/MyThread/MyThreadList.vue'], resolve),
        },
        // 问题详情页=====================
        // 我的问答-新建
        {
            path: '/mythread/add',
            name: 'MyThreadAdd',
            component: resolve => require(['components/MyThread/MyThreadAdd.vue'], resolve),
        },
        // 我的笔记-笔记列表
        {
            path: '/mynote',
            name: 'MyNote',
            component: resolve => require(['components/MyNote/NoteList.vue'], resolve),
        },
        // 我的笔记-详情
        {
            path: '/mynote/:id',
            name: 'MyNoteDetail',
            component: resolve => require(['components/MyNote/NoteDetail.vue'], resolve),
        },
        // 我的笔记-编辑
        {
            path: '/mynote/:id/edit',
            name: 'MyNoteEdit',
            component: resolve => require(['components/MyNote/NoteEdit.vue'], resolve),
        },
        // 我的班级-班级时间线
        {
            path: '/myclass',
            name: 'MyClassTimeline',
            component: resolve => require(['components/MyClass/ClassTimeline.vue'], resolve),
        },
        // 班级成员
        {
            path: '/myclass/member',
            name: 'MyClassMember',
            component: resolve => require(['components/MyClass/ClassMember.vue'], resolve),
        },
        // 我的消息
        {
            path: '/msg',
            name: 'MsgList',
            component: resolve => require(['components/Msg/MsgList.vue'], resolve),
        },
        // 个人中心设置
        {
            path: '/setting',
            name: 'SettingHome',
            component: resolve => require(['components/Setting/SettingHome.vue'], resolve),
            children: [{
                    // 个人中心设置-头像
                    path: '',
                    name: 'SettingAvatar',
                    component: resolve => require(['components/Setting/SettingAvatar.vue'], resolve),
                }, {
                    // 个人中心设置-帮助
                    path: 'help',
                    name: 'SettingHelp',
                    component: resolve => require(['components/Setting/SettingHelp.vue'], resolve),
                },
                // 个人中心设置-设置
                {
                    path: 'list',
                    name: 'SettingList',
                    component: resolve => require(['components/Setting/SettingList.vue'], resolve),
                },
                // 个人中心设置-登录信息
                {
                    path: 'login',
                    name: 'SettingLogin',
                    component: resolve => require(['components/Setting/SettingLogin.vue'], resolve),
                },
                // 个人中心设置-密码
                {
                    path: 'passwd',
                    name: 'SettingPasswd',
                    component: resolve => require(['components/Setting/SettingPasswd.vue'], resolve),
                },
                // 个人中心设置-用户信息
                {
                    path: 'user_info',
                    name: 'SettingUserInfo',
                    component: resolve => require(['components/Setting/SettingUserInfo.vue'], resolve),
                }
            ]
        },
    ]
})
