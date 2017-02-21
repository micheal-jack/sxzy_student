<template>
<div>
  <!--header-->
  <cui-navbar v-on:back="back" :title="title">
    <div slot="right">
      <a class="menu-button">
        <img src="static/img/assets/homework/search.png" />
      </a>
      <el-dropdown trigger="click">
        <a class="menu-button">
          <img src="static/img/assets/homework/list.png" />
        </a>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>待完成</el-dropdown-item>
          <el-dropdown-item>已完成</el-dropdown-item>
          <el-dropdown-item>已评阅</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    </div>
  </cui-navbar>
  <!--content-->
  <div class="content">
     <div class="head-row-wrapper">
      <el-row :gutter="0">
        <el-col :span="4"><div class="grid-content"> </div></el-col>
        <el-col :span="14">
          <div class="grid-content">
            <div class="button-bar-wrapper">
              <el-button @click="toggleChange(0)" :class="finishedClassObject">待完成</el-button>
              <el-button @click="toggleChange(1)" :class="commitClassObject">已提交</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content content-offset-right">
            <el-select v-model="value" placeholder="选择学期">
             <el-option
               v-for="item in options"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
          </div>
        </el-col>
      </el-row>
    </div><!--end of content header row-->

    <div class="homework-list">

    <scroller style="position:relative;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
    <el-row :gutter="20">
      <el-col  :span="12" v-for="item in homework_list">
      <div class="homework-list-item">
        <el-row>
          <el-col :span="16">
            <div class="grid-content">
              <p class="item-title">三年级语文（上）</p>
              <p class="item-publishtime">发布时间：2016-11-12</p>
              <p>
                <span class="item-chapter">第一章   第一节</span>
                <br/>
                <span class="item-sub-chapter">第1课时：大海故乡</span>
              </p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
               <div class="item-score-badge">
                 <span>优</span>
               </div>
            </div>
          </el-col>
        </el-row>
        <hr />
        <el-row :gutter="20" class="item-bottom-row">
          <el-col :span="16">
            <div class="grid-content">
              <p>
                <span class="item-bottom-label item-a-submit">
                  <router-link :to="{path: 'workprocess'}" class="item-bottom-link">5</router-link>人已提交
                 <!-- <a class="item-bottom-link">5</a>人已提交 -->
                </span>
                <span class="item-bottom-label item-a-unfinished">
                 <a class="item-bottom-link">15</a>人进行中
                </span>
              </p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <p class="item-state-label">待审阅</p>
            </div>
        </el-col>
        </el-row>
        </div>
      </el-col><!--end of list item-->
      </el-row>
      </scroller>

    </div>

  </div>
</div>
</template>

<script>
import Scroller from "vue-scroller/src/components/Scroller.vue"

export default {
  components: {
      Scroller
  },
  mounted() {
      for (var i = 1; i <= 6; i++) {
          this.homework_list.push({
              work_id: i,
              work_title: '课程 ' + i
          })
      }
  },
  computed: {
    finishedClassObject: function () {
      return  {
        "btn-default": true,
        "btn-selected" : this.toggle
      }
    },
    commitClassObject: function () {
      return {
        "btn-default": true,
        "btn-selected" : !this.toggle
      }
    }
  },
  data () {
    return {
    	title:'我的作业',
      options: [{
         value: 'option1',
         label: '2017年上'
       }, {
         value: 'option2',
         label: '2016年下'
       }, {
         value: 'option3',
         label: '2016年上'
       }, {
         value: 'option4',
         label: '2015年下'
       }, {
         value: 'option5',
         label: '2015年上'
       }],
       value: "option1",
       toggleValue: 0,
       toggle: true,
       homework_list: []
    }
  },
  methods: {
    back: function () {

    },
    toggleChange: function(i) {
      if (this.toggleValue != i) {
        this.toggleValue = i;
        this.toggle = !this.toggle;
      }
    },
    refresh() {
        console.log('refresh')
        setTimeout(() => {
            var start = 1
            var l = [];
            for (var i = start; i < 7; i++) {
                l.push({
                        work_id: i,
                        work_title: '课程New ' + i
                    })
            }
            this.homework_list = l
            if (this.$refs.my_scroller)
                this.$refs.my_scroller.finishPullToRefresh();
        }, 1000)
    },
    infinite() {
        console.log('加载更多')
        setTimeout(() => {
            var start = this.homework_list.length + 1;
            console.log(start)
            if (start >= 20) {
                this.$refs.my_scroller.finishInfinite(true);
                return
            }
            for (var i = start; i < start + 7; i++) {
                this.homework_list.push({
                    work_id: i,
                    work_title: '课程 ' + i
                });
            }
            setTimeout(() => {
                this.$refs.my_scroller.finishInfinite();
            })
        }, 1000)
    },
  }
}
</script>

