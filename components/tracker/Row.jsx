import React from "react";
import { AiFillSetting } from "react-icons/ai";

const Row = ({
  comments,
  details,
  owner,
  status,
  description,
  workstreams,
}) => {
  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <AiFillSetting className="text-4xl text-yellow-400" />
              </div>
            </div>
            <div>
              <div className="font-bold">R3, products flow</div>
              <div className="text-sm opacity-50">Piotr</div>
            </div>
          </div>
        </td>
        <td>
          {description}
          <br />
          <span className="badge badge-ghost badge-sm">{workstreams}</span>
        </td>
        <td>{status}</td>
        <td className="text-[12px]">{comments}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{details}</button>
        </th>
      </tr>
    </>
  );
};

export default Row;
