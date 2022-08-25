export interface IFile {
  name: string;
  hash: string;
  size: number;
}

export interface IPlanItem {
  name: string;
  pros: string[];
  cons?: string[];
  price?: number;
  storage: number;
  productLink?: string;
  main?: boolean;
}
