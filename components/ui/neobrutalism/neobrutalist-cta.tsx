import React, { FC } from "react";

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

const NeobrutalistCTA: FC<Props> = ({ text, onClick, className }) => {
  return (
    <div className={className}>
      <button className="bg-black rounded-full" onClick={onClick}>
        <span className="block rounded-full border-2 border-black bg-yellow-500 p-3 text-lg hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 transition-all">
          {text}
        </span>
      </button>
    </div>
  );
};

export default NeobrutalistCTA;
