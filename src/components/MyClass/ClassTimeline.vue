<template>
<div class="full-page-div">
  <cui-navbar v-on:back="back" :title="title">
    <a v-on:click="showMembers" class="menu-button" slot="right">
        <i ><img src="static/img/assets/msg/list.png" /></i>
    </a>

  </cui-navbar>
  <scroller style="top:90px;"  ref="my_scroller">
      <el-row class="content" v-for="item in class_infos">
          <el-col :span="4" style="width:140px;height:80px;">
            <div v-if="item.msg_type==='1'">{{item.msg_date}}</div>
            <div v-else style="width:2px;height:80px;border: 1px solid #E6E6E6;float:right;" ></div>
          </el-col>
          <el-col :span="10" >
            <div v-if="item.msg_type==='1'"></div>
            <div v-else class="item">
              <img :src=item.msg_head_url style="width:48px;height:48px;"/>
              <span >{{item.msg_msg}}</span>
              <span >{{item.msg_date}}</span>
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

  methods:{
    getDateByStr(dateStr)
    {
      if (dateStr) {
       var sdate = dateStr.split('/');
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
    getOrderedData(arr)
    {
      var newArr=[];
      var lastDate;
      for (var i=0;i<arr.length;i++)
      {
        var item=arr[i];
        console.log(">>"+item.msg_date);
        var d=this.getDateByStr(item.msg_date);

        if(lastDate!=item.msg_date)
        {
          var newItem={msg_type:'1',msg_date:item.msg_date,msg_msg:""};
          newArr.push(newItem);
          lastDate=item.msg_date;
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
      this.class_infos=newArr;

    }
  },
  mounted(){
        var arr=[
          {
              msg_type:"",
              msg_date:'2017/2/19',
              msg_head_url:'static/img/assets/class/head.png',
              msg_msg: '这是第19条消息 '
          },
          {
              msg_type:"",
              msg_date:'2017/2/18',
              msg_head_url:'static/img/assets/class/head.png',
              msg_msg: '这是第18条消息 '
          },
          {
              msg_type:"",
              msg_date:'2017/2/17',
              msg_head_url:'static/img/assets/class/head.png',
              msg_msg: '这是第17条消息 '
          },
          {
              msg_type:"",
              msg_date:'2017/2/17',
              msg_head_url:'static/img/assets/class/head.png',
              msg_msg: '这是第17条消息 '
          },
          {
              msg_type:"",
              msg_date:'2017/2/17',
              msg_head_url:'static/img/assets/class/head.png',
              msg_msg: '这是第17条消息 '
          }


        ];
      this.getOrderedData(arr);

  }
}
</script>

<style scoped>
.full-page-div{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
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
  height: 80px;
  opacity: 0.84;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(203,203,203,0.50);
  border-radius: 12px;
}


</style>
