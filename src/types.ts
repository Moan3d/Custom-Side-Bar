import { JSX } from "preact"

export interface QuartzComponentProps {
  displayClass?: string
  cfg?: any
  fileData?: any
  tree?: any
  [key: string]: any
}

export interface QuartzComponent {
  (props: QuartzComponentProps): JSX.Element
  css?: string
}

export type QuartzComponentConstructor<T = undefined> = T extends undefined
  ? () => QuartzComponent
  : (userOpts?: T) => QuartzComponent
