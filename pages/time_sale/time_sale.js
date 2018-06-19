Page({
  data:{
    sale_name: ['VQ鲜榨果汁-苹果梨汁', 'VQ鲜榨果汁-苹果梨汁', 'VQ鲜榨果汁-苹果梨汁', 'VQ鲜榨果汁-苹果梨汁', 'VQ鲜榨果汁-苹果梨汁', 'VQ鲜榨果汁-苹果梨汁', 'VQ鲜榨果汁-苹果梨汁', 'VQ鲜榨果汁-苹果梨汁', 'VQ鲜榨果汁-苹果梨汁'],
    lowerShow:'none'
  },
  lower:function(){
    if(this.data.sale_name.length>=72){
      this.setData({
        lowerShow:'block'
      })
    }else{
      this.setData({
        sale_name: this.data.sale_name.concat(this.data.sale_name)
      })
    }
  }
})