// 防止页面onload多次请求导致tips显示关闭问题
let count = 0

function req(options){
    count++
    wx.showLoading({
        title: "加载中",
        mask: true
      });

    const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
    options.url = baseUrl + options.url
    return new Promise((resolve,reject)=>{
        wx.request({
            ...options,
            // url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
            // data: {},
            // header: {'content-type':'application/json'},
            // method: 'GET',
            // dataType: 'json',
            // responseType: 'text',
            success: (result) => {
                resolve(result.data.message)
            },
            fail: () => {
                reject("swiperImgs请求终止")
            },
            complete: () => {
                count--
                if(count===0){
                    wx.hideLoading();
                }
            }
        });
    })
}
// es6
export {req}

// commonJS
// exports.req = req