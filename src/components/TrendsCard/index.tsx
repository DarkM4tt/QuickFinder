import "./TrendsCard.scss";

type TrendsCardProps = {
  imgUrl: string;
  description: String;
  setQuery: Function;
};

const TrendsCard = (props: TrendsCardProps) => {
  return (
    <div
      className="trends-card-container"
      onClick={() => props.setQuery(props.description)}
    >
      <img src={props.imgUrl} alt="Representative" />
      <div>{props.description}</div>
    </div>
  );
};

export default TrendsCard;
