import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state() {
        return {
            currentWeatherData: null,
        };
    },
    mutations: {
        setCurrentWeatherData(state, data) {
            state.currentWeatherData = data;
        },
    },
    actions: {
        async fetchWeatherData({ commit }) {
            try {
                const position = await getCurrentPosition();
                const { latitude, longitude } = position.coords;

                const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
                    params: {
                        key: 'e2f2fbc748174eed98c141646241803',
                        q: `${latitude},${longitude}`,
                    },
                });

                commit('setCurrentWeatherData', response.data.current);

            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        },
    },
});

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}
