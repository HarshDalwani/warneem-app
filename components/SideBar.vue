<template>
  <div>
    <b-sidebar
      class="custom-sidebar"
      type="is-light"
      :fullheight="fullheight"
      :overlay="overlay"
      :right="right"
      v-model="open"
      :canCancel="false"
    >
      <div class="p-1">
        <ManageShift
          :shift="currentShift"
          @closeDrawer="hideDrawer"
        />
      </div>
    </b-sidebar>
    <b-button v-if="!isEdit" class="button is-black" @click="open = true"
      >ADD SHIFT</b-button
    >
    <b-button v-else size="is-samll" class="m-2 is-right" @click="open = true">
      <b-icon icon="pencil" size="is-small" />
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    currentShift: Object,
  },
  data() {
    return {
      customWidth: "500px",
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: true,
    };
  },
  methods: {
    hideDrawer() {
      this.open = false;
    },
  },
};
</script>

<style scoped>
.p-1 {
  padding: 1em;
}
.custom-sidebar {
  width: 500px;
}
</style>
