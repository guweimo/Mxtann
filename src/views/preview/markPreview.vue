<template>
  <div>
    <marktext v-model="textarea"></marktext>
  </div>
</template>

<script>
import marktext from '@/components/marktext'

export default {
  name: 'Save',
  components: {
    marktext,
  },
  data() {
    return {
      textarea: '',
    }
  },
}
</script>
