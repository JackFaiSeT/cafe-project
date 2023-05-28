<template>
  <v-section class="cart" title="Корзина">
    <client-only>
      <block-cart-list v-if="cart.length" :list="cart" />
      <p v-else class="cart__empty">Корзина пуста</p>
      <block-cart-order-info />
    </client-only>
  </v-section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/store/modules/cart.ts'
import BlockCartList from '@/components/Cart/BlockCartList.vue'
import BlockCartOrderInfo from '@/components/Cart/BlockCartOrderInfo.vue'

const { cart } = storeToRefs(useCartStore())

const root = useNuxtApp()
const { product: productService } = root.$services
</script>

<style lang="scss" scoped>
$white: $WHITE;

.cart {
  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  &:deep(.container) {
    max-width: 109.6rem;
  }

  &__empty {
    color: $white;
    font-family: 'Gilroy Bold';
    @include adaptive-font(4, 2);
    line-height: 120%;
    text-align: center;
  }
}
</style>
