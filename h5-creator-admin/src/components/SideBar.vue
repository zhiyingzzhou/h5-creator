<template>
    <nav>
        <div class="sidebar-hide-btn">
            
        </div>
        <div class="sidebar-title">
            配置移动端
        </div>
        <ul>
            <li v-for="item in sideBarListData">
                <router-link :to="item.link">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      sideBarListData: [
        {name: '配置名称/图标/布局', link: 'basic'},
        {name: '配置组件', link: 'component'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
    $font-color: #62717E;
    $border-color: #E4E9EE;
    nav {
        position: absolute;
        width: 199px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #F4F7FC;
        color: $font-color;
    }
    .sidebar-hide-btn {
        height: 45px;
        border-bottom: solid 1px $border-color;
        text-align: center;
        font-size: 16px;
    }
    .sidebar-title {
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 20px;
        border-bottom: solid 1px $border-color;
    }
    ul,li {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
</style>
