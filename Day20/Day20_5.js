localStorage.clear();

localStorageContent();

localStorage.setItem("name", "Jackie Don");
localStorage.setItem("profession", "Actor");

localStorageContent();

localStorage.removeItem("profession");

localStorageContent();

function localStorageContent() {
  if (localStorage.length === 0) console.log("local Storage is empty");
  else {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`${key} : ${value}`);
    }
  }
}

sessionStorage.clear();

sessionStorageContent();

sessionStorage.setItem("Actress", "Jasmine");
sessionStorage.setItem("Olympics", "France");

sessionStorageContent();

sessionStorage.removeItem("Olympics");

sessionStorageContent();

function sessionStorageContent() {
  if (sessionStorage.length === 0) {
    console.log("Session storage is empty");
  } else {
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      const value = sessionStorage.getItem(key);

      console.log(`${key} is ${value}`);
    }
  }
}
