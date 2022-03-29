<template>
  <div style="width: fit-content">
    <router-link
      :to="link"
      class="ict-button text-decoration-none d-flex align-center"
    >
      {{ text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BaseButtonOutlined',
  props: {
    link: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.ict-button {
  border-radius: 20px;
  font-size: 14px;
  line-height: 16px;
  border: 1px solid #2DC0C5;
  color: #2DC0C5 !important;
  padding: 0.4em 1.5em;
  transition: all .4s ease-in-out;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 14px;
    padding: 0.2em 0.75em;
  }
}

.ict-button:hover {
  color: white!important;
  background-color: #2DC0C5;
}

.ict-button:focus {
  color: white!important;
  background-color: #1E7F83;
  border: 1px solid #1E7F83;
}
</style>