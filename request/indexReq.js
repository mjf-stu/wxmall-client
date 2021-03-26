function getSwiperImgs(){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
            data: {},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                resolve(result)
            },
            fail: () => {
                reject("swiperImgs请求终止")
            },
            complete: () => {}
        });
    })
}
exports.getSwiperImgs = getSwiperImgs