const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const Companies = () => {
  const companiesAfter1987 = companies.filter(company => company.start > 1987);
  const retailCompanies = companies
    .filter((company) => company.category === "Retail")
    .map((company) => ({
      ...company,
      start: company.start + 1,
    }));

  const sortAges = ages.sort((a, b) => b - a);
  const totalAges = ages.reduce((Sum, age) => Sum + age, 0);

  return (
    <div>
      <h1>Danh Sách</h1>
        {companies.map((company, index) => (
          <li key={index}>{company.name}</li>
        ))}

      <h1>Danh Sách Công Ty Sau 1987</h1>
        {companiesAfter1987.map((company, index) => (
          <li key={index}>{company.name}</li>
        ))}

      <h1>Retail Companies</h1>
      <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Start</th>
          <th>End</th>
        </tr>
      </thead>
      <tbody>
        {retailCompanies.map((company, index) => (
          <tr key={index}>
            <td>{company.name}</td>
            <td>{company.category}</td>
            <td>{company.start}</td>
            <td>{company.end}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h1>Sorted Ages</h1>
        {sortAges.map((age, index) => (
          <li key={index}>{age}</li>
        ))}
        
    <h1>Tổng số tuổi</h1>
      <p>{totalAges}</p>

    </div>
  );
};

export default Companies;