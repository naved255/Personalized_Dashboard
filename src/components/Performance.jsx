import React, { useEffect, useContext, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Work } from "../CreateContext";

const Performance = () => {
  const { works } = useContext(Work);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (works.length > 0) {
      let completed = works.filter(item => item.isCompleted === true).length;
      let percentage = (completed / works.length) * 100;
      setProgress(percentage);
    }
  }, [works]);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">Work Performance</h2>
      <ReactSpeedometer
        value={progress}
        minValue={0}
        maxValue={100}
        needleColor="red"
        startColor="#FF5F6D"
        endColor="#00C49F"
        segments={10}
        currentValueText={`Completed: ${progress.toFixed(0)}%`}
        height={250}
        width={400}
        needleTransitionDuration={1000}
      />
    </div>
  );
};

export default Performance;
