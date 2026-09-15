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

// Slugs that should never appear in the post listing
const EXCLUDED_SLUGS = new Set(["index", "404", "about"])

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

    const posts = files
      .filter((f) => f.slug && !EXCLUDED_SLUGS.has(f.slug))
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
