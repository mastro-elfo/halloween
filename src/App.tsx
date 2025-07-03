import { Suspense } from "react";
import AppTheme from "./components/AppTheme/AppTheme";
import FallbackPage from "./pages/FallbackPage/FallbackPage";
import MainPage from "./pages/MainPage/MainPage";

export default function App() {
  return (
    <AppTheme>
      <Suspense fallback={<FallbackPage />}>
        <MainPage />
      </Suspense>
    </AppTheme>
  );
}
