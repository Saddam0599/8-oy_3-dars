"use client";
import { BASE_URL, request } from "@/services/api";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Test = ({ params }) => {
  const { id } = params;
  const [card, setCard] = useState({});
  const [editMode, setEditMode] = useState(false); 
  const [editedDescription, setEditedDescription] = useState(""); 
  useEffect(() => {
    request.get(`/improve/${id}`).then((res) => {
      setCard(res.data); 
      setEditedDescription(res.data.description); 
    });
  }, [id]);

  const handleSave = () => {
    const updatedData = {
      ...card,
      description: editedDescription,
      createdAt: new Date().toISOString(), 
    };

    request.put(`/improve/${id}`, updatedData).then((res) => {
      setCard(res.data); 
      setEditMode(false); 
    });
  };

  return (
    <div className="flex gap-3 p-6 flex-wrap mx-[4.8%]">
      <div className="w-[500px] h-[700px] border m-auto bg-white rounded-lg shadow-md hover:shadow-[0px_10px_15px_rgba(0,0,0,0.2),0px_5px_10px_rgba(0,0,0,0.1)] hover:-translate-y-2 transform transition duration-300 p-[1.9%]">
        <Image
          src={card.image}
          width={400}
          height={620}
          alt={card.title}
          className="w-full pb-12 rounded-lg transform hover:scale-110 transition duration-300"
        />

        <h2 className="font-bold text-xl mt-[-20px] text-center">{card.title}</h2>

        {editMode ? (
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            rows="4"
          />
        ) : (
          <p className="text-gray-700 mt-4 text-center">{card.description}</p>
        )}

        <div className="flex justify-between items-center mt-4">
          {editMode ? (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-8 py-1 rounded hover:bg-green-700 transition"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 text-white px-8 py-1 rounded hover:bg-blue-700 transition"
            >
              Edit
            </button>
          )}

          <p className="text-gray-500 text-sm">
            {new Date(card.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex flex-wrap mt-4">
          {card.categories &&
            card.categories.map((category, i) => (
              <span
                key={i}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ml-[9%]"
              >
                #{category}
              </span>
            ))}
        </div>

        {card.createdAt && (
          <p className="text-gray-600 mt-2 text-center">
            Last edited: {new Date(card.createdAt).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default Test;
