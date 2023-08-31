<template>
  <div
    class="custom-radio"
    @click="toggleRadio"
  >
    <div
      class="custom-radio-wrapper"
      :class="{ 'is-selected': isSelected }"
    >
      <VIcon
        v-if="icon"
        :icon="icon"
        class="custom-radio-icon"
      />
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
  label: String,
  icon: String,
  title: String,
})

const emit = defineEmits(['update:modelValue'])

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
  left: 0;
  right: 0;
  bottom: -20px;
  border: 2px solid transparent;
  border-radius: 15px;
}

.custom-radio-wrapper.is-selected::before {
  border-color: blue;
}

.custom-radio-icon {
  margin-right: 8px;
  margin-left: 8px;
}

.custom-radio-label {
  margin-right: 10px;
}
</style>
