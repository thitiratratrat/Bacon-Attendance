<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-12 col-md-3" @click="handleClickClass">
        <div class="classroom">
          <div class="head p-3">
            <h4>Assembly</h4>
            <p>Course Id: 1234567</p>
          </div>
          <div class="details p-3">
            <p>Ajarn Surin K.</p>
            <p>Session Time: 9.00 - 12.00</p>
            <p>Students: 33</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    handleClickClass() {
      this.$router.push('/classes/1');
    }
  }
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

p {
  margin: 0;
}

.classroom {
  border: 1px solid lighten(grey, 10%);
  border-radius: 3%;
  transition: transform 0.2s;

  > .head {
    display: block;
    background-color: #394461;
    color: white;
    border-radius: 3%;

    > p {
      color: #e39a9e;
      font-size: 0.7rem;
      font-weight: bold;
    }
  }

  > .detail {
    align-items: center;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.14);
    box-shadow: 5px 5px lighten(grey, 40%);
  }
}
</style>
