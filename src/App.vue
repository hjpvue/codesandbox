<template>
  <div id="app">

    <FullCalendar defaultView="dayGridMonth"
                    :plugins="calendarPlugins"
                    :weekends="false"
                    :events="[
                      { title: 'event 1', date: '2019-04-01' },
                      { title: 'event 2', date: '2019-04-02' }
                    ]"
                    dateClick="handleDateClick" />

  </div>
</template>


<script>

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'


export default {
  name: "App",
  components: {

    FullCalendar
  },
  data() {
      return {
        calendarPlugins: [ dayGridPlugin ]
      }
    },
  methods: {
      handleDateClick(arg) {
        alert(arg.date)
      }
    }
};
</script>




<style scoped>
@import "/src/assets/css/space.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
