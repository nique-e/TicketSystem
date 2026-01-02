import { useState } from "react";

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">

          <div className="card shadow">
            <div className="card-body">

              <h4 className="text-center mb-3">Registration</h4>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Contact</label>
                  <input
                    type="text"
                    name="contact"
                    className="form-control"
                    value={formData.contact}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-dark w-100">
                  Register
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
