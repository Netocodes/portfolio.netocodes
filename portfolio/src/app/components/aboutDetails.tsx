import Noise from "@/blocks/Animations/Noise/Noise";
import React from "react";

const AboutDetails = () => {
  return (
    <div className="figtree ">
      <div
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
        className="h-auto md:h-[400px] px-2 md:px-12"
      >
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={20}
        />

        <h2 className="text-3xl py-3 text-gray-800 dark:text-gray-300">
          About me
        </h2>
        <p className="text-sm md:text-lg leading-relaxed tracking-widest "></p>
        <section className="px-2 ">
          <h1>Netochukwu Ronaldo</h1>
          <p>Fullstack Web Developer · Senior Frontend Engineer at Zempaa</p>
          <br />

          <p>
            I build secure, scalable, and user-friendly websites — from school
            sites to e-commerce stores, business websites, booking systems &amp;
            more.
          </p>
          <br />

          <p>
            Services I provide:
            <br />
            - Secure API&apos;s
            <br />
            - Multi-tasking Telegram Bots
            <br />
            - Scalable Fullstack web-apps that handle up to 10k users...
            <br />
            - Booking Systems
            <br />
            - Frontend Development
            <br />- Performance Optimization
          </p>
          <br />

          <p>
            Freelancing now and open to full-time roles — strong technical
            expertise and the drive of a candidate with real potential.
          </p>
          <br />

          <p>
            &quot;I help schools, businesses, and entrepreneurs grow online with
            fast, secure, and beautiful websites.&quot;
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutDetails;
