"use client"
import React, { useState } from "react";
import loginSvg from "../utils/vercel.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import Select from "react-select"; // Import react-select

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    locationID: ""
  });

  const [selectedLocation, setSelectedLocation] = useState(null); // State to hold the selected location

  const handleAddTask = (event) => {
    event.preventDefault();

    console.log("Selected Location:", selectedLocation);

    setTask({
      title: "",
      content: "",
      locationID: ""
    });

    setSelectedLocation(null); // Clear the selected location
    toast.success("Your task is added !!", {
      position: "top-center",
    });
  };

  const handleClearForm = () => {
    setTask({
      title: "",
      content: "",
      locationID: ""
    });
    setSelectedLocation(null); // Clear the selected location
  };

  return (
    <div className="grid grid-cols-12  justify-center">
      <div className="col-span-4 col-start-5 p-5  shadow-sm">
        <div className="my-8 flex justify-center">
          <Image
            src={loginSvg}
            style={{
              width: "50%",
            }}
            alt="Login banner"
          />
        </div>
        <h1 className="text-3xl text-center">Add your location here </h1>

        <form onSubmit={handleAddTask}>
          <div className="mt-4">
            <label htmlFor="LocationID" className="block text-sm font-medium mb-2">
              Location ID
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="locationID"
              name="locationID"
              onChange={(event) => setTask({ ...task, title: event.target.value })}
              value={task.title}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="task_title" className="block text-sm font-medium mb-2">
              Location Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_title"
              name="task_title"
              onChange={(event) => setTask({ ...task, title: event.target.value })}
              value={task.title}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="task_content" className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_content"
              rows={5}
              name="task_content"
              onChange={(event) => setTask({ ...task, content: event.target.value })}
              value={task.content}
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800"
              type="submit"
            >
              Add Location
            </button>
            <button
              className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3"
              type="button"
              onClick={handleClearForm}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
