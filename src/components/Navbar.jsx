import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#983b8ac2] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>Home</li>
              <li>All tasks</li>
              <li>Add Task</li>
              <li>My Task</li>
              <li>Services</li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Task menager</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4">
            <Link to="/">
              <li className="text-lg font-medium">Home</li>
            </Link>
            <Link to="/alltask">
              {" "}
              <li className="text-lg font-medium">All tasks</li>
            </Link>
            <Link to="/addtask">
              <li className="text-lg font-medium">Add Task</li>
            </Link>
            <Link to="/mytask">
              <li className="text-lg font-medium">My Task</li>
            </Link>
            <Link to="/services">
              <li className="text-lg font-medium">Services</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#fd727299] text-white border-none">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
