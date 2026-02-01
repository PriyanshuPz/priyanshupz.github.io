<script lang="ts">
  const { children, ...rest } = $props();
</script>

<article class="prose prose-sm md:prose-base dark:prose-invert">
  {@render children()}
</article>
