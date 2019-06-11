const headers = {
    'Accept': 'application/json'
}
export const getAll = () =>
    fetch('./allbooks.json', { headers })
        .then(res => res.json())
        .then(data => data.books);