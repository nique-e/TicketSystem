import { useState } from "react";

const CustomerDashboard = () => {
  const [complaint, setComplaint] = useState({
    title: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    setComplaint({ ...complaint, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-4">

      {/* HEADER */}
      <h3 className="mb-4 text-primary">
        Customer Dashboard
      </h3>

      <div className="row g-4">

        {/* BOX 1 : RAISE COMPLAINT */}
        <div className="col-md-6">
          <div className="card border-primary shadow-sm">
            <div className="card-header bg-primary text-white">
              Raise New Complaint
            </div>
            <div className="card-body">

              <div className="mb-3">
                <label className="form-label">Complaint Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Upload File (optional)</label>
                <input type="file" className="form-control" />
              </div>

              <button className="btn btn-primary w-100">
                Submit Complaint
              </button>

            </div>
          </div>
        </div>

        {/* BOX 2 : MY COMPLAINTS */}
        <div className="col-md-6">
          <div className="card border-success shadow-sm">
            <div className="card-header bg-success text-white">
              My Complaints
            </div>
            <div className="card-body p-0">

              <table className="table table-bordered mb-0">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Staff</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>101</td>
                    <td>Login Issue</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        In-Progress
                      </span>
                    </td>
                    <td>Rahul</td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>Payment Failed</td>
                    <td>
                      <span className="badge bg-success">
                        Resolved
                      </span>
                    </td>
                    <td>Neha</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>

        {/* BOX 3 : REPLY / REMARK */}
        <div className="col-12">
          <div className="card border-dark shadow-sm">
            <div className="card-header bg-dark text-white">
              Ticket Remark / Reply
            </div>
            <div className="card-body">

              <p>
                <strong>Ticket ID:</strong> 101 <br />
                <strong>Status:</strong>
                <span className="badge bg-warning text-dark ms-2">
                  In-Progress
                </span>
              </p>

              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="Write your reply here..."
              ></textarea>

              <button className="btn btn-dark">
                Send Reply
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerDashboard;
