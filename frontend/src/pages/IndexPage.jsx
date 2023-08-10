import  { useContext } from 'react';
import { PlaceContext } from '../providers/PlaceProvider';
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import Spinner from '../components/Spinner';
import SmallIcons from '../components/SmallIcons';

const IndexPage = () => {
  const { places, loading } = useContext(PlaceContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
    <SmallIcons />
    <div className="  mt-14 px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-6 gap-y-8 ">
      {places.length > 0 &&
        places.map((place) => (
          <Link className='hotelsAllData' to={`/place/${place._id}`} key={place._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] && <Image src={place.photos?.[0]} />}
            </div>
            <h2 className="font-bold pl-1">{place.address}</h2>
            <h3 className="text-sm text-gray-500 pl-1">{place.title}</h3>
            <div className="mt-1 pl-1">
              <span className="font-semibold">₹{place.price} </span>
              per night
            </div>
          </Link>
        ))}
    </div>
    </>
  );
};

export default IndexPage;
