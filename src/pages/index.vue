<script setup>
const currentTab = ref(null)
const dialog = ref(false)
const addland = ref(false)
const Addland = () => {
  addland.value = true
  console.log(addland)
}
const tabs = [
  {
    title: 'Farm',
    icon: 'mdi-layers-triple-outline',
  },
  {
    title: 'Land',
    icon: 'mdi-layers-triple-outline',

  },
  {
    title: 'Farm Manager',
    icon: 'mdi-layers-triple-outline',
  },
]
</script>

<template>
  <div class="text-center">
    <VBtn
      color="primary"
      @click="dialog = true"
    >
      Open Dialog
    </VBtn>

    <VDialog
      v-model="dialog"
      width="auto"
    >
      <VCard>
        <div class="d-flex justify-center align-center font-weight-bold">
          <VCardTitle>
            Add New Land
          </VCardTitle>
          <div>
            test
          </div>
        </div>
        <VCardActions>
          <VBtn
            color="primary"
            block
            @click="dialog = false"
          >
            Close Dialog
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>  
  <VRow>
    <VCol
      cols="12"
    >
      <VTimeline
        direction="horizontal"
        line-color="primary"
        truncate-line="both"
        :style="{ backgroundColor: '#285608' }"
      >
        <VTimelineItem>
          <template #icon>
            <span class="font-weight-bold">Step 1</span>
          </template>
          <template #opposite>
            <div
              class="text-h6"
              style="color: white"
            >
              Add your first land
            </div>
            <VBtn
              variant="text"
              @click="Addland"
            >
              + Add
            </VBtn>
          </template>
        </VTimelineItem>

        <VTimelineItem>
          <template #icon>
            <span class="font-weight-bold">Step 2</span>
          </template>
          <div
            class="text-h6"
            style="color: white"
          >
            Add your first farm manager
          </div>
          <VBtn variant="text">
            + Add
          </VBtn>
        </VTimelineItem>

        <VTimelineItem>
          <template #icon>
            <span class="font-weight-bold">Step 3</span>
          </template>
          <template #opposite>
            <div
              class="text-h6"
              style="color: white"
            >
              Add your first farm
            </div>
            <VBtn variant="text">
              + Add
            </VBtn>
          </template>
        </VTimelineItem>
      </VTimeline>
      <VTabs
        v-model="currentTab"
        show-arrows
      >
        <VTab
          v-for="item in tabs"
          :key="item.icon"
          :value="item.tab"
        >
          <VIcon
            size="20"
            start
            :icon="item.icon"
          />
          <div class="d-none d-sm-block">
            {{ item.title }}
          </div>
        </VTab>
      </VTabs>
      <VDivider />

      <VWindow
        v-model="currentTab"
        class="mt-5 disable-tab-transition"
        :touch="false"
      >
        <!-- Account -->
        <VWindowItem :value="0">
          <VCard>
            <VCardTitle>
              Hi
            </VCardTitle>
            <VBtn>
              test
            </VBtn>
          </VCard>
        </VWindowItem>

        <!-- Security -->
        <VWindowItem :value="1" />

        <VWindowItem :value="2" />
      </VWindow>
    </VCol>
  </VRow>
</template>

<style>
.v-timeline .v-timeline-item .v-timeline-divider__dot .v-timeline-divider__inner-dot{
  width: 80px;
  height: 30px;
  border-radius: 15px;
  background-color: white;
  border: 2px dashed green;
}
.v-timeline .v-timeline-item .v-timeline-divider__dot{
  width: 80px;
  height: 30px;
}
.v-timeline-divider__before,
.v-timeline-divider__after {
  border-style: dashed;
}
</style>
