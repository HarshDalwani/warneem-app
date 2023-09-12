<!-- components/ShiftCard.vue -->

<template>
  <div class="card">
    <div class="card-content">
      <SideBar :currentShift="shift" :is-edit="true" />
      <p class="title">{{ shift.title }}</p>
      <p class="subtitle">{{ shift.description }}</p>
      <div>
        <p class="title">Dates</p>
        <table class="table">
          <tbody>
            <tr
              class="has-background-dark has-text-white"
              v-for="(item, index) in shift.dates"
              :key="index"
            >
              <td>{{ item.date }}</td>
              <td>{{ item.startTime }}</td>
              <td>{{ item.endTime }}</td>
              <td>{{ item.type }}</td>
              <td class="has-text-weight-bold has-text-right">
                {{ item.price }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";

export default {
  props: {
    id: Number,
    shift: Object, // The shift data to display
  },
  components: { SideBar },
};
</script>
