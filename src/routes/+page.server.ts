import { pathToSlug } from "$lib/utils";

export async function load() {
  try {
    const pages = import.meta.glob(`../content/blog/*.md`);

    let data = [];

    let i = 0;

    for (const path in pages) {
      if (i > 3) break;
      const page: any = await pages[path]();
      const slug = pathToSlug(path);
      data.push({ ...page.metadata, slug });
      i++;
    }

    return {
      posts: data,
    };
  } catch (error) {
    console.log(error);
    return {
      posts: [],
    };
  }
}
