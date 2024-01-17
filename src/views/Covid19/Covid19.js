import React from 'react';
import useFetch from '../../customize/fetch';
import './Covid19.scss';

const Covid19 = () => {
  const { Data: covidData, loading } = useFetch('https://covid-api.com/api/reports/total?date=2020-04-15');

  return (
    <div className="covid19-container">
      <h2>Covid-19 Data</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
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
            <tr>
              <td>{covidData.date}</td>
              <td>{covidData.confirmed}</td>
              <td>{covidData.deaths}</td>
              <td>{covidData.recovered}</td>
              <td>{covidData.active}</td>
              <td>{covidData.fatality_rate}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Covid19;
