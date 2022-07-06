import { writable, derived, get } from 'svelte/store'
import _cloneDeep from 'lodash/cloneDeep'

export const todos = writable([])
export const isListRecent = writable(true)
export const txtCurrentSort = derived(isListRecent, ($isListRecent) => {
  return $isListRecent ? '최신순' : '과거순'
})
export const selectedTodoItem = writable([])
export function saveStorage() {
  localStorage.setItem('todos', JSON.stringify(get(todos)))
  localStorage.setItem('isListRecent', JSON.stringify(get(isListRecent)))
}
export function initStorage() {
  localStorage.setItem('todos', [])
  localStorage.setItem('isListRecent', true)
}

export function todosOrder(payload) {
  const { oldIndex, newIndex } = payload
  const clone = _cloneDeep(get(todos)[oldIndex])
  get(todos).splice(oldIndex, 1)
  get(todos).splice(newIndex, 0, clone)
  saveStorage()
}