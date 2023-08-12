const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th></th>
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
          <td>{data.operational ? 'Active' : "Inactive"}</td>
        </tr>
        ))}
        </tbody>
      </table>
  );
};

export default Table;