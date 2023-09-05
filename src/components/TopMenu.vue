<script setup>
import MenuBar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
</script>

<template>
  <MenuBar>
    <template #start>
      <span class="p-input-icon-left w-full">
        <i class="pi pi-search" />
        <InputText placeholder="Search" type="text" class="w-full border-none" />
      </span>
    </template>
    <template #end>
      <div class="flex items-center">
        <Avatar label="JS" class="mr-2" size="large" shape="circle" />
        <h3 class="cursor-pointer" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">James Smith <i
            class="pi pi-angle-down" /></h3>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
      </div>
    </template>
  </MenuBar>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh',
        },
        {
          label: 'Delete',
          icon: 'pi pi-times',
        }
      ]
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event)
    }
  }
}
</script>