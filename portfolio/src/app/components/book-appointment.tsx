"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Appointment() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-link="netochukwu-codes/quick-chat" // Replace with your Cal.com link
      className="fixed bottom-4  right-5 z-50  rounded-lg shadow-2xl   dark:hover:bg-blue-800 transition duration-300 ease-in-out"
    
    >
        <svg className="size-12 shadow-2xl border-4 border-amber-300 rounded-full" xmlns="http://www.w3.org/2000/svg" aria-label="Google Meet" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#ffffff"></rect><path d="M166 106v90h-90" fill="#ea4335"></path><path d="M166 106v90h120v62l90-73v-49q0-30-30-30" fill="#ffba00"></path><path d="M164 406v-90h122v-60l90 71v49q0 30-30 30" fill="#00ac47"></path><path d="M286 256l90-73v146" fill="#00832d"></path><path d="M376 183l42-34c9-7 18-7 18 7v200c0 14-9 14-18 7l-42-34" fill="#00ac47"></path><path d="M76 314v62q0 30 30 30h60v-92" fill="#0066da"></path><path d="M76 196h90v120h-90" fill="#2684fc"></path></g></svg>
    </button>
  );
}