export function addChargeToLS(id, charge) {
  localStorage.setItem(id.toString(), JSON.stringify({ ...charge, ...{ type: 'charge' }, ...{ id: id.toString() } }))
}

export function deleteChargeFromLS(id) {
  localStorage.removeItem(id.toString())
}

export function updateChargeInLS(id, update) {
  const oldCharge = JSON.parse(localStorage.getItem(id.toString()))
  const updatedCharge = { ...oldCharge, ...update }

  localStorage.setItem(id.toString(), JSON.stringify(updatedCharge))
}
