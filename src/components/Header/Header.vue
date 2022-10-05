<template>
  <div class="bc">
    <el-row class="demo-avatar demo-basic mx">
      <el-col>
        <div class="demo-basic--circle">
          <div class="block azimuth" @click="dialogTableVisible = true">
            <img :src="imageUrl" class="avatar_01" />
          </div>
          <div class="sub-title f_azimuth">{{ user_name }}</div>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="管理员信息修改" :visible.sync="dialogTableVisible">
      <el-upload
        class="avatar-uploader"
        action="#"
        ref="upload"
        :show-file-list="false"
        :destroy-on-close="true"
        :on-change="changePictureUpload"
        :auto-upload="false"
        :file-list="fileList"
      >
        <img :src="imageUrl" class="avatar" />
      </el-upload>

      <el-descriptions class="margin-top" :column="3" border>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          <el-input
            v-model="upuser_name"
            style="width: 110px; border: 0"
          ></el-input>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          <el-input v-model="user_phone" style="width: 130px"></el-input>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            编号
          </template>
          <div style="width:90px text-align:center">{{ user_no }}</div>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            权限
          </template>
          <el-tag size="small">{{ admin_root }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            用户状态
          </template>
          {{ user_status }}
        </el-descriptions-item>
      </el-descriptions>
      <div style="width: 100%; margin: 10px 0px 30px 0px">
        <el-button class="but" type="primary" size="small" @click="submitUpload"
          >保存</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import store from "../../store/state";
export default {
  name: "Header",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      dialogTableVisible: false,
      imageUrl: "",
      imagefilename: "",
      imageBase64: "",
      admin_root: "",
      user_no: "01",
      user_phone: "",
      user_status: "",
      user_name: "",
      upuser_name: "",
      user_id: "",
      fileList: [],
    };
  },
  created() {
    this.imageUrl = this.handleDownloadQrIMg(store.Userinfo.user_Avatar);
    this.user_no = store.Userinfo.user_no;
    this.user_phone = store.Userinfo.user_phone;
    this.user_status = store.Userinfo.user_status;
    this.user_name = store.Userinfo.user_name;
    this.upuser_name = store.Userinfo.user_name;
    this.admin_root = store.Userinfo.admin_root;
    this.user_id = store.Userinfo.user_id;
  },
  //qrBase64是后台传回来的base64数据
  methods: {
    changePictureUpload(file, filelist) {
      console.log(URL.createObjectURL(file.raw));
      //去除_ob_
      filelist = JSON.parse(JSON.stringify(filelist));
      if (filelist.length > 1) {
        filelist.splice(0, 1);
      }
      console.log(file, filelist);
      this.fileList.push(file);
      console.log(this.fileList);
      const isJPG = file.raw.type === "image/jpeg";
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
        return;
      }
      this.imageUrl = URL.createObjectURL(file.raw);
      this.imagefilename = file.name;
      // if (!isLt2M) {
      //   this.$message.error("上传头像图片大小不能超过 2MB!");
      // }
    },
    handleDownloadQrIMg(qrBase64) {
      const imgUrl = `data:image/jpeg;base64,${qrBase64}`;
      console.log(imgUrl);
      return imgUrl;
      // 如果浏览器支持msSaveOrOpenBlob方法（也就是使用IE浏览器的时候），那么调用该方法去下载图片
      // if (window.navigator.msSaveOrOpenBlob) {
      //   const bstr = atob(imgUrl.split(',')[1])
      //   let n = bstr.length
      //   const u8arr = new Uint8Array(n)
      //   while (n--) {
      //     u8arr[n] = bstr.charCodeAt(n)
      //   }
    },
    submitUpload() {
      let rd = new FileReader(); // 创建文件读取对象
      let j=this.fileList.length-1
      console.log(this.fileList.length)
      let file = this.fileList[j].raw;
      rd.readAsDataURL(file); // 文件读取装换为base64类型
      rd.onload = () => {
        console.log(rd.result);
        // this.imageBase64 = rd.result;
        store.Userinfo = {
          user_Avatar: rd.result,
          admin_root: this.admin_root,
          user_no: this.user_no,
          user_phone: this.user_phone,
          user_status: this.user_status,
          user_name: this.user_name,
          user_id: this.user_id,
        };
        this.$api.user.UpUser(store.Userinfo);
        this.user_name = this.upuser_name;
        console.log(store.Userinfo);
      };
      rd.onerror = function (error) {
        console.log("Error: ", error);
      };
      this.dialogTableVisible = false;
    },

  },
};
</script>

<style>
.el-avatar.el-avatar--large.el-avatar--circle /deep/img {
  height: 100% !important;
  width: 100% !important;
}
.avatar-uploader .el-upload {
  margin-bottom: 10px;
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 118px;
  height: 118px;
  line-height: 118px;
  text-align: center;
}
.avatar {
  width: 118px;
  height: 118px;
  display: block;
}
.avatar_01 {
  width: 80px;
  border-radius: 100%;
  height: 80px;
  display: block;
}
.but {
  float: right;
}
.mx {
  width: 140px;
}
.azimuth {
  margin: 30px 30px 0px 30px;
  text-align: center;
}
.f_azimuth {
  text-align: center;
}
.bc {
  width: 100%;
  height: 140px;
  background-color: #409eff;
}
</style>