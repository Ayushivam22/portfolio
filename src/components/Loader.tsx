export default function Loader() {
  return (
    <div className="relative w-16 h-16 bg-white rounded overflow-hidden">
      <div
        className="absolute left-0 bottom-0 w-10 h-10 bg-[#ff9371] 
                   transform rotate-45 translate-x-[30%] translate-y-[40%] 
                   shadow-[32px_-34px_0_5px_#ff3d00] animate-[slide_2s_infinite_ease-in-out_alternate]"
      ></div>

      <div
        className="absolute left-[10px] top-[10px] w-4 h-4 rounded-full 
                   bg-[#ff3d00] origin-[35px_145px] 
                   animate-[rotate_2s_infinite_ease-in-out]"
      ></div>

      <style>{`
        @keyframes slide {
          0%, 100% { bottom: -35px; }
          25%, 75% { bottom: -2px; }
          20%, 80% { bottom: 2px; }
        }

        @keyframes rotate {
          0% { transform: rotate(-15deg); }
          25%, 75% { transform: rotate(0deg); }
          100% { transform: rotate(25deg); }
        }
      `}</style>
    </div>
  );
}
