var array = [1, 2, 3, 4];

const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

const SumComponent = () => {
  return (
    <div>
      <h1>Sum: {sum}</h1>
    </div>
  );
}

export default SumComponent;
