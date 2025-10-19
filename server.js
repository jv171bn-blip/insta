import express from "express";

const app = express();

// Links de WhatsApp com saudação personalizada
const links = [
  "https://wa.me/556281563542?text=Ol%C3%A1%2C+Tenho+interesse+em+turbinar+meu+Perfil+do+instagram%21",
  "https://wa.me/5511968264136?text=Ol%C3%A1%2C+Tenho+interesse+em+turbinar+meu+Perfil+do+instagram%21"
];

app.get("/whats", (req, res) => {
  const randomIndex = Math.floor(Math.random() * links.length);
  const chosenLink = links[randomIndex];

  console.log(`👉 Redirecionando para: ${chosenLink}`);
  res.redirect(302, chosenLink);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
