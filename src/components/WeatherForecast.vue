<template>
  <section class="weather">
    <div class="weather__images">
      <img :src="weatherImage" alt="Погода">
    </div>
    <div class="weather__temperature">{{ temp }}°</div>
    <div class="weather__condition">{{ weatherCondition }}</div>
    <div class="weather__date">{{ currentDay }}</div>
  </section>
</template>

<script>
export default {
  name: "WeatherForecast",
  props: {
    temp: {
      type: Number,
      required: true,
      default: 0
    },
    cloud: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    currentDay() {
      const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
      const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

      const currentDate = new Date();
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const dayOfMonth = currentDate.getDate();
      const month = months[currentDate.getMonth()];

      return `${dayOfWeek}, ${dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth} ${month}`;
    },
    weatherCondition() {
      let text = "";

      switch (this.cloud) {
        case 0:
          text = 'Ясно';
          break;
        case 100:
          text = 'Пасмурно';
          break;
        default:
          text = this.cloud > 50 ? 'Облачно' : 'Переменная облачность';
          break;
      }

      return text;
    },
    weatherImage() {
      const src = '/src/images/condition/'
      switch (this.weatherCondition) {
        case 'Ясно':
          return src + "sunny_weather.png";
        case 'Облачно':
          return src + "cloudy_weather.png";
        case 'Дождь':
          return src + "rainy_weather.png";
        default:
          return src + "cloudy_weather.png";
      }
    }
  }
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
