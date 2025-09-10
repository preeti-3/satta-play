"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DateTime from "./DateTime";

const GameSection = ({ data, setting, disawarData }) => {
  const schedule = [
    {
      name: "सदर बाजार",
      time: "13:20",
      number: "45",
      prevNumber: "72",
      todayNumber: "45",
    },
    {
      name: "ग्वालियर",
      time: "14:20",
      number: "62",
      prevNumber: "33",
      todayNumber: "62",
    },
    {
      name: "दिल्ली मटका",
      time: "15:20",
      number: "27",
      prevNumber: "49",
      todayNumber: "27",
    },
    {
      name: "श्री गणेश",
      time: "16:20",
      number: "84",
      prevNumber: "65",
      todayNumber: "84",
    },
    {
      name: "आगरा",
      time: "17:20",
      number: "11",
      prevNumber: "20",
      todayNumber: "11",
    },
    {
      name: "फरीदाबाद",
      time: "17:50",
      number: "32",
      prevNumber: "59",
      todayNumber: "32",
    },
    {
      name: "अलवर",
      time: "19:20",
      number: "90",
      prevNumber: "73",
      todayNumber: "90",
    },
    {
      name: "गाज़ियाबाद",
      time: "20:50",
      number: "75",
      prevNumber: "18",
      todayNumber: "75",
    },
    {
      name: "द्वारका",
      time: "11:34",
      number: "41",
      prevNumber: "66",
      todayNumber: "41",
    },
    {
      name: "गली",
      time: "23:20",
      number: "11",
      prevNumber: "50",
      todayNumber: "11",
    },
    {
      name: "दिसावर",
      time: "01:30",
      number: "62",
      prevNumber: "28",
      todayNumber: "62",
    },
  ];

  const [prevGame, setPrevGame] = useState(null);
  const [nextGame, setNextGame] = useState(null);

  // helper function: convert "HH:MM" to minutes
  const getMinutes = (time) => {
    const [h, m] = time.split(":").map(Number);
    let minutes = h * 60 + m;
    if (h < 5) minutes += 24 * 60; // रात 5 बजे से पहले वाले अगले दिन माने
    return minutes;
  };

  useEffect(() => {
    const checkGame = () => {
      const now = new Date();
      let currentMinutes = now.getHours() * 60 + now.getMinutes();

      let activeIndex = -1;
      for (let i = 0; i < schedule.length; i++) {
        const thisTime = getMinutes(schedule[i].time);
        const nextTime = getMinutes(schedule[(i + 1) % schedule.length].time);

        // अगर exact time match करे → वही active
        if (currentMinutes === thisTime) {
          activeIndex = i;
          break;
        }

        // normal range check
        if (currentMinutes > thisTime && currentMinutes < nextTime) {
          activeIndex = i;
          break;
        }
      }

      if (activeIndex === -1) {
        activeIndex = schedule.length - 1;
      }

      const prev = schedule[activeIndex];
      const next = schedule[(activeIndex + 1) % schedule.length];

      setPrevGame(prev);
      setNextGame(next);
    };

    checkGame();
    const interval = setInterval(checkGame, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* === TOP DYNAMIC SECTION === */}
      <div className="bg-white pt-2 pb-3">
        <div className="text-center mt-2">
          <DateTime />
        </div>
        <hr className="border-dashed w-full mx-auto my-3" />

        <div className="flex text-2xl capitalize sm:text-3xl md:text-4xl mx-auto text-center w-full font-semibold flex-col gap-5 item-center justify-center">
          {/* ✅ Previous game */}
          {data && (
            <>
              <p>{data.city}</p>
              <p className="text-xl sm:text-2xl md:text-3xl">
                {data.resultNumber}
              </p>

              {/* ✅ Next game (WAITING) */}

              <p>{data.waitingCity}</p>
              <Image
                className="mx-auto -mt-2"
                alt="wait icon"
                width={40}
                height={40}
                src="https://b1sattaplay.in/wp-content/uploads/2024/07/d.gif"
              />
            </>
          )}

        </div>
      </div>
      <div className="bg-gradient2 p-3 text-center w-full mx-auto">
        <p className="text-3xl font-black mb-4">दिसावर</p>
        <div className="flex items-center gap-3 justify-center max-w-[350px] mx-auto">
          <span className="text-xl font-semibold">
            {disawarData?.yesterday || "--"}
          </span>
          <span className="px-1 border bg-green-500 border-white text-white rounded-md mx-2">
            ➜
          </span>
          <span className="text-xl font-semibold">
            {disawarData?.today || (
              <Image
                className="inline"
                alt="wait icon"
                width={20}
                height={20}
                src="https://b1sattaplay.in/wp-content/uploads/2024/07/d.gif"
              />
            )}
          </span>        </div>
      </div>
      {/* === BOTTOM STATIC SECTION === */}
      <section className="flex flex-col md:flex-row md:space-x-1 bg-white">
        <div className="text-center w-full">
          <div className="bg-gradient py-2.5 m-0 font-semibold">
            <p className="text-4xl max-sm:text-lg mt-2 mb-0 md:my-5 max-md:text-2xl">
              --सीधे सट्टा कंपनी का No 1 खाईवाल--
            </p>
          </div>
          <div className="flex-1 px-2 pt-4 pb-6 text-base font-semibold leading-6 text-gray-900 min-h-1 bg-gradient">
            <div className="text-start mx-auto max-w-[300px]">
              {schedule.map((game, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center font-semibold py-0.5"
                >
                  <span className="flex items-center gap-1 text-nowrap">
                    ⏰ {game.name}
                  </span>
                  <span>---------</span>
                  <span className="text-nowrap">{game.time}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xl">💸 Payment Option 💸</p>
            <p>
              PAYTM//BANK TRANSFER//PHONE PAY//GOOGLE PAY =&gt; ⏺️9996252688⏺️
              <br />
              ==========================
              <br />
              ==========================
            </p>
            <p>
              🤑Rate list💸
              <br />
              <br />
              जोड़ी रेट 10-------960
              <br />
              हरूफ रेट 100-----960
            </p>
            <p className="uppercase">♕♕ &nbsp;{setting?.contactName} BHAI KHAIWAL &nbsp;♕♕</p>
            <p>
              <Link target="_blank" href="https://wa.me/+917206591251">
                Game play करने के लिये नीचे लिंक पर क्लिक करे
              </Link>
            </p>
            <div className="mx-auto max-w-[300px] mt-4 hover:scale-110 transition-all duration-300">
              <Link target="_blank" href={`https://wa.me/+${setting?.whatsappNumber}`}>
                <Image
                  className="max-sm:w-[200px] mx-auto max-sm:h-16"
                  width={300}
                  height={100}
                  src="https://i.ibb.co/4RJCLbSB/whatsapp.png"
                  alt="whatsapp"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GameSection;
