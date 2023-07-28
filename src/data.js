import React from 'react';
const recipes = [
  {
    id: 1,
    title: 'Classic Beef Lasagne',
    description: 'This is a classic beef lasagne recipe.',
    ingredients: [
        '9 lasagne sheets',
        '1 lb (450g) lean ground beef',
        '1 onion, finely chopped',
        '2 garlic cloves, minced',
        '1 can (28 oz) crushed tomatoes',
        '1 can (6 oz) tomato paste',
        '1/2 cup water',
        '2 tablespoons olive oil',
        '1 teaspoon dried basil',
        '1 teaspoon dried oregano',
        '1/2 teaspoon salt',
        '1/4 teaspoon black pepper',
        '2 cups ricotta cheese',
        '1 large egg',
        '1/4 cup grated Parmesan cheese',
        '3 cups shredded mozzarella cheese'
      ],
      steps: [
        // Step 1: Prepare the Meat Sauce
        "In a large saucepan, heat the olive oil over medium heat. Add the chopped onions and sauté until they become translucent.",
        "Add the minced garlic and cook for another minute, being careful not to let it burn.",
        "Add the ground beef to the saucepan and cook until it's browned and fully cooked.",
        "Stir in the crushed tomatoes, tomato paste, water, dried basil, dried oregano, salt, and black pepper.",
        "Bring the mixture to a simmer, then reduce the heat and let it cook for about 20 minutes, stirring occasionally.",

        // Step 2: Prepare the Ricotta Filling
        "In a separate bowl, mix the ricotta cheese, egg, and grated Parmesan cheese until well combined. Set aside.",

        // Step 3: Cook the Lasagne Sheets
        "Preheat your oven to 375°F (190°C).",
        "In a large pot, bring water to a boil and cook the lasagne sheets according to the package instructions. Drain and set aside.",

        // Step 4: Assemble the Lasagne
        "In a 9x13-inch baking dish, spread a thin layer of the meat sauce at the bottom.",
        "Place 3 lasagne sheets over the sauce to cover the bottom of the dish.",
        "Spread half of the ricotta filling evenly over the lasagne sheets.",
        "Sprinkle about 1 cup of shredded mozzarella cheese over the ricotta filling.",
        "Add another layer of meat sauce on top of the cheese.",
        "Repeat the layers: lasagne sheets, ricotta filling, mozzarella cheese, and meat sauce.",
        "For the final layer, place the remaining 3 lasagne sheets and cover them with the remaining meat sauce and shredded mozzarella cheese.",

        // Step 5: Bake the Lasagne
        "Cover the baking dish with aluminum foil, making sure it's tented so it doesn't touch the cheese.",
        "Bake the lasagne in the preheated oven for 25 minutes.",
        "Remove the foil and bake for an additional 15 minutes or until the cheese on top is melted and golden.",

        // Step 6: Let It Rest and Serve
        "Once the lasagne is done baking, remove it from the oven and let it rest for about 10 minutes before cutting.",
        "Serve hot and enjoy your delicious Classic Beef Lasagne!"
      ],
      imageUrl: 'https://images.pexels.com/photos/6046493/pexels-photo-6046493.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    // Add more recipe objects as needed...
    {
      id: 2,
      title: 'Vetkoek with Curry Mince',
      description: 'This is a delicious South African dish: Vetkoek served with Curry Mince.',
      ingredients: [
        'For Vetkoek:',
        '2 cups all-purpose flour',
        '2 teaspoons baking powder',
        '1/2 teaspoon salt',
        '1 tablespoon sugar',
        '3/4 cup warm milk',
        'Vegetable oil for frying',
        '',
        'For Curry Mince:',
        '1 lb (450g) ground beef or lamb',
        '1 onion, finely chopped',
        '2 garlic cloves, minced',
        '1 tablespoon vegetable oil',
        '2 tablespoons curry powder',
        '1 teaspoon ground cumin',
        '1 teaspoon ground coriander',
        '1 teaspoon paprika',
        '1/2 teaspoon ground turmeric',
        '1 can (14 oz) diced tomatoes',
        '1 cup beef or vegetable broth',
        'Salt and pepper to taste',
      ],
      steps: [
        // Step 1: Prepare Vetkoek Dough
        'In a mixing bowl, combine the flour, baking powder, salt, and sugar.',
        'Gradually add the warm milk and mix until a soft dough forms.',
        'Cover the dough with a damp cloth and let it rest for 10-15 minutes.',

        // Step 2: Make Vetkoek
        'Heat vegetable oil in a deep pan or pot for frying (about 2 inches deep).',
        'Scoop spoonfuls of the vetkoek dough and carefully drop them into the hot oil.',
        'Fry the vetkoek until they are golden brown and cooked through. Remove and drain on paper towels.',

        // Step 3: Prepare Curry Mince
        'In a separate pan, heat vegetable oil and sauté the chopped onions and minced garlic until fragrant.',
        'Add the ground beef or lamb and cook until browned and fully cooked.',
        'Stir in the curry powder, ground cumin, ground coriander, paprika, and ground turmeric.',
        'Add the diced tomatoes and beef or vegetable broth. Bring the mixture to a simmer.',
        'Let the curry mince simmer for about 15-20 minutes until the flavors meld and the sauce thickens.',
        'Season with salt and pepper to taste.',

        // Step 4: Serve
        'Slice the vetkoek in half and fill each with a generous spoonful of the curry mince.',
        'Serve hot and enjoy your delicious Vetkoek with Curry Mince!',
      ],
      imageUrl: 'https://media.istockphoto.com/id/1393961822/photo/mince-filled-vetkoeok.jpg?b=1&s=612x612&w=0&k=20&c=jIHuBqoqrKfjTniVPiYtvU-3tfr6l2Gkl8CEj2yFuyE=',
    },
    {
      id: 3,
      title: 'Butter Chicken',
      description: 'This is a rich and flavorful Indian Butter Chicken recipe.',
      ingredients: [
        'For Marinade:',
        '1 lb (450g) boneless, skinless chicken thighs or breasts, cut into bite-sized pieces',
        '1/2 cup plain yogurt',
        '1 tablespoon lemon juice',
        '1 teaspoon garam masala',
        '1 teaspoon ground cumin',
        '1 teaspoon paprika',
        '1/2 teaspoon ground turmeric',
        '1/2 teaspoon chili powder',
        '1/2 teaspoon ground cinnamon',
        '1/2 teaspoon ground cardamom',
        '1/2 teaspoon salt',
        '2 cloves garlic, minced',
        '1 tablespoon grated ginger',
        '',
        'For Sauce:',
        '2 tablespoons ghee or butter',
        '1 large onion, finely chopped',
        '2 cloves garlic, minced',
        '1 tablespoon grated ginger',
        '1 teaspoon ground cumin',
        '1 teaspoon garam masala',
        '1 teaspoon paprika',
        '1/2 teaspoon ground turmeric',
        '1/2 teaspoon chili powder',
        '1/2 teaspoon ground cinnamon',
        '1/2 teaspoon ground cardamom',
        '1 can (14 oz) diced tomatoes',
        '1 cup heavy cream or coconut cream',
        '2 tablespoons tomato paste',
        '1 tablespoon honey or sugar',
        'Salt and pepper to taste',
        'Fresh cilantro, for garnish',
      ],
      steps: [
        // Step 1: Marinate the Chicken
        'In a bowl, combine all the marinade ingredients and mix well.',
        'Add the chicken pieces to the marinade and coat them evenly.',
        'Cover the bowl and refrigerate for at least 1 hour (or overnight for best results).',

        // Step 2: Cook the Chicken
        'In a large skillet or pan, heat ghee or butter over medium heat.',
        'Add the marinated chicken and cook until browned on all sides and cooked through.',
        'Remove the chicken from the pan and set it aside.',

        // Step 3: Prepare the Sauce
        'In the same pan, add a bit more ghee or butter if needed.',
        'Sauté the chopped onion, minced garlic, and grated ginger until the onion is soft and translucent.',
        'Add the ground cumin, garam masala, paprika, turmeric, chili powder, cinnamon, and cardamom. Stir well.',
        'Add the diced tomatoes, tomato paste, heavy cream or coconut cream, and honey or sugar.',
        'Simmer the sauce for about 10 minutes, stirring occasionally, until it thickens and the flavors meld.',
        'Season with salt and pepper to taste.',

        // Step 4: Finish the Dish
        'Return the cooked chicken to the pan and stir it into the sauce.',
        'Simmer the butter chicken for an additional 5 minutes to allow the chicken to absorb the flavors.',
        'Garnish with fresh cilantro.',

        // Step 5: Serve
        'Serve hot with steamed rice, naan, or any Indian bread of your choice.',
        'Enjoy your delicious and creamy Butter Chicken!',
      ],
      imageUrl: 'https://images.pexels.com/photos/12842119/pexels-photo-12842119.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 4,
      title: 'Creamy Garlic Mussels',
      description: 'This is a delightful and flavorful recipe for creamy garlic mussels.',
      ingredients: [
        '2 pounds fresh mussels, cleaned and debearded',
        '2 tablespoons butter',
        '2 tablespoons olive oil',
        '4 cloves garlic, minced',
        '1/2 cup dry white wine',
        '1 cup heavy cream',
        '1/4 teaspoon red pepper flakes (optional)',
        'Salt and black pepper to taste',
        '2 tablespoons chopped fresh parsley',
        'Crusty bread, for serving',
      ],
      steps: [
        // Step 1: Prepare the Mussels
        'Rinse the fresh mussels under cold running water, scrubbing off any debris or dirt.',
        'Remove the beards by pulling them gently towards the hinge of the shell. Discard any open or damaged mussels.',

        // Step 2: Cook the Mussels
        'In a large pot or skillet with a lid, heat the butter and olive oil over medium heat.',
        'Add the minced garlic and sauté for about 1 minute until fragrant.',
        'Pour in the dry white wine and bring it to a simmer.',

        // Step 3: Steam the Mussels
        'Add the cleaned mussels to the pot, and then quickly cover with a lid to trap the steam.',
        'Steam the mussels for 5 to 7 minutes, or until the shells open. Discard any mussels that remain closed.',

        // Step 4: Make the Creamy Garlic Sauce
        'Once the mussels are cooked, remove them from the pot and set them aside.',
        'To the same pot, add the heavy cream and red pepper flakes (if using).',
        'Season with salt and black pepper to taste.',
        'Simmer the sauce for a few minutes until it thickens slightly.',

        // Step 5: Combine and Serve
        'Return the cooked mussels to the pot with the creamy garlic sauce.',
        'Toss the mussels in the sauce to coat them evenly.',
        'Sprinkle chopped fresh parsley over the mussels for added flavor and color.',

        // Step 6: Serve
        'Serve the creamy garlic mussels in large bowls with crusty bread on the side for dipping in the delicious sauce.',
        'Enjoy your delectable Creamy Garlic Mussels!',
      ],
      imageUrl: 'https://images.pexels.com/photos/16357830/pexels-photo-16357830/free-photo-of-a-soup-with-mussels-and-shrimps.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 5,
      title: 'Cinnamon Rolls',
      description: 'These soft and gooey cinnamon rolls are perfect for a sweet breakfast or dessert treat!',
      ingredients: [
        '1 cup warm milk (110°F/45°C)',
        '1/2 cup granulated sugar',
        '1 packet active dry yeast (about 2 1/4 teaspoons)',
        '1/2 cup unsalted butter, melted',
        '2 large eggs',
        '4 1/2 cups all-purpose flour',
        '1/2 teaspoon salt',
        '1 teaspoon ground cinnamon',
        'For the Filling:',
        '1 cup packed light brown sugar',
        '2 1/2 tablespoons ground cinnamon',
        '1/3 cup unsalted butter, softened',
        'For the Cream Cheese Frosting:',
        '1/4 cup unsalted butter, softened',
        '4 ounces cream cheese, softened',
        '1 cup powdered sugar',
        '1/2 teaspoon vanilla extract',
      ],
      steps: [
        // Step 1: Prepare the Dough
        'In a large mixing bowl, combine warm milk and granulated sugar. Sprinkle the yeast on top and let it sit for 5 minutes, or until it becomes frothy.',
        'Add melted butter and eggs to the yeast mixture and mix well.',
        'Gradually add flour, salt, and ground cinnamon to the wet ingredients, mixing until a soft dough forms.',
        'Knead the dough on a floured surface for about 5 minutes, until smooth and elastic.',

        // Step 2: First Rise
        'Place the dough in a greased bowl, cover it with a clean kitchen towel, and let it rise in a warm place for about 1 to 1.5 hours, or until it doubles in size.',

        // Step 3: Prepare the Filling
        'In a small bowl, mix together brown sugar and ground cinnamon for the filling.',
        'On a floured surface, roll out the risen dough into a large rectangle, about 16x12 inches.',
        'Spread the softened butter over the dough, and then sprinkle the cinnamon sugar mixture evenly on top.',

        // Step 4: Roll and Cut
        'Starting from the long edge, tightly roll the dough into a log. Pinch the seam to seal.',
        'Using a sharp knife, cut the log into 12 even pieces.',

        // Step 5: Second Rise
        'Place the cut rolls in a greased baking dish, cover with a kitchen towel, and let them rise for another 30 to 45 minutes.',

        // Step 6: Bake
        'Preheat your oven to 350°F (175°C).',
        'Bake the risen cinnamon rolls in the preheated oven for 20 to 25 minutes, or until they turn golden brown.',

        // Step 7: Prepare the Cream Cheese Frosting
        'In a mixing bowl, beat softened butter and cream cheese until smooth.',
        'Add powdered sugar and vanilla extract, and continue beating until the frosting is creamy and well combined.',

        // Step 8: Frost and Serve
        'Once the cinnamon rolls are out of the oven, spread the cream cheese frosting on top while they are still warm.',
        'Serve the delicious and warm Cinnamon Rolls immediately.',
        'Enjoy!',
      ],
      imageUrl: 'https://images.pexels.com/photos/351962/pexels-photo-351962.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 6,
      title: 'Lamb Stew',
      description: 'A comforting and rich lamb stew that is perfect for colder days.',
      ingredients: [
        '2 lbs (900g) lamb stew meat, cut into chunks',
        '2 tablespoons all-purpose flour',
        '2 tablespoons olive oil',
        '1 large onion, chopped',
        '3 cloves garlic, minced',
        '4 cups beef or vegetable broth',
        '1 cup red wine (optional)',
        '2 large carrots, peeled and cut into chunks',
        '2 celery stalks, chopped',
        '1 lb (450g) potatoes, peeled and cut into chunks',
        '1 cup frozen peas',
        '2 bay leaves',
        '1 teaspoon dried thyme',
        'Salt and pepper to taste',
      ],
      steps: [
        // Step 1: Coat the Lamb
        'In a large bowl, toss the lamb stew meat with flour until it is well coated. Season with salt and pepper.',

        // Step 2: Sear the Lamb
        'In a large pot or Dutch oven, heat the olive oil over medium-high heat.',
        'Add the coated lamb and sear it until its browned on all sides. Remove the lamb from the pot and set it aside.',

        // Step 3: Sauté the Aromatics
        'In the same pot, add chopped onion and sauté until it becomes translucent, about 3 minutes.',
        'Add minced garlic and cook for another minute.',

        // Step 4: Add the Liquid
        'Pour in the beef or vegetable broth and red wine (if using) to deglaze the pot, scraping up any browned bits from the bottom.',
        'Bring the liquid to a simmer.',

        // Step 5: Simmer the Stew
        'Add the seared lamb back to the pot along with bay leaves and dried thyme.',
        'Cover the pot with a lid and let the stew simmer on low heat for about 1.5 to 2 hours, or until the lamb becomes tender and starts falling apart.',

        // Step 6: Add Vegetables
        'Add the chopped carrots, celery, and potatoes to the stew. Continue simmering for another 30 minutes or until the vegetables are cooked and soft.',

        // Step 7: Add Peas and Season
        'Stir in the frozen peas and let them cook for a few minutes until heated through.',
        'Taste the stew and adjust the seasoning with salt and pepper as needed.',

        // Step 8: Serve and Enjoy
        'Remove the bay leaves and discard them.',
        'Serve the warm and comforting Lamb Stew in bowls.',
        'Enjoy with crusty bread or over steamed rice!',
      ],
      imageUrl: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ];

export default recipes;
