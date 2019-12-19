<template>
  <div class="container mt-4">
    <h1 class="mb-5">Assembly</h1>
    <div class="table-header">
      <p>First Name</p>
      <p>Last Name</p>
      <p>Student ID</p>
    </div>
    <attendance-list :attendances="attendances"></attendance-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import AttendanceList from '../components/AttendanceList.vue';

export default Vue.extend({
  data() {
    return { attendances: [] };
  },
  components: {
    AttendanceList
  },
  watch: {
    async '$route.params.id'() {
      await this.setupAttendanceList();
    }
  },
  created() {
    this.setupAttendanceList();
  },
  methods: {
    async setupAttendanceList() {
      axios
        .get('https://robbacon-backend.herokuapp.com/baconBack/Attendance/')
        .then(response => {
          this.attendances = response.data;
        });
    }
  }
});
</script>

<style lang="scss" scoped>
.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
