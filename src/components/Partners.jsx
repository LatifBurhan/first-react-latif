import "../styles/Partner.css";

function Partners(props) {
  return (
    <div className="partner-list">
      {props.partnerList.map((item, index) => (
        <div key={index} className="kartu-partner">
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
}

export default Partners;
