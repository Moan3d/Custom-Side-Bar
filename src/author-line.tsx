import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles.scss"

/**
 * Inline byline for posts: "Author • Jun 06, 2026".
 *
 * - Author comes from the post's frontmatter: `author: Emran Hamid`
 * - Falls back to `defaultAuthor` when the frontmatter has no author
 * - Renders nothing on the landing page, and nothing on pages without
 *   dates (folder/tag index pages), so only real posts get a byline
 */

export interface AuthorLineOptions {
  defaultAuthor?: string
}

export const AuthorLine: QuartzComponentConstructor<AuthorLineOptions> = (userOpts) => {
  const opts: AuthorLineOptions = { ...userOpts }

  const Component: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
    if (!fileData || fileData.slug === "index") return <></>

    const dateRaw = fileData.dates?.modified ?? fileData.dates?.created
    if (!dateRaw) return <></>

    const author: string | undefined = fileData.frontmatter?.author ?? opts.defaultAuthor
    const locale: string = cfg?.locale ?? "en-US"
    const date = new Date(dateRaw).toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })

    return (
      <p class="author-line">
        {author && <span class="author-name">{author}</span>}
        {author && <span class="author-sep">&nbsp;•&nbsp;</span>}
        <span class="author-date">{date}</span>
      </p>
    )
  }

  Component.css = styles
  return Component
}

export default AuthorLine

