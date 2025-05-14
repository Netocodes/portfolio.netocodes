import React from 'react';
import { projectsProps } from "./projects";
import Image from 'next/image';
import { SquareArrowOutUpRight } from 'lucide-react';

const Gallery = ({ data }: { data: projectsProps[] }) => {
  const [activeId, setActiveId] = React.useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleItemInteraction = (id: number) => {
    setActiveId(activeId === id ? null : id); // Toggle active state
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 py-4 gap-x-6 gap-y-6">
      {data.map((item) => (
        <div
          key={item.id}
          className={`${isTouchDevice ? 'w-full border rounded-lg bg-white dark:bg-blue-900 shadow-md' : 'group'}`}
        >
          <section
            className="relative block"
            onClick={() => handleItemInteraction(item.id)}
            onFocus={() => handleItemInteraction(item.id)} // For keyboard navigation
            tabIndex={0} // Make focusable
          >
            <Image
              width={1000}
              height={1000}
              className="rounded-t-lg rounded-b-sm w-full"
              src={item.src}
              alt={item.alt}
            />

            {/* Overlay (hidden by default, shown on hover/active) */}
            <div
              className={`absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-white rounded-t-lg rounded-b-sm
                ${
                  // Show overlay if:
                  // - On desktop AND (hovered OR focused)
                  (!isTouchDevice && (activeId === item.id)) || 
                  // - On mobile AND actively tapped
                  (isTouchDevice && activeId === item.id)
                    ? 'opacity-100 transition-opacity duration-300'
                    : 'opacity-0'
                }
              `}
            >
              <a 
                href={item.link} 
                className="absolute top-0 right-0 p-4"
                onClick={(e) => e.stopPropagation()} // Prevent parent onClick
              >
                <SquareArrowOutUpRight className="text-white hover:text-blue-500" size={20} />
              </a>
              <div className="absolute bottom-0 p-4">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  {item.title}
                </h5>
                <p className="max-w-xl text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Gallery;