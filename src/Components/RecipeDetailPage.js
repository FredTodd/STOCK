import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import ServingCounter from './ServingCounter';

const StockTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: none;
  color: #283618;
  left: 2%;
  position: relative;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  margin: 0 20px;
  height: 100vh;
  position: relative; /* Required for absolute positioning */
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const SectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100vh;
`;

const RecipeTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #283618;
  text-decoration: underline;
`;

const LeftSection = styled.div`
  flex: 0.4; /* Adjust width as needed */
  margin-right: 40px; /* Adjust margin as needed */
`;

const RightSection = styled.div`
  flex: 0.6; /* Adjust width as needed */
  margin-left: 40px; /* Adjust margin as needed */
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #283618;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #283618;
`;

const List = styled.ul`
  list-style-type: none;
  color: #283618;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  color: #FEFAE0;
  list-style-type: none; /* Remove default list bullet point */
  position: relative; /* Make position relative for absolute positioning of the circle */
  font-size: 1.2rem;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #283618; /* Add border */
  background-color: ${({ selected }) => (selected ? '#283618' : 'transparent')}; /* Toggle background color based on selection */
  position: absolute;
  left: -40px; /* Adjust the position of the circle */
  top: 50%; /* Center vertically */
  transform: translateY(-50%);
  cursor: pointer;
`;

const MethodText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: #FEFAE0;
`;

const RoundedBox = styled.div`
  border-radius: 16px;
  background-color: #606C38;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 3px solid #283618;
  height: 60%;
  overflow-y: scroll;
`;

const AllRecipesButton = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #283618;
  color: #FEFAE0;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
`;

