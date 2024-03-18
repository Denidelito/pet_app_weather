<template>
  <section class="detail-info detail-info_row">
    <article class="detail-info__text">
      <p class="text text__primary">Время</p>
      <p class="text text__secondary">11:25</p>
    </article>
    <article class="detail-info__text">
      <p class="text text__primary">Ветер, м/с</p>
      <p class="text text__secondary">2,3 ⬋ СВ</p>
    </article>
    <article class="detail-info__text">
      <p class="text text__primary">Влага</p>
      <p class="text text__secondary">67%</p>
    </article>
    <article class="detail-info__text">
      <p class="text text__primary">КВ</p>
      <p class="text text__secondary">22</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "WeatherInfo"
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

      &_row {
        display: flex;
        justify-content: space-between;
      }

      &__text {
        text-align: center;
      }
    }
  }
</style>