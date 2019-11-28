## 应用层
http webSocket

http1.1: client ->>>> server

webSocket： client -> server
  server -> client
全双工 双向通信

http2.0: 支持 server-push

## 链接
1. 发送一个 http 请求
   后端响应 101 switching protocols
   Connection: Upgrade
 之后由 http 协议 升级为 webSocket 后续的发送 接受信息都会走这个
 全双工双向通道
