export interface IMeal {
  id: string
  image: string
  meal: string
}

export interface IMealCategory {
  categoryName: string
}

export interface IMealByCategory extends IMeal {}
