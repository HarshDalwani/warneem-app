<template>
  <div class="container">
    <h3 class="h3">Create / Edit</h3>
    <form @submit.prevent="submitForm">
      <section>
        <b-field label="Title">
          <b-input
            type="text"
            max="100"
            maxlength="100"
            required
            class="is-small"
            v-model="shiftObject.title"
          ></b-input>
        </b-field>
        <b-field label="Description">
          <b-input
            max="500"
            maxlength="500"
            type="textarea"
            class="is-small"
            v-model.trim="shiftObject.description"
          ></b-input>
        </b-field>
        <b-field label="Select a date">
          <b-datepicker
            required
            @input="addDate"
            v-model="shiftDates"
            placeholder="Click to select..."
            icon="calendar-today"
            trap-focus
            multiple
          >
          </b-datepicker>
        </b-field>
      </section>

      <div class="my-3" v-for="(date, i) in shiftObject.dates" :key="i">
        <div class="card is-small is-dark">
          <b-button
            class="is-small is-right m-2"
            @click="removeDate(i)"
            type="is-danger"
          >
            <span>Close</span>
          </b-button>
          <div class="card-content">
            <p class="sub-title">{{ date.date }}</p>

            <b-field label="Start Time">
              <b-input v-model="date.startTime" type="time"></b-input>
            </b-field>

            <b-field label="End Time">
              <b-input v-model="date.endTime" type="time"></b-input>
            </b-field>

            <b-field label="Price">
              <b-input v-model="date.price" type="number"></b-input>
            </b-field>

            <b-field label="Type">
              <b-select v-model="date.type">
                <option :value="opt" v-for="opt in typeOptions">
                  {{ opt }}
                </option>
              </b-select>
            </b-field>
          </div>
        </div>
      </div>
      <div class="block m-4">
        <b-button type="is-dark" class="m-3" @click="resetForm"
          >Delete</b-button
        >
        <b-button type="is-primary" class="m-3" native-type="submit"
          >Save</b-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    shift: {
      type: Object,
    },
  },
  data() {
    return {
      typeOptions: ["Consultation", "Telephone", "Ambulance"],
      shiftDates: [],
      shiftObject: {
        id: uuidv4(),
        title: "",
        description: "",
        dates: [],
      },
    };
  },
  methods: {
    ...mapMutations("shifts", ["ADD_SHIFT"]),
    removeDate(i) {
      this.shiftDates.splice(i, 1);
      this.shiftObject.dates.splice(i, 1);
    },
    resetForm() {
      this.shiftDates = [];
      this.shiftObject.title = "";
      this.shiftObject.description = "";
      this.shiftObject.dates = [];
      this.$emit("closeDrawer");
    },
    submitForm() {
      this.ADD_SHIFT({ ...this.shiftObject });
      this.resetForm();
    },
    addDate() {
      if (this.shiftDates.length) {
        this.shiftObject.dates = [];
        this.shiftDates.forEach((el, index) => {
          this.shiftObject.dates.push({
            date: el.toLocaleDateString(),
            startTime: "",
            endTime: "",
            price: "",
            type: "",
          });
        });
      }
    },
  },
  mounted() {
    if (this.shift) {
      this.shiftObject = this.shift;
      this.shift.dates.forEach(({ date }) =>
        this.shiftDates.push(new Date(date))
      );
    }
  },
};
</script>
