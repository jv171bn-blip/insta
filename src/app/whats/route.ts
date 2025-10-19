import { NextResponse } from 'next/server';

const links = [
  "https://wa.me/556281563542?text=Ol%C3%A1%2C+Tenho+interesse+em+turbinar+meu+Perfil+do+instagram%21",
  "https://wa.me/5511968264136?text=Ol%C3%A1%2C+Tenho+interesse+em+turbinar+meu+Perfil+do+instagram%21"
];

export async function GET() {
  const randomIndex = Math.floor(Math.random() * links.length);
  const chosenLink = links[randomIndex];

  console.log(`👉 Redirecionando para: ${chosenLink}`);
  
  return NextResponse.redirect(chosenLink, 302);
}
