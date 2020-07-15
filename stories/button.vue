<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary',
    }
  },
  computed: {
    classes() {
      return [
        'btn',
        this.variant
      ].join(' ')
    },
  }
};
</script>

<style lang="scss" scoped>
.btn {
  background: teal;
  color: white;
  padding: 10px 20px;
  border: 2px solid teal;
  &:hover {
    box-shadow: 0 1px 1px 0px #0000007a;
  }
}

.secondary {
  background: white;
  color: teal;
  border-color: teal;
}
</style>