<style scope>

.menu-button{
  margin: 10px 10px;
}
/**end top nav**/

.el-input__inner {
  border:none;
  font-size: 16px;
  color: #666666;
  text-align: center;
}

.head-row-wrapper {
  position: relative;
  top: 1.67rem;
}
.head-row-wrapper > div.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.head-row-wrapper > div.el-row > div.el-col > div.grid-content {
  min-height: 4.2rem;
  width: 100%;
}

/*.head-row-wrapper > div.el-row > div.el-col > div.content-offset-right {
  margin-right: 1.67rem;
}*/

.head-row-wrapper > div.el-row > div.el-col > div.content-offset-right > div.el-select {
  float: right;
  right: 1.67rem;
  opacity: 0.86;
  background: #FFFFFF;
  box-shadow: 0 1px 1px 0 rgba(213,213,213,0.50);
  border-radius: 100px;
  width: 11.5rem;
  height: 4.17rem;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.button-bar-wrapper {
  opacity: 0.86;
  background: #FFFFFF;
  box-shadow: 0 1px 1px 0 rgba(213,213,213,0.50);
  border-radius: 100px;
  /*width: 23.33rem;*/
  height: 4.17rem;
  display: table;
  margin: 0 auto;
}

.button-bar-wrapper > button {
  display: inline-block;
  border: none;
  font-size: 16px;
  opacity: 0.86;
  box-shadow: 0 1px 1px 0 rgba(213,213,213,0.50);
  border-radius: 100px;
  height: 4.17rem;
  width: 10rem;
}

.button-bar-wrapper > button.btn-selected {
  opacity: 0.86;
  width: 12.33rem;
  background: #36B991;
  box-shadow: 0 1px 1px 0 rgba(213,213,213,0.50);
  border-radius: 100px;
  color: #FFFFFF;
}

.el-select-dropdown {
  opacity: 0.86;
  background: #FFFFFF;
  box-shadow: 0 1px 1px 0 rgba(213,213,213,0.50);
  border-radius: 12px;
  margin-top: 1.5rem;
  padding-top: 0.5rem;
  width: 11.5rem;
  height: 17.45rem;
}

/**end header wrapper**/

.content {
   margin-top: 85px;
}

.content > .homework-list {
  margin: 2.67rem 1rem 2.67rem 1.5rem;
}

.content > .homework-list > * {
  line-height: normal;
  vertical-align: top;
}

.homework-list-item {
  margin-bottom: 2.5rem;
  height: 18.33rem;
  opacity: 0.85;
  background: #FFFFFF;
  box-shadow: 0 1px 1px 0 rgba(212,212,212,0.50);
  border-radius: 1rem;
}

.homework-list-item > .el-row {
  padding: 1.6rem 0 0 2.5rem;
}

.homework-list-item > .el-row > .el-col > .grid-content > p {
  margin: 0.5rem 0;
}

.homework-list-item > .item-bottom-row {
  padding-top: 0.4rem;
}

.item-bottom-label {
  font-size: 1.6rem;
  color: #2A2A2A;
  line-height: 22px;
}

.item-bottom-link {
  font-size: 1.6rem;
  color: #36B991;
  line-height: 22px;
}

.item-state-label {
  font-size: 1.8rem;
  color: #36B991;
}

.homework-list-item > hr {
  border: 1px solid #EDEDED;
  margin: 0.4rem 1.65rem;
}

.item-title {
  font-size: 1.8rem;
  color: #333333;
}

.item-publishtime {
  font-size: 14px;
  color: #999999;
}

.item-chapter {
  color: #F6A623;
  font-size: 16px;
}
.item-sub-chapter {
  color: #2A2A2A;
  line-height: 28px;
  font-size: 16px;
}
.item-score-badge {
  width: 7.33rem;
  height: 10rem;
  background-image: url('/static/img/assets/homework/badge.png');
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 3.6rem;
  color: #36B991;
}

.item-score-badge > span {
  margin: 4rem 2rem 4rem 2rem;
  line-height: 6.6rem;
}

.badge-active {
  width: 7.33rem;
  height: 10rem;
  background-image: url('/static/img/assets/homework/badge-active.png');
  background-size: contain;
  background-repeat: no-repeat;
}

</style>
