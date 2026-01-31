// icons
import PartnersIcon1 from "../assets/partners/partners-icon-1.svg";
import PartnersIcon2 from "../assets/partners/partners-icon-2.svg";
import PartnersIcon3 from "../assets/partners/partners-icon-3.svg";
import PartnersIcon4 from "../assets/partners/partners-icon-4.svg";
import PartnersIcon5 from "../assets/partners/partners-icon-5.svg";
import PartnersIcon6 from "../assets/partners/partners-icon-6.svg";

function Partners() {
  return (
    <section className="flex flex-col justify-center items-center gap-15">
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="text-white w-70 md:w-170 font-light text-[52px] md:text-[80px] leading-15 md:leading-22 tracking-[0.2px] text-center">
          Partners
        </h1>
        <p className="text-white w-61 md:w-120 opacity-100 text-center text-sm">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 md:gap-15">
        <div className="grid grid-cols-3 md:grid-cols-6 w-65 md:w-auto justify-items-center gap-auto md:gap-8 items-center h-50 md:h-auto">
          <img
            src={PartnersIcon1}
            alt="app store icon"
            className="h-11 md:h-14"
          />
          <img src={PartnersIcon2} alt="apiary icon" className="h-11 md:h-14" />
          <img
            src={PartnersIcon3}
            alt="android icon"
            className="h-11 md:h-14"
          />
          <img
            src={PartnersIcon4}
            alt="basecamp icon"
            className="h-11 md:h-14"
          />
          <img src={PartnersIcon5} alt="airbnb icon" className="h-11 md:h-14" />
          <img src={PartnersIcon6} alt="ibm icon" className="h-8" />
        </div>
        <button className="border text-white border-white text-sm px-7 h-11">
          All Partners
        </button>
      </div>
    </section>
  );
}

export default Partners;
