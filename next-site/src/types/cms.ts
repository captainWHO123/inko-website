export type CmsSource = "fallback" | "headless";

export interface CmsDocument<T> {
  source: CmsSource;
  data: T;
}

export interface CmsSchemaField {
  name: string;
  type: string;
  description: string;
}

export interface CmsCollectionSchema {
  name: string;
  description: string;
  fields: CmsSchemaField[];
}
