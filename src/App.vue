<template>
  <div class="app">
    <header class="header">
      <button class="btn btn--icon">
        <nav-icon/>
      </button>
      <button class="btn btn--icon">
        <search-icon/>
      </button>
    </header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import navIcon from "./components/icons/nav-icon.vue";
import searchIcon from "./components/icons/search-icon.vue";

export default {
  components: {
    navIcon,
    searchIcon
  }
}
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .btn {
    background: #FFFFFF;
    box-shadow: 0 5px 10px rgba(35, 149, 255, 0.2), inset 0 4px 15px rgba(0, 175, 240, 0.05);

    &--icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .app {
    max-width: 430px;
    padding: 40px 20px;
    border-radius: 24px;
    background-color: white;
  }
</style>
