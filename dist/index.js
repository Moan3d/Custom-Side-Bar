import {
  CustomSidebar,
  S,
  styles_default,
  u
} from "./chunk-HRX5M6LH.js";

// src/post-list.tsx
var EXCLUDED_SLUGS = /* @__PURE__ */ new Set(["index", "404", "about"]);
function titleOf(f) {
  if (f.frontmatter?.title) return f.frontmatter.title;
  return f.slug?.split("/").filter(Boolean).pop() ?? "Untitled";
}
function dateOf(f) {
  const d = f.dates?.modified ?? f.dates?.created;
  return d ? new Date(d) : void 0;
}
var PostList = ({ allFiles, fileData, cfg }) => {
  if (!fileData || fileData.slug !== "index") return /* @__PURE__ */ u(S, {});
  const locale = cfg?.locale ?? "en-US";
  const files = Array.isArray(allFiles) ? allFiles : [];
  const posts = files.filter((f) => f.slug && !EXCLUDED_SLUGS.has(f.slug)).sort((a, b) => {
    const ta = dateOf(a)?.getTime() ?? 0;
    const tb = dateOf(b)?.getTime() ?? 0;
    return tb - ta;
  });
  const fmt = (d) => d ? d.toLocaleDateString(locale, { year: "numeric", month: "short", day: "2-digit" }) : "";
  return /* @__PURE__ */ u("div", { class: "post-list", children: [
    /* @__PURE__ */ u("h2", { class: "post-list-heading", children: "Posts" }),
    /* @__PURE__ */ u("ul", { class: "post-list-items", children: posts.map((p) => /* @__PURE__ */ u("li", { class: "post-list-item", children: [
      /* @__PURE__ */ u("span", { class: "post-list-date", children: fmt(dateOf(p)) }),
      /* @__PURE__ */ u("a", { class: "post-list-title", href: `/${p.slug}`, children: titleOf(p) })
    ] })) })
  ] });
};
PostList.css = styles_default;

// src/tag-cloud.tsx
var MAX_TAGS = 12;
function pathToRoot(slug) {
  if (!slug || slug === "index") return "";
  const depth = slug.split("/").filter((s) => s.length > 0).length;
  return depth <= 1 ? "" : "../".repeat(depth - 1);
}
var TagCloud = ({ allFiles, fileData }) => {
  const files = Array.isArray(allFiles) ? allFiles : [];
  const counts = /* @__PURE__ */ new Map();
  for (const f of files) {
    const raw = f?.frontmatter?.tags;
    const tags = Array.isArray(raw) ? raw : typeof raw === "string" ? raw.split(/,\s*/) : [];
    for (const t of tags) {
      const tag = String(t).trim();
      if (tag) counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  if (counts.size === 0) return /* @__PURE__ */ u(S, {});
  const sorted = [...counts.entries()].map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag)).slice(0, MAX_TAGS);
  const root = pathToRoot(fileData?.slug ?? "index");
  return /* @__PURE__ */ u("div", { class: "tag-cloud", children: [
    /* @__PURE__ */ u("h3", { class: "tag-cloud-heading", children: "Discover by tag" }),
    /* @__PURE__ */ u("ul", { class: "tag-cloud-list", children: sorted.map(({ tag, count }) => /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u("a", { class: "tag-cloud-chip", href: `${root}tags/${encodeURIComponent(tag)}`, children: [
      "#",
      tag,
      /* @__PURE__ */ u("span", { class: "tag-cloud-count", children: count })
    ] }) })) })
  ] });
};
TagCloud.css = styles_default;
export {
  CustomSidebar,
  PostList,
  TagCloud,
  CustomSidebar as default
};
