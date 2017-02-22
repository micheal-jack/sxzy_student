<template>
<div class="full-page-div">
  <cui-navbar v-on:back="back" :title="title">
    <a v-on:click="showMembers" class="menu-button" slot="right">
        <i ><img src="static/img/assets/msg/list.png" /></i>
    </a>

  </cui-navbar>
  <scroller style="top:90px;background: #FFFFFF;"  ref="my_scroller" :on-refresh="refresh" >
      <el-row class="content" v-for="item in class_infos">
          <el-col :span="4" style="width:100px;">
            <div v-if="item.msg_type==='1'" style="height:32px;float:right;">
              <span style="font-size: 16px;color: #999999; position:relative;right:-50%;">
                {{item.msg_date_flag}}
              </span>
            </div>
            <div v-else style="width:2px;height:100px;background-color:#E6E6E6;float:right;" ></div>
          </el-col>
          <el-col :span="18" >
            <div v-if="item.msg_type==='1'" style="height:10px;"></div>
            <div v-else class="item">
              <div style="float:left; ">
                <img :src=item.msg_head_url style="width:48px;height:48px;margin-top:10px;margin-left:15px;"/>
              </div>
              <div style="float:left;margin-top:24px;margin-left:20px;">
                <span class="com-text">{{item.msg_sb}}</span>
                <span class="com-text">{{item.msg_do}}</span>
                <span class="spe-text">{{item.msg_sth}}</span>
                <template v-if="item.msg_rst!==''">
                  <span class="com-text">，并取得</span>
                  <span class="spe-text">{{item.msg_rst}}</span>
                  <span class="com-text">的成绩。</span>
                </template>
                <template v-else>
                  <span class="com-text">。</span>
                </template>
              </div>
            </div>
          </el-col>
      </el-row>
  </scroller>
</div>
</template>

