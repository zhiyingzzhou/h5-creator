<template>
    <div id="app">
        <NavBar />
        <MainView />
    </div>
</template>

<script>
import NavBar from 'components/NavBar'
import MainView from '@/views/main'

export default {
  components: {
    NavBar,
    MainView
  },
  name: 'app'
}
</script>
