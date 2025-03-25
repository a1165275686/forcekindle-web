// router.beforeEach((to, from, next) => {
//   if (to.meta?.access === "canAdmin") {
//     if (store.state.user.loginUser?.role !== "admin") {
//       next("/noAuth");
//       return;
//     }
//   }
//   const loginUser = store.state.user.loginUser;
//
//   if (!loginUser || !loginUser.userRole) {
//     store.dispatch("user/getLoginUser");
//   }
//   next();
// });
