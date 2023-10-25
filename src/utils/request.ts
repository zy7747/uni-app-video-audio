// 请求拦截
function service(params: any) {
  return new Promise((resolve, reject) => {
    uni.addInterceptor("request", {
      invoke(args) {
        // request 触发前拼接 url
        // args.url = "http://127.0.0.1:8080" + args.url;
      },
      success(args) {},
      fail(err) {},
      complete(res) {},
    });

    uni.request({
      ...params,
      url: "http://127.0.0.1:8080" + params.url,
      header: {
        //自定义请求头信息
      },
      success: (res: any) => {
        resolve(res.data);
      },
      fail: (error: any) => {
        reject(error);
      },
    });
  });
}

export default service;
