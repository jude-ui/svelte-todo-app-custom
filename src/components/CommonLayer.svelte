<script>
  export let btn_fn1
  export let btn_fn2
  export let btn_txt1 = '확인'
  export let btn_txt2 = '취소'
</script>

<div class="dimmed_layer" on:click|self={btn_fn2}>
  <div class="inner_dimmed_layer">
    <div class="layer_body">
      <strong>
        <slot>레이어 제목</slot>
      </strong>
    </div>
    <div class="layer_foot">
      <button
        on:click={btn_fn1}
        class="btn btn_danger">{btn_txt1}</button>
      <button
        on:click={btn_fn2}
        class="btn btn_secondary">{btn_txt2}</button>
    </div>
  </div>
</div>