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
        <VRow no-gutters>
          <VCol cols="2">
            <VAvatar
              class="ma-3 d-flex justify-start"
              size="100"
            >
              <VImg
                :src="order.img"
                alt="Order Image"
              />
            </VAvatar>
          </VCol>
          <VCol>
            <VCardTitle>
              {{ order.name }}
            </VCardTitle>
            <VDivider />
            <VCardText class="align-start justify-start text-body-2 font-weight-bold d-inline-block">
              {{ details['1'] }}
            </VCardText>
            <VCardText class="align-start justify-end text-body-2 font-weight-bold d-inline-block">
              {{ details['2'] }}
            </VCardText>
            <VCardText class="align-end justify-start text-body-2 font-weight-bold d-inline-block">
              {{ details['3'] }}
            </VCardText>
            <VCardText class="align-end justify-end text-body-2 font-weight-bold d-inline-block">
              {{ details['4'] }}
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import soya from "@/assets/images/orders/soya-beans.jpg"
import carrot from "@/assets/images/orders/carrots.jpg"
const orders = [{
  img:soya,
  name:"Soya Bean",
  variety:"Jenguma",
  quantity:"1 MT",
  maxQ:"1 MT",
  buyer_offer:"GH$ 9900/MT",
  delivery_date:"March,2024",
},
{
  img:carrot,
  name:"Carrots",
  variety:"Jenguma",
  quantity:"1 MT",
  maxQ:"1 MT",
  buyer_offer:"GH$ 9900/MT",
  delivery_date:"January,2024",
}]
const details = {
  1:"Variety",
  2:"Quantity",
  3:"Buyer Offer",
  4:"Delivery date",
}
const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]
</script>
