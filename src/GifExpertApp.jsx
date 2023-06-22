import { useState } from 'react';

export const GifExpertApp = () => {
   const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

   const onAddCategory = () => {
      setCategories([...categories, 'Valorant']);
   };

   return (
      <>
         <h1>GifExpertApp</h1>

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
