<template>
    <div class="page">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
    .page {
        position: absolute;
        left: 0;
        right: 400px;
        top: 0;
        bottom: 0;
    }
</style>
