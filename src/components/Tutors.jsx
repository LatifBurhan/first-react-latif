import "../styles/Tutors.css";
import "../data/TutorsSection"


function Tutors(props) {
  return (
    <div className="tutor-list">
      {
        props.tutorList.map((item, index)=>{
            return(
                <div className="kartu-tutor" key={index}>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Tutors
