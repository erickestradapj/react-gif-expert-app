import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
   const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

   const onAddCategory = () => {
      setCategories([...categories, 'Valorant']);
   };

   return (
      <>
         <h1>GifExpertApp</h1>

         <AddCategory />

         <button onClick={onAddCategory}>Add</button>

         <ol>
            {categories.map((category, index) => {
               return <li key={index}>{category}</li>;
            })}
         </ol>
      </>
   );
};

export default GifExpertApp;
