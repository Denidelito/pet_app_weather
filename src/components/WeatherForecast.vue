<template>
  <section class="weather">
    <div class="weather__images">
      <img src="../images/condition/cloudy_weather.png" alt="">
    </div>
    <div class="weather__temperature">24°</div>
    <div class="weather__condition">Облачно</div>
    <div class="weather__date">Вторник, 27.06</div>
  </section>
</template>

<script>
export default {
  name: "WeatherForecast"
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
</style>