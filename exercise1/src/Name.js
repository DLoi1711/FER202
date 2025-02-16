function Name(){
    const names = ["John", "Mary", "David", "Emily"];
    return(
        <div>
        <h1>Name</h1>
        {names.map((names) => (
            <p>{names}</p>
        ))}
        </div>
    )
}
export default Name;