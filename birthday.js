function showImage(src, clas){
  document.querySelector('.img-'+ clas).innerHTML = `<img src='${src}' class="js-img"></img>`; 
}