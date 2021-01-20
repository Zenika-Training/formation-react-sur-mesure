import "./OwnSass.scss";

function OwnSass() {
  return (
    <div>
      <h2>Own sass</h2>
      <button className="button-sass">Default</button>
      <button className="button-sass primary">Primary</button>
      <button className="button-sass secondary">Secondary</button>
      <button className="button-sass" disabled>
        Disabled
      </button>
      <button className="button-sass primary">Link</button>
    </div>
  );
}

export default OwnSass;
