import v1 from './v1';
export default app => {
  // 路由是比较复杂的
  app.use('/v1', v1)
}