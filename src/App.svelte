<script>
  import Sortable from 'sortablejs'
  import { onMount } from 'svelte'
  import { todos, initStorage, isListRecent, saveStorage, todosOrder, selectedTodoItem } from '~/store'
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

  let isDeleteAllLayer = false
  // 모두 삭제 확인 팝업 open
  function checkDeleteAllTodo() {
    isDeleteAllLayer = true
  }
  // 모두 삭제 확인 팝업 닫기
  function cancelDeleteAllTodo() {
    isDeleteAllLayer = false
  }
  // 모두 삭제 기능
  function deleteAllTodo() {
    $todos = []
    initStorage()
    isDeleteAllLayer = false
    isOrderEdit = false // todo 모두 삭제시 순서 변경 모드 off
  }
  
  // 순서 변경 모드 on/off
  let isOrderEdit = false
  function orderEdit() {
    isOrderEdit = !isOrderEdit
  }

  // 순서 변경 기능
  let listTodos
  let sortableLists
  onMount(() => {
    sortableLists = new Sortable(listTodos, {
      group: 'Todo Lists',
      handle: '.list_todo .btn_move',
      delay: 10,
      animation: 0,
      forceFallback: true,
      onEnd(e) {
        todosOrder({
          oldIndex: e.oldIndex,
          newIndex: e.newIndex
        })
        isOrderEdit
      }
    })
  });

  let isDeleteSelectedLayer = false
  // 선택 삭제 확인 팝업 open
  function checkDeleteSelectedTodo() {
    if (!$selectedTodoItem.length) return // 선택된 todo 없을 경우 레이어 작동 X
    isDeleteSelectedLayer = true
  }
  // 선택 삭제 확인 팝업 닫기
  function cancelDeleteSelectedTodo() {
    isDeleteSelectedLayer = false
  }
  // 선택 삭제 기능
  function deleteSelectedTodo() {
    $todos = $todos.filter(t => {
      return !$selectedTodoItem.includes(t.id)
    })
    saveStorage() // 로컬 스토리지 반영
    $selectedTodoItem = [] // 선택된 todo 정보의 배열 초기화
    isDeleteSelectedLayer = false
  }
  
</script>

<div class="container">
  <h1 class="tit_todo">Todo List</h1>
  <CreateTodo />
  
  {#if $todos.length}
    <div class="info_setting">
      <button 
        on:click={checkDeleteAllTodo}
        type="button" 
        class="btn btn_danger btn_init">
        전체 삭제<span class="material-icons-outlined ico_delete" aria-hidden="true">delete</span>
      </button>
      {#if isDeleteAllLayer}
      <CommonLayer 
        tit_layer='Todo 목록을 모두 삭제하겠습니까?'
        btn_fn1={deleteAllTodo}
        btn_fn2={cancelDeleteAllTodo} />
      {/if}
      <button
        on:click={orderEdit}
        type="button"
        class="btn btn_primary btn_order_change">
        순서 변경<span class="material-icons-outlined ico_change" aria-hidden="true">swap_vert</span>
      </button>
      <button
        on:click={checkDeleteSelectedTodo}
        type="button"
        class="btn btn_primary btn_order_change">
        선택 삭제<span class="material-icons-outlined ico_delete" aria-hidden="true">delete</span>
      </button>

      {#if isDeleteSelectedLayer}
      <CommonLayer
        tit_layer='선택한 Todo 목록을 모두 삭제하겠습니까?'
        btn_fn1={deleteSelectedTodo}
        btn_fn2={cancelDeleteSelectedTodo} />
      {/if}

      <ListOrderSetting />
    </div>
    <!-- // info_setting -->
    {/if}
    <ul
      bind:this={listTodos}
      class:active={$todos.length}
      class:edit_on={isOrderEdit}
      class="list_todo">
      {#each $todos as todo (todo.id)}
        <Todo {todo} />
      {/each}
    </ul>
</div>