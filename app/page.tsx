"use client"
import Image from "next/image";
import CountDownTimer from "@/components/CountDownTimer";
import {useEffect, useState} from "react";

export default function Home() {
    const [timer,setTimer] = useState({
        now: false,
        time: 25,
    })
    useEffect(() => {console.log(timer.time)},[timer])
  return (
    <main className="flex bg-[#1E213F] min-h-screen flex-col items-center justify-between">
      <div className={'py-[33px] flex flex-col '}>
          <div className={'flex flex-col gap-[20px] items-center'}>

              <h5 className={'text-[#D7E0FF] text-6xl kumbhbold'}>Pomodoro</h5>
              <div className={'flex flex-col gap-16 md:gap-6 w-[250px] md:w-fit md:flex-row text-[#1E213F] '}>
                  <div onClick={() => {
                      setTimer({...timer, time: 25})
                  }}
                       className={'h-[15px] w-full md:w-fit'}>
                      <div className={'px-[46px] flex justify-center items-center md:w-fit w-full bg-white rounded-[10px] cursor-pointer active:mt-1 py-[11px]'}>
                          <h1 className={'text-[#1E213F] select-none robotoslabbold text-2xl'}>
                              Pomodoro
                          </h1>
                      </div>

                  </div>
                  <div
                       className={'h-[15px] w-full md:w-fit'}>
                      <div onClick={() => {
                          setTimer({...timer, time: 15})
                      }} className={'px-[46px] flex justify-center items-center md:w-fit w-full bg-white rounded-[10px] cursor-pointer active:mt-1 py-[11px]'}>
                          <h1 className={'text-[#1E213F] select-none robotoslabbold text-2xl'}>
                              Short Break
                          </h1>
                      </div>

                  </div>
                  <div onClick={() => {
                      setTimer({...timer, time: 60})
                  }}  className={'h-[15px] w-full md:w-fit '}>
                      <div className={'px-[46px] flex justify-center items-center md:w-fit w-full bg-white rounded-[10px] cursor-pointer active:mt-1 py-[11px]'}>
                          <h1 className={'text-[#1E213F] select-none robotoslabbold text-2xl'}>
                              Long Break
                          </h1>
                      </div>

                  </div>

              </div>
              <div className={'mt-[70px] sm:mt-[40px]'}>
                  <CountDownTimer timer={timer} setTimer={setTimer}/>
              </div>
              <div className={'w-fit h-[125px]'}>
                  <div onClick={() => {setTimer({...timer, now: !timer.now})}} className={'w-[208px] active:mt-1  cursor-pointer border-b-[20px] border-[#E75C5C] h-[120px] flex items-center justify-center  rounded-[19.5px] bg-[#F87070]'}>
                      <h2 className={'text-5xl select-none text-white kumbhbold'}>
                          {timer.now == false ? "Start" : "Stop"}
                      </h2>
                  </div>
              </div>
          </div>
      </div>
    </main>
  );
}
