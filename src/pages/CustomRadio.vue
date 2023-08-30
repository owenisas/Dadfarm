<template>
  <div class="custom-radio" @click="toggleRadio">
    <div class="custom-radio-wrapper" :class="{ 'is-selected': isSelected }">
      <span v-if="icon" class="custom-radio-icon">
        <i :class="icon"></i>
      </span>
      <span class="custom-radio-label">{{ label }}</span>
      <span class="custom-radio-dot" :class="{ 'is-selected': isSelected }"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  label: String,
  icon: String,
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
}

.custom-radio-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.custom-radio-wrapper::before,
.custom-radio-wrapper::after {
  content: "";
  position: absolute;
  border: 1px solid transparent;
}

.custom-radio-wrapper::before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-left: 2px solid;
}

.custom-radio-wrapper::after {
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-right: 2px solid;
}

.custom-radio-wrapper.is-selected::before,
.custom-radio-wrapper.is-selected::after {
  border-color: blue;
}

.custom-radio-icon {
  margin-right: 8px;
}

.custom-radio-label {
  margin-right: 10px;
}

.custom-radio-dot {
  width: 16px;
  height: 16px;
  border: 2px solid #000;
  border-radius: 50%;
  position: relative;
}

.custom-radio-dot.is-selected::before {
  content: "";
  width: 10px;
  height: 10px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
