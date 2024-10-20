"use client";
import { BASE_URL, request } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [editMode, setEditMode] = useState(null); 
  const [editedText, setEditedText] = useState(""); 

  useEffect(() => {
    request(`/improve`).then((res) => {
      setCards(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    request.delete(`/improve/${id}`).then(() => {
      setCards(cards.filter((card) => card.id !== id));
    }).catch((error) => {
      console.error("Xatolik yuz berdi:", error);
    });
  };

  const handleEdit = (id, currentText) => {
    setEditMode(id); 
    setEditedText(currentText); 
  };

  const handleSave = (id) => {
    request.put(`/improve/${id}`, { createdAt: editedText }).then((res) => {
      const updatedCards = cards.map((card) =>
        card.id === id ? { ...card, createdAt: res.data.createdAt } : card
      );
      setCards(updatedCards);
      setEditMode(null); 
    }).catch((error) => {
      console.error("Xatolik yuz berdi:", error);
    });
  };

  return (
    <div className="flex gap-3 gap-y-5 flex-wrap mx-[4.8%]">
      {cards.map((card) => (
        <div
          key={card.id}
          className="max-w-xs bg-white p-6 rounded-lg shadow-md hover:shadow-[0px_10px_15px_rgba(0,0,0,0.2),0px_5px_10px_rgba(0,0,0,0.1)] hover:-translate-y-2 transform transition duration-300"
        >     
          <Link href={`/card/${card.id}`}>
            <Image
              width={338}
              height={120}
              className="w-full rounded-[5%] transform hover:scale-110 transition duration-300"
              src={card.image}
              alt={card.title}
              priority={true}
            />
          </Link>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.title}</div>

            {editMode === card.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
              />
            ) : (
              <p className="text-gray-700 text-base">{card.createdAt}</p>
            )}
          </div>

          <div className="px-6 pt-4 pb-2">
            {card.categories.map((category, i) => (
              <span
                key={i}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{category}
              </span>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => handleDelete(card.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Delete
            </button>

            {editMode === card.id ? (
              <button
                onClick={() => handleSave(card.id)}
                className="bg-green-500 text-white px-5 py-1 rounded hover:bg-green-700 transition"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(card.id, card.createdAt)}
                className="bg-blue-500 text-white px-6 py-1 rounded hover:bg-blue-700 transition"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
