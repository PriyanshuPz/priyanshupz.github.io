<script lang="ts">
  import SocialIcons from "$lib/components/socialIcons.svelte";
  import { PRESENT } from "$lib/data";
  import { formatDate } from "$lib/utils";

  const { data } = $props();
</script>

<svelte:head>
  <title>Priyanshu Verma</title>
</svelte:head>

<div
  class="flex md:items-start items-center justify-center mt-16 sm:flex-row flex-col"
>
  <img
    src="/priyanshu.png"
    alt="Priyanshu Verma"
    width="142"
    height="142"
    class="w-35.5 h-35.5"
  />
  <div class="sm:ml-9 mt-1">
    <p class="font-bold text-[28px] leading-[2.7rem] max-sm:text-center">
      <span><a href="/about">This is Priyanshu,</a></span>
      <br class="md:hidden" />
      <span
        class="dark:text-muted text-foreground/70 font-semibold max-sm:text-[22px] max-sm:leading-0"
      >
        I create <span class="text-[#85BFF7]">technology</span> that
        <br class="md:hidden" /> helps people to be productive.</span
      >
    </p>
  </div>
</div>
<SocialIcons />

<div class="mb-10">
  <span class="tracking-widest font-medium">I AM BUIDING</span>
  <a href={PRESENT.project.url} class="flex items-start" target="_blank">
    <div class="mt-5">
      <span class="emoji">{PRESENT.project.name}</span>
      <p class="text-muted">{PRESENT.project.description}</p>
    </div>
  </a>
  <a href="/p8labs"
    ><div class="mt-5">
      <span>See all projects built so far →</span>
    </div>
  </a>
</div>

<div>
  <span class="tracking-widest font-medium">RECENT POSTS</span>
  {#each data.posts as post}
    <div class="mt-5">
      <a href={post.slug} class="cursor-pointer">
        <span class="emoji">{post.title}</span>
      </a>
      <p class="text-muted text-[16px]">
        {formatDate(post.date)} • {post.read} • {post.tag}
      </p>
      <p class="text-muted text-[16px]">
        {post.description?.substring(0, 150)}...
      </p>
    </div>
  {/each}

  <a href="/blog"
    ><div class="mt-5">
      <span>Read more posts →</span>
    </div>
  </a>
</div>
