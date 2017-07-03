<template>
    <div class="topbar theme-bg-color">
        <div class="logo">H5CREATOR</div>
        <div class="tabs" v-for="item in tabs">
            <a class="active" href="javascript:;">
                {{ item.name }}
                <div class="line"></div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'topbar',
  data () {
    return {
      tabs: [
        {name: '配置移动端'}
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
    .topbar {
        position: fixed;
        height: 60px;
        left: 0;
        right: 0;
    }
    .logo {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 200px;
        align-items: center;
        justify-content: center;
        display: flex;
        color: #FFF;
        font-size: 22px;
    }
    .tabs {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 200px;
    }
    a {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 150px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        text-decoration: none;
        font-size: 16px;
        &.active {
            background-color: #1c8eff;
            .line {
                background-color: #43D060;
            }
        }
    }
    .line {
        position: absolute;
        height: 5px;
        width: 100%;
        bottom: 0;
        left: 0;
    }
</style>
