const colorTag = {
    p:'#388e3c',
    div:'#1565c0',
    span:'#c53935',
    section:'#f67809',
    ul: '#5e35b1',
    ol:'#fbc02d',
    header:'#d81b60',
    nav:'#64dd17',
    main:'#00acc1',
    footer:'#304ffe',
    form:'#9f6581',
    body:'#25b6da',
    padrao:'#616161',
    get(tag){
        return this[tag]? this[tag]: this.padrao
    }


}



document.querySelectorAll(".tag").forEach((elemento) => {
  const exibeTagName = elemento.tagName.toLowerCase();
  elemento.style.borderColor = colorTag.get(exibeTagName);

  if (!elemento.classList.contains("nolabel")) {
    const label = document.createElement("label");
    label.style.backgroundColor = colorTag.get(exibeTagName);
    label.innerHTML = exibeTagName;
    elemento.insertBefore(label, elemento.childNodes[0]);
  }
});
