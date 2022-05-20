<template>
  <BaseNotFound />
</template>

<script>
export default {
  name: 'NotFound',
  components: { BaseNotFound: () => import('@/components/app/BaseNotFound') }
}
</script>
