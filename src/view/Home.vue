<template>
  <main class="container">
    <weather-forecast/>

    <weather-info/>

    <sunrise-sunset/>

    <weather-by-day/>
  </main>
</template>

<script>
import axios from "../services/api";
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
  data() {
    return {
      weatherData: null,
    };
  },
  mounted() {
    this.fetchWeatherData();
  },
  methods: {
    async fetchWeatherData() {
      try {
        const position = await this.getCurrentPosition();
        const { latitude, longitude } = position.coords;

        const response = await axios.get('/current.json', {
          params: {
            key: 'e2f2fbc748174eed98c141646241803',
            q: `${latitude},${longitude}`,
          },
        });
        this.weatherData = response.data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
    getCurrentPosition() {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      })
    }
  },
}
</script>

<style scoped lang="scss">


</style>