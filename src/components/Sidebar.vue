<script setup>
import PanelMeu from 'primevue/panelmenu';
import Sidebar from 'primevue/sidebar';
</script>

<template>
  <div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible" :dismissable="false" :showCloseIcon="false" :modal="false">
      <img src="../assets/logo.svg" />
      <div class="mt-4">
        <PanelMeu :model="items" :unstyled="true">
          <template #headericon="iconProps">
            <vue-feather :type="iconProps.item.icon" size="1.5rem" class="text-gray-700 mr-2"></vue-feather>
          </template>
        </PanelMeu>
      </div>
    </Sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      items: [
        { label: 'Home', icon: 'home' },
        { label: 'Redirects', icon: 'shuffle' },
        { label: 'URL shortener', icon: 'link' },
        { label: 'Monitor', icon: 'eye' },
        { label: 'Hostnames', icon: 'server' },
        { label: 'Subscriptions', icon: 'credit-card' },
        { label: 'Settings', icon: 'settings' },
      ]
    }
  }
}
</script>