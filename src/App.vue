<script setup lang="ts">

</script>

<template>
  <div class="app">
    <header class="app-header">
      <button class="btn btn--icon">navigation</button>
      <button class="btn btn--icon">search</button>
    </header>
    <main class="app-container">
      body
    </main>
  </div>
</template>

<style scoped lang="scss">
  .btn {
    background: #FFFFFF;
    box-shadow: 0 5px 10px rgba(35, 149, 255, 0.2), inset 0 4px 15px rgba(0, 175, 240, 0.05);

    &--icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .app {
    width: 100%;
    max-width: 430px;
    padding: 40px 20px;
    border-radius: 24px;
    background-color: white;

    &-header {
      display: flex;
      justify-content: space-between;
    }

    &-container {

    }
  }
</style>
