<template>
  <section class="days">
    <div class="days__item">
      <div class="days__item__text-primary">ПН</div>
      <div class="days__item__text-secondary">26.06</div>
      <picture>
        <img class="days__images" width="55" height="41" src="../images/condition/sunny_weather_small.png" alt="Солнечная погода">
      </picture>
      <div class="days__item__text-primary">24°С</div>
      <div class="days__item__text-secondary">11°С</div>
    </div>
    <div class="days__item days__item_active">
      <div class="days__item__text-primary">ПН</div>
      <div class="days__item__text-secondary">26.06</div>
      <picture>
        <img class="days__images" width="55" height="41" src="../images/condition/sunny_weather_small.png" alt="Солнечная погода">
      </picture>
      <div class="days__item__text-primary">24°С</div>
      <div class="days__item__text-secondary">11°С</div>
    </div>
    <div class="days__item">
      <div class="days__item__text-primary">ПН</div>
      <div class="days__item__text-secondary">26.06</div>
      <picture>
        <img class="days__images" width="55" height="41" src="../images/condition/sunny_weather_small.png" alt="Солнечная погода">
      </picture>
      <div class="days__item__text-primary">24°С</div>
      <div class="days__item__text-secondary">11°С</div>
    </div>
    <div class="days__item">
      <div class="days__item__text-primary">ПН</div>
      <div class="days__item__text-secondary">26.06</div>
      <picture>
        <img class="days__images" width="55" height="41" src="../images/condition/sunny_weather_small.png" alt="Солнечная погода">
      </picture>
      <div class="days__item__text-primary">24°С</div>
      <div class="days__item__text-secondary">11°С</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WeatherByDay"
}
</script>

<style scoped lang="scss">
  .days {
  display: flex;
  justify-content: space-between;
  margin-top: 35px;

  &__images {
    margin: 20px 0 15px;
  }

  &__item {
    text-align: center;
    border-radius: 45px;
    padding: 25px 13px;
    color: var(--text-color-deys);
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #2395FF 0%, #1859FD 47.12%);
      color: #FFF;
    }

    &_active {
      background: linear-gradient(180deg, #2395FF 0%, #1859FD 47.12%);
      color: #FFF;
      cursor: default;
    }

    &__text-primary {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }

    &__text-secondary {
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
    }
  }
}
</style>