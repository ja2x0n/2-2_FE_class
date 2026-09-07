import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    // PDF 4쪽: 로그로 수동 최적화를 확인하는 동안 React Compiler 비활성화.
    plugins: [react()],
});
