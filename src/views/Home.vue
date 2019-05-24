<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" id="order-list" class="pos-order">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称" width="width"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="div-btn">
              <el-button type="warning" size="small">挂单</el-button>
              <el-button type="danger" size="small">删除</el-button>
              <el-button type="success" size="small">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">配置管理</el-tab-pane>
          <el-tab-pane label="外卖">角色管理</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="title">常用商品</div>
        <div class="often-goods-list">
          <ul>
            <li v-for="item in oftenGoods">
              <span>{{item.goodsName}}</span>
              <span class="o-price">￥{{item.price}}元</span>
            </li>
          </ul>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class="cookList">
                <li v-for="item in type0Goods">
                  <span class="foodImg">
                    <img :src="item.goodsImg" width="100%">
                  </span>
                  <span class="foodName">{{item.goodsName}}</span>
                  <span class="foodPrice">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
               <ul class="cookList">
                <li v-for="item in type1Goods">
                  <span class="foodImg">
                    <img :src="item.goodsImg" width="100%">
                  </span>
                  <span class="foodName">{{item.goodsName}}</span>
                  <span class="foodPrice">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
               <ul class="cookList">
                <li v-for="item in type2Goods">
                  <span class="foodImg">
                    <img :src="item.goodsImg" width="100%">
                  </span>
                  <span class="foodName">{{item.goodsName}}</span>
                  <span class="foodPrice">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
               <ul class="cookList">
                <li v-for="item in type3Goods">
                  <span class="foodImg">
                    <img :src="item.goodsImg" width="100%">
                  </span>
                  <span class="foodName">{{item.goodsName}}</span>
                  <span class="foodPrice">￥{{item.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { fetchOftenGoods, fetchTypeGood } from "@/api/goods/requestgood";
export default {
  name: "pos",
  components: {},
  created() {
    var _this = this;
    fetchOftenGoods()
      .then(function(data) {
        console.log(data);
        _this.oftenGoods = data.data;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
    fetchTypeGood()
      .then(data => {
        console.log(data);
        _this.type0Goods = data.data[0];
        _this.type1Goods = data.data[1];
        _this.type2Goods = data.data[2];
        _this.type3Goods = data.data[3];
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  mounted() {
    var orderHeight = document.body.clientHeight;
    console.log(orderHeight);
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
  data() {
    return {
      tableData: [
        {
          goodsName: "可口可乐",
          price: 8,
          count: 1
        },
        {
          goodsName: "香辣鸡腿堡",
          price: 15,
          count: 1
        },
        {
          goodsName: "爱心薯条",
          price: 8,
          count: 1
        },
        {
          goodsName: "甜筒",
          price: 8,
          count: 1
        }
      ],
      oftenGoods: [
        // {
        //   goodsId: 1,
        //   goodsName: '香辣鸡腿堡',
        //   price: 18
        // },
        // {
        //   goodsId: 2,
        //   goodsName: '田园鸡腿堡',
        //   price: 15
        // },
        // {
        //   goodsId: 3,
        //   goodsName: '和风汉堡',
        //   price: 15
        // },
        // {
        //   goodsId: 4,
        //   goodsName: '快乐全家桶',
        //   price: 80
        // },
        // {
        //   goodsId: 5,
        //   goodsName: '脆皮炸鸡腿',
        //   price: 10
        // },
        // {
        //   goodsId: 6,
        //   goodsName: '魔法鸡块',
        //   price: 20
        // },
        // {
        //   goodsId: 7,
        //   goodsName: '可乐大杯',
        //   price: 10
        // },
        // {
        //   goodsId: 8,
        //   goodsName: '雪顶咖啡',
        //   price: 18
        // },
        // {
        //   goodsId: 9,
        //   goodsName: '大块鸡米花',
        //   price: 15
        // },
        // {
        //   goodsId: 20,
        //   goodsName: '香脆鸡柳',
        //   price: 17
        // }
      ],
      type0Goods: [
        {
          goodsId: 1,
          goodsImg: require("../assets/timg.jpg"),
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsImg: require("../assets/timg.jpg"),
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsImg: require("../assets/timg.jpg"),
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsImg: require("../assets/timg.jpg"),
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsImg: require("../assets/timg.jpg"),
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsImg: require("../assets/timg.jpg"),
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsImg: require("../assets/timg.jpg"),
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsImg: require("../assets/timg.jpg"),
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsImg: require("../assets/timg.jpg"),
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsImg: require("../assets/timg.jpg"),
          goodsName: "香脆鸡柳",
          price: 17
        }
      ],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
    };
  },
  methods:{
    addOrderlist(item){
      let isHave=false;
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].goodsID==item.goodsID){
          isHave=true;
        }
      }
      if(isHave){
        let arr = this.tableData.filter(o=>o.goodsId=item.goodsID);
        arr[0].count++;
      }else{
        this.tableData.push(item)
      }
    }
  }
};
</script>
<style lang="less">
@bdColor: #e4e7ed;
@bgColor: #f9fafc;
@color: #58b7ff;
@li: {
  float: left;
  list-style: none;
  background: #fff;
  border: 1px solid @bdColor;
};
.pos-order {
  background-color: @bgColor;
  border-right: 1px solid @bdColor;
}
.div-btn {
  margin-top: 10px;
}
.title {
  height: 18px;
  border-bottom: 2px solid @bdColor;
  background-color: @bgColor;
  padding: 10px;
  text-align: left;
}
.often-goods-list {
  ul {
    li {
      list-style: none;
      float: left;
      border: 1px solid @bdColor;
      padding: 10px;
      margin: 5px;
      background: #fff;
    }
  }
}
.o-price {
  color: @color;
}
.goods-type {
  clear: both;
}
.cookList {
  li {
    @li();
    margin: 2px;
    padding: 2px;
    overflow: hidden;
    height: auto;
    width: 23%;
    span {
      display: block;
      float: left;
    }
  }
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
</style>
