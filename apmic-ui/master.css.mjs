/** @type {import('@master/css').Config} */
export default {
  styles: {
    row: 'display:flex flex-wrap:wrap',
    col: 'flex:10000|1|0%',
    btn: 'cursor:pointer cursor:not-allowed:disabled transition:all|200ms p:12|16 r:4 b:none f:bold flex ai:center gap:4',
    dark: 'filter:brightness(1.2):hover:not(:disabled)',
    light: 'filter:brightness(0.9):hover:not(:disabled)',
    outline: 'bg:none b:1|solid|#27353a! b:1|solid|#bfcfd4!:disabled',
    flat: 'color:gray bg:none bg:rgba(0,0,0,0.1):hover:not(:disabled) color:#BFCFD4:disabled',
    dense: 'p:2! h:24 as:center'
  }
}
