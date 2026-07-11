import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles.scss"

interface Options {
  siteTitle: string
  tagline: string
  avatarSrc: string
  navLinks: { text: string; href: string; icon: "home" | "blog" | "categories" | "about" }[]
  socials: { platform: "github" | "linkedin" | "twitter"; href: string }[]
}

const defaultOptions: Options = {
  siteTitle: "NileOverflow",
  tagline: "Security, Cloud, and the Art of the Hack.",
  avatarSrc: "/static/avatar.png",
  navLinks: [
    { text: "Home", href: "/", icon: "home" },
    { text: "Blog", href: "/blogs", icon: "blog" },         // Fixed: matches your actual /blogs folder
    { text: "Categories", href: "/tags", icon: "categories" }, // Fixed: Quartz uses /tags for categories
    { text: "About", href: "/about", icon: "about" },
  ],
  socials: [
    { platform: "github", href: "https://github.com/yourhandle" },
    { platform: "linkedin", href: "https://linkedin.com/in/yourhandle" },
    { platform: "twitter", href: "https://twitter.com/yourhandle" },
  ],
}

const socialIcons: Record<string, string> = {
  github:
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0c2.3-1.6 3.4-1.2 3.4-1.2.6 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.7 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.5V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.6 0 4.1 2.4 4.1 5.4v6.2ZM5.3 7.4a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 20.4H3.6V9H7v11.4ZM22.2 0H1.8A1.8 1.8 0 0 0 0 1.8v20.4A1.8 1.8 0 0 0 1.8 24h20.4a1.8 1.8 0 0 0 1.8-1.8V1.8A1.8 1.8 0 0 0 22.2 0Z"/></svg>',
  twitter:
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M18.9 1.6h3.7l-8 9.2 9.5 12.6h-7.4l-5.8-7.6-6.6 7.6H.6l8.6-9.9L0 1.6h7.6l5.3 7 6-7Zm-1.3 19.5h2L6.5 3.8h-2l13.1 17.3Z"/></svg>',
}

const navIcons: Record<string, string> = {
  home: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
  blog: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h8M8 17h4"/></svg>',
  categories:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 12 8-9 10 10-9 8z"/><circle cx="8.5" cy="8.5" r="1"/></svg>',
  about:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8h.01"/></svg>',
}

function initials(title: string): string {
  return title
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export const CustomSidebar: QuartzComponentConstructor<Options> = (userOpts?: Options) => {
  const opts: Options = { ...defaultOptions, ...userOpts }

  const Component: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`custom-sidebar ${displayClass ?? ""}`}>
        <div class="custom-sidebar-avatar-wrap">
          <img
            class="custom-sidebar-avatar"
            src={opts.avatarSrc}
            alt={`${opts.siteTitle} avatar`}
            onError={(e) => {
              const img = e.currentTarget
              img.style.display = 'none'
              const fallback = img.nextElementSibling as HTMLElement
              if (fallback) fallback.style.display = 'flex'
            }}
          />
          <div class="custom-sidebar-avatar-fallback" style="display:none">
            {initials(opts.siteTitle)}
          </div>
        </div>
        <h1 class="custom-sidebar-title">{opts.siteTitle}</h1>
        <p class="custom-sidebar-tagline">{opts.tagline}</p>
        <div class="custom-sidebar-socials">
          {opts.socials.map((s) => (
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.platform}
              dangerouslySetInnerHTML={{ __html: socialIcons[s.platform] }}
            />
          ))}
        </div>
        <nav class="custom-sidebar-nav">
          {opts.navLinks.map((link) => (
            <a href={link.href}>
              <span
                class="custom-sidebar-nav-icon"
                dangerouslySetInnerHTML={{ __html: navIcons[link.icon] }}
              />
              <span>{link.text}</span>
            </a>
          ))}
        </nav>
      </div>
    )
  }

  Component.css = styles
  return Component
}

export default CustomSidebar