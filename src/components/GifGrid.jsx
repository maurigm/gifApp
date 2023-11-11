import { ListItems } from './ListItems';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  
  return (
      <>
        <h3>{category}</h3>
        <div className='card-grid'>
          {images.map(img => (
            <ListItems key={img.id} title={img.title} url={img.url}/>
          ))}
        </div>
      </>
    )
}
