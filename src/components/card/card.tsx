'use client'

import { useRouter } from 'next/navigation'

interface CardProps {
  id: string;
  date: string;
  salle: string;
}

const Card: React.FC<CardProps> = ({ id, date, salle }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/salle/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 cursor-pointer" onClick={handleClick}>
      <p>Salle: {salle}</p>
      <p>{date}</p>
    </div>
  );
};

export default Card;
