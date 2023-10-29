import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/RitwikShaw27")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-center bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <div className="text-center mx-96 my-2">
        <img
          className="text-center p-2 mx-24"
          src={data.avatar_url}
          alt="Git picture"
          width={200}
        />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/RitwikShaw27");
  return response.json();
};
