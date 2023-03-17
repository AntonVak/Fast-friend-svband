export function paginate (items, pageNum, pageSiz)  {
    //поиск индекса  pageNum -1, если 1 стр то индекс 0
    const startIndex = (pageNum -1) * pageSiz
    return [...items].splice(startIndex, pageSiz)
  }
  