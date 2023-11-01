import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
const Router = () => {
  const USER_LIST = [
    {
      id: 1,
      information: {
        name: "Furkan K.",
        email: "example@example.com",
        age: 12,
        phone: "111111111",
      },
      address: {
        fullAddress: "example street 1",
      },
      socials: {
        twitter: "example",
        instagram: "example",
      },
    },
    {
      id: 2,
      information: {
        name: "User A",
        email: "example@example.com",
        age: 12,
        phone: "111111111",
      },
      address: {
        fullAddress: "example street 1",
      },
      socials: {
        instagram: "example",
        facebook: "example",
      },
    },
    {
      id: 3,
      information: {
        name: "User B.",
        email: "example@example.com",
        age: 12,
        phone: "111111111",
      },
      address: {
        fullAddress: "example street 1",
      },
      socials: {
        twitter: "example",
        facebook: "example",
      },
    },
    {
      id: 4,
      information: {
        name: "User c.",
        email: "example@example.com",
        age: 12,
        phone: "111111111",
      },
      address: {
        fullAddress: "example street 1",
      },
      socials: {
        twitter: "example",
        instagram: "example",
        facebook: "example",
      },
    },
    {
      id: 5,
      information: {
        name: "User D.",
        email: "example@example.com",
        age: 12,
        phone: "111111111",
      },
      address: {
        fullAddress: "example street 1",
      },
      socials: {
        twitter: "example",
        instagram: "example",
        facebook: "example",
      },
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "user-list",
          element: <UserList />,
          loader: () => USER_LIST,
        },
        {
          path: "user-list/:id/",
          element: <UserProfile />,
          loader: ({ params }) => {
            return USER_LIST.find((item) => item.id === Number(params.id));
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
