<template>
  <div>
    <el-row>
      <el-col :span='12'>12</el-col>
      <el-col :span="10">10</el-col>
      <el-col :span="2">2</el-col>
    </el-row>

    <MyRow>
      <Mycol :span="12">12</Mycol>
      <Mycol :span="6">6</Mycol>
      <Mycol :span="6">6</Mycol>
    </MyRow>
  </div>
</template>
<script>
import MyRow from './my-row'
import Mycol from './my-col'
export default {
  data () {
    return {

    }
  },
  props: {

  },
  components: {
    MyRow,
    Mycol
  }
}
</script>