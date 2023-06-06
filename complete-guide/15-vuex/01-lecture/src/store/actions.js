export default {
  updateAuthentication(context) {
    context.commit('updateAuthentication', { isAuth: !context.isAuthenticated })
  },
  login(context) {
    context.commit('updateAuthentication', { isAuth: true })
  },
  logout(context) {
    context.commit('updateAuthentication', { isAuth: false })
  }
}