import { useState } from 'react';
import './App.css';

import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
	const [stack, setStack] = useState([]);

	const addToBurger = (newIngredient) => {
		setStack([newIngredient, ...stack])
	};

	const removeFromBurger = (idxForRemoval) => {
		setStack(stack.filter((ingredient, idx) => idx !== idxForRemoval))
	};

	return (
		<main>
			<h1>Burger Shop</h1>
			<section>
				<IngredientList
					addToBurger={addToBurger}
					availableIngredients={availableIngredients}
				/>
				<BurgerStack
					stack={stack}
					removeFromBurger={removeFromBurger}
				/>
			</section>
		</main>
	);
};

export default App;