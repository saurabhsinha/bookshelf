
export const getAll =()=>
    fetch("../../public/allbooks.json")
        .then(function(data){
            console.log(data)
        });