export const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const user =  await response.json()
    return user
}