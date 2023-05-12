
//import usestate hooks in order to maintain the state track
import React, { useState }  from "react";

//import components of React-bootstrap in order to use them
import Button from 'react-bootstrap/Button';

const App=()=>{
            //const[state,function]=hooks();
            const [ time, setTime ] = useState(new Date().toLocaleTimeString());

            const timeClickHandler = () => {
              setTime(new Date().toLocaleTimeString());
            };
            setInterval(timeClickHandler, 1000);

            return (

              //<React.Fragment>  </React.Fragment> used to render anything inside it. (shorhand <> </>)
              <React.Fragment>  
                <div className="title fs-1 mt-5">Clock</div>
                <div className="time fs-1 mt-3">{time}</div>
                <Button variant="success" className="mt-3" onClick={timeClickHandler}>
                  Your current time
                </Button>
              </React.Fragment>

	);
};


export default App;