const Contact = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Contact
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
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Message</span>
              </label>
              <textarea
                type="password"
                placeholder="write your message"
                className="w-full input input-bordered input-primary"
              />
            </div>

            <div>
              <button className="btn btn-block btn-primary">Sent</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
