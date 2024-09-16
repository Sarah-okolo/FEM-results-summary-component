import { useEffect, useState } from 'react';
import SummaryBlock from './components/Summary-blocks';

function App() {
  const [data, setData] = useState([]); // stores the json data gotten back from the api call.

  // Function to fetch scores data from json file.
  const fetchscores = async () => {
    try {
      const res = await fetch('../data.json');
      setData(await res.json());
    } catch (err) {
      console.log(`Opps, it seems an error occured: ${err}`);
    }
  }

  // Calls the fetchscores() funtion only when the component has mounted.
  useEffect(() => {
    fetchscores();
  }, [])


  return (
    <>
      <div id='container'>
        <div id='result-wrapper'>
          <h2>Your result</h2>
          <div id='grade'>
            <p><span id='grade-percent'>76</span><br/>of 100</p>
          </div>
          <p id='performance'>Great</p>
          <p id='perf-info'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div id='summary-wrapper'>
          <h2>Summary</h2>
          <div id='summary-blocks-container'>
            {
              data.map((item, index) => (
                <SummaryBlock 
                  key = {index}
                  B_icon_src = {item.icon}
                  B_icon_alt = {item.alt}
                  B_name = {item.category}
                  B_score = {item.score}
                />
              ))
            }
          </div>
          <button id='continue-btn'>Continue</button>
        </div>
      </div>
    </>
  )
}

export default App
