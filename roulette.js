const anchors = document.querySelectorAll('a');


let i = 1;
function coin(e) {
  e.preventDefault();
  const anchor = e.target;
  if (anchor.innerHTML == anchor.getAttribute("data-number"))
  {
  	i = 1;
  }
  if ( i == 1)
    {
        anchor.innerHTML = "<span>O</span>";
        i = 0;
    }
    else if (i == 0)
    {
        anchor.innerHTML = anchor.getAttribute("data-number");
        i = 1;
    }
    console.log(anchor);
}

for (const anchor of anchors) {
  anchor.addEventListener('click', coin);
}
