const ListHuman = () => {
    const human=[
        {
            name: 'Đờ',
            age: 10
        },
        {
            name: 'Mờ',
            age: 11
        },
        {
            name: 'Hờ',
            age: 12
        },
        {
            name: 'Loi',
            age: 13
        },
        {
            name: 'Nguyen',
            age: 14
        },
        {
            name: 'Thanh',
            age: 15
        },
    ]
    return(
        <>
        <h1>
            List Human
        </h1>{
            human.map((human, index) => {
                return (
                    <div>
                        <h3>Number: {index + 1}</h3>
                        <p>Name: {human.name}</p>
                        <p>Age: {human.age}</p>
                    </div>
                    )
            })
        }
        </>
    )
}
export default ListHuman;