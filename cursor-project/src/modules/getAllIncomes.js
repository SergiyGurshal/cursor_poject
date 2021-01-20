export default function getAllCharges() {
  const maxID = +localStorage.getItem('id')

  const incomes = []

  for (let i = 0; i <= maxID; i++) {
    const item = localStorage.getItem(i.toString())
    const parsedItem = JSON.parse(item)

    if (!parsedItem) continue
    if (parsedItem.type === 'income') incomes.push(parsedItem)
  }

  return incomes
}
