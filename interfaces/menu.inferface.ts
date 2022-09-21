// export interface Id {
//   secondCategory: string
// }

export interface PageItem {
  alias: string
  title: string
  _id: string
  category: string
}

export interface MenuItem {
  // _id: Id
  _id: {
    secondCategory: string
  }
  pages: PageItem[]
}
