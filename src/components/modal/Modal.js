import React from "react";
import "./modal.css";

const Modal = ({ showModal, exercise, openModal, genderToggle }) => {
  return (
    <>
      {showModal ? (
        <section className="modal-background">
          <article className="modal-wrapper">
            <button onClick={openModal}>Close</button>
            {genderToggle === "womens" ? (
              <img src={exercise.female.image} alt={exercise.name} />
            ) : (
              <img src={exercise.male.image} alt={exercise.name} />
            )}
            <h3>{exercise.name}</h3>
            <div
              className="modal-text"
              dangerouslySetInnerHTML={{ __html: exercise["transcript"] }}
            ></div>
          </article>
        </section>
      ) : null}
    </>
  );
};

export default Modal;
