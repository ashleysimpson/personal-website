export default function DiagonalAccent(): React.ReactElement {
  return (
    <div className="diagonal text-accent tablet:[grid-area:1/1/3/3] desktop:[grid-area:1/1/3/4]">
      <svg
        className="[mask-image:linear-gradient(-10deg,black,white,transparent)] [webkit-mask-image:linear-gradient(-10deg,black,white,transparent)]"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 0,100, 200,0" fill="currentColor" />
      </svg>
    </div>
  );
}
