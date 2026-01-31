<script lang="ts">
  import moment from "moment";

  const buildTime =
    import.meta.env.PUBLIC_BUILD_TIME || new Date().toISOString();
  const commitHash = import.meta.env.PUBLIC_COMMIT_HASH || "production";
  const timeAgo = moment(buildTime).fromNow();
</script>

<footer class="mx-auto max-w-190 my-5 mt-20 w-full px-[1.45rem]">
  <div
    class="flex items-center justify-between gap-4 text-sm sm:flex-row flex-col"
  >
    <div class="text-text-tertiary">
      <span>&copy; 2026 Priyanshu Verma</span>
    </div>
    <div class="flex items-center gap-1 max-sm:justify-center">
      <span>Built {timeAgo}</span>
      <span>•</span>
      <code>{commitHash}</code>
    </div>
  </div>
</footer>
