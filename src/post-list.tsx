import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles.scss"

/**
 * Renders a dated, listed index of all posts.
 * Only renders on the site root (content/index.md); renders nothing elsewhere.
 *
 * Exported as a QuartzComponentConstructor (not a plain component) so the
 * Quartz v5 component loader instantiates it exactly like CustomSidebar.
 */

interface FileEntry {
  slug?: string
  frontmatter?: { title?: string; tags?: string[] | string }
  dates?: { created?: Date; modified?: Date }
}

// Pages that should never appear in the post listing
const EXCLUDED_SLUGS = new Set(["index", "404", "about", "tags"])

function titleOf(f: FileEntry): string {
  if (f.frontmatter?.title) return f.frontmatter.title
  return f.slug?.split("/").filter(Boolean).pop() ?? "Untitled"
}

function dateOf(f: FileEntry): Date | undefined {
  const d = f.dates?.modified ?? f.dates?.created
  return d ? new Date(d) : undefined
}

export const PostList: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = ({ allFiles, fileData, cfg }: QuartzComponentProps) => {
    if (!fileData || fileData.slug !== "index") return <></>

    const locale: string = cfg?.locale ?? "en-US"
    const files: FileEntry[] = Array.isArray(allFiles) ? allFiles : []
    const slugs = new Set(files.map((f) => f.slug).filter(Boolean) as string[])

    const posts = files
      .filter((f) => f.slug)
      // never list utility pages
      .filter((f) => !EXCLUDED_SLUGS.has(f.slug!))
      // never list tag listing pages (tags/<name>) — only posts themselves
      .filter((f) => !f.slug!.startsWith("tags/"))
      // never list Excalidraw sidecar files
      .filter((f) => !f.slug!.toLowerCase().includes("excalidraw"))
      // never list folder index pages: a folder's slug is a path prefix of
      // the real posts inside it (e.g. "blogs" vs "blogs/aws-...")
      .filter(
        (f) => ![...slugs].some((other) => other !== f.slug && other.startsWith(f.slug! + "/")),
      )
      // synthetic pages (folder/tag indexes) carry no dates; every real post
      // has one via created-modified-date (filesystem fallback) — this is the
      // catch-all that removes anything the rules above miss
      .filter((f) => dateOf(f))
      .sort((a, b) => {
        const ta = dateOf(a)?.getTime() ?? 0
        const tb = dateOf(b)?.getTime() ?? 0
        return tb - ta
      })

    const fmt = (d?: Date) =>
      d ? d.toLocaleDateString(locale, { year: "numeric", month: "short", day: "2-digit" }) : ""

    return (
      <div class="post-list">
        <h2 class="post-list-heading">Posts</h2>
        <ul class="post-list-items">
          {posts.map((p) => (
            <li class="post-list-item">
              <span class="post-list-date">{fmt(dateOf(p))}</span>
              <a class="post-list-title" href={`/${p.slug}`}>
                {titleOf(p)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  Component.css = styles
  return Component
}

export default PostList
