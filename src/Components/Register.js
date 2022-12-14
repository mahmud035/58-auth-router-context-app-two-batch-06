import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error('error', error);
      });

    form.reset();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error('error', error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold pb-4">Please Register Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account? Sign In Now.
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>

            <div className="flex flex-col gap-4 pb-8 w-full ">
              <div className="divider xm:divider-horizontal">OR</div>
              <div className="grid flex-grow h-12 card rounded-box place-items-center">
                <Link>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline btn-success normal-case"
                  >
                    Sign Up with Google
                  </button>
                </Link>
              </div>

              <div className="grid flex-grow h-12 card rounded-box place-items-center ">
                <Link>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline btn-accent normal-case"
                  >
                    Sign Up with Github
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
