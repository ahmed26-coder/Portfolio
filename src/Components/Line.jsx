import { useState, useEffect, useRef } from "react";

function Line(props) {
  const { progressValue = 0 } = props;  // تحديد قيمة افتراضية هنا إذا كانت غير موجودة

  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setProgress((oldProgress) => {
              if (oldProgress >= progressValue) {
                clearInterval(interval);
                return progressValue;
              }
              return oldProgress + 1;
            });
          }, 50);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [progressValue]);

  return (
    <div ref={ref} className="px-4 py-2 rounded-lg text-white">
      <div className="relative w-[300px] h-4 rounded-full bg-second-bg-color -ml-3">
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-100 bg-Sky-blue"
          style={{ width: `${progress}%` }}
        ></div>
        <span className="absolute right-3 -top-0.5 text-sm">
          {progress}%
        </span>
      </div>
    </div>
  );
}

export default Line;
