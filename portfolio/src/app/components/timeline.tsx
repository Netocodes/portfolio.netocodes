'use client'

type TimelineData = {
    id: number;
    title: string;
    role: string;
    timeline: string
}

const WorkTimeline = ({DataProps}: {DataProps: TimelineData[]}) => {
  const timelineData: TimelineData[] = DataProps
  return (
    <div>
            <h3 className="text-2xl">Work Experience</h3>
      <div className="flex w-full py-12 items-center justify-start px-6 ">
       
        
<ol className="relative  scroll-mt-8 border-s-2 border-gray-200 dark:border-gray-300/75">  
  {timelineData.map((item) => (

<div key={item.id} className="flex  px-5 items-center gap-x-7 md:px-20 justify-between w-full">
    <li className="flex flex-col gap-y-3 mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-500 py-1 rounded-full  -start-[6px] border-2 border-blue-500  dark:border-blue-500 dark:bg-gray-700"></div>
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-cyan-200">{item.title}</h3>
        <strong className="text-gray-600 dark:text-gray-300">{item.role}</strong>
        <time className="mb-1 text-sm right-0 font-normal leading-none text-gray-500 dark:text-gray-400">{item.timeline}</time>
      
    </li>
</div>
  ))}        

</ol>


          
        </div>
    </div>
  );
};

export default WorkTimeline;
