<template>
  <div class="item">
    <div>
      <p>{{ firstName }}</p>
    </div>
    <div>
      <p>{{ lastName }}</p>
    </div>
    <div>
      <p>{{ studentID }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: ['firstName', 'lastName', 'studentID']
});
</script>

<style lang="scss" scoped>
p {
    margin: 0;
}

.item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  > div {
    border-bottom: 0.5px solid lighten(grey, 10%);
    border-right: 0.5px solid lighten(grey, 10%);

    > p {
      padding: 10px 10px;
    }
  }

  &:hover {
      background-color: lighten(grey, 40%);
  }
}
</style>
