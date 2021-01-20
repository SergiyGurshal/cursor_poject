export function addIncomeToLS(id, income) {
  localStorage.setItem(id.toString(), JSON.stringify({ ...income, ...{ type: 'income' }, ...{ id: id.toString() } }))
}

export function deleteIncomeFromLS(id) {
  localStorage.removeItem(id.toString())
}

export function updateIncomeInLS(id, update) {
  const oldIncome = JSON.parse(localStorage.getItem(id.toString()))
  const updatedIncome = { ...oldIncome, ...update }

  localStorage.setItem(id.toString(), JSON.stringify(updatedIncome))
}
