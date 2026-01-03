import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: ""
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
          <div className="card border-0 shadow rounded-4">

            {/* Color header */}
            <div className="card-header bg-primary text-white text-center rounded-top-4">
              <h4 className="mb-0 fw-bold">Create Account</h4>
            </div>

            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-primary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control border-primary"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-success">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control border-success"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-warning">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control border-warning"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold text-info">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control border-info"
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-primary w-100 py-2 fw-bold rounded-3">
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
