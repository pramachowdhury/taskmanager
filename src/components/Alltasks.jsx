const Alltasks = () => {
  return (
    <div className="w-[900px] mx-auto mb-64">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Image url</th>
              <th>Task level</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Lorem ipsum dolor sit amet.</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Lorem ipsum dolor sit amet.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltasks;
