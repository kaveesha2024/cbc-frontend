import { TypeAnimation } from 'react-type-animation';
 
const HeroTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Your one-stop shop for all your needs!', 1000,
        '',1000,
        'Explore our wide range of products and enjoy shopping!', 1000,
        '',1000,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      speed={50}
    //   style={{ fontSize: '', display: 'inline-block' }}
      className='text-primary font-semibold text-xl font-mono mt-5'
      cursor={true}
      repeat={Infinity}
    />
  );
};
export default HeroTypeAnimation;