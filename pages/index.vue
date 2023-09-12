<!-- pages/Shifts.vue -->
<template>
  <div class="container" style="margin-top: 100px">
    <!-- <b-slider
      v-if="shifts.length"
      :min="minPrice"
      :max="maxPrice"
      v-model="priceRange"
    ></b-slider> -->
    <div class="columns is-centered">
      <div class="column is-half">
        <div v-if="shifts.length === 0">
          <p>No shifts available.</p>
        </div>
        <div class="my-5" v-else>
          <ShiftCard v-for="(shift, i) in shifts" :key="i" :shift="shift" />
        </div>
      </div>
      <div class="column is-half">
        <SideBar />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("shifts", ["shifts"]),
  },
};
</script>
