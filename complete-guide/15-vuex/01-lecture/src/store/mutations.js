export default {
  updateAuthentication(state, playload) {
    state.isAuthenticated = playload.isAuth;
  }
}