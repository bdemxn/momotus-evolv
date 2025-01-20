export interface Category {
  category_name: string;
  id: string;
}

export type CategoryListInterface = {
  categoryList: Array<Category> | null
}