import React from "react";
import service from "../appwrite/config";
import { useNavigate, Link } from "react-router-dom";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Postcard({ $id, featuredImage, title, Info, userId }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = userData ? userId === userData.$id : false;

  return (
    <div>
      <div class="relative flex flex-col min-h-full justify-between text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        {isAuthor && (
          <div className="absolute right-1 top-6">
            <Link to={`/edit-post/${$id}`}>
              <Button
                bgcolor="bg-green-500 hover:bg-green-600"
                className="mr-3"
              >
                Edit
              </Button>
            </Link>
          </div>
        )}
        <div class=" mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src={service.getFilePreview(featuredImage)}
            alt="card-image"
            className="object-fill h-52 "
          />
        </div>
        <div class="p-4">
          <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
          <p class=" font-sans text-base antialiased font-light leading-relaxed text-inherit overflow-clip text-ellipsis h-14">
            {parse(Info)}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="align-middle w-full select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-600 text-white shadow-md shadow-green-900/10 hover:shadow-lg hover:shadow-green-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            onClick={() => navigate(`/post/${$id}`)}
          >
            Read More
          </button>
        </div>
        {/* <div>
        {userData.name}
        </div> */}
      </div>
    </div>
  );
}

export default Postcard;
