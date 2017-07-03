<template>
    <div class="phone">
        <div class="phone-control">
            <el-select 
                style="width:130px;margin-right: 5px;" 
                v-model="value" placeholder="请选择"
                v-on:change="changePhoneType"
            >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button style="position:relative;top:-1px;padding: 12px 15px;">刷新</el-button>
        </div>
        <div class="phone-preview"
            v-bind:class="{'phone-iphone': isiPhone,'phone-android': !isiPhone}"
        >
            <iframe 
              src="http://zhiyingzhou.coding.me/zhiyingzhou/#/all" 
              frameborder="0"
            ></iframe>
        </div>
    </div>
</template>
<script>
import { Select, Button } from 'element-ui'
const {ElOption} = Select.components

export default {
  name: 'phone',
  components: {
    'el-select': Select,
    'el-option': ElOption,
    'el-button': Button
  },
  data () {
    return {
      options: [
        {
          value: 'iPhone',
          label: 'iPhone'
        }, {
          value: 'android',
          label: 'Android'
        }
      ],
      value: 'iPhone',
      isiPhone: true
    }
  },
  methods: {
    changePhoneType (e) {
      switch (e) {
        case 'iPhone':
          this.isiPhone = true
          break
        case 'android':
          this.isiPhone = false
          break
        default:
          this.isiPhone = true
      }
    }
  }
}
</script>
<style lang="scss">
  .phone {
      width: 400px;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      border-left: 1px solid #E4E9EE;
      overflow-y: scroll;
  }
  .phone-control {
      margin: 25px auto;
      text-align: center;
      .el-input__inner {
          font-size: 16px;
          text-align: center;
      }
  }
  .phone-preview {
      position: relative;
      box-shadow: 0 0 0 1px #9CA2B0;
      box-sizing: border-box;
      margin: 0 auto;
      &:before,&:after {
          content: '';
          position: absolute;
          margin: auto;
          box-sizing: border-box;
      }
  }
  .phone-iphone {
      padding: 65px 15px 55px;
      border-radius: 55px;
      background-color: #FFF;
      width: 352px;
      &:before,&:after {
          left: 0;
          right: 0;
      }
      &:before {
          top: 30px;
          width: 60px;
          height: 3px;
          border: 1px solid #969CAB;
          border-radius: 5px;
      }
      &:after {
          bottom: 10px;
          width: 40px;
          border: 1px solid #969CAB;
          height: 40px;
          border-radius: 100%;
      }
      iframe {
        width: 320px;
        height: 568px;
        border: 1px solid #9CA2B0;
        border-radius: 3px;
      }
  }
  .phone-android {
      padding: 55px 20px 45px;
      border-radius: 45px;
      background-color: #000;
      width: 362px;
      &:before,&:after {
          border-radius: 100%;
      }
      &:before {
          left: 0;
          right: 0;
          top: 20px;
          width: 15px;
          height: 15px;
          background-color: #666;
      }
      &:after {
          top: 35px;
          left: 30px;
          width: 10px;
          height: 10px;
          background-color: #444;
      }
      iframe {
        width: 320px;
        height: 568px;
      }
  }
</style>
