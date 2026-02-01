<script lang="ts">
  const { children, ...rest } = $props();
</script>

<article class="prose prose-sm md:prose-base dark:prose-invert">
  <div>
    <h1 class="-ml-1.5"><a href="/projects">📔</a>/{rest.title}</h1>
    <div class="-mt-4">
      <a href={rest.url} target="_blank">View Full Details</a>
    </div>
  </div>

  {@render children()}
</article>
