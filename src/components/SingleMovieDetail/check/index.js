import "./index.css";

const Hover = () => {
 
  return (
    <div className="home-card d-flex justify-content-center align-items-center">
      <div className="hover-card col-11 d-flex align-items-center">
        <img
          src="https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpgbcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"
          alt="poster"
        />
        <div className="p-2 text-center">
          <h1>Dune: Part Two</h1>
          <p>
            Follow the mythic journey of Paul Atreides as he unites with Chani
            and the Fremen while on a path of revenge against the conspirators
            who destroyed his family.{" "}
          </p>
          <p>Rating: 8.3</p>
          <svg
            className="mb-1"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-calendar-date"
            viewBox="0 0 16 16"
          >
            <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>
          <p> Tue Feb 27, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Hover;
