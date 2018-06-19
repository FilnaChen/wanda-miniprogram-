var QQMapWX=require("../../common/js/qqmap-wx-jssdk.js");
var qqmapsdk;
Page({
  data:{
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tab_title:["精选","餐饮","娱乐","服装","鞋包","其他"],
    tabIndex:0,
    con_imgs: [{ 'img': ["../../common/images/fruit.jpg", "../../common/images/fruit.jpg", "../../common/images/fruit.jpg", "../../common/images/fruit.jpg", "../../common/images/fruit.jpg", "../../common/images/fruit.jpg", "../../common/images/fruit.jpg", "../../common/images/fruit.jpg"] }, { 'img': ["../../common/images/fruit1.jpg", "../../common/images/fruit1.jpg", "../../common/images/fruit1.jpg", "../../common/images/fruit1.jpg", "../../common/images/fruit1.jpg", "../../common/images/fruit1.jpg", "../../common/images/fruit1.jpg", "../../common/images/fruit1.jpg"] }, { 'img': ["../../common/images/fruit2.jpg", "../../common/images/fruit2.jpg", "../../common/images/fruit2.jpg", "../../common/images/fruit2.jpg", "../../common/images/fruit2.jpg", "../../common/images/fruit2.jpg", "../../common/images/fruit2.jpg", "../../common/images/fruit2.jpg"] }, { 'img': ["../../common/images/fruit3.jpg", "../../common/images/fruit3.jpg", "../../common/images/fruit3.jpg", "../../common/images/fruit3.jpg", "../../common/images/fruit3.jpg", "../../common/images/fruit3.jpg", "../../common/images/fruit3.jpg", "../../common/images/fruit3.jpg"] }, { 'img': ["../../common/images/fruit4.jpg", "../../common/images/fruit4.jpg", "../../common/images/fruit4.jpg", "../../common/images/fruit4.jpg", "../../common/images/fruit4.jpg", "../../common/images/fruit4.jpg", "../../common/images/fruit4.jpg", "../../common/images/fruit4.jpg"] }, { 'img': ["../../common/images/fruit5.jpg", "../../common/images/fruit5.jpg", "../../common/images/fruit5.jpg", "../../common/images/fruit5.jpg", "../../common/images/fruit5.jpg", "../../common/images/fruit5.jpg", "../../common/images/fruit5.jpg", "../../common/images/fruit5.jpg"] }]
  },
  toSale:function(){
    wx.navigateTo({
      url:"../time_sale/time_sale"
    })
  },
  tabChange:function(event){
    this.setData({
      tabIndex:event.target.dataset.index
    })
  }
})