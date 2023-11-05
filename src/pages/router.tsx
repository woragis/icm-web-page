import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import pages from "./pagesData";

const Router = () => {
  const pagesRoutes = pages.map(({ title, path, element }) => {
    return <Route key={title} path={path} element={element} />;
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {pagesRoutes}
      </Route>
    </Routes>
  );
};

export default Router;
