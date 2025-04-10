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

<div key={item.id} className="flex  px-5 items-center gap-x-7 justify-between w-full">
    <li className="flex flex-col gap-y-3 mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-500 py-1 rounded-full  -start-[6px] border-2 border-blue-500  dark:border-blue-500 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
        <strong>{item.role}</strong>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.timeline}</time>
      
    </li>
</div>
  ))}        

</ol>


          
        </div>
    </div>
  );
};

export default WorkTimeline;
