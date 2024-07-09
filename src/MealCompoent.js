import React, { useEffect, useState } from 'react';
const URL = 'https://themealdb.com/api/json/v1/1/search.php?s=';

const MealCompoent = () => {
  const [mealData, setMealData] = useState([]);
  const [searchMeal, setSearchMeal] = useState('');

  useEffect(() => {
    const fetchMealData = async (url) => {
      const response = await fetch(url);
      const { meals } = await response.json();
      setMealData(meals);
    };
    const searchUrl = `${URL}${searchMeal}`;
    fetchMealData(searchUrl);
  }, [searchMeal]);

  const handleSearch = (event) => {
    setSearchMeal(event.target.value);
  };

  const handleDelete = (idMeal) => {
    const updateSearchMeals = mealData.filter(
      (eachMeal) => eachMeal.idMeal !== idMeal
    );
    setMealData(updateSearchMeals);
  };
  console.log(mealData);

  return (
    <div className="container">
      <div className="search-box">
        <input
          type="search"
          name=""
          id=""
          value={searchMeal}
          onChange={handleSearch}
        />
      </div>
      <div className="imgData">
        {mealData?.length > 0 ? (
          mealData.map((eachMeal) => {
            const { idMeal, strArea, strCategory, strMealThumb, strMeal } =
              eachMeal;
            return (
              <div className="data" key={idMeal}>
                <img
                  width={200}
                  height={200}
                  src={strMealThumb}
                  alt={strMeal}
                />
                <h4>Meal Name:{strMeal}</h4>
                <p>Categry:{strCategory}</p>
                <p>Area:{strArea}</p>
                <button onClick={() => handleDelete(idMeal)} className="btn">
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <h2>Data Not found</h2>
        )}
      </div>
    </div>
  );
};

export default MealCompoent;
