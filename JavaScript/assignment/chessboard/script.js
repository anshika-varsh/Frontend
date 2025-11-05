const box=document.querySelector(".main");
const firstRow=`<div class="box"></div>`.repeat(8);
const secondRow=`<div class="box-even"></div>`.repeat(8);

const completRow=`${firstRow} ${secondRow}`.repeat(4);
box.innerHTML=completRow;
