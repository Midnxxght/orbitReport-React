const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Header TBD</th>
        </tr>
          <th>Name</th>
          <th>Type of Satellites</th>
          <th>Launch Date</th>
          <th>Status</th>
        </thead>
        <tbody>
          {sat.map((data) => (
          <tr key = {data.id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{data.operational ? 'Operational' : "Not Operational"}</td>
        </tr>
        ))}
        </tbody>
      </table>
  );
};

export default Table;