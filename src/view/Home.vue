<template>
  <main class="container">
    <section class="weather">
      <div class="weather__images">
        <img src="../images/condition/cloudy_weather.png" alt="">
      </div>
      <div class="weather__temperature">24°</div>
      <div class="weather__condition">Облачно</div>
      <div class="weather__date">Вторник, 27.06</div>
    </section>

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

    <section class="detail-info">
      <p class="text text__primary">ВОСХОД И ЗАКАТ</p>

      <img src="../images/graff.png" alt="">

      <p class="text text__secondary">Световой день: 18Ч 4М</p>
      <p class="text text__secondary">Солнце сядет через: 9Ч 56М</p>
    </section>

    <section class="days">
      <div class="days__item">
        <div class="days__item__text-primary">ПН</div>
        <div class="days__item__text-secondary">26.06</div>
        <picture>
          <img class="days__images" width="55" height="40" src="../images/condition/sunny_weather_small.png" alt="Солнечная погода">
        </picture>
        <div class="days__item__text-primary">24°С</div>
        <div class="days__item__text-secondary">11°С</div>
      </div>
      <div class="days__item days__item_active">
        <div class="days__item__text-primary">ПН</div>
        <div class="days__item__text-secondary">26.06</div>
        <picture>
          <img class="days__images" width="55" height="40" src="../images/condition/sunny_weather_small.png" alt="Солнечная погода">
        </picture>
        <div class="days__item__text-primary">24°С</div>
        <div class="days__item__text-secondary">11°С</div>
      </div>
      <div class="days__item">
        <div class="days__item__text-primary">ПН</div>
        <div class="days__item__text-secondary">26.06</div>
        <picture>
          <img class="days__images" width="55" height="40" src="../images/condition/sunny_weather_small.png" alt="Солнечная погода">
        </picture>
        <div class="days__item__text-primary">24°С</div>
        <div class="days__item__text-secondary">11°С</div>
      </div>
      <div class="days__item">
        <div class="days__item__text-primary">ПН</div>
        <div class="days__item__text-secondary">26.06</div>
        <picture>
          <img class="days__images" width="55" height="40" src="../images/condition/sunny_weather_small.png" alt="Солнечная погода">
        </picture>
        <div class="days__item__text-primary">24°С</div>
        <div class="days__item__text-secondary">11°С</div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",

}
</script>

<style scoped lang="scss">
  .weather {
    position: relative;
    color: #FFFFFF;
    padding: 10px 35px 30px;
    background: linear-gradient(90deg, #2395FF 26.74%, #1F81FE 68.4%, #1859FD 100%);
    box-shadow: 0 5px 15px 5px rgba(35, 149, 255, 0.2);
    border-radius: 36px;

    &__images {
      position: absolute;
      bottom: 100px;
      left: 10px;
    }

    &__temperature {
      text-align: right;
      font-weight: 700;
      font-size: 80px;
      line-height: 98px;
      letter-spacing: 0.05em;
      background: linear-gradient(180deg, #FFFFFF 0%, #D8ECFF 55.73%, #1859FD 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 22px;
    }

    &__condition {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 9px;
    }

    &__date {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    }
  }

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