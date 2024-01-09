import data from "../../data/index.json";
function MySkills() {
  return (
    <section id="mySkills" className="skills--section">
      <div className="portfolio--container">
        {/* <p className="section--title">My Skills</p> */}
        <h2 className="skills--section--heading">My Skills</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => {
          return (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt="cart image" />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default MySkills;
