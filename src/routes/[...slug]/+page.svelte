<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title} | Priyanshu Verma</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose prose-sm md:prose-base dark:prose-invert">
  <data.content />
</article>
