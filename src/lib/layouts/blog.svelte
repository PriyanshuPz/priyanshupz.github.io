<script lang="ts">
  import { formatDate } from "$lib/data";

  const { children, ...rest } = $props();
</script>

<svelte:head>
  <title>{rest.title}</title>
</svelte:head>

<article class="prose prose-sm md:prose-base dark:prose-invert">
  <div>
    <h1 class="-ml-1.5"><a href="/blog">📔</a>/{rest.title}</h1>
    <p class="text-muted text-[16px]">
      {formatDate(rest.date)} • {rest.read} • {rest.tag}
    </p>
  </div>

  {@render children()}
</article>
