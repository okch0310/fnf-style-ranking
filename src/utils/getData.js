function getData() {
   
    fetch('http://localhost:8000/')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

export { getData }