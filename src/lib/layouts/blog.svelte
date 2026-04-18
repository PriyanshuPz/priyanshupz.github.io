<script lang="ts">
  import { formatDate } from "$lib/utils";

  const { children, ...rest } = $props();
</script>

<article class="prose prose-sm md:prose-base dark:prose-invert">
  <div>
    <h1>{rest.title}</h1>
    <p class="text-muted text-[16px]">
      {formatDate(rest.date)} • {rest.read} • {rest.tag}
    </p>
  </div>

  {@render children()}
</article>
