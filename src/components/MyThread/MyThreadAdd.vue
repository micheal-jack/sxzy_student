<template>
    <div class="add-question">
        <cui-navbar v-on:back="back" :title="title">
            <a v-on:click="showCategoryList" class="menu-button" slot="right">
                保存
            </a>
        </cui-navbar>
        <div class="top">
            <span class="top-info">选择课程：</span>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="语文"></el-checkbox>
                <el-checkbox label="数学"></el-checkbox>
                <el-checkbox label="英语"></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="question">
            <span>主题：</span>
            <el-input v-model="input" placeholder="请输入主题"></el-input>
        </div>
        <div class="question-content">
            <span>问题：</span>
            <el-input type="textarea" placeholder="请输入问题" v-model="textarea">
            </el-input>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                title: '提问',
                checkList: [],
                input: ''
            }
        },
        methods: {
            back: function(evt) {
                console.log("back btn click");
            },
            showCategoryList: function(evt) {
                console.log("show category list");
            }
        },
}
</script>
<style>
.add-question .el-textarea .el-textarea__inner {
    height: 200px;
    resize: none;
}
</style>
<style scoped>
.add-question {
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: .8;
    padding-top: 90px;
}
.menu-button {
	font-size: 24px;
	color: #666;
	line-height: 44px;
}
.top {
    height: 72px;
    background: #fff;
}

.top-info {
    width: 80px;
    float: left;
    margin-left: 36px;
    line-height: 72px;
}

.el-checkbox-group {
    float: left;
    font-size: 18px;
    margin-top: 22px;
    margin-left: 10px;
}

.question {
    height: 72px;
}

.question span,
.question-content span {
    width: 80px;
    text-align: right;
    float: left;
    line-height: 36px;
    margin-left: 36px;
}

.el-textarea {
    width: 80%;
    float: left;
    height: 200px;
    margin-left: 10px;
}

.el-input {
    width: 80%;
    float: left;
    margin-left: 10px;
}
</style>
