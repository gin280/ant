<template>
  <div class="ui-btn-wrap">
    <button class="ui-btn-s">
      1
      确定
    </button>
    <button class="ui-btn-s active">
      确定
    </button>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  color: #42b983;
}
</style>
