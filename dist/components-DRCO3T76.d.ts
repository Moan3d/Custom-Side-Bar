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

export { CustomSidebar as C, type QuartzComponent as Q, type SidebarOptions as S };
