<template>
  <VRow>
    <VCol>
      <VCardTitle>Orders({{ orders.length }})</VCardTitle>
      <VToolbar
        color="#FFFFFF"
        :elevation="8"
        class="d-flex justify-start"
      >
        <VMenu>
          <template #activator="{ props }">
            <VBtn
              rounded="sm"
              variant="outlined"
              v-bind="props"
              prepend-icon="mdi-filter-cog-outline"
              append-icon="mdi-menu-down"
            >
              Filter
            </VBtn>
          </template>

          <VList>
            <VListItem
              v-for="(item, index) in items"
              :key="index"
            >
              <VListItemTitle>{{ item.title }}</VListItemTitle>
            </VListItem>
          </VList>
        </VMenu>
        <VMenu>
          <template #activator="{ props }">
            <VBtn
              rounded="sm"
              variant="outlined"
              v-bind="props"
              append-icon="mdi-menu-down"
            >
              Sort
            </VBtn>
          </template>

          <VList>
            <VListItem
              v-for="(item, index) in items"
              :key="index"
            >
              <VListItemTitle>{{ item.title }}</VListItemTitle>
            </VListItem>
          </VList>
        </VMenu>
      </VToolbar>
    </VCol>
  </VRow>
  <VRow class="match-height">
    <VCol
      v-for="order in orders"
      :key="order"
      cols="12"
    >
      <VCard>
        <VAvatar>
          <VImg
            :src="order.img"
            alt="Order Image"
          />
        </VAvatar>
        <VCardTitle>
          {{ order.name }}
        </VCardTitle>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
const orders = [{
  img:"N/A",
  name:"Soya Bean",
  variety:"Jenguma",
  quantity:"1 MT",
  maxQ:"1 MT",
  buyer_offer:"GH$ 9900/MT",
  delivery_date:"January,2024",
},
{
  img:"N/A",
  name:"Carrots",
  variety:"Jenguma",
  quantity:"1 MT",
  maxQ:"1 MT",
  buyer_offer:"GH$ 9900/MT",
  delivery_date:"January,2024",
}]
const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]
</script>
