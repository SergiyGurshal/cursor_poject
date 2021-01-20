export default function getNewId() {
  const oldID = localStorage.getItem('id')
  const newID = oldID ? (+oldID + 1).toString() : '0'
  localStorage.setItem('id', newID)
  return newID
}
