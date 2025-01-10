const ListCourses = () => {
    const courses = [
        'React', 'ReactNative', 'NodeJs'
    ]
    return(
        <>
        <h1>Courses Name</h1>
          
            {courses.map((courses) =>(
                <ul>
                    <li>{courses}</li>
                </ul>
            ))}
            
        </>
    )
}
export default ListCourses;