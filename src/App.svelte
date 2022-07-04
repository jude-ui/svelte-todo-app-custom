<script>
  import Sortable from 'sortablejs'
  import { onMount } from 'svelte'
  import { todos, initStorage, isListRecent, saveStorage, todosOrder } from '~/store'
  import Todo from '~/components/Todo'
  import CreateTodo from '~/components/CreateTodo'
  import ListOrderSetting from '~/components/ListOrderSetting'
  import CommonLayer from '~/components/CommonLayer'

  // 새로고침시 로컬 스토리지 todos를 화면에 반영
  const storageTodos = localStorage.getItem('todos')
  if (storageTodos) $todos = JSON.parse(storageTodos)

  // 새로고침시 기존 정렬이 과거순이라면 다시 최신순으로 화면에 반영
  const storageOrderRecent = localStorage.getItem('isListRecent')
  if (!JSON.parse(storageOrderRecent)) {
    // 과거순일 경우
    $isListRecent = true
    $todos = $todos.reverse() // 과거순인 todos 목록을 최신순으로 변경
    saveStorage() // 로컬 스토리지도 최신순으로 반영
  }

  let isLayerOn = false

  function checkInit() {
    isLayerOn = true
  }
  function initTodos() {
    $todos = []
    initStorage()
    isLayerOn = false
  }
  function cancelInit() {
    isLayerOn = false
  }


  let listTodos
  let sortableLists
  onMount(() => {
    sortableLists = new Sortable(listTodos, {
      group: 'Todo Lists',
      handle: '.list_todo .btn_move',
      delay: 50,
      animation: 0,
      forceFallback: true,
      onEnd(e) {
        todosOrder({
          oldIndex: e.oldIndex,
          newIndex: e.newIndex
        })
      }
    })
  });
  
</script>

<div class="container">
  <h1 class="tit_todo">Todo List</h1>
  <CreateTodo />
  
  {#if $todos.length}
    <div class="info_setting">
      <button 
        on:click={checkInit}
        type="button" 
        class="btn btn_danger btn_init">
        전체 삭제<span class="material-icons-outlined ico_delete" aria-hidden="true">delete</span>
      </button>
      {#if isLayerOn}
      <CommonLayer 
        tit_layer='Todo 목록을 모두 초기화 시키겠습니까?'
        btn_fn1={initTodos}
        btn_fn2={cancelInit} />
      {/if}
      <ListOrderSetting />
    </div>
    <!-- // info_setting -->
    
    <ul
      bind:this={listTodos}
      class="list_todo">
      {#each $todos as todo (todo.id)}
        <Todo {todo} />
      {/each}
    </ul>
  {/if}
</div>