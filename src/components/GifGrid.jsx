import { useFetchGIfs } from '../hooks/useFetchGIfs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
   const { images, isLoading } = useFetchGIfs(category);

   console.log({ isLoading });

   return (
      <>
         <h3>{category}</h3>

         <div className="card-grid">
            {images.map((image) => (
               <GifItem key={image.id} {...image} />
            ))}
         </div>
      </>
   );
};
