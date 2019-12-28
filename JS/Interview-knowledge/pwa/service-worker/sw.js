console.log('begin')
const CACHE_NAME = 'PWA-1.0'


// 用数组保存 要监听的请求
const cacheList =  [
  './Screenshot_20191211-151056.jpg',
  './boundle.js'
]

// cacheStorage
this.addEventListener('install',(event)=> {
  // install -> active激活

  event.waitUntil( // 等缓存完成，（等promise的resolve才能到下一个阶段） 在进入激活
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(cacheList)
    })
  )
})

// 监听我们的请求事件
this.addEventListener('fetch', (event)=> {
  event.respondWith(
    // 如果缓存里面有 ，就先从缓存里面取
    caches.match(event.request)
    .then( resp => {
      if(resp) {
        console.log(event.request.url, '有缓存')
        return resp
      } else {
        console.log( event.request.url, '没缓存')
        return fetch(event.request)
        .then(res => {
          // service-work 拿到请求的结果
          // 在添加到缓存里面
          return caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, res)
            return res
          })
        })
      }
    })
  )
})
