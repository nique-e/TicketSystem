import { useState } from "react";

const CustomerProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [customer, setCustomer] = useState({
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    address: "Pune",
    phone: "9876543210"
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEdit(false);
    console.log("Updated Data:", customer);
    alert("Profile Updated");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-5">
          <div className="card shadow border-0 rounded-4">

            <div className="card-header bg-dark text-white text-center">
              <h4 className="mb-0">My Profile</h4>
            </div>

            <div className="card-body p-4">

              {/* Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={customer.name}
                  onChange={handleChange}
                  disabled={!isEdit}
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={customer.email}
                  onChange={handleChange}
                  disabled={!isEdit}
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={customer.phone}
                  onChange={handleChange}
                  disabled={!isEdit}
                />
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={customer.address}
                  onChange={handleChange}
                  disabled={!isEdit}
                />
              </div>

              {!isEdit ? (
                <button
                  className="btn btn-primary w-100"
                  onClick={() => setIsEdit(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  className="btn btn-success w-100"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerProfile;
