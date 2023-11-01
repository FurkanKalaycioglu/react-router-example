import React from "react";
import { useLoaderData, Link } from "react-router-dom";
function UserList() {
  const data = useLoaderData();

  console.log(data);
  return (
    <div className=" flex flex-col gap-7 w-full">
      {/* {data.map((item) => {
        return (
          <Link
            to={`/user-list/${item.id}`}
            key={item.id}
            className="flex flex-row w-full justify-between text-black text-sm border border-gray-400 hover:bg-red-100 "
          >
            <p>{item.id}</p>
            <p>{item.information.name}</p>
            <p>{item.information.email}</p>
          </Link>
        );
      })} */}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link to={`/user-list/${item.id}`}>{item.id}</Link>
                  </th>
                  <td className="px-6 py-4">{item.information.name}</td>
                  <td className="px-6 py-4">{item.information.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
