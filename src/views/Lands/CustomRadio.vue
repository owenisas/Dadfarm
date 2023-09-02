<template>
  <div
    class="custom-radio"
    @click="toggleRadio"
  >
    <div
      class="custom-radio-wrapper"
      :class="{ 'is-selected': isSelected }"
    >
      <div
        v-if="icon"
        class="mr-3 d-flex align-center justify-center"
        :style="style"
      >
        <VIcon
          :icon="icon"
          color="primary"
        />
      </div>
      <VSheet>
        <VCardTitle>{{ title }}</VCardTitle>
        <span class="custom-radio-label">{{ label }}</span>
        <span
          :class="{ 'is-selected': isSelected }"
        />
      </VSheet>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  bgcolor: String,
  label: String,
  icon: String,
  title: String,
})

const emit = defineEmits(['update:modelValue'])

const style = ref({
  backgroundColor: props.bgcolor,
  width: "115px",
  height: "100px",
})
const isSelected = ref(props.modelValue)

watch(
  () => props.modelValue,
  newVal => {
    isSelected.value = newVal
  },
)

const toggleRadio = () => {
  if (!isSelected.value) {
    isSelected.value = true
    emit('update:modelValue', true)
  }
}
</script>

<style>
.custom-radio {
  position: relative;
  padding: 50px;
}

.custom-radio-wrapper {
  height: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 0 8px; /* Add padding to make room for the bracket */
}

.custom-radio-wrapper::before {
  content: "";
  position: absolute;
  top: -20px;
  left: -10px;
  right: -10px;
  bottom: -20px;
  border: 2px solid rgba(128, 128, 128, 0.5);
  border-radius: 15px;
}

.custom-radio-wrapper.is-selected::before {
  border-color: #294914;
}

.custom-radio-icon {
  margin-right: 8px;
  margin-left: 8px;
}

.custom-radio-label {
  margin-right: 10px;
}
</style>
