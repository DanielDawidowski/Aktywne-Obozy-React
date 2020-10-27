import React, { useState, useEffect } from "react";
import {
  FormPage,
  Events,
  Event,
  EventIcon,
  EventDetails,
  Price,
  Date,
  Group,
  Title,
  RegisterForm,
  Confirm,
  FormFooter,
} from "./styles/formStyles.js";

import { ReactComponent as Plus } from "../assets/SVG/plus.svg";

const Form = (props) => {
  const [name, setName] = useState("");

  useEffect(() => {}, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleAddPerson = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: name,
    });

    setName("");
  };

  return (
    <RegisterForm onSubmit={handleAddPerson}>
      <input
        type="text"
        placeholder="Imię i Nazwisko"
        name="text"
        value={name}
        onChange={handleChange}
      />
      <button>
        <Plus onClick={() => {}} />
        {/* <Plus onClick={() => setNewRegister()} /> */}
      </button>
    </RegisterForm>
  );
};

export default Form;

// <RegisterForm onSubmit={clickSubmit}>
//   <EmailIcon className="email-form" />
//   <LeafsForm className="leafs-form" />
//   <>
//     <label>
//       <Person />
//       <input
//         type="text"
//         value={name}
//         placeholder="Imię i Nazwisko"
//         onChange={handleChange("name")}
//       />
//       <span>
//         {/* <Add onClick={() => {}} /> */}
//         <Plus onClick={() => {}} />
//       </span>
//     </label>
//   </>
//   <label>
//     <Email />
//     <input
//       type="text"
//       value={email}
//       placeholder="Email"
//       onChange={handleChange("email")}
//     />
//   </label>
//   <label>
//     <Phone />
//     <input
//       type="text"
//       value={phone}
//       placeholder="Telefon"
//       onChange={handleChange("phone")}
//     />
//   </label>
//   <label>
//     <EIcon />
//     <select onChange={handleChange("events")}>
//       {showEvents &&
//         showEvents.map((event, i) => (
//           <option key={i} value={event._id}>
//             {event.name}-{event.startDate}
//           </option>
//         ))}
//     </select>
//   </label>
//   <label>
//     <Message />
//     <textarea
//       type="text"
//       value={message}
//       placeholder="Wiadomość"
//       onChange={handleChange("message")}
//     />
//   </label>
//   <Confirm>
//     <button>Zapisz się</button>
//     {/* <div>cena: 650 zł</div> */}
//   </Confirm>
// </RegisterForm>;
