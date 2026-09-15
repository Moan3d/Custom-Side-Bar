import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles.scss"

export interface SidebarOptions {
  siteTitle: string
  tagline: string
  avatarSrc: string
  navLinks: { text: string; href: string; icon: "home" | "blog" | "categories" | "about" }[]
}

const defaultOptions: SidebarOptions = {
  siteTitle: "NileOverflow",
  tagline: "Security, Cloud, and the Art of the Hack.",
  avatarSrc: "/static/avatar.png",
  navLinks: [{ text: "About", href: "/about", icon: "about" }],
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

export const CustomSidebar: QuartzComponentConstructor<SidebarOptions> = (userOpts?: SidebarOptions) => {
  const opts: SidebarOptions = { ...defaultOptions, ...userOpts }

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

