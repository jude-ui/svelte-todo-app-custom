<script>
  import { todos, isListRecent, txtCurrentSort, saveStorage, initStorage } from '~/store'

  let isOptOpen = false

  function updateListOrder(str) {
    isOptOpen = false
    if ((str === '최신순' && $isListRecent) ||
        (str === '과거순' && !$isListRecent)) return

    $isListRecent = $isListRecent ? false : true
    $todos = $todos.reverse()

    initStorage() // 로컬 스토리지의 store 데이터 초기화
    saveStorage() // 로컬 스토리지에 store 데이터 반영
  }
</script>

<div class="group_opt" class:opt_open={isOptOpen}><!-- opt_open 으로 제어 -->
  <a href="#none" class="link_opt" on:click|preventDefault={() => isOptOpen = !isOptOpen}>
    {$txtCurrentSort}<span class="material-icons-outlined ico_arr" aria-hidden="true">expand_more</span>
  </a>
  <ul class="list_opt">
    <li>
      <a
        on:click|preventDefault={() => updateListOrder('최신순')}
        href="#none"
        class:on={$isListRecent}>최신순</a>
    </li><!-- 선택시 on -->
    <li>
      <a
        on:click|preventDefault={() => updateListOrder('과거순')}
        href="#none"
        class:on={!$isListRecent}
        >과거순</a>
    </li>
  </ul>
</div>