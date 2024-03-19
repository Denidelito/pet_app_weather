<template>
  <main class="container">
    <weather-forecast :temp="currentWeatherData ? currentWeatherData.temp_c : null"/>

    <weather-info/>

    <sunrise-sunset/>

    <weather-by-day/>
  </main>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
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
  setup() {
    const store = useStore();

    const currentWeatherData = computed(() => store.state.currentWeatherData);

    onMounted(() => {
      store.dispatch('fetchWeatherData');
    });

    return {
      currentWeatherData,
    };
  },
};
</script>

<style scoped lang="scss">
/* Ваши стили */
</style>
