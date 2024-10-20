import React from 'react'

const Card = () => {
    return (
        <div><h2 className="text-center text-3xl font-bold sm:p-20 font-[family-name:var(--font-geist-sans)]">Card</h2>
            
        </div>
    )
}

export default Card;




// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

// const BASE_URL = "https://64f0b0178a8b66ecf77a03ee.mockapi.io";

// const SingleMovie = ({ params }) => {
//   const [movie, setMovie] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const router = useRouter();

//   const { id } = params;

//   useEffect(() => {
//     axios.get(`${BASE_URL}/movies/${id}`)
//       .then((res) => {
//         setMovie(res.data);
//         setTitle(res.data.title);
//         setImage(res.data.image);
//       })
//       .catch((error) => console.log(error));
//   }, [id]);

//   const handleEdit = () => {
//     axios.put(`${BASE_URL}/movies/${id}`, { title, image })
//       .then((res) => {
//         setMovie(res.data);
//         setIsEditing(false);
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleDelete = () => {
//     axios.delete(`${BASE_URL}/movies/${id}`)
//       .then(() => {
//         router.push("/");
//       })
//       .catch((error) => console.log(error));
//   };

//   if (!movie) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto py-10">
//       {isEditing ? (
//         <div>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="border p-2"
//           />
//           <input
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             className="border p-2"
//           />
//           <button onClick={handleEdit} className="bg-blue-500 text-white p-2 mt-4">
//             Save
//           </button>
//         </div>
//       ) : (
//         <div>
//           <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover"/>
//           <h1 className="text-3xl font-bold">{movie.title}</h1>
//           <p className="text-gray-600">{movie.createdAt}</p>
//           <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2 mt-4 mr-2">
//             Edit
//           </button>
//           <button onClick={handleDelete} className="bg-red-500 text-white p-2 mt-4">
//             Delete
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SingleMovie;








