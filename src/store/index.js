import { writable, derived, get } from 'svelte/store'

export const todos = writable([])
export const isListRecent = writable(true)
export const txtCurrentSort = derived(isListRecent, ($isListRecent) => {
  return $isListRecent ? '최신순' : '과거순'
})
export function saveStorage() {
  localStorage.setItem('todos', JSON.stringify(get(todos)))
  localStorage.setItem('isListRecent', JSON.stringify(get(isListRecent)))
}
export function initStorage() {
  localStorage.setItem('todos', [])
  localStorage.setItem('isListRecent', true)
}