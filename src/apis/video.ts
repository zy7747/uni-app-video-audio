import request from "@/utils/request";

//获取视频分页
export function videoPage(params: any): any {
  return request({
    url: "/video/page",
    method: "get",
    params,
  });
}

// 热门视频
export function hotVideo() {
  return request({
    url: "/video/hotVideo",
    method: "get",
  });
}
