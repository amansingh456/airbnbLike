
const Image = ({ src, ...rest }) => {
  return <img src={src} {...rest} alt={''} className='rounded-xl'/>;
};

export const ImageTwo = [
  "https://res.cloudinary.com/rahul4019/image/upload/v1678863219/Airbnb/Places/w69biobbqjdcuqx94w1x.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1678863606/Airbnb/Places/y0lytplburvclb73snwg.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1678863877/Airbnb/Places/itt1teaqbgh4rdguxwhx.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1680768874/Airbnb/Places/bepycgcqdmxtocsx8dyp.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1680771390/Airbnb/Places/umrvoqzy7ry9go7ju3uv.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1686841899/Airbnb/Places/qcixfhj7vlhoqu8dzhqh.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1686842471/Airbnb/Places/vhtwx0pn5gqva7jizu2t.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1686848350/Airbnb/Places/vsbroszff9pc5q7wmgxn.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1686849655/Airbnb/Places/bdkwaqmryz2by6htyban.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1686849912/Airbnb/Places/k2jkwnfij0ohtztxwp83.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1686850128/Airbnb/Places/kmhud95q9od17yfnctal.jpg",
  "https://res.cloudinary.com/rahul4019/image/upload/v1686850296/Airbnb/Places/pxo2g99d41gujrvwrntm.jpg"
]

export const ImageThree =[
   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b2/47/9a/capital-o-5752-tuma-park.jpg?w=1000&h=-1&s=1"
 ,
   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b2/47/77/capital-o-5752-tuma-park.jpg?w=1000&h=-1&s=1"
  ,
   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b2/46/ea/capital-o-5752-tuma-park.jpg?w=1000&h=-1&s=1"
  ,
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b2/47/6b/capital-o-5752-tuma-park.jpg?w=1000&h=-1&s=1"
  ,
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/e1/7a/hotel-adityaz.jpg?w=1200&h=-1&s=1"
  ,
   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/dd/c3/0e/hotel-adityaz-gwalior.jpg?w=800&h=-1&s=1"
]


export default Image;