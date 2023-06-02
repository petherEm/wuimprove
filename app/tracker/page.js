import Row from "@/components/tracker/Row";

const data = [
  {
    id: 1,
    description: "description goes here",
    owner: "owner",
    workstreams: "workstreams go here",
    status: "status goes here",
    comments: "comment go here",
    details: "details go here",
  },
  {
    id: 2,
    description: "2 description goes here",
    owner: "2 owner",
    workstreams: "2 workstreams go here",
    status: "2 status goes here",
    comments: "2 comment go here",
    details: "2 details go here",
  },
  {
    id: 3,
    description: "3 description goes here",
    owner: "3 owner",
    workstreams: "3 workstreams go here",
    status: "3 status goes here",
    comments: "3 comment go here",
    details: "3 details go here",
  },
];

export default function Tracker() {
  return (
    <div className="w-full bg-black">
      <div className="bg-black mx-auto max-w-7xl min-h-screen">
        {/* HERO SECTION */}

        <div data-theme="light" className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Description</th>
                <th>Owner/Workstream</th>
                <th>Status</th>
                <th>Comments</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data.map((item) => (
                <Row
                  key={item.id}
                  comments={item.comments}
                  details={item.details}
                  owner={item.owner}
                  status={item.status}
                  description={item.description}
                  workstreams={item.workstreams}
                />
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Description</th>
                <th>Owner/Workstream</th>
                <th>Status</th>
                <th>Comments</th>
                <th>Details</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
