<template>
  <VCard class="floating-window">
    <VCard>
      <VRow>
        <VCol cols="12">
          <VCard
            v-show="PostData.images && PostData.images.length > 0"
          >
            <VCarousel>
              <VCarouselItem
                v-for="(IMG, index) in PostData.images"
                :key="index"
              >
                <VImg :src="IMG" />
              </VCarouselItem>
            </VCarousel>
          </VCard>
          <VBtn
            v-if="PostData.images.length === 0"
            block
            height="500"
            class="drag-and-drop-area"
            @dragover.prevent
            @click="uploadIMG?.click()"
            @drop="onDrop"
          >
            <VIcon
              icon="mdi-upload"
            />
            Upload/Drag and Drop
            <VIcon
              icon="mdi-select-drag"
            />
          </VBtn>
          <input
            ref="uploadIMG"
            type="file"
            name="file"
            accept=".jpeg,.png,.jpg"
            hidden
            multiple
            @input="UploadIMG"
          >
          <VBtn
            v-show="PostData.images && PostData.images.length > 0"
            type="reset"
            color="error"
            variant="tonal"
            @click="resetIMG"
          >
            <span class="d-none d-sm-block">Reset</span>
            <VIcon
              icon="mdi-refresh"
              class="d-sm-none"
            />
          </VBtn>
        </VCol>
      </VRow>
    </VCard>
    <VCardText>
      <VForm @submit.prevent="() => {}">
        <VRow
          justify="center"
        >
          <VCol cols="5">
            <VTextField
              v-model="PostData.title"
              label="Title"
              maxlength="30"
            />
          </VCol>
          <VCol
            cols="4"
            md="2"
          >
            <VSelect
              v-model="PostData.currency"
              mandatory
              :items="currencies"
            />
          </VCol>
          <VCol cols="5">
            <VTextField
              v-model="PostData.price"
              label="Price"
              maxlength="10"
              @input="filterNumericInput"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="PostData.description"
              label="Description"
            />
          </VCol>
          <VCol cols="12">
            <Tags />
          </VCol>
          <VBtn
            width="200"
            height="50"
            :block="loading"
            :loading="loading"
            @click="submitData"
          >
            <template #loader>
              <VProgressLinear indeterminate />
            </template>
            {{ submit_btn }}
          </VBtn>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>

<script setup>
import Tags from '@/layouts/components/Tags.vue'
import { ref, onBeforeUnmount } from 'vue'
import axiosInstance from '@/axiosInstance'

const croppers = ref([])
const submit_btn = ref('Submit')
const PostData = ref({
  title: '',
  currency: 'HKD',
  price: '',
  description: '',
  tags: [],
  images: [],
})
const activeTab = ref('')
const currencies = ['USD', 'CNY', 'HKD', 'TWD']
const resetIMG = () => {
  PostData.value.images = []
}
function filterNumericInput(event) {
  const onlyNumbers = event.target.value.replace(/\D+/g, '')
  PostData.value.price = onlyNumbers.slice(0, 5)
}
function dataURLtoFile(dataurl, filename) {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}
const loading = ref(false)
const submitData = async () => {
  const formData = new FormData()

  // Append images to the form data
  PostData.value.images.forEach((imgData, index) => {
    formData.append(`image${index}`, dataURLtoFile(imgData, `image${index}.png`))
  })

  // Append the PostData object as a JSON string
  const postDataWithoutImages = { ...PostData.value }
  delete postDataWithoutImages.images
  formData.append("PostData", JSON.stringify(postDataWithoutImages))
  try {
    loading.value = true
    const response = await axiosInstance.post("/post/upload", { formData })

    if (response.status === 200) {
      const result = await response.data
      console.log("Data submitted successfully:", result)
      alert("Submit Success!")
    } else {
      loading.value = false
      console.error("Error submitting data:", response.statusText)
    }
  } catch (error) {
    loading.value = false
    console.error("Error submitting data:", error)
  }
}
const UploadIMG = event => {
  const files = event.target.files || event.dataTransfer.files

  if (!files.length) return

  for (let i = 0; i < files.length; i++) {
    // Limit the number of photos to 8
    if (PostData.value.images.length >= 8) {
      alert('You can only upload a maximum of 8 photos.')
      break
    }

    const reader = new FileReader()

    reader.onload = e => {
      PostData.value.images.push(e.target.result)
    }

    reader.readAsDataURL(files[i])
  }
}

const uploadIMG = ref()
const PostIMG = ref([])
const onDrop = event => {
  event.preventDefault()

  const files = event.dataTransfer.files

  if (files.length > 0) {
    // Limit the number of files to 8
    const numberOfFiles = Math.min(files.length, 8)

    for (let i = 0; i < numberOfFiles; i++) {
      const file = files[i]

      if (file.type.startsWith("image/")) {
        const reader = new FileReader()

        reader.onload = e => {
          const img = new Image()
          img.src = e.target.result

          // Do something with the image, e.g., display it, upload it, etc.
          console.log("Image dropped:", img)

          // Add each file to an array of images
          PostData.value.images.push(e.target.result)
        }

        reader.readAsDataURL(file)
      } else {
        console.warn("The dropped file is not an image")
      }
    }
  }
}
onBeforeUnmount(() => {
  window.location.reload()
})
</script>

<route lang="yaml">
meta:
  showBuyNow: false
</route>
