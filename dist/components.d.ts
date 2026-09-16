import { JSX } from 'preact';

interface QuartzComponentProps {
    displayClass?: string;
    cfg?: any;
    fileData?: any;
    tree?: any;
    [key: string]: any;
}
interface QuartzComponent {
    (props: QuartzComponentProps): JSX.Element;
    css?: string;
}
type QuartzComponentConstructor<T = undefined> = T extends undefined ? () => QuartzComponent : (userOpts?: T) => QuartzComponent;

declare const PostList: QuartzComponentConstructor;

declare const TagCloud: QuartzComponentConstructor;

/**
 * Inline byline for posts: "Author • Jun 06, 2026".
 *
 * - Author comes from the post's frontmatter: `author: Emran Hamid`
 * - Falls back to `defaultAuthor` when the frontmatter has no author
 * - Renders nothing on the landing page, and nothing on pages without
 *   dates (folder/tag index pages), so only real posts get a byline
 */
interface AuthorLineOptions {
    defaultAuthor?: string;
}
declare const AuthorLine: QuartzComponentConstructor<AuthorLineOptions>;

interface SidebarOptions {
    siteTitle: string;
    tagline: string;
    avatarSrc: string;
    navLinks: {
        text: string;
        href: string;
        icon: "home" | "blog" | "categories" | "about";
    }[];
}
declare const CustomSidebar: QuartzComponentConstructor<SidebarOptions>;

export { AuthorLine, CustomSidebar, PostList, type SidebarOptions, TagCloud, CustomSidebar as default };
