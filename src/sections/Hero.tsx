import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'

export const HeroSection = () => {
  return (
  <div className = "py-32">
    <div className = "container">
    <div>
      <Image 
      src = {memojiImage} 
      className = "size-[100px]" 
      alt = "person"
      />
      <div>
        <div></div>
        <div>Available for new projects</div>
      </div>
    </div>
      <h1>Hi, I'm Jahnavi</h1>
      <p>This is a description about me</p>
      <div>
        <button>
          <span>Explore My Work</span>
          <ArrowDown/>
        </button>
        <button>
          <span>👋</span>
          <span>Let's Connect</span>
        </button>
      </div>
    </div>
  </div>
  );
};