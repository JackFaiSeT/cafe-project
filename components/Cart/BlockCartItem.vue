<template>
  <li class="cart-list-item">
    <div class="left">
      <img v-lazy-load :src="image.src" :alt="image.alt" class="image" />
      <div class="info">
        <p class="title" v-text="title" />
        <p class="description" v-text="description" />
        <div class="actions actions--mobile">
          <div class="actions-count-button">
            <button type="button" class="button" @click="cartService.removeFromCart(id)">
              <v-icon name="minus" class="minus" />
            </button>
            <span v-text="count" />
            <button type="button" class="button" @click="cartService.addToCart(id)">
              <v-icon name="plus" class="plus" />
            </button>
          </div>
          <span class="price">{{ count * price }} ₽</span>
          <button type="button" class="close-button" @click="cartService.clearAllOfProduct(id)">
            <v-icon name="cross" />
          </button>
        </div>
      </div>
    </div>
    <div class="actions actions--desktop">
      <div class="actions-count-button">
        <button type="button" class="button" @click="cartService.removeFromCart(id)">
          <v-icon name="minus" class="minus" />
        </button>
        <span v-text="count" />
        <button type="button" class="button" @click="cartService.addToCart(id)">
          <v-icon name="plus" class="plus" />
        </button>
      </div>
      <span class="price">{{ count * price }} ₽</span>
      <button type="button" class="close-button" @click="cartService.clearAllOfProduct(id)">
        <v-icon name="cross" />
      </button>
    </div>
  </li>
</template>

<script setup>
defineProps({
  id: {
    type: Number,
    default: -1
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  count: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  image: {
    type: Object,
    default: () => ({
      src: '',
      alt: ''
    })
  }
})

const root = useNuxtApp()
const { cart: cartService } = root.$services
</script>

<style lang="scss" scoped>
$background-light: $BACKGROUND-LIGHT;
$white: $WHITE;

.cart-list-item {
  display: flex;
  padding: 2rem;
  background: $background-light;

  @include tablet-desktop {
    align-items: center;
    justify-content: space-between;
  }

  @include mobile {
    flex-direction: column;
    row-gap: 2rem;
  }

  .left {
    display: flex;
    width: 100%;
    column-gap: 4rem;
  }

  .image {
    border-radius: 1rem;

    @include tablet-desktop {
      width: 11.7rem;
      height: 8.6rem;
    }

    @include mobile {
      width: 11.1rem;
      height: 8.2rem;
    }
  }

  .price {
    color: $white;
    font-family: 'Gilroy Bold';
    @include adaptive-font(2, 1.2);
    @include tablet-desktop {
      line-height: 2.4rem;
    }

    @include mobile {
      line-height: 1.5rem;
    }
  }

  .info {
    width: 100%;
    max-width: 26.5rem;

    @include mobile {
      display: flex;
      flex-direction: column;
      row-gap: 2rem;
    }
  }

  .title {
    color: $white;
    font-family: 'Gilroy Bold';
    @include adaptive-font(1.8, 1.6);

    @include tablet-desktop {
      line-height: 2.2rem;
    }

    @include mobile {
      line-height: 1.9rem;
    }
  }

  .description {
    @include tablet-desktop {
      margin-top: 0.4rem;
      color: #a6a7ab;
      font-family: Gilroy;
      @include adaptive-font(1.2, 1.6);
      line-height: 1.4rem;
    }

    @include mobile {
      display: none;
    }
  }

  .close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    background: #72a479;
    cursor: pointer;

    @include hover {
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
      }
    }

    &:focus {
      box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
    }

    @include tablet-desktop {
      width: 2.7rem;
      height: 2.7rem;
    }

    @include mobile {
      width: 1.8rem;
      height: 1.8rem;
    }

    /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
    &:deep(svg) {
      @include tablet-desktop {
        width: 1.1rem;
        height: 1.1rem;
      }

      @include mobile {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }

  .actions {
    display: flex;
    width: 100%;
    max-width: 40rem;
    align-items: center;
    justify-content: space-between;

    &--desktop {
      @include mobile {
        display: none;
      }
    }

    &--mobile {
      @include tablet-desktop {
        display: none;
      }
    }

    &-count-button {
      display: flex;
      align-items: center;
      color: $white;
      column-gap: 1.2rem;
      font-family: 'Gilroy Bold';
      @include adaptive-font(2, 1.2);

      @include tablet-desktop {
        line-height: 2.6rem;
      }

      @include mobile {
        line-height: 1.5rem;
      }

      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 50%;
        background: #72a479;
        cursor: pointer;

        @include hover {
          transition: all 0.3s ease;

          &:hover {
            box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
          }
        }

        &:focus {
          box-shadow: 0 0.5rem 1rem rgba(114, 163, 121, 70%);
        }

        @include tablet-desktop {
          width: 2.7rem;
          height: 2.7rem;
        }

        @include mobile {
          width: 1.8rem;
          height: 1.8rem;
        }

        /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
        & .minus:deep(svg) {
          @include tablet-desktop {
            width: 1.2rem;
            height: 0.3rem;
          }

          @include mobile {
            width: 0.86rem;
            height: 0.23rem;
          }
        }

        /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
        & .plus:deep(svg) {
          @include tablet-desktop {
            width: 1.1rem;
            height: 1.1rem;
          }

          @include mobile {
            width: 0.8rem;
            height: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
