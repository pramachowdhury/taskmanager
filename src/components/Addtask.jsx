const Addtask = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Add task
          </h1>
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Image url</span>
              </label>
              <input
                type="text"
                placeholder="image url"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Task level</span>
              </label>
              <select className="select select-bordered w-full ">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Details</span>
              </label>
              <textarea
                type="password"
                placeholder="write details"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <button className="btn btn-block btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addtask;
