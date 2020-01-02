import BaseClass from '../../prototype/baseClass'
class Cities extends BaseClass{
  constructor() {
    super() //把父类的构造函数执行
    this.suggestion = this.suggestion.bind(this)
  }
  async suggestion(req, res, err) {
    let {keyword} = req.query
    if(!keyword) {
      // 参数校验
      res.send({
        status: -1,
        message: '参数错误'
      })
      return
    }
    try {
      // 数据库 ， 网络
      let data = await this.localtionSearch(keyword)
      res.send({
        status: 200,
        message: '获取位置成功',
        data
      })
    } catch(e) {
      res.send({
        status: -1,
        message: '获取位置失败',
        data
      })
    }
  }
}

export default new Cities()