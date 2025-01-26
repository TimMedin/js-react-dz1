import React from 'react';
import ReactDOM from 'react-dom/client';

const myName = "Tymofii";
const welcomeMessage = "Ласкаво просимо до нашого сайту!";
const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGvxtr7vmYvKw_dBgBPf98isHM4Cz6REorg&s";
const imageAlt = "Папуга";
const favoriteSite = {
  name: "Google",
  url: "https://www.google.com",
};
const num1 = 15;
const num2 = 25;
const sum = num1 + num2;
const colors = ["Червоний", "Синій", "Зелений"];

const SiteContent = (
  <div>
    <h1>{myName}</h1>
    <p>{welcomeMessage}</p>
    <img src={imageUrl} alt={imageAlt} />
    <p>
      Улюблений сайт: <a href={favoriteSite.url}>{favoriteSite.name}</a>
    </p>
    <p>Сума чисел {num1} та {num2}: {sum}</p>
    <ul>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(SiteContent);