<script>
import Scroller from "vue-scroller/src/components/Scroller.vue"
export default {
  components: {
      Scroller
  },
  data () {
    return {
    	title:'我的班级',
      class_infos:[

      ]

    }
  },
  mounted(){
        var arr=[
          {
              msg_type:"",
              msg_date:'2017-2-22',
              msg_head_url:'static/img/assets/class/head.png',
              msg_sb:'张同学',
              msg_do:'完成了',
              msg_sth:'《掩耳盗铃》课后作业',
              msg_rst:'优'
          },
          {
              msg_type:"",
              msg_date:'2017-2-21',
              msg_head_url:'static/img/assets/class/head.png',
              msg_sb:'张同学',
              msg_do:'完成了',
              msg_sth:'《掩耳盗铃》课后作业',
              msg_rst:''

          },
          {
              msg_type:"",
              msg_date:'2017-2-18',
              msg_head_url:'static/img/assets/class/head.png',
              msg_sb:'张同学',
              msg_do:'完成了',
              msg_sth:'《掩耳盗铃》课后作业',
              msg_rst:'优'
          },
          {
              msg_type:"",
              msg_date:'2017-2-17',
              msg_head_url:'static/img/assets/class/head.png',

              msg_sb:'张同学',
              msg_do:'完成了',
              msg_sth:'《掩耳盗铃》课后作业',
              msg_rst:'优'
          },
          {
              msg_type:"",
              msg_date:'2017-2-17',
              msg_head_url:'static/img/assets/class/head.png',
              msg_msg: '这是第17条消息 '
          },
          {
              msg_type:"",
              msg_date:'2017-2-17',
              msg_head_url:'static/img/assets/class/head.png',
              msg_sb:'张同学',
              msg_do:'完成了',
              msg_sth:'《掩耳盗铃》课后作业',
              msg_rst:'优'
          }
        ];
      this.class_infos=this.getOrderedData(arr);
      console.log(new Date().toDateString())
  },
  methods:{
    refresh() {
        console.log('refresh')
        setTimeout(() => {
            var start = 1
            var l = [];
            for (var i = start; i < 7; i++) {
                l.push({
                    msg_type:"",
                    msg_date:'2017-2-22',
                    msg_head_url:'static/img/assets/class/head.png',
                    msg_sb:'张同学'+i,
                    msg_do:'完成了',
                    msg_sth:'《掩耳盗铃》课后作业',
                    msg_rst:'优'
                })
            }
            this.class_infos=this.getOrderedData(l);
            if (this.$refs.my_scroller)
                this.$refs.my_scroller.finishPullToRefresh();
        }, 1000)
    },
    infinite() {
        console.log('加载更多')
        setTimeout(() => {
            var start = this.class_infos.length + 1;
            console.log(start)
            if (start >= 20) {
                this.$refs.my_scroller.finishInfinite(true);
                return
            }
            var arr=[];
            for (var i = start; i < start + 7; i++) {
                arr.push({
                    msg_type:"",
                    msg_date:'2017-2-22',
                    msg_head_url:'static/img/assets/class/head.png',
                    msg_sb:'张同学'+i,
                    msg_do:'完成了',
                    msg_sth:'《掩耳盗铃》课后作业',
                    msg_rst:'优'
                });
            }
          this.class_infos.concat(this.getOrderedData(arr)) ;
            setTimeout(() => {
                this.$refs.my_scroller.finishInfinite();
            })
        }, 1000)
    },
    getDateByStr(dateStr)
    {
      if (dateStr) {
       var sdate = dateStr.split('-');
       var date = new Date(sdate[0], sdate[1]);
       return date;
   }
    },
    back: function(evt) {
      console.log("back btn click");
    },
    showMembers()
    {
        console.log("show my class members");
    },
    getDateStr(date)
    {
      var y = date.getFullYear();
      var m = date.getMonth()+1;//获取当前月份的日期
      var d = date.getDate();
      return y+"-"+m+"-"+d;
    },
    getDateStrByOffset(AddDayCount)// 根据偏移得到日期字符串
    {
      var dd = new Date();
      dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
      var y = dd.getFullYear();
      var m = dd.getMonth()+1;//获取当前月份的日期
      var d = dd.getDate();
      return y+"-"+m+"-"+d;
    },
    getOrderedData(arr)
    {
      var newArr=[];

      var todayStr=this.getDateStrByOffset(0);
      var yesterdayStr=this.getDateStrByOffset(-1);
        var lastDate=todayStr;
      for (var i=0;i<arr.length;i++)
      {
        var item=arr[i];
        console.log(">>"+item.msg_date);
        var d=this.getDateByStr(item.msg_date);
        if(item.msg_date==todayStr)
        {
          item.msg_date_flag="今天";
        }else if(item.msg_date==yesterdayStr)
        {
          item.msg_date_flag="昨天";
        }else {
          item.msg_date_flag=item.msg_date;
        }
        if(lastDate!=item.msg_date_flag)
        {
          lastDate=item.msg_date_flag;
          var newItem={msg_type:'1',msg_date:item.msg_date,msg_date_flag:item.msg_date_flag,_msg:""};
          newArr.push(newItem);
        }else {
          item.msg_type="2";
        }
        newArr.push(item);
      }
      for(var j=0;j<newArr.length;j++)
      {
        var it=newArr[j]
        console.log(it.msg_date+"---"+it.msg_msg);
      }
      return newArr;

    }
  }
}
</script>

<style scoped>
.full-page-div{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #FFFFFF;
}
.menu-button {
    display: block;
    cursor: pointer;
}
.content{

  overflow: hidden;
  clear: both;
}
.item
{
  height: 68px;
  background: #F5F5F5;
  border-radius: 4px 4px 4px 4px 0 0 0;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 20px;
  white-space: nowrap;
}
.com-text
{
  height:22px;
  font-size:  16px;
  color: #666666;
  line-height:22px;
  vertical-align:50%;
}
.spe-text
{
  height:22px;
  font-size:  16px;
  color: #79CEB4;
  line-height:22px;
  vertical-align:50%;
}


</style>
