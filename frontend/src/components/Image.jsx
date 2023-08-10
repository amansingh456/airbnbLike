
const Image = ({ src, ...rest }) => {
  return <img src={src} {...rest} alt={''} className='rounded-xl'/>;
};

export default Image;