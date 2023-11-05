import React from 'react'

const funFact = [
  {
    title: "150+",
    subTitle: "Events",
  },
  {
    title: "25+",
    subTitle: "Real estate",
  },
  {
    title: "210+",
    subTitle: "Parties",
  },
  {
    title: "35+",
    subTitle: "commercial",
  },
];


const FunFact = (props) => {
    return (
        <section className={`wpo-fun-fact-section ${props.fClass}`}>
          <div className="container-fluid">
            <div className="row">
              <center>
                <h2>Statistics</h2>
              </center>
              <div className="col col-xs-12">
                <div className="wpo-fun-fact-grids clearfix">
                  {funFact.map((funfact, fitem) => (
                    <div className="grid" key={fitem}>
                      <div className="info">
                        <h3>{funfact.title}</h3>
                        <p>{funfact.subTitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default FunFact;