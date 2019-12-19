<template>
  <div>
    <div class="home">
      <div class="mb-5">
        <button
          class="speech-bubble pl-2 pr-2 pt-3 pb-3 mb-4"
          @click="handleClickViewClass"
        >
          VIEW MY CLASSES!
        </button>
        <div class="main">
          <h1 class="mt-auto mb-0 mr-3 header">BACON</h1>
          <img src="../assets/bacon.png" />
        </div>
        <h1 class="header">
          ATTENDANCE
        </h1>
        <p class="slogan">/ Attendance checking made easy /</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    handleClickViewClass() {
      this.$router.push('/classes');
    }
  }
});
</script>

<style lang="scss" scoped>
.header {
  font-size: 4.7rem;
  font-weight: 700;
  color: #303952;

  @media only screen and (max-width: 766px) {
    font-size: 3rem;
    font-weight: 700;
  }
}

.home {
  height: 100vh;
  background-color: #e39a9e;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;

    > .speech-bubble {
      outline: none;
      border: none;
      font-weight: bold;
      color: #303952;
      margin-left: auto;
      display: inline-block;
      position: relative;
      background: #ffdbdb;
      border-radius: 0.4em;
      transition: background-color 0.3s ease-out;
      transition: background-color 0.3s ease-in;

      &:hover {
        background-color: darken(#ffdbdb, 15%);
        color: white;
      }
      &:hover:after {
        border-top-color: darken(#ffdbdb, 15%);
      }
    }

    .speech-bubble:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 70%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-top-color: #ffdbdb;
      border-bottom: 0;
      border-left: 0;
      margin-left: -10px;
      margin-bottom: -20px;
      transition: background-color 0.3s ease-out;
      transition: background-color 0.2s ease-in;
    }

    > .main {
      display: flex;
      flex-flow: row wrap;
      > img {
        height: 8rem;

        @media only screen and (max-width: 766px) {
          height: 5rem;
        }
      }
    }

    > .slogan {
      font-weight: bold;
      color: white;
      letter-spacing: 0.2rem;

      @media only screen and (max-width: 766px) {
        font-size: 0.5rem;
        letter-spacing: 0.17rem;
      }
    }

    @media only screen and (max-width: 766px) {
      margin: 0 40px;
    }
  }
}
</style>
