<script lang="ts">
  import "./layout.css";
  import { SITE_CONF } from "$lib/constants";
  import ThemeToggle from "$lib/components/themeToggle.svelte";
  import Footer from "$lib/components/footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <!-- Primary SEO -->
  <meta name="title" content={SITE_CONF.title} />
  <meta name="description" content={SITE_CONF.description} />
  <meta name="keywords" content={SITE_CONF.keywords} />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="author" content={SITE_CONF.author} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href={SITE_CONF.baseURL} />

  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={SITE_CONF.baseURL} />
  <meta property="og:title" content={SITE_CONF.title} />
  <meta property="og:description" content={SITE_CONF.description} />
  <meta property="og:image" content="/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content={SITE_CONF.title} />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={SITE_CONF.title} />
  <meta name="twitter:description" content={SITE_CONF.description} />
  <meta name="twitter:image" content="/og.png" />
  <meta name="twitter:creator" content="@PriyanshuPz" />
  <meta name="twitter:site" content="@PriyanshuPz" />

  <link rel="icon" href="/priyanshu.png" />

  <!-- fonts 
    -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Emoji:wght@300..700&family=Outfit:wght@100..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="flex flex-col min-h-screen justify-center items-center w-full mx-auto max-w-190"
>
  <article
    class="flex-1 py-6 px-[1.45rem] text-[1.1rem] leading-8.5 tracking-[0.9px] w-full h-full"
  >
    <header
      class="pt-4 pb-10 w-full flex items-center justify-center dark:text-muted text-foreground"
    >
      <div>
        <a
          class="hidden min-[400px]:block no-underline font-bold text-lg"
          href="/">{SITE_CONF.author.toUpperCase()}</a
        ><a
          class="min-[400px]:hidden block no-underline font-bold text-lg"
          href="/">Pv</a
        >
      </div>
      <nav
        class="flex-1 max-w-136 flex items-center justify-end text-lg space-x-5"
      >
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <ThemeToggle />
      </nav>
    </header>

    {@render children()}
  </article>

  <Footer />
</div>
