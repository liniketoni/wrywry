<template>
  <div class="ac">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="申请日期" width="150">
      </el-table-column>
      <el-table-column fixed prop="date" label="跟新日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="商品种类" width="120">
      </el-table-column>
      <el-table-column prop="province" label="账号服务器" width="120">
      </el-table-column>
      <el-table-column prop="city" label="游戏区" width="120">
      </el-table-column>
      <el-table-column prop="address" label="账号" width="300">
      </el-table-column>
      <el-table-column prop="address" label="密码" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="标题" width="120"> </el-table-column>
      <el-table-column prop="zip" label="游戏名" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" @click="dialogTableVisible = true"
            >打开嵌套表格的 Dialog</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Main",
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },

  data() {
    return {
      dialogTableVisible: false,
      visible: false,
      dialogImageUrl: "",
      dialogVisible: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
};
</script>

<style>
.ac {
  width: 100%;
  height: 200px;
  background-color: antiquewhite;
}
</style>