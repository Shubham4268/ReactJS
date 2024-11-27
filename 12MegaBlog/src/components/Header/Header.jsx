import React from "react";
import { Logo, LogoutBtn, Container } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate,NavLink } from "react-router-dom";

/*
All the items in navigation bar are stored in array so that it is easy to traverse them.
First we check if the user is logged in or not. Accordingly we show them the navigation bar.
If user is logged in then only we show the logout button
*/

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="z-50 py-3 shadow bg-lime-400 sticky top-0 ring-0 left-0 ">
      <Container>
        <nav className="flex items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                to={item.slug}
                  className={({isActive}) =>
                    `inline-bock px-6 py-2 duration-200 text-lg  ${isActive ? "bg-green-600 duration-200 shadow-xl text-white" : "text-black"} hover:bg-green-600 hover:shadow-xl`
                  }
                >
                   {item.name}
                </NavLink>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
