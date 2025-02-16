
var human = [ 
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 }
];

const firstTeenager = human.find(person => person.age >= 10 && person.age <= 20);
const teenagers = human.filter(person => person.age >= 10 && person.age <= 20);
const areAllTeenagers = human.every(person => person.age >= 10 && person.age <= 20);
const isAnyTeenager = human.some(person => person.age >= 10 && person.age <= 20);

const Human = () => {
  return (
    <div>
      <h1>First Teenager</h1>
      <p>{firstTeenager.name} is {firstTeenager.age} years old</p>

      <h1>All People</h1> 
      {teenagers.map((person) => ( 
        <div>
          <p>Name: {person.name}</p> 
          <p>Age: {person.age}</p> 
        </div>
      ))}

      <h1>All Teenagers Check</h1> 
      <p>Are all people teenagers? {areAllTeenagers ? 'True' : 'False'}</p>

      <h1>Any Teenager Check</h1> 
      <p>Is there any teenager? {isAnyTeenager ? 'True' : 'False'}</p>
    </div>
  );
}

export default Human;
