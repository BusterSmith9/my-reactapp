import React, {useState} from "react";
import apidesign from "./APIDesign/apidesign";

const Working = () => {

    const [dataWork, setdataWork] = useState(apidesign);
    console.log(dataWork);

  return (
  <>
    <section>
        <div className="work-container">
            <h1 className="main-heading text-center">
                How does it works 
            </h1>
            <div className="row">

                {dataWork.map((CurElem) => {

                    const{ id, logo, title, info } = CurElem;
                    return <>

                        <div className="col-12 col-lg-4 text-center sub-container">
                            <i class={`fontawsome-style ${logo}`}></i>
                            <h2 className="Heading1">{ title }</h2>
                            <p className="main-para w-100"> { info } </p>
                        </div>
                    </>;
                })}


            </div>
        </div>
    </section>
   
  </>
  );
};

export default Working;