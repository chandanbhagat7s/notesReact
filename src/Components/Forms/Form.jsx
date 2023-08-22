import "./Form.css";

function FormOut() {
  return (
    <div className="form-container">
      <div className="form-elements">
        <div className="form-heading">Enter Note</div>
        <div className="form-body">
          <input
            type="text"
            name=""
            id=""
            placeholder="Tag eg.party,study"
            className="formInput  distance"
          />

          <div className="notes-importance-level distance">
            Enter Importance level
            <input type="range" name="" id="" className="formInput " />
          </div>
          <textarea
            name=""
            id=""
            cols="50"
            rows="5"
            className="formInput  distance"
            placeholder="Enter Discription eg. i am planing to..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default FormOut;
