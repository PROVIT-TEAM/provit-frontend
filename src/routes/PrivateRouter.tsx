import { Navigate, Outlet } from "react-router-dom";

import React, { useEffect } from "react";

const PrivateRouter = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("로그인 후 사용해 주세요");
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default PrivateRouter;
