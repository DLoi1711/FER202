function UserProfile ({user}){
    return(
        <div>
            <h1>Hello, {user.name}, {user.age} tuổi</h1>
        </div>
    )
}
export default UserProfile;