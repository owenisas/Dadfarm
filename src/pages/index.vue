<script setup>
import AddLandComponent from '@/views/Lands/AddLandComponent.vue'
import VideoCarousel from '@/views/video/VideoCarousel.vue'
import LandPreview2 from '@/views/Lands/LandPreview2.vue'
import { useStore } from 'vuex'

const noland = ref(false)
const store = useStore()
const land = computed(() => store.state.land)
const currentTab = ref(null)
const addland = ref(false)
const Addland = () => {
  addland.value = true
}
const onclose = () =>{
  addland.value = false
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
    <AddLandComponent
      :show="addland"
      @closedialog="onclose"
    />
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
            <div class="d-flex justify-center align-center">
              <VBtn
                variant="text"
                color="white"
                @click="Addland"
              >
                + Add
              </VBtn>
            </div>
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
          <div class="d-flex justify-center align-center">
            <VBtn
              variant="text"
              color="white"
              to="/marketplace"
            >              
              + Add
            </VBtn>
          </div>
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
            <div class="d-flex justify-center align-center">
              <VBtn
                variant="text"
                color="white"
                @click="Addland"
              >
                + Add
              </VBtn>
            </div>
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
        <VWindowItem :value="0">
          <VCard>
            <VCol>
              <div v-if="noland">
                <div class="d-flex justify-center align-center font-weight-bold">
                  You do not have farms. Add your first farm
                </div>
                <div class="pt-3 d-flex justify-center align-center font-weight-bold">
                  <VBtn
                    @click="Addland"
                  >
                    + Add Farm
                  </VBtn>
                </div>
              </div>
              <LandPreview2
                v-else
                :land="land"
              />
            </VCol>
          </VCard>
        </VWindowItem>

        <!-- Security -->
        <VWindowItem :value="1">
          <VCard>
            <VCol>
              <div class="d-flex justify-center align-center font-weight-bold">
                You do not have lands. Add your first land
              </div>
              <div class="pt-3 d-flex justify-center align-center font-weight-bold">
                <VBtn
                  @click="Addland"
                >
                  + Add land
                </VBtn>
              </div>
            </VCol>
          </VCard>
        </VWindowItem>

        <VWindowItem :value="2">
          <VCard>
            <VCol>
              <div class="d-flex justify-center align-center font-weight-bold">
                You do not have farm managers. Add your first farm manager
              </div>
              <div class="pt-3 d-flex justify-center align-center font-weight-bold">
                <VBtn to="/marketplace">
                  + Add Farm Manager
                </VBtn>
              </div>
            </VCol>
          </VCard>
        </VWindowItem>
      </VWindow>
      <VDivider class="ma-3" />
      <VideoCarousel />
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
