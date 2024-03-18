<template>
  <section class="detail-info">
    <p class="text text__primary">ВОСХОД И ЗАКАТ</p>

    <img src="../images/graff.png" alt="">

    <p class="text text__secondary">Световой день: 18Ч 4М</p>
    <p class="text text__secondary">Солнце сядет через: 9Ч 56М</p>
  </section>
</template>

<script>
export default {
  name: "SunriseSunset"
}
</script>

<style scoped lang="scss">
.detail {
  &-info {
    padding: 9px 24px;
    margin-top: 35px;
    background: #FDFCFC;
    box-shadow: 0 5px 30px 5px rgba(35, 149, 255, 0.2), inset 0px 4px 15px rgba(0, 175, 240, 0.05);
    border-radius: 11px;

    &__text {
      text-align: center;
    }
  }
}
</style>