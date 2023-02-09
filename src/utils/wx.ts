// @ts-ignore
import wx from "weixin-js-sdk";
/**
 * 封装微信js-sdk
 * 对外暴露出对应的方法
 */
wx.config({
  debug: true, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
  appId: 'wx792ce3763c6875b3', // 必填，公众号的唯一标识
  timestamp: '1670393638', // 必填，生成签名的时间戳
  nonceStr: 'xbqVVg4fM346ygdN', // 必填，生成签名的随机串
  signature: '7316426e64ab6962a4d96c757c2c4f20f2c0bcb1',// 必填，签名
  jsApiList: ['getLocation'] // 必填，需要使用的 JS 接口列表
});

export function wxGetLocation():any {
  wx.ready(function(){
    // config信息验证后会执行 ready 方法，所有接口调用都必须在 config 接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在 ready 函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在 ready 函数中。
    wx.getLocation({
      type: 'wgs84', // 默认为wgs84的 gps 坐标，如果要返回直接给 openLocation 用的火星坐标，可传入'gcj02'
      success: function (res:any) {
        const latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        const longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        const speed = res.speed; // 速度，以米/每秒计
        const accuracy = res.accuracy; // 位置精度
      }
    });
  });
}
