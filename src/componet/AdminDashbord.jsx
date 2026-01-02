import { useState } from "react";

const AdminDashbord = () => {
  const [filter, setFilter] = useState("ALL");

  const tickets = [
    {
      id: 1,
      title: "Login issue",
      status: "OPEN",
      customer: "Rahul",
      staff: "Not Assigned",
    },
    {
      id: 2,
      title: "Payment failed",
      status: "IN_PROGRESS",
      customer: "Amit",
      staff: "bhide",
    },

      {
      id: 3,
      title: "Login issue",
      status: "OPEN",
      customer: "Sahil",
      staff: "Not Assigned",
    },
    {
      id: 4,
      title: "Payment success",
      status: "RESOLVED",
      customer: "Rushi",
      staff: "Ram sir",
    },
     {
      id: 5,
      title: "failed",
      status: "NOT",
      customer: "Kunal",
      staff: "Patil",
    },

  ];

  const filteredTickets =
    filter === "ALL"
      ? tickets
      : tickets.filter((t) => t.status === filter);

  const badgeColor = (status) => {
    switch (status) {
      case "OPEN":
        return "badge bg-danger";
      case "IN_PROGRESS":
        return "badge bg-warning text-dark";
      case "RESOLVED":
        return "badge bg-success";
      case "CLOSED":
        return "badge bg-secondary";
      default:
        return "badge bg-dark";
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      {/* Header */}
      <div className="card bg-primary text-white mb-4">
        <div className="card-body">
          <h3 className="mb-0">
             Ticket System Admin
          </h3>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-3">
        {["ALL", "OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`btn me-2 ${
              filter === s ? "btn-dark" : "btn-outline-dark"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Tickets Table */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Customer</th>
                <th>Staff</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.title}</td>
                  <td>{t.customer}</td>
                  <td>{t.staff}</td>
                  <td>
                    <span className={badgeColor(t.status)}>
                      {t.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-info me-1 text-white">
                      Assign
                    </button>
                    <button className="btn btn-sm btn-success me-1">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reports */}
      <div className="card shadow">
        <div className="card-body">
          <h5 className="text-primary mb-3">Ticket Reports</h5>
          <button className="btn btn-warning me-2">
            Daily Report
          </button>
          <button className="btn btn-danger">
            Monthly Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashbord;
