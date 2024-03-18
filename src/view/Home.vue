<template>
  <main class="container">
    <weather-forecast/>

    <weather-info/>

    <sunrise-sunset/>

    <weather-by-day/>
  </main>
</template>

<script>
import weatherForecast from "../components/WeatherForecast.vue";
import weatherInfo from "../components/WeatherInfo.vue";
import sunriseSunset from "../components/SunriseSunset.vue";
import weatherByDay from "../components/WeatherByDay.vue";

export default {
  name: "Home",
  components: {
    weatherInfo,
    weatherForecast,
    sunriseSunset,
    weatherByDay
  },
}
</script>

<style scoped lang="scss">

</style>