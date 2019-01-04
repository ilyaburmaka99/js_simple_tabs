let first = () => {
  document.getElementById("snackbar").innerHTML = "Default txt";
  let x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(() => x.className = x.className.replace("show", ""), 3000);
}
let sometxt = () => {
  let a = document.getElementById("t1").value;
  if(a == "") document.getElementById("snackbar").innerHTML = "Инпут не должен быть пустой";
  else document.getElementById("snackbar").innerHTML = a;
  let x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(()=> x.className = x.className.replace("show", ""), 3000);
}