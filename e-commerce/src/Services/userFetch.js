const userFetch = async () => {
    const res = await fetch('https://dummyjson.com/users');
    return res.json()
}
 export default userFetch;