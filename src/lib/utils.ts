export function pathToSlug(path: string): string {
  return (
    path
      .replace(/\\/g, "/") //
      .split("/content/")[1]
      ?.replace(/\.md$/, "")
      .replace(/\/index$/, "") ?? ""
  );
}

export function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
