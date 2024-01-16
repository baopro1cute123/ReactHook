import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Covid19.scss';

const Covid19 = () => {
  const [covidData, setCovidData] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(()=>{

        })
        const response = await axios.get('https://covid-api.com/api/reports/total?date=2020-04-15');
        setCovidData(response.data.data);
        setLoading(false)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching COVID-19 data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Covid-19 Data</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Active Cases</th>
            <th>Fatality Rate</th>
          </tr>
        </thead>
        <tbody>
          {loading === false && covidData &&  (
            <tr>
              <td>{covidData.date}</td>
              <td>{covidData.confirmed}</td>
              <td>{covidData.deaths}</td>
              <td>{covidData.recovered}</td>
              <td>{covidData.active}</td>
              <td>{covidData.fatality_rate}</td>
            </tr>
          )}
          {
            loading === true && (
                <span>Loading</span>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Covid19;
