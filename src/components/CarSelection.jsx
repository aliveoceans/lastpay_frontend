import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarSelectionForm from './CarSelectionForm';
import CarSelectionResult from './CarSelectionResult';

function CarSelection() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [carDetails, setCarDetails] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [carResult, setCarResult] = useState(null);
  const [insuranceResult, setInsuranceResult] = useState(null);
  const [bankResult, setBankResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/brands')
      .then((res) => setBrands(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setSelectedModel('');
    setCarDetails(null);
    axios
      .get(`http://localhost:8080/api/models?brand=${brand}`)
      .then((res) => setModels(res.data))
      .catch((err) => console.error(err));
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setSelectedModel(model);
    axios
      .get(`http://localhost:8080/api/car?brand=${selectedBrand}&model=${model}`)
      .then((res) => setCarDetails(res.data))
      .catch((err) => console.error(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerName || !selectedBrand || !selectedModel || !carDetails) {
      alert('Please fill in all fields');
      return;
    }
    const result = {
      ...carDetails,
      customerName,
      brand: selectedBrand,
      model: selectedModel,
    };
    setCarResult(result);
    setShowResult(true);
    setInsuranceResult(null);
    setBankResult(null);

    // Mimic 1 second delay for insurance
    setTimeout(() => {
      axios
        .post('http://localhost:8080/api/insurance', {
          price: carDetails.price,
          status: carDetails.status,
          age: carDetails.age,
          owners: carDetails.owners,
        })
        .then((res) => setInsuranceResult(res.data))
        .catch(() => setInsuranceResult({ error: true }));
    }, 1000);

    // Mimic 1 second delay for bank
    setTimeout(() => {
      axios
        .post('http://localhost:8080/api/bank', {
          price: carDetails.price,
          status: carDetails.status,
          age: carDetails.age,
          owners: carDetails.owners,
          customerName,
        })
        .then((res) => setBankResult(res.data))
        .catch(() => setBankResult({ error: true }));
    }, 2000);
  };

  // Save to /api/submit when both insurance and bank results are available
  useEffect(() => {
    if (
      carResult &&
      insuranceResult &&
      !insuranceResult.error &&
      bankResult &&
      !bankResult.error
    ) {
      const submitPayload = {
        customerName: carResult.customerName,
        carBrand: carResult.brand,
        carModel: carResult.model,
        carPrice: carResult.price,
        carSpecs: carResult.specs,
        carStatus: carResult.status,
        carAge: carResult.age,
        carOwners: carResult.owners,
        insurancePremium: insuranceResult.premium,
        loanApproved: bankResult.approved,
      };
      axios
        .post('http://localhost:8080/api/submit', submitPayload)
        .then(() => {
          // Optionally show a toast/snackbar or set a flag for "Saved!"
        })
        .catch((err) => {
          // Optionally handle error
          console.error('Failed to save request:', err);
        });
    }
  }, [carResult, insuranceResult, bankResult]);

  const handleBack = () => {
    setCarResult(null);
    setInsuranceResult(null);
    setBankResult(null);
    setCustomerName('');
    setSelectedBrand('');
    setSelectedModel('');
    setCarDetails(null);
    setShowResult(false);
  };

  return (
    <>
      <CarSelectionForm
        brands={brands}
        models={models}
        selectedBrand={selectedBrand}
        selectedModel={selectedModel}
        carDetails={carDetails}
        customerName={customerName}
        onBrandChange={handleBrandChange}
        onModelChange={handleModelChange}
        onCustomerNameChange={(e) => setCustomerName(e.target.value)}
        onSubmit={handleSubmit}
      />
      {showResult && carResult && (
        <CarSelectionResult
          carResult={carResult}
          insuranceResult={insuranceResult}
          bankResult={bankResult}
          onBack={handleBack}
        />
      )}
    </>
  );
}

export default CarSelection;