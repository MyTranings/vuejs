export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGatters) {
    const coaches = getters.coaches;
    const userId = rootGatters.userId;

    return coaches.some(coach => coach.id === userId)
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;

    if (!lastFetch) {
      return true;
    }

    const currentTimeStamp = new Date().getTime();

    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
}