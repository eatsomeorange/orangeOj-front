import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("登录用户信息", store.state.user.loginUser);
  let loginUser = store.state.user.loginUser;
  // if (to.meta?.access === "canAdmin") {
  //   // eslint-disable-next-line no-undef
  //   // alert(1);
  //   if (store.state.user.loginUser?.role !== "admin") {
  //     next("/noAuth");
  //     return;
  //   }
  // }

  if (
    !loginUser ||
    !loginUser.userRole ||
    loginUser.user === ACCESS_ENUM.NOT_LOGIN
  ) {
    //加 await 是为了等用户登录成功后在执行后续的代码
    await store.dispatch("user/getLoginUser");
    loginUser = store.state.user.loginUser;
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
  console.log(to);
});
