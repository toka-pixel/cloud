import { useRouter } from "next/router";

const Card = () => {
  const router = useRouter();
  const { cardTitle } = router.query;

  return (
    <div>
      <h2>{cardTitle}</h2>
    </div>
  );
};

export default Card;
