import "./OwnCSS.css";

function OwnCSS() {
  return (
    <div>
      <h2>Own css</h2>
      <button className="button-css">Default</button>
      <button className="button-css primary">Primary</button>
      <button className="button-css secondary">Secondary</button>
      <button className="button-css" disabled>
        Disabled
      </button>
      <button className="button-css primary">Link</button>
    </div>
  );
}

export default OwnCSS;
