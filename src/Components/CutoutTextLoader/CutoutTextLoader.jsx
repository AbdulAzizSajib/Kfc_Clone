import image from "../../assets/load.jpg";

const Example = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <CutoutTextLoader background="white" imgUrl={image} />
    </div>
  );
};

const CutoutTextLoader = ({ background, imgUrl }) => {
  return (
    <div className="relative" style={{ height: "100%", width: "100%" }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 z-10 animate-pulse"
      />
      <span
        className="absolute inset-0 z-20 flex items-center justify-center font-black text-center text-transparent pointer-events-none bg-clip-text"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
        }}
      >
        Loading...
      </span>
    </div>
  );
};

export default Example;
