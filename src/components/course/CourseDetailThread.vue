<template>
    <div class="quiz">
        <el-button type="success" v-on:click="appear()" v-show="a">提问</el-button>
        <el-input type="textarea" placeholder="请输入内容" v-model="textarea" v-show="b">
        </el-input>
        <button class="btn-submit"  v-show="b">提问</button>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
            <el-tab-pane label="我的提问" name="first">
                <a class="question-list" href="javascript:;" v-for="item in items">
                    <i class="el-icon-arrow-right"></i>
                    <p class="ql-question">{{item.question}}</p>
                    <p class="ql-time">{{item.time}} <span class="number">{{item.number}}</span>回答</p>
                </a>
            </el-tab-pane>
            <el-tab-pane label="同学提问" name="second">
                <a class="question-list" href="javascript:;" v-for="item in others">
                    <i class="el-icon-arrow-right"></i>
                    <p class="ql-question">{{item.question}}</p>
                    <p class="ql-time">{{item.time}} <span class="number">{{item.number}}</span>回答</p>
                </a>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name: 'course_detail_thread',
    data() {
        return {
            title: '课程详情页-提问',
            activeName: 'second',
            // 我的提问
            items: [{
                question: "垚这个字的读音是什么？",
                time: "发表于21天前 ",
                number: " 1 "
            }, {
                question: "垚这个字的读音是什么？",
                time: "发表于21天前 ",
                number: " 2 "
            }, {
                question: "垚这个字的读音是什么？",
                time: "发表于21天前 ",
                number: " 3 "
            }, {
                question: "垚这个字的读音是什么？",
                time: "发表于21天前 ",
                number: " 1 "
            }],
            // 同学的提问
            others: [{
                question: "花儿为什么这样红？",
                time: "发表于29天前 ",
                number: " 88 "
            }, {
                question: "花儿为什么这样红？",
                time: "发表于29天前 ",
                number: " 88 "
            }, {
                question: "花儿为什么这样红？",
                time: "发表于29天前 ",
                number: " 88 "
            }, {
                question: "花儿为什么这样红？",
                time: "发表于29天前 ",
                number: " 88 "
            }, {
                question: "花儿为什么这样红？",
                time: "发表于29天前 ",
                number: " 88 "
            }],
            textarea: '',
            a: true,
            b: false

        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        appear(){
            this.a = false;
            this.b = true;
        }
    }
}
</script>
<style>
.tabs .el-tabs__header {
    margin-bottom: 0;
}

.tabs .el-tabs__item.is-active {
    color: #36b991;
}

.tabs .el-tabs__active-bar {
    background-color: #36b991;
}
.quiz .el-textarea .el-textarea__inner{
    height: 180px;
    resize: none;
    outline: none;
    width:95%;
    margin:10px auto 0;
}

</style>
<style scoped>
.quiz {
    width: 100%;
}

.el-button--success {
    background: #36b991;
    margin-top: 10px;
    margin-right: 20px;
    float: right;
}

.el-tabs {
    clear: both;
}
.quiz .btn-submit {
    width: 340px;
    height: 46px;
    background: #36b991;
    border-radius: 4px;
    border:none;
    outline: none;
    font-size:18px;
    color: #fff;
    margin-left: 10px;
    margin-top: 10px;
}
.question-list {
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #e7e7e7;
    display: block;
    text-decoration: none;
    padding-top: 10px;
    box-sizing: border-box;
    position: relative;
}

.question-list p {
    margin: 0;
    line-height: 28px;
    text-indent: 10px;
}

.question-list i {
    width: 10px;
    height: 20px;
    display: block;
    position: absolute;
    right: 15px;
    top: 22px;
    color: #999;
}

.ql-question {
    font-size: 16px;
    color: #666;
}

.ql-time {
    font-size: 12px;
    color: #BCBCBC;
}

.ql-time .number {
    color: #36b991;
    margin-left: 10px;
}

</style>