const recipes = [
    {
      id: 1,
      title: 'Flapjack',
      ingredients: [
        { name: 'g Butter or Margarine', quantity: 100 },
        { name: 'g Runny Honey or Golden Syrup', quantity: 100 },
        { name: 'g Sugar (Preferably soft brown sugar but white granulated, caster or demerara sugar all work)', quantity: 100 },
        { name: 'g Rolled Porridge Oats', quantity: 200 },
      ],
      method: (
        <div>
          1. Melt the butter or margarine in a saucepan until runny. Add the honey or syrup and the sugar and stir together well.
          <br />
          2. Add the oats and other flavorings if using.
          <br />
          3. Stir well to coat all the oats in the butter/syrup mix.
          <br />
          4. Put the oat mixture into the tin pressing it down well so it reaches to the edges of the tin. It needs to be pressed in firmly all over to stop the flapjack from being very crumbly.
          <br />
          5. Bake for 15 minutes. The flapjack should be golden brown but will still be quite soft. Remove from the oven and as it cools it will become firmer. Cut into 6.
          <br />
          6. Flapjack will keep for up to two weeks if kept in an airtight tin.
        </div>
      ),
    },
    {
      id: 2,
      title: 'Pork And Apple Sausage Rolls',
      ingredients: [
        { name: 'g Plain Flour', quantity: 100 },
        { name: 'g Butter or Margarine', quantity: 50 },
        { name: 'Tablespoons Water', quantity: 3 },
        { name: 'g Pork Mince', quantity: 75 },
        { name: 'g Pork Sausage Meat', quantity: 25 },
        { name: 'an Apple', quantity: 0.5 },
        { name: 'Teaspoon Dried Mixed Herbs', quantity: 1 },
        { name: 'Egg', quantity: 1 },
      ],
      method: (
        <div>
          1. Rub the flour and butter together, using fingertips until the mixture looks like breadcrumbs.
          <br />
          2. Add about 3 tablespoons of water and mix it in well. Gently knead the mixture into a ball of dough using a wooden spoon first, then fingers to draw it together into a ball.
          <br />
          3. Place the pork mince and sausage meat in a bowl with the grated apple and mix well. Store in the fridge or a cool place.
          <br />
          4. Roll out the shortcrust pastry to an oblong about 25cm x 8cm.
          <br />
          5. Put a little flour on the work surface. Take the meat mix and shape it into a long sausage, rolling in the flour as needed if it is sticky. Place to one side.
          <br />
          6. Lightly brush the edges of the pastry with water. Taking the long edge of the pastry near the meat start to roll it up over the meat continuing until all the meat is wrapped in a tube of pastry. Place with the joined ends underneath the tube.
          <br />
          7. Using a table knife cut the tube into six equally sized sausage rolls. Make a diagonal slit on the top of each role as decoration. Place on a piece of baking parchment on a baking tray.
          <br />
          8. Break the egg and whisk it gently with a fork. Using a pastry brush, brush the top of each roll lightly with the beaten egg.
          <br />
          9. Sprinkle a little crushed dried herbs over each roll.
          <br />
          10. Place the sausage rolls in the oven and cook for about 15 minutes until golden brown and the meat juices run clear.
        </div>
      ),
    },
    {
      id: 3,
      title: 'Red Lentil Dhal',
      ingredients: [
        { name: 'g Red Lentils', quantity: 100 },
        { name: 'Tablespoon Ghee, or Vegetable Oil', quantity: 1 },
        { name: 'Small Onion, Roughly Chopped', quantity: 1 },
        { name: 'Garlic Clove, Finely Chopped', quantity: 1 },
        { name: 'Teaspoon Turmeric', quantity: 0.25 },
        { name: 'Teaspoon Cumin', quantity: 0.5 },
        { name: 'Teaspoon Garam Masala or Curry Powder', quantity: 1 },
        { name: 'g Tinned Chopped Tomatoes', quantity: 200 },
        { name: 'ml Water', quantity: 150 },
        { name: 'Vegetable or Chicken Stock Cube', quantity: 1 },
        { name: 'Teaspoon Chilli Flakes', quantity: 0.5 },
      ],
      method: (
        <div>
          1. Roughly chop the onion, and put in a pan with the oil, garlic, and spices. Cook for 2 mins until the onion is soft.
          <br />
          2. Wash the lentils and add to the pan with the tomatoes, salt, water, and stock cube.
          <br />
          3. Cook together until the lentils are soft and it looks a bit like a soup.
        </div>
      ),
    },
    {
      id: 4,
      title: 'Scotch Eggs',
      ingredients: [
        { name: 'Medium Eggs', quantity: 2 },
        { name: 'g Good Quality Pork Sausage Meat', quantity: 150 },
        { name: 'Teaspoon Mixed Dried Herbs', quantity: 1 },
        { name: 'Salt and Pepper', quantity: 'to taste' },
        { name: 'Tablespoons Seasoned Flour (add a little salt and pepper to plain flour)', quantity: 2 },
        { name: 'Tablespoons Finely Crushed Cornflakes', quantity: 4 },
      ],
      method: (
        <div>
          1. Hard boil the eggs. Place them in a saucepan and just cover with water. Bring to the boil for 7 minutes. By this stage both the yolk and the white should be very firm or hard boiled. Once cooked, place the eggs in a bowl of cold water.
          <br />
          2. Remove the egg shells.
          <br />
          3. Place the sausage meat in a bowl and season with salt and pepper and herbs. Mix well.
          <br />
          4. Place half the sausage meat on a large piece of cling film. Fold the cling film over to cover the meat and using hands squash the meat out until it is about half cm thick all over.
          <br />
          5. Roll the egg in the seasoned flour. Carefully remove the top layer of cling film and place the egg on the meat. Use the cling film to help wrap the meat. Make sure none of the egg white is showing.
          <br />
          6. Repeat with the rest of the sausage meat and the other hard boiled egg.
          <br />
          7. Place the crushed cornflakes in a small bowl. Roll one of the sausage covered eggs in the crushed cornflakes. Roll it around until all the sausage meat is covered in crumbs. Place on a piece of baking parchment on a baking tray.
          <br />
          8. Repeat with the other sausage covered egg.
          <br />
          9. Place the scotch eggs in the oven and cook for about 15 minutes until golden brown. Remove from the oven to cool.
        </div>
      ),
    },
    {
      id: 5,
      title: 'Chocolate Chip Cookies',
      ingredients: [
        { name: 'g Butter or Margarine', quantity: 40 },
        { name: 'g Caster Sugar', quantity: 40 },
        { name: 'g Light Brown Sugar', quantity: 40 },
        { name: 'an Egg, Beaten', quantity: 0.5 },
        { name: 'g Self Raising Flour', quantity: 90 },
        { name: 'Drops Vanilla Essence', quantity: 3 },
        { name: 'g Chocolate Chips or Chocolate Chopped', quantity: 50 },
      ],
      method: (
        <div>
          1. In a mixing bowl, cream together the butter, caster sugar, light brown sugar, and vanilla essence using a wooden spoon.
          <br />
          2. Add the beaten egg and beat well.
          <br />
          3. Add the flour and mix together thoroughly.
          <br />
          4. Fold in the chocolate chips and distribute evenly throughout the mixture.
          <br />
          5. Using a teaspoon, drop the mixture onto the greased baking tray, making sure the cookies are spaced apart.
          <br />
          6. Bake in the oven for 15 to 20 minutes until the mixture has spread and cookies are beginning to feel firm.
          <br />
          7. When cooked, transfer to a wire rack to cool and become crisp.
        </div>
      ),
    },
    {
        id: 6,
        title: 'Vegetable Samosas',
        ingredients: [
          { name: 'Small Carrot, Peeled and Boiled', quantity: 1 },
          { name: 'Spring Onion', quantity: 1 },
          { name: 'Small Potato, Boiled', quantity: 1 },
          { name: 'Tablespoon Frozen Peas', quantity: 1 },
          { name: 'Teaspoon Curry Powder', quantity: 1 },
          { name: 'Sheets Filo Pastry', quantity: 4 },
          { name: 'ml Sunflower Oil', quantity: 50 },
        ],
        method: (
          <div>
            1. Put the cooked carrot and potato in a bowl and mash it lightly with a fork.
            <br />
            2. Cut the spring onion into small slices and add to the carrot and potato.
            <br />
            3. Add the frozen peas and curry powder. Mix everything together.
            <br />
            4. Cut the filo pastry into strips measuring about 10cm by 15cm. Put 4 strips in front of you with the short side towards you. Cover the other filo with cling film.
            <br />
            5. Using oil, lightly brush one side of the filo strips. Place one filo strip on top of another to give 2 double thickness strips.
            <br />
            6. Place a tablespoon of the vegetable mixture on the filo in the bottom left-hand corner of the pastry about 2cm up from the bottom. Pick up the opposite bottom corner and fold it over the filling diagonally so that the corner meets the opposite long side creating a triangle. Fold this triangle containing the filling straight upwards and then fold this triangle sideways to the opposite corner keeping the triangle shape. Continue folding the package alternately across and up the strip until you reach the end.
            <br />
            7. Place the triangle onto baking parchment on a baking tray.
            <br />
            8. Brush each samosa slightly with oil.
            <br />
            9. Place the baking tray in the oven and cook for 15 to 20 minutes until crispy on the outside and golden brown in color.
          </div>
        ),
      },
      {
        id: 7,
        title: 'Homemade Meat and Vegetable Pasties',
        ingredients: [
          { name: 'g Plain Flour', quantity: 200 },
          { name: 'g Butter or Margarine', quantity: 100 },
          { name: 'A Little Cold Water', quantity: 'As needed' },
          { name: 'Small Potato', quantity: 1 },
          { name: 'Other Vegetables as Desired', quantity: 'As desired' },
          { name: 'g Beef, Turkey, Pork, or Lamb Mince', quantity: 125 },
          { name: 'Small Onion', quantity: 1 },
          { name: 'Teaspoon Fresh Herbs', quantity: 1 },
          { name: 'Tablespoon Stock or Gravy', quantity: 1 },
        ],
        method: (
          <div>
            1. Rub the flour and butter together, using the fingertips until the mixture looks like breadcrumbs.
            <br />
            2. Add about two tablespoons of water and mix it in well using a metal spoon to keep everything cold.
            <br />
            3. Gently knead the mixture into a ball of dough using a spoon first, then fingers to draw it together into a ball. If the dough seems too crumbly, add a little more water. Put it in a cool place to rest.
            <br />
            4. Peel the raw potatoes and carrots. Either chop them very finely or grate them into a bowl.
            <br />
            5. Finely chop or grate any other hard vegetables. Add frozen sweet corn or peas, etc.
            <br />
            6. Chop the onion finely and add to the other vegetables.
            <br />
            7. Mix the meat with vegetables and stir together with the stock and herbs. Season mixture with salt and pepper. Put the bowl to one side.
            <br />
            8. Divide the pastry into two and roll each piece out to a circle about 150 millimeters across. Place on baking parchment on a baking tray.
            <br />
            9. Pile half the meat mixture onto one half of each pastry circle. Dampen the edges of each circle with water and fold the pastry over to encase the filling. Press the edges firmly together.
            <br />
            10. If wanted, brush the pastry with beaten egg to give them a shiny appearance when cooked.
            <br />
            11. Place in the oven and bake for 20 minutes until golden brown.
          </div>
        ),
      },
      {
        id: 8,
        title: 'Bakewell Tart',
        ingredients: [
          { name: 'g Plain Flour', quantity: 100 },
          { name: 'g Hard Block Margarine', quantity: 50 },
          { name: 'Tablespoons Cold Water', quantity: 3 },
          { name: 'Tablespoons Raspberry Jam', quantity: 2 },
          { name: 'g Soft Tub Margarine', quantity: 50 },
          { name: 'g Caster Sugar', quantity: 50 },
          { name: 'Egg, Beaten', quantity: 1 },
          { name: 'g Self Raising Flour', quantity: 50 },
          { name: 'Tablespoon Ground Almonds', quantity: 1 },
          { name: 'Teaspoon Almond Essence', quantity: 1 },
          { name: 'Tablespoon Milk', quantity: 1 },
        ],
        method: (
          <div>
            1. Rub the flour and butter together, using the fingertips until the mixture looks like breadcrumbs.
            <br />
            2. Add 2 tablespoons of the cold water and stir together until it comes together. Gently knead the mixture into a ball of dough using a metal spoon first, then using fingers. Add a little more water if too dry but be careful not to put too much in.
            <br />
            3. On a lightly floured board, with a lightly floured rolling pin, press the pastry to a circle which is large enough to line the inside of the flan dish. Always roll away from the worker and turn the pastry not the rolling pin as this helps to avoid the pastry sticking and stretching.
            <br />
            4. Place a rolling pin at the edge of the pastry and roll it up around the rolling pin. Pick up and place on top of the flan tin. Unroll the pastry.
            <br />
            5. Gently ease the pastry into the bottom of the flan case pushing it into the corner of the tin. Trim the edges against the rim of the flan tin. If time permits, place the flan tin in the fridge for 30 minutes to chill the pastry.
            <br />
            6. Place the flour, sugar, margarine, and ground almonds into a bowl.
            <br />
            7. Break the eggs carefully into a small bowl and beat with the fork.
            <br />
            8. Add the beaten egg and the almond essence to the dry ingredients. Beat well with a wooden spoon. If the mixture is very stiff, add a tablespoon of milk. Keep mixing and the mixture will gradually come together to give a mix that will gently drop when the spoon is lifted from the bowl. This is called dropping consistency.
            <br />
            9. Take the chilled pastry tart. Spread 2 tablespoons of jam evenly over the pastry.
            <br />
            10. Drop spoonfuls of the sponge mix over the jam. Spread it evenly trying not to pull the jam into the sponge mix.
            <br />
            11. Sprinkle the tops of the sponge with the flaked almonds and arrange the cherries on top.
            <br />
            12. Place in a preheated oven and cook for 25 - 30 minutes until golden brown on top. The sponge should spring back when gently pressed. It is important not to open the oven door before the sponge is set as the draught of cold air can make the sponge sink.
          </div>
        ),
      },
      {
        id: 9,
        title: 'Sweet and Sour Pork',
        ingredients: [
          { name: 'g Pork Meat', quantity: '250 - 300' },
          { name: 'Half Red Pepper', quantity: 1 },
          { name: 'Half Green Pepper', quantity: 1 },
          { name: 'Spring Onions', quantity: 2 },
          { name: 'Tinned Pineapple Rings Chopped Up', quantity: 2 },
          { name: 'g Tinned Bamboo Shoots', quantity: 100 },
          { name: 'Tablespoons Tomato Puree', quantity: 2 },
          { name: 'Tablespoons Vinegar', quantity: 2 },
          { name: 'Teaspoon Soy Sauce', quantity: 1 },
          { name: 'ml Pineapple Juice', quantity: 150 },
          { name: 'Garlic Clove Crushed', quantity: 1 },
          { name: 'Teaspoon Stock Powder', quantity: 1 },
          { name: 'Tablespoon cornflour mixed with 2 Teaspoons Cold Water', quantity: 1 },
          { name: 'Tablespoons Brown Sugar', quantity: 2 },
        ],
        method: (
          <div>
            1. If using shoulder or leg pork, chop into small chunks. Pork chops or pork loin fillets can be left whole. Place in a casserole dish.
            <br />
            2. Remove the stalk and seeds from the peppers and chop into smaller pieces.
            <br />
            3. Chop up the spring onion, the pineapple, and drain the bamboo shoots. Add to the pork.
            <br />
            4. In a jug, mix the cornflour and water together to make a runny paste and then add all the other ingredients. Stir well. Check for seasoning and add pepper if needed.
            <br />
            5. Pour the sauce over the pork and vegetables and mix so all coated in sauce.
            <br />
            6. Put a lid on the casserole dish or cover with a piece of foil. Place in the preheated oven and cook for 40 minutes to an hour by which time the sauce should have thickened, the vegetables will be soft, and the meat will be cooked through and tender.
          </div>
        ),
      },
      {
        id: 10,
        title: 'Cod Mornay',
        ingredients: [
          { name: 'g Butter or Margarine', quantity: 25 },
          { name: 'g Plain Flour', quantity: 25 },
          { name: 'ml Milk', quantity: 300 },
          { name: 'Tablespoons Chopped Fresh Parsley', quantity: 2 },
          { name: 'Small Fresh Cod Fillets with Skin and Bones Removed', quantity: 2 },
          { name: 'Tablespoons Fresh Breadcrumbs', quantity: 2 },
          { name: 'Tablespoons Grated Hard Cheese', quantity: 2 },
          { name: 'Lemon', quantity: 1 },
        ],
        method: (
          <div>
            1. Melt the butter or margarine in a saucepan over medium heat. 
            <br />
            2. Add the plain flour and cook, stirring constantly, for about 1 minute to form a roux.
            <br />
            3. Gradually add the milk, stirring constantly, until the sauce thickens and becomes smooth.
            <br />
            4. Stir in the chopped fresh parsley and season with salt and pepper to taste.
            <br />
            5. Preheat the oven to 200°C (400°F).
            <br />
            6. Place the fresh cod fillets in an ovenproof dish and pour the sauce over them.
            <br />
            7. Sprinkle the fresh breadcrumbs and grated hard cheese over the top.
            <br />
            8. Bake in the preheated oven for 15-20 minutes or until the fish is cooked through and the topping is golden and bubbly.
          </div>
        ),
      }
      
      
  ];
  

const RecipeDetailPage = () => {
    const [servings, setServings] = useState(1); // State for serving count
    const { recipeId } = useParams();
    const recipe = recipes.find((recipe) => recipe.id === parseInt(recipeId));
  
    if (!recipe) {
      return <div>Recipe not found</div>;
    }
  
    // Function to adjust ingredient quantities based on servings
    const adjustedIngredients = recipe.ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * servings, // Multiply by serving count
    }));
  
    return (
      <div>
        {/* STOCK title and other styled components */}
        <StockTitle>
          <HomeLink to="/">STOCK</HomeLink>
        </StockTitle>
        <Container>
          <TitleContainer>
            <RecipeTitle>{recipe.title}</RecipeTitle>
          </TitleContainer>
          <AllRecipesButton to="/RecipePage">All Recipes</AllRecipesButton> {/* Button to navigate to all recipes */}
          <SectionsContainer>
            <LeftSection>
              <RoundedBox>
                <SectionTitle>Ingredients</SectionTitle>
                <ServingCounter servings={servings} setServings={setServings} /> {/* Add serving counter */}
                <List>
                  {adjustedIngredients.map((ingredient, index) => (
                    <ListItem key={index}>
                      <Circle data-selected="false" /> {/* Initialize the selected state */}
                      {ingredient.quantity} {ingredient.name}
                    </ListItem>
                  ))}
                </List>
              </RoundedBox>
            </LeftSection>
            <RightSection>
              <RoundedBox>
                <SectionTitle>Method</SectionTitle>
                <MethodText>{recipe.method}</MethodText>
              </RoundedBox>
            </RightSection>
          </SectionsContainer>
        </Container>
      </div>
    );
  };
  
  export default RecipeDetailPage;