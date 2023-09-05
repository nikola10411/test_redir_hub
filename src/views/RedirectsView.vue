<script setup>
import Button from 'primevue/button'
import RedirectListItem from '../components/RedirectListItem.vue'
</script>

<template>
  <main>
    <div class="header flex">
      <h2 class="title text-3xl font-semibold">Redirects</h2>
      <div class="ms-auto flex gap-2">
        <Button icon="pi pi-server" text outlined aria-label="List" unstyled class="w-[3rem] h-[3rem] border border-1 rounded border-gray-300 bg-white shadow-sm shadow-outline" />
        <Button icon="pi pi-chart-pie" text outlined aria-label="Chart" unstyled class="w-[3rem] h-[3rem] border border-1 rounded border-gray-300 bg-white shadow-sm shadow-outline" />
        <Button icon="pi pi-chart-line" text outlined aria-label="Graph" unstyled class="w-[3rem] h-[3rem] border border-1 rounded border-gray-300 bg-white shadow-sm shadow-outline" />
        <Button label="New redirect" />
      </div>
    </div>
    <div class="toolbar flex mt-8">
      <div class="flex">
        <Button icon="pi pi-filter" outlined="" label="Filter" size="small" iconPos="right" />
      </div>
      <div class="ms-auto flex items-center gap-2">
        <h5 class="font-medium">Appearences</h5>
        <span class="p-buttonset">
          <Button icon="pi pi-bars" size="small" outlined />
          <Button icon="pi pi-list" size="small" />
        </span>
      </div>
    </div>
    <div class="content mt-8" v-if="items.length > 0">
      <RedirectListItem v-for="item in items" :redirect="item"/>
    </div>
    <div class="content mt-8" v-else>
      
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'RedirHub Name line',
          logo: '/src/assets/slack.png',
          active: true,
          from: 'console.dnspod.cn/dns/djiankong.com/record',
          to: 'https://www.redirhub.com',
          clicks: 2,
          redirectCommand: 'Permanent',
          redirectType: 301,
          created: '16.08.2023',
          tags: [
            'New',
            'Personal'
          ],
          hasDNSIssue: true
        }
      ]
    }
  }
}
</script>
