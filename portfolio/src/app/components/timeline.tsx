'use client'

import {  AvatarTimeline } from "./avatar";
import {dataProps} from "../home/workExperience"


const WorkTimeline = ({DataProps}: {DataProps: dataProps[]}) => {
  const timelineData: dataProps[] = DataProps
  return (
    <div className="w-full">
            <h3 className="text-2xl">Work Experience</h3>
      <div className="flex w-full py-12 items-center justify-start px-2 lg:px-6 ">
       
        
<ol className="relative w-full ">  
  {timelineData.map((item) => (
// <!-- Timeline 
<div key={item.id}>
  {/* <!-- Heading --> */}
  <div className="ps-2 my-3 first:mt-0 ">
    <h3 className="text-xs md:text-lg font-medium uppercase text-sky-700 dark:text-sky-200">
      {item.timeline}
    </h3>
  </div>
  {/* <!-- End Heading --> */}

  {/* <!-- Item --> */}
  <div className="flex w-full md:gap-x-3 md:px-5 py-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
    <a className="z-1 absolute inset-0" href={item.link} ></a>

    {/* <!-- Icon --> */}
    <div className="relative  last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-[1px] after:-translate-x-[0.5px] after:bg-gray-700 dark:after:bg-sky-200 dark:group-hover:after:bg-sky-300">
      <div className="relative z-10 size-7 flex justify-center items-center">
        <div className="size-2 rounded-full bg-blue-500 border-4 border-sky-300 group-hover:border-gray-600 dark:bg-neutral-500 dark:border-neutral-600 dark:group-hover:border-neutral-600"></div>
      </div>
    </div>
    {/* <!-- End Icon --> */}

    {/* <!-- Right Content --> */}
    <div className="grow py-1 px-2 md:px-4 w-full">
      <h2 className="text-xl my-1 text-blue-200 md:text-2xl font-semibold">{item.name}</h2>
      <h3 className="flex text-md md:text-lg underline underline-offset-4 decoration-blue-500 gap-x-1.5 font-normal text-gray-700 dark:text-white">
       {item.title}
      </h3>
      <p className="mt-1 ml-1 text-sm text-gray-800 dark:text-neutral-400">
       {item.role}
      </p>
      <button type="button" className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-md rounded-lg border border-transparent text-gray-600 hover:bg-white hover:shadow-2xs disabled:opacity-50 disabled:pointer-events-none dark:text-sky-200 dark:hover:bg-neutral-800">
        <AvatarTimeline />
        Netocodes
      </button>
    </div>
    {/* <!-- End Right Content --> */}
  </div>
  {/* <!-- End Item --> */}



 



</div>




  ))}        

</ol>


          
        </div>
    </div>
  );
};

export default WorkTimeline;
