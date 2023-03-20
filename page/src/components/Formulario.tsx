import './Formulario.css';
import React, { useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
  phoneNumber: string;
}

export default function Formulario() {


  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (user.name.length === 0) {
      alert("O campo nome é obrigatório.");
    } else if (user.email.length === 0) {
      alert("O campo e-mail é obrigatório.");
    } else if (user.phoneNumber.length === 0) {
      alert("O campo número de telefone é obrigatório.");
    } else {
      console.log("Usuário:", user);
    }
  }

  return (
    <form className='formulario_divP' onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" name="name" value={user.name} onChange={handleChange} />
      </label>
      <label>
        E-mail:
        <input type="email" name="email" value={user.email} onChange={handleChange} />
      </label>
      <label>
        Número de telefone:
        <input type="tel" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />
      </label>
      <button type="submit" >Verificar</button>
    </form>
  );
}