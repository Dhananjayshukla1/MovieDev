import axios from "../../Utils/axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../../../public/noimage.jpeg"
const Topnav = () => {
  const [searchs, setsearchs] = useState([]);
  const [query, setquery] = useState("");
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);

      setsearchs(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);


  return (
    <div className="w-full  h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i className="text-zinc-400 text-3xl ri-search-line" />
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 outline-none border-none bg-transparent  "
        placeholder="Search anything"
        type="text"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}
      <div className="overflow-auto  rounded absolute w-[50%] max-h-[50vh] top-[100%] left-[5%] bg-zinc-300 ">
       {searchs.map((s,i) =>(
        <Link key={i} className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold p-10 flex justify-start items-center border-b-2 border-zinc-100">
        <img 
        className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg "
        src={
            s.backdrop_path||
            s.profile_path ?
            `https://image.tmdb.org/t/p/original/${s.backdrop_path||s.profile_path

        }`:noimage} />


        <span>{s.name||
            s.title||
            s.original_title||
            s.original_name}
            </span>
      </Link>)
       )}
         
        

         
      </div>
    </div>
  );
};

export default Topnav;
