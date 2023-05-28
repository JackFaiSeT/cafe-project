<template>
  <div class="cart-order-wrapper">
    <div class="cart-order">
      <div class="info">
        <p class="price">
          Итого: <span class="price-sum">{{ finalPrice }} ₽</span>
        </p>
        <p v-if="isFreeDeleivery" class="free-delivery">Доставка бесплатная</p>
        <p v-else class="free-delivery">
          До бесплатной доставки не хватет: <span>{{ freeNeedPrice }} ₽</span>
        </p>
        <p class="minimal-delivery">Минимальная сума заказа {{ minimalDeliveryPrice }} ₽</p>
      </div>
      <button type="button" class="button" :disabled="!isMinimalDelivery" @click="goOrder">Оформить заказ</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/store/modules/cart.ts'
import { useSettingsStore } from '@/store/modules/settings.ts'

const { finalPrice } = storeToRefs(useCartStore())
const { freeDeliveryPrice, minimalDeliveryPrice } = storeToRefs(useSettingsStore())

const freeNeedPrice = computed(() => {
  return freeDeliveryPrice.value - finalPrice.value
})

const isFreeDeleivery = computed(() => {
  return finalPrice.value >= freeDeliveryPrice.value
})

const isMinimalDelivery = computed(() => {
  return finalPrice.value >= minimalDeliveryPrice.value
})

const goOrder = () => {
  // eslint-disable-next-line no-alert
  alert('Оформление заказа разработке!')
}
</script>

<style lang="scss" scoped>
$background-light: $BACKGROUND-LIGHT;
$white: $WHITE;
$gray: $GRAY;

.cart-order {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 1rem;
  margin: 0 auto;
  background: $background-light;

  @include tablet-desktop {
    max-width: 76.3rem;
  }

  @include mobile {
    flex-direction: column;
    row-gap: 2rem;
    text-align: center;
  }

  &-wrapper {
    margin-top: 5rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
  }

  .price {
    &:not(&-sum) {
      color: #a6a7ab;
      font-family: 'Gilroy Medium';
      font-size: 1.8rem;
      line-height: 2.1rem;
    }

    &-sum {
      color: $white;
      font-family: 'Gilroy Bold';
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }

  .free-delivery {
    font-family: 'Gilroy Medium';
    font-size: 1.2rem;
    line-height: 1.4rem;

    &:not(span) {
      color: $white;
    }

    span {
      color: #72a479;
    }
  }

  .minimal-delivery {
    color: $white;
    font-family: Gilroy;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  .button {
    width: 100%;
    max-width: 20.9rem;
    padding: 1.7rem 2rem;
    border: none;
    border-radius: 1rem;
    color: $white;
    cursor: pointer;
    font-family: 'Gilroy Bold';
    font-size: 1.4rem;
    line-height: 1.7rem;

    &:not(&:disabled) {
      background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%);
    }

    @include hover {
      transition: all 0.3s ease;

      &:not(&:disabled):hover {
        box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
      }
    }

    &:not(&:disabled):focus {
      box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
    }

    &:disabled {
      background: $gray;
    }
  }
}
</style>
