<template>
  <v-row tag="ul" class="cart-list">
    <v-col v-for="cartItem in list" :key="cartItem.id" :col="12" :md="8" :sm="2" class="cart-item-wrappper">
      <block-cart-item v-bind="cartItem" />
    </v-col>
  </v-row>
</template>

<script setup>
import BlockCartItem from '@/components/Cart/BlockCartItem.vue'

defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
$white: $WHITE;

.cart-list {
  row-gap: 0;

  .cart-item-wrappper {
    &:first-child {
      /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
      &:deep(.cart-list-item) {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }
    }

    &:last-child {
      /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
      &:deep(.cart-list-item) {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
    }

    &:not(&:last-child) {
      /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
      &:deep(.cart-list-item) {
        border-bottom: 0.1rem solid rgba($white, 20%);
      }
    }
  }
}
</style>
