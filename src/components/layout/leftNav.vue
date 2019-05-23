<template>
  <div class="left-nav">
    <ul>
      <li>
        <svg-icon icon-class="收银" class="icon"></svg-icon>
        <div>收银</div>
      </li>
      <li>
        <svg-icon icon-class="店铺" class="icon"></svg-icon>
        <div>店铺</div>
      </li>
      <li>
        <svg-icon icon-class="商品" class="icon"></svg-icon>
        <div>商品</div>
      </li>
      <li>
        <svg-icon icon-class="会员" class="icon"></svg-icon>
        <div>会员</div>
      </li>
      <li>
        <svg-icon icon-class="统计" class="icon"></svg-icon>
        <div>统计</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "leftNav"
};
</script>
<style lang='less'>
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  float: left;
  width: 5%;
  ul {
    padding: 0px;
    margin: 0px;
  }
  li {
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
  }
}
</style>
