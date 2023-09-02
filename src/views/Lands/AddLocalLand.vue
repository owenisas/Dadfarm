<template>
  <VDialog
    v-model="dialog"
    fullscreen
    @click:outside="close"
  >
    <VDialog
      v-model="dialog2"
    >
      <div class="d-flex align-center justify-center">
        <VCard
          height="450"
          width="900"
          class="pa-3"
        >
          <VCardTitle
            class="d-flex justify-center"
          >
            Add Personal Land
          </VCardTitle>
          <VTimeline
            direction="horizontal"
            line-color="primary"
            truncate-line="both"
          >
            <VTimelineItem>
              <template #icon>
                <span class="font-weight-bold">Step 1</span>
              </template>
            </VTimelineItem>

            <VTimelineItem>
              <template #icon>
                <span class="font-weight-bold">Step 2</span>
              </template>
            </VTimelineItem>

            <VTimelineItem>
              <template #icon>
                <span class="font-weight-bold">Step 3</span>
              </template>
            </VTimelineItem>
          </VTimeline>
          <VRow justify="space-around">
            <template
              v-for="(each,index) in steps"
              :key="index"
            >
              <VCol class="mt-2">
                <div class="d-flex justify-center">
                  <VIcon
                    color="primary"
                    :icon="each.icon"
                  />
                </div>
                <h4 class="mt-3 d-flex justify-center">
                  {{ each.title }}
                </h4>
                <p class="mt-3">
                  {{ each.details }}
                </p>
              </VCol>
              <VDivider
                v-if="index !== 3"
                :key="'divider-' + index"
                vertical=""
                color="#DFF5E0"
                thickness="2"
              />
            </template>
          </VRow>
          <div
            class="d-flex justify-center"
          >
            <VBtn
              class="mt-3"
              color="primary"
              height="40"
              width="100"
              @click="dialog2 = false"
            >
              Continue
            </VBtn>
          </div>
        </VCard>
      </div>
    </VDialog>
    <VCard
      class="mx-auto"
    >
      <VCardTitle class="d-flex justify-space-between text-h6 font-weight-regular">
        <span>{{ currentTitle }}</span>
        <VAvatar
          color="primary"
          size="24"
          v-text="step"
        />
        <VBtn
          variant="text"
          @click="close"
        >
          X
        </VBtn>
      </VCardTitle>
      <VProgressLinear
        v-model="value"
        max="120"
        color="primary"
        height="20"
      />

      <VWindow v-model="step">
        <VWindowItem
          :value="1"
        >
          <VSheet
            class="d-flex justify-center align-center"
          >
            <VResponsive
              class="mx-auto"
              max-width="800"
            >
              <VCardText>
                <VTextField
                  label="Acres of land to add"
                  placeholder="1"
                  hint="How many acres of land would you like to add?"
                  persistent-hint=""
                />
              </VCardText>
              <VDivider />
              <VCardText>
                <VTextField
                  label="Enter the name of the crop. eg. Carrot"
                  placeholder="1"
                  hint="What crops would you be interested in farming?"
                  persistent-hint=""
                />
              </VCardText>
              <VDivider />
              <VCardText>
                <VRow class="match-height">
                  <VCol cols="6">
                    <VSelect
                      label="Select Country"
                      :items="['China', 'Thailand', 'Singapore', 'Hong Kong', 'Taiwan', 'India']"
                      variant="outlined"
                    />
                  </VCol>
                  <VCol cols="6">
                    <VSelect
                      label="Select region of your land"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                    />
                  </VCol>
                  <VCol cols="6">
                    <VTextField
                      label="Enter Village Name"
                    />
                  </VCol>
                  <VCol cols="6">
                    <VTextField
                      label="Enter the name of nearest town"
                    />
                  </VCol>
                </VRow>
              </VCardText>
            </VResponsive>
          </VSheet>
        </VWindowItem>

        <VWindowItem :value="2">
          <VCardText>
            <VTextField
              label="Password"
              type="password"
            />
            <VTextField
              label="Confirm Password"
              type="password"
            />
            <span class="text-caption text-grey-darken-1">
              Please enter a password for your account
            </span>
          </VCardText>
        </VWindowItem>

        <VWindowItem :value="3">
          <div class="pa-4 text-center">
            <VImg
              class="mb-4"
              contain
              height="128"
              src="https://cdn.vuetifyjs.com/images/logos/v.svg"
            />
            <h3 class="text-h6 font-weight-light mb-2">
              Welcome to Vuetify
            </h3>
            <span class="text-caption text-grey">Thanks for signing up!</span>
          </div>
        </VWindowItem>
      </VWindow>

      <VDivider />

      <VCardActions>
        <VBtn
          v-if="step > 1"
          variant="text"
          @click="decreasestep"
        >
          Back
        </VBtn>
        <VSpacer />
        <VBtn
          v-if="step < 3"
          color="primary"
          variant="flat"
          @click="increasestep"
        >
          Next
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps(  {
  show:{
    type:Boolean,
    required:true,
  },
})
const emit = defineEmits(['closedialog'])

const step = ref(1)
const value = ref(40)
const dialog2 = ref(true)
const dialog = ref(false)
const localShow = ref(props.show)
const steps = [{
  title:"Land Information",
  icon:"mdi-file-document-outline",
  details:"Provide the details of your land and ensure that every detail provided is accurate.",
},
{
  title:"Upload Land Boundaries or Pay and Schedule Assessment\n",
  icon:"mdi-calendar-outline",
  details:"Either upload your land boundaries for the system to generate results automatically, or pay for a physical survey and soil sampling to be performed.",
},
{
  title:"View your Results\n",
  icon:"mdi-timer-sand-complete",
  details:"Access your land assessment findings. Results are published after our team completes processing.",
}]
watch(
  () => props.show,
  newVal => {
    dialog.value = newVal
  },
)
const close = () => {
  dialog.value = false
  emit('closedialog')
}
const increasestep = () => {
  step.value++
  value.value += 40
}
const decreasestep = () => {
  step.value--
  value.value -= 40
}
const currentTitle = computed(() => {
  switch (step.value) {
  case 1: return 'Add your own land'
  case 2: return 'Create a password'
  default: return 'Account created'
  }
})
</script>
