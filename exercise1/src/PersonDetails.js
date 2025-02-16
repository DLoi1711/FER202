function Person(){
    const details = [
        { name: "Nguyen", age: 20, occupation: "Student" },
        { name: "Loi", age: 22, occupation: "Student" },
        { name: "Thanh", age: 23, occupation: "CameraMan" },
        { name: "Son", age: 31, occupation: "Chau Anh" },
    ]

const firstTeen = details.find((person) => person.age === 20)
const checkTeen = details.filter((person) => person.age >= 20 && person.age <= 30)

    return(
        <div>
            <h1>People List</h1>
            {details.map((details) => (
                <p>
                    {details.name} - {details.age} - {details.occupation}
            </p>
            ))}
            
            
            <h1>Table</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Occupation</th>
                        </tr>
                        </thead>
                        <tbody>
                            {details.map((details) => (
                                <tr>
                                    <td>{details.name}</td>
                                     <td>{details.age}</td>
                                     <td>{details.occupation}</td>
                                     </tr>
            ))}
            </tbody>
            </table>

            <h1>First Teen</h1>
            <p>{firstTeen.name}</p>

            <h1>Check</h1>
            {checkTeen.map((person) => (
                <li>
                    {person.name} - {person.age} - {person.occupation}
            </li>
    ))}

        </div>
    )
}
export default Person;