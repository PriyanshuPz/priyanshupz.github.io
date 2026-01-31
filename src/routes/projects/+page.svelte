<script lang="ts">
  const projects = [
    {
      name: "🔑 Piperpad",
      slug: "/projects/piperpad",
    },
  ];
</script>

<svelte:head>
  <title>Projects | Priyanshu Verma</title>
</svelte:head>

<ol class="list-disc list-outside">
  {#each projects as project}
    <a href={project.slug}>
      <li class="ml-6">
        <div class="mt-5 -mb-4 flex justify-between items-center">
          <span class="emoji">{project.name}</span>
          <p class="text-muted text-[16px]">Tech</p>
        </div>
      </li>
    </a>
  {/each}
</ol>
