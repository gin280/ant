<template>
  <div id="app">
    <router-view class='ui-view' keep-alive transition-mode='out-in' :transtion="effect">
    </router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  },
  data () {
    return {
      loading: true,
      effect: 'fade'
    }
  }
}
</script>

<style lang='postcss'>
[v-cloak] {
  display: none;
}
.fade-enter {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}
.fade-leave {
  opacity: 0;
  transform: translate3d(0,0,0);
}
.ui-view {
  min-width: 320px;
  max-width: 100%;
  transition: all .3s ease;
}
</style>
