import { useState } from 'react';
import ingredientsToAdd from '../../../../constants/ingredientsToAdd';
import './styles.css';
const HamburgerApp = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)

  const addIngredient = (ingredient) => {
    const priceToAdd = ingredient.price;
    setTotalPrice(totalPrice+priceToAdd)

    const isAdded = selectedIngredients.find(
      (item) => item.id === ingredient.id
    );

    if (isAdded) {
      setSelectedIngredients(
        selectedIngredients.map((item) => {
          if (item.id === ingredient.id) {
            
            return { ...item, count: item.count + 1 };
          }
          return item;
        
        }
        ) 
      );

    } else {
      
      setSelectedIngredients([
        ...selectedIngredients,
        {
          ...ingredient,
          count: 1,
        },
      ]);
      
    }

  };
  const removeIngredient = (ingredient) => {
    

    const addedIngredient = selectedIngredients.find(
      (item) => item.id === ingredient.id
    );

    const priceToRemove = ingredient.price;
    setTotalPrice(totalPrice-priceToRemove);
    if (addedIngredient.count > 1) {
      setSelectedIngredients(
        selectedIngredients.map((item) => {
          if (item.id === ingredient.id) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        })
      );
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item.id !== ingredient.id)
      );
    }
    
  };


  return (
    <div>
      <h1>Hamburger App</h1>
      <div>
        <h2>Malzemeler</h2>
        <ul>
          {selectedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name} x {ingredient.count}
            </li>
          ))}
        </ul>

        <h2>Eklenecek Malzemeler</h2>
        <ul>
          {ingredientsToAdd.map((ingredient) => (
            <li key={ingredient.id}>
              <p>
                {ingredient.name} <b />
                <button
                  onClick={() => addIngredient(ingredient)}
                  className="add-ingredient"
                >
                  Ekle
                </button>
                {selectedIngredients.find(
                  (item) => item.id === ingredient.id
                ) && (
                  <button
                    onClick={() => removeIngredient(ingredient)}
                    className="remove-ingredient"
                  >
                    Cikar
                  </button>
                )}
                {/* eger butonu css ile disabled olarak gostermek istiyorsaniz asagidaki kod parcacini calistirabilirsiniz */}
                {/* <button
                  onClick={() => removeIngredient(ingredient)}
                  className={
                    selectedIngredients.find(
                      (item) => item.id === ingredient.id
                    )
                      ? 'remove-ingredient'
                      : 'remove-ingredient disabled'
                  }
                >
                  Cikar
                </button> */}
              </p>
            </li>
          ))}

        
        </ul>
        <div>
            <h2>
                Total Price : {totalPrice}
            </h2>
        </div>
      </div>
    </div>
  );
};

export default HamburgerApp;