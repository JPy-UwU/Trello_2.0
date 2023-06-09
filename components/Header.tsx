import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg"
        alt="Trello Logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />

    </header>
  )
}

export default Header