import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    "AMH(ng/mL)": "23",
    "II beta-HCG(mIU/mL)": "12",
    "I beta-HCG(mIU/mL)": "3",
    "Follicle No. (R)": "13",
    "Follicle No. (L)": "15",
    "Skin darkening (Y/N)": "0",
    "hair growth(Y/N)": "0",
    "Weight gain(Y/N)": "0",
    "Cycle(R/I)": "1",
    "Fast food (Y/N)": "0",
    "Pimples(Y/N)": "0",
    "Weight (Kg)": "46",
    BMI: "25",
    "Hair loss(Y/N)": "0",
    "Waist(inch)": "28",
    "Hip(inch)": "28",
    "Avg. F size (L) (mm)": "20",
    "Endometrium (mm)": "16",
    "Avg. F size (R) (mm)": "18",
    "Pulse rate(bpm)": "89",
    "Hb(g/dl)": "13",
    "Vit D3 (ng/mL)": "15",
    "Height(Cm)": "169",
    "Reg.Exercise(Y/N)": "1",
    "LH(mIU/mL)": "12",
    "RBS(mg/dl)": "5",
    "BP Diastolic (mmHg)": "72",
    "RR (breaths/min)": "18",
    "Blood Group": "11",
    "Waist:Hip Ratio": "18",
    "BP Systolic (mmHg)": "120",
    "PRL(ng/mL)": "1",
    "TSH (mIU/L)": "12",
    "FSH/LH": "11",
    "Pregnant(Y/N)": "0",
    "FSH(mIU/mL)": "11",
    "PRG(ng/mL)": "15",
    "No. of aborptions": "2",
    "Marraige Status (Yrs)": "1",
    "Age (yrs)": "23",
    "Cycle length(days)": "30",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/predict-pcos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-14">
      <div className="py-10 text-3xl text-gray-500">
        <h1>Complete the form to Predict PCOS : </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key} className="block font-medium text-gray-700">
              {key}
            </label>
            <input
              type="text"
              id={key}
              name={key}
              placeholder={value}
              // value={value}
              onChange={handleChange}
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
      {prediction !== null && (
        <div className="mt-4">
          <h2 className="text-lg font-medium mb-2">Prediction:</h2>
          <p>{`PCOS Prediction: ${prediction}`}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
