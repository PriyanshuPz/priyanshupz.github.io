<script lang="ts">
  import { formatDate, posts } from "$lib/data";
</script>

<svelte:head>
  <title>Blog | Priyanshu Verma</title>
</svelte:head>

<ol class="list-disc list-outside">
  {#each posts as post}
    <a href={post.url}>
      <li class="ml-6">
        <div class="mt-5">
          <span class="emoji">{post.title}</span>
          <p class="text-muted text-[14px] -mt-2">
            {formatDate(post.date)} • {post.read} • {post.tag}
          </p>
        </div>
      </li>
    </a>
  {/each}
</ol>
