"use client";  // This marks the component as a Client Component

import { useCallback } from "react";
import BlurFade from "../../@/components/magicui/blur-fade";
import axios from "axios";

export const Sign2Text = () => {
  const bringToFront = useCallback(async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/bring_to_front');
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }, []);

  return (
    <header className="flex flex-col items-center px-4 py-16 min-h-[28rem] gap-8 justify-center">
      <BlurFade delay={0.25} inView>
        <h1 className="text-5xl px-6 md:text-8xl font-black text-center w-screen md:max-w-5xl text-grey-1000">
          Sign your <strong className="moving-bg bg-clip-text text-transparent">words</strong>, Inspire the <strong className="border-b-8 border-color">world</strong>
        </h1>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <p className="text-lg px-6 text-gray-400 w-screen max-w-2xl text-center">
          Uniting Gestures to Empower Seamless Communication, Transforming Accessibility with Artificial Intelligence
        </p>
      </BlurFade>
      <div className="flex flex-col md:flex-row gap-4">
        <BlurFade delay={0.25 * 3} inView>
          <button
            className="btn w-40 btn-lg btn-primary bg-green-500 text-white hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            onClick={bringToFront}
          >
            Get Started
          </button>
        </BlurFade>
      </div>
    </header>
  );
};

export default Sign2Text;
