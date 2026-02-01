<script lang="ts">
  const { data } = $props();
</script>

<svelte:head>
  <title>Projects | Priyanshu Verma</title>
</svelte:head>

<ol class="list-disc list-outside">
  {#each data.projects as project}
    <a href={project.slug}>
      <li class="ml-6">
        <div class="mt-5 -mb-4 flex justify-between items-center">
          <span class="emoji">{project.title}</span>
          <p class="text-muted text-[16px]">{project.category}</p>
        </div>
      </li>
    </a>
  {/each}
</ol>
