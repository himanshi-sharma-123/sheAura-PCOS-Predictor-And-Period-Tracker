import React, { useState } from "react";
import axios from "axios";

const PeriodTracker = () => {
  const [startDate, setStartDate] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [periodLength, setPeriodLength] = useState("");
  const [results, setResults] = useState("");

  const handleCalculate = async () => {
    try {
      const response = await axios.post(
        "https://she-aura-pcos-predictor-and-period-tracker.vercel.app/api/v1/users/calculate",
        {
          startDate,
          cycleLength,
          periodLength,
        }
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error calculating:", error);
    }
  };

  return (
    <div className=" mx-auto px-4 py-8 bg-white rounded-lg shadow-lg mt-16">
      <h1 className="px-20 text-5xl mb-4 text-gray-700">Period Tracker</h1>
      <form className="flex flex-wrap justify-center items-center mb-4">
        <label htmlFor="start-date" className="mr-2 mb-2 font-bold">
          First day of your last period:
        </label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="text-center py-2 px-4 mb-2 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
        />
        <label htmlFor="cycle-length" className="mr-2 mb-2 font-bold">
          Cycle Length:
        </label>
        <input
          type="number"
          id="cycle-length"
          placeholder="Enter here...."
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
          className="text-center py-2 px-4 mb-2 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
        />
        <label htmlFor="period-length" className="mr-2 mb-2 font-bold">
          Period Length:
        </label>
        <input
          type="number"
          id="period-length"
          placeholder="Enter here...."
          value={periodLength}
          onChange={(e) => setPeriodLength(e.target.value)}
          className="text-center py-2 px-4 mb-2 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
        />
        <button
          type="button"
          onClick={handleCalculate}
          className="py-2 px-4 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          Calculate
        </button>
      </form>
      <div
        id="results"
        className="text-center py-4 bg-gray-200 rounded-lg shadow-md"
      >
        {results && (
          <div>
            <p>Next period start date: {results.nextPeriodStartDate}</p>
            <p>Ovulation date: {results.ovulationDate}</p>
            <p>Fertile window: {results.fertileWindow}</p>
            <p>Pregnancy Test Date: {results.pregnancyTestDate}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeriodTracker;
