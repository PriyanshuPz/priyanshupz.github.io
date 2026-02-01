import { pathToSlug } from "$lib/utils";

export async function load() {
  try {
    const pages = import.meta.glob(`../../content/projects/*.md`);

    let data = [];

    for (const path in pages) {
      const page: any = await pages[path]();
      const slug = pathToSlug(path);
      data.push({ ...page.metadata, slug });
    }

    return {
      projects: data,
    };
  } catch (error) {
    console.log(error);
    return {
      projects: [],
    };
  }
}
