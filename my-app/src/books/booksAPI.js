const headers = {
    'Accept': 'application/json'
}
export const getAll =()=>
    fetch("./allbooks.json")
        .then(res => res.json())
        .then(data =>  data.books);