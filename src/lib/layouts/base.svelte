<script lang="ts">
  const { children, ...rest } = $props();
</script>

<svelte:head>
  <title>{rest.title}</title>
</svelte:head>

<article class="prose prose-sm md:prose-base dark:prose-invert">
  {@render children()}
</article>
