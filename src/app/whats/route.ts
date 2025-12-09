import { NextRequest, NextResponse } from 'next/server';

const links = [
  "https://wa.me/556281563542?text=Ol%C3%A1%2C+Tenho+interesse+em+turbinar+meu+Perfil+do+instagram%21",
];

export async function GET(request: NextRequest) {
  const chosenLink = links[0];
  
  console.log(`👉 Redirecionando para: ${chosenLink}`);
  
  return NextResponse.redirect(chosenLink, 302);
}
