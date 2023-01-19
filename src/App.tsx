import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

const ArticlePage = lazy(() => import("./pages/ArticlePage/ArticlePage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const App: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;

export {};
