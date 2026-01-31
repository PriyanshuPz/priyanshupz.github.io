import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig(async ({ command, mode }) => {
  const buildTime = new Date().toISOString();
  const commitHash = import.meta.env?.VERCEL_GIT_COMMIT_SHA || "prod";
  return {
    define: {
      "import.meta.env.PUBLIC_COMMIT_HASH": JSON.stringify(
        commitHash.substring(0, 7),
      ),
      "import.meta.env.PUBLIC_BUILD_TIME": JSON.stringify(buildTime),
    },
    plugins: [tailwindcss(), sveltekit()],
  };
});
