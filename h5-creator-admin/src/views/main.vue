<template>
    <div class="container">
        <SideBar />
        <div class="contain">
            <router-view></router-view>
            <Phone />
        </div>
    </div>
</template>

<script>
import SideBar from 'components/SideBar'
import Phone from 'components/phone'

export default {
  name: 'main',
  components: {
    SideBar,
    Phone
  }
}
</script>

<style>
    .container {
        position: absolute;
        top: 60px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
    }
    .contain {
        position: absolute;
        left: 199px;
        top: 0;
        bottom: 0;
        right: 0;
    }
</style>
