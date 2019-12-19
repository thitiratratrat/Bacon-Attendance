<template>
  <div class="wrapper">
    <attendance-item
      v-for="attendance in attendances"
      :key="attendance.userInfo.studentID"
      :lastName="attendance.userInfo.lastName"
      :firstName="attendance.userInfo.firstName"
      :studentID="attendance.userInfo.studentID"
    >
    </attendance-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AttendanceItem from './AttendanceItem.vue';

export default Vue.extend({
  props: ['attendances'],
  components: {
    AttendanceItem
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  border-top: 0.5px solid lighten(grey, 10%);
  border-left: 0.5px solid lighten(grey, 10%);
}
</style>
