const ListCourses = () => {
    const courses = [
        'React', 'ReactNative', 'NodeJs'
    ]
    return(
        <>
        <h1>Courses Name</h1>
        <ul>
            {courses.map((courses, index) =>(
                <li key={index}>{courses}</li>
            ))}
        </ul>
        </>
    )
}
export default ListCourses;