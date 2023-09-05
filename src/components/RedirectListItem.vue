<script setup>
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';

defineProps({
  redirect: {
    type: Object,
    required: true
  }
});

</script>
<template>
  <Card class="redirect-item__container mt-4">
    <template #content>
      <div class="flex items-center">
        <Checkbox v-model="checked" :binary="true" />
        <Avatar :image="redirect.logo" class="ms-4" size="medium" shape="circle" />
        <div class="flex items-center flex-1 ms-4">
          <h5 class="text-large text-gray-500 max-w-[235px] truncate">{{redirect.name}}</h5>
          <div class="redirect-item__header-end flex items-center ms-auto gap-4">
            <div class="activity__container flex items-center text-sm">
              <vue-feather type="activity" size="1rem"></vue-feather>
              <span class="ms-1 font-bold">{{ redirect.clicks }}</span><span>&nbsp;clicks</span>
            </div>
            <div class="command__container flex items-center text-sm">
              <vue-feather type="command" size="1rem" class="text-gray-500"></vue-feather>
              <span class="ms-1 text-gray-500">{{ redirect.redirectCommand }} ({{ redirect.redirectType }})</span>
            </div>
            <div class="date__container flex items-center text-sm">
              <vue-feather type="calendar" size="1rem" class="text-gray-500"></vue-feather>
              <span class="ms-1 text-gray-500">{{ redirect.created }}</span>
            </div>
            <div class="item-action__container flex gap-2">
              <Button size="small" aria-label="copy">
                <template #icon>
                  <vue-feather type="copy" size="1rem"></vue-feather>
                </template>
              </Button>
              <Button size="small" aria-label="edit" outlined>
                <template #icon>
                  <vue-feather type="edit-3" size="1rem" class="text-gray-700"></vue-feather>
                </template>
              </Button>
              <Button size="small" aria-label="more" outlined>
                <template #icon>
                  <vue-feather type="more-horizontal" size="1rem" class="text-gray-700"></vue-feather>
                </template>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
      <div class="flex ps-[84px] mt-2 flex-1 items-center content-between gap-4">
        <span class="border border-1 border-gray-300 rounded py-1 px-3 flex-1 font-semibold text-gray-600">{{ redirect.from }}</span>
        <vue-feather type="arrow-right-circle" size="1.5rem" class="text-orange-500"></vue-feather>
        <span class="border border-1 border-green-500 rounded py-1 px-3 flex-1 font-semibold text-green-500">{{ redirect.to }}</span>
      </div>
      <div class="flex ps-[84px] mt-2 flex-1 items-center gap-2">
        <vue-feather type="tag" size="1rem" class="text-gray-700"></vue-feather>
        <Tag v-for="tag in redirect.tags" :value="tag" rounded class="bg-orange-50 rounded rounded-xl px-3 py-1" unstyled>
          <template #default>
            <span class="text-orange-700 text-sm font-medium">{{ tag }}</span>
          </template>
        </Tag>
      </div>
    </template>
  </Card>
</template>
<script>
export default {
  data() {
    return {
      checked: false
    }
  },
}
</script>