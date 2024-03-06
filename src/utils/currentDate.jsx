const currentDate = () => {
  // Obtenir la date courante
  const currentDate = new Date();

  // Extraire le jour, le mois et l'année de la date courante
  const day = currentDate.getDate().toString().padStart(2, "0"); // Jour sur 2 chiffres (avec un zéro en tête si nécessaire)
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Mois sur 2 chiffres (avec un zéro en tête si nécessaire)
  const year = currentDate.getFullYear(); // Année sur 4 chiffres

  // Formater la date selon le format demandé
  const formattedDate = `${day} - ${month} - ${year}`;

  return formattedDate;
};


export default currentDate;