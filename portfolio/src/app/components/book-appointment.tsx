"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Headset } from "lucide-react";
import ElectricBorder from "@/blocks/Animations/ElectricBorder/ElectricBorder";
export default function Appointment() {
  const fetchCal = async () => {
    try {
      const cal = await getCalApi();
      if (!cal) {
        return alert("try refreshing the page");
      }
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCal();
  }, []);

  return (
    <button className="  fixed rounded-full z-50 bottom-4  right-5 aurora bg-[#1013d7]  text-white dark:text-black dark:bg-cyan-300 hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
      <ElectricBorder
        color="#1c953e"
        speed={1}
        chaos={1.5}
        thickness={4}
        style={{ borderRadius: 16 }}
        className="-z-50"
      >
        <a
          className="flex items-center py-2 px-3 z-50 gap-x-1"
          href="https://cal.com/netochukwu-codes/"
          target="_parent"
          rel="noopener noreferrer"
        >
          <Headset size={32} className="" />
          Chat with me!
        </a>
      </ElectricBorder>
    </button>
  );
}
