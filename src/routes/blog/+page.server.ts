import { pathToSlug } from "$lib/utils";

export async function load() {
  try {
    const pages = import.meta.glob(`../../content/blog/*.md`);

    let data = [];

    for (const path in pages) {
      const page: any = await pages[path]();
      const slug = pathToSlug(path);
      data.push({ ...page.metadata, slug });
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
