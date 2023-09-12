// store/shifts.js

export const state = () => ({
  shifts: [],
});

export const mutations = {
  SET_SHIFTS(state, shifts) {
    state.shifts = shifts;
  },
  ADD_SHIFT(state, shift) {
    state.shifts.push(shift);
  },
  UPDATE_SHIFT(state, updatedShift) {
    const index = state.shifts.findIndex((s) => s.id === updatedShift.id);
    if (index !== -1) {
      state.shifts.splice(index, 1, updatedShift);
    }
  },
  DELETE_SHIFT(state, id) {
    state.shifts = state.shifts.filter((shift) => shift.id !== id);
  },
};

export const getters = {
  shifts(state) {
    return state.shifts;
  },
};
