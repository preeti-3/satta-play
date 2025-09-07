// components/SattaResultTable.jsx
import React from "react";
import Image from "next/image";

const SattaResultTable = () => {
  // Data array for all satta games
   const sattaGames = [
     {
       id: 1,
       name: "disawer 5:20AM",
       displayName: "DISAWER 5:20AM",
       slug: "disawer",
       yesterdayResult: "--",
       todayResult: "04",
       isLoading: false,
     },
     {
       id: 2,
       name: "ipl 1:00PM",
       displayName: "IPL 1:00PM",
       slug: "ipl-satta",
       yesterdayResult: "--",
       todayResult: "14",
       isLoading: false,
     },
     {
       id: 3,
       name: "SIKANDERPUR 2:00PM",
       displayName: "SIKANDERPUR 2:00PM",
       slug: "SIKANDERPUR-",
       yesterdayResult: "--",
       todayResult: null,
       isLoading: true,
     },
     {
       id: 4,
       name: "DELHI BAZAR 3:00PM",
       displayName: "DELHI BAZAR 3:00PM",
       slug: "delhi-bazar",
       yesterdayResult: "--",
       todayResult: "42",
       isLoading: false,
     },
     {
       id: 5,
       name: "SHRI GANESH 4:30PM",
       displayName: "SHRI GANESH 4:30PM",
       slug: "shri-ganesh",
       yesterdayResult: "--",
       todayResult: "75",
       isLoading: false,
     },
     {
       id: 6,
       name: "FARIDABAD 6:00PM",
       displayName: "FARIDABAD 6:00PM",
       slug: "faridabad",
       yesterdayResult: "--",
       todayResult: "01",
       isLoading: false,
     },
     {
       id: 7,
       name: "SURYA 7.30PM",
       displayName: "SURYA 7.30PM",
       slug: "surya",
       yesterdayResult: "--",
       todayResult: "50",
       isLoading: false,
     },
     {
       id: 8,
       name: "GAZIYABAD 9:30PM",
       displayName: "GAZIYABAD 9:30PM",
       slug: "gaziyabad",
       yesterdayResult: "--",
       todayResult: "42",
       isLoading: false,
     },
     {
       id: 9,
       name: "VARANASI 10:10AM",
       displayName: "VARANASI 10:10AM",
       slug: "varanasi",
       yesterdayResult: "--",
       todayResult: null,
       isLoading: true,
     },
     {
       id: 10,
       name: "GALI 11:40PM",
       displayName: "GALI 11:40PM",
       slug: "gali",
       yesterdayResult: "--",
       todayResult: null,
       isLoading: true,
     },
   ];

  // Component to render result cell content
  const ResultCell = ({ result, isLoading }) => {
    if (isLoading) {
      return (
        <div className="flex justify-center">
          <Image
            alt="wait icon"
            width={40}
            height={40}
            src="https://b1sattaplay.in/wp-content/uploads/2024/07/d.gif"
            priority={false}
          />
        </div>
      );
    }

    return (
      <div
        className="flex justify-center"
        style={{ marginBottom: 0, letterSpacing: "2px", fontSize: "22px" }}
      >
        <span className="text-2xl font-bold tracking-widest text-black">
          {result}
        </span>
      </div>
    );
  };

  return (
    <>
      <article className="p-0">
        <div className="relative p-0 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 border-collapse border-gray-400">
            {/* Table Header */}
            <thead className="text-base text-white bg-gradientredblack">
              <tr>
                <th className="text-center border border-gray-800 py-3 w-[37%]">
                  सट्टा का नाम
                </th>
                <th className="py-3 text-center border border-gray-800">
                  कल आया था
                </th>
                <th className="py-3 text-center border border-gray-800">
                  आज का रिज़ल्ट
                </th>
              </tr>
            </thead>
            {/* Table Body - Using map for repetitive rows */}
            <tbody>
              {sattaGames.map((game) => (
                <tr key={game.id}>
                  {/* Game Name Cell */}
                  <td className="py-2 px-2 text-center text-white border border-gray-800 bg-gradient flex">
                    <p className="text-sm font-bold text-black w-full md:text-lg mt-1 text-center">
                      {game.displayName} {game.time}
                    </p>
                  </td>
                  {/* Yesterday Result Cell */}
                  <td className="text-center bg-white border border-gray-800 yesterday-number">
                    <div className="text-2xl font-bold tracking-widest text-black">
                      {game.yesterdayResult}
                    </div>
                  </td>
                  {/* Today Result Cell */}
                  <td className="text-center bg-white border border-gray-800 today-number">
                    <ResultCell
                      result={game.todayResult}
                      isLoading={game.isLoading}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </>
  );
};

export default SattaResultTable;
