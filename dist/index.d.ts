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

interface Options {
    siteTitle: string;
    tagline: string;
    avatarSrc: string;
    navLinks: {
        text: string;
        href: string;
    }[];
    socials: {
        platform: "github" | "linkedin" | "twitter";
        href: string;
    }[];
}
declare const CustomSidebar: QuartzComponentConstructor<Options>;

export { CustomSidebar as default };
