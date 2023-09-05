<script setup>
import Sidebar from './components/Sidebar.vue';
import TopMenu from './components/TopMenu.vue'
</script>

<template>
  <Sidebar />
  <div class="w-full">
    <TopMenu />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: true
    }
  }
}
</script>
