import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function useCarSearch() {
  const [carForm, setCarForm] = useState({});
  const [carListing, setCarListing] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  // Load search parameters from sessionStorage if available
  useEffect(() => {
    const savedSearchParams = sessionStorage.getItem('carSearchParams');
    if (savedSearchParams) {
      setCarForm(JSON.parse(savedSearchParams));
    }
  }, []);

  // Update car search in sessionStorage whenever the form changes
  useEffect(() => {
    if (carForm) {
      sessionStorage.setItem('carSearchParams', JSON.stringify(carForm));
    }
  }, [carForm]);

  // Update the form state based on URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const make = params.get('make');
    const model = params.get('model');
    const minAmount = params.get('minAmount');
    const maxAmount = params.get('maxAmount');
    
    // If URL has parameters, set the form state
    if (make || model || minAmount || maxAmount) {
      setCarForm({ make, model, minAmount, maxAmount });
    }
  }, [location.search]);

  // Handle form submission and update both sessionStorage and the URL
  const handleSubmit = useCallback((form) => {
    setCarForm(form);

    // Store the form state in sessionStorage
    sessionStorage.setItem('carSearchParams', JSON.stringify(form));

    // Update the URL query parameters
    const params = new URLSearchParams();
    params.set('make', form.make);
    params.set('model', form.model);
    params.set('minAmount', form.minAmount);
    params.set('maxAmount', form.maxAmount);

    // Navigate with updated query parameters
    navigate({ search: params.toString() });
  }, [navigate]);

  // Update the handleBrandSelect function to update the carForm state directly
  const handleBrandSelect = useCallback((brand) => {
    // Set the selected brand in the carForm state
    setCarForm((prevForm) => ({
      ...prevForm,
      make: brand,  // Set the 'make' to the selected brand
    }));
  
    // Update the selectedBrand state (optional for UI purposes)
    setSelectedBrand(brand);
  
    // Update the URL query parameters
    const params = new URLSearchParams(location.search);
    params.set('make', brand);
    navigate({ search: params.toString() });
  }, [location.search, navigate]);
  
  
  

  // Fetch the car listings based on the form state
  useEffect(() => {
    async function getCarListing() {
      // Check if 'make' is selected in the carForm
      if (!carForm.make) return;  // Don't fetch if there's no brand selected
  
      const options = {
        method: 'GET',
        url: `https://auto.dev/api/listings?apikey=ZrQEPSkKbWhpemJlbm55MzdAZ21haWwuY29t&make=${carForm.make}&model=${carForm.model || ''}&price_min=${carForm.minAmount || ''}&price_max=${carForm.maxAmount || ''}`
      };
  
      try {
        const response = await axios.request(options);
  
        const carList = (response.data.records || []).map((car) => ({
          id: car.id,
          make: car.make,
          model: car.model,
          image: car.primaryPhotoUrl,
          dealer: car.dealer?.name || 'Unknown Dealer',
          color: car.displayColor,
          amount: car.price,
        }));
  
        setCarListing(carList); // Update the car listing
      } catch (error) {
        console.error('Error fetching car listings:', error);
      }
    }
  
    // Fetch car listings whenever 'make' or other search parameters are updated
    getCarListing();
  }, [carForm.make, carForm.model, carForm.minAmount, carForm.maxAmount]); // Listen for changes in carForm
  

  return {
    carForm,
    carListing,
    selectedBrand,
    handleSubmit,
    handleBrandSelect
  };
}

export default useCarSearch;
