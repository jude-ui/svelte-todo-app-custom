<script>
  import shortid from 'shortid'
  import moment from 'moment'
  import { todos, saveStorage, isListRecent } from '~/store'

  let title = ''

  function createTodo() {
    if (!title || !title.trim()) return

    const todo = {
      id: shortid.generate(),
      title: title.trim(),
      isDone: false,
      time: moment().format('YYYY.MM.DD a h:mm:ss')
    }
    $isListRecent ? $todos.unshift(todo) : $todos.push(todo)
    
    $todos = $todos // 반응성 주입
    saveStorage()  // 로컬 스토리지 반영

    title = ''
  }
</script>

<div class="create_todo">
  <input
    bind:value={title}
    type="text"
    class="form_ctrl"
    on:keyup={e => {
      if (e.key === 'Enter') createTodo()
    }} />
  <button
    class="btn btn_primary"
    on:click={createTodo}>
    Todo 등록
  </button>
</div>