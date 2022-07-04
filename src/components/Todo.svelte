<script>
  import { todos, saveStorage } from '~/store'
  import CommonLayer from '~/components/CommonLayer'
  import moment from 'moment'
  
  export let todo // todo 데이터

  let isEditMode = false
  let title = ''
  let isLayerOn = false
  let checkDone = todo.isDone ? 'check_box' : 'check_box_outline_blank'

  function onEditMode() {
    // input에 todo 데이터 반영하여 수정 상태 on
    title = todo.title
    isEditMode = true
  }
  function offEditMode() {
    isEditMode = false
  }

  // update
  function updateTodo() {
    // 빈 문자열로 수정할 경우 목록에서 삭제
    if (!title.trim()) {
      $todos = $todos.filter(t => t.id !== todo.id)
      return
    }
    
    updateTime() // 시간 업데이트
    todo.title = title.trim() // store 반영
    saveStorage() // 로컬 스토리지 반영
    offEditMode()
  }
  function updateTime() {
    // 수정 시각 업데이트 및 (수정됨) 문구 추가
    if (todo.title !== title.trim()) { // 스토어의 title과 입력한 title.trim()이 다르다면
      todo.time = moment().format('YYYY.MM.DD a h:mm:ss') + ' (수정됨)'
    }
  }

  function updateTodoDone() {
    todo.isDone = !todo.isDone
    checkDone = todo.isDone ? 'check_box' : 'check_box_outline_blank'
    updateTime() // 시간 업데이트
    saveStorage() // 로컬 스토리지 반영
  }
  
  function onDeleteTodoLayer() {
    isLayerOn = true
  }
  function cancelDelete() {
    isLayerOn = false
  }
  // delete
  function deleteTodo() {
    // 현재 todo를 제외한 배열을 필터해서 전체 데이터 배열에 덮어쓰기
    $todos = $todos.filter(t => t.id !== todo.id) // store 반영
    isLayerOn = false // 레이어 닫기
    saveStorage() // 로컬 스토리지 반영
  }
</script>

<li>
  {#if isEditMode}
    <div class="mode_edit">
      <input
        bind:value={title}
        class="form_ctrl"
        on:keyup={e => {
          if(e.key === 'Enter') updateTodo()
        }}
        type="text">
      <div class="group_btn_m">
        <button
          type="button"
          on:click={updateTodo}
          class="material-icons-outlined"
          aria-label="OK">check_circle</button>
        <button
          type="button"
          on:click={offEditMode}
          class="material-icons-outlined">cancel</button>
      </div>
      <div class="group_btn_pc">
        <button 
          on:click={updateTodo}
          class="btn btn_primary">OK</button>
        <button
          on:click={offEditMode}
          class="btn btn_secondary">Cancel</button>
      </div>
    </div>
  {:else}
    <div class="mode_normal">
      <div class="txt_info" class:item_done={todo.isDone}>
        <button type="button" class="material-icons-outlined btn_move" aria-label="순서 이동 버튼">
          dehaze
        </button>
        <div class="group_check">
          <input
            title="할일 완료"
            id="{todo.id}"
            type="checkbox"
            class="inp_check"
            checked={todo.isDone}
            on:click={updateTodoDone}
            >
          <label
            class="lab_check"
            for="{todo.id}">
            <span class="screen_out">완료</span>
            <div
              class="material-icons-outlined ico_check"
              aria-hidden="true">
              {checkDone}
            </div>
          </label>
        </div>
        <div class="txt_todo">
          <span class="todo_txt">{todo.title}</span>
          <span class="txt_date">{todo.time}</span>
        </div>
        <div class="txt_more">{todo.title}</div>
      </div>
      <div class="group_btn_m">
        <button
          type="button"
          on:click={onEditMode}
          class="material-icons-outlined">edit</button>
        <button
          type="button"
          on:click={onDeleteTodoLayer}
          class="material-icons-outlined">delete</button>
      </div>
      <div class="group_btn_pc">
        <button
          type="button"
          class="btn btn_secondary"
          on:click={onEditMode}>Edit</button>
        <button
          type="button"
          on:click={onDeleteTodoLayer}
          class="btn btn_danger">Delete</button>
      </div>
    </div>
  {/if}
  {#if isLayerOn}
    <CommonLayer 
      tit_layer='삭제하시겠습니까?'
      btn_fn1={deleteTodo}
      btn_fn2={cancelDelete} />
  {/if}
</li>