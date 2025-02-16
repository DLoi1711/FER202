const ListCourses = () => {
    const courses = [
        'React', 'ReactNative', 'NodeJs'
    ]
    return(
        <>
        <h1>Courses Name</h1>
          
            {courses.map((courses) =>(
                {courses}
            ))}
        </>
    )
}
export default ListCourses;