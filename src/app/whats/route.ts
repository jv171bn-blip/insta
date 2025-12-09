import { NextRequest, NextResponse } from 'next/server';

const links = [
  "https://wa.me/556281563542?text=Ol%C3%A1%2C+Tenho+interesse+em+turbinar+meu+Perfil+do+instagram%21",
  "https://wa.me/5511968264136?text=Ol%C3%A1%2C+Tenho+interesse+em+turbinar+meu+Perfil+do+instagram%21",
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C+Tenho+interesse+em+turbinar+meu+Perfil+do+instagram%21" // Exemplo de um terceiro número
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const attendant = searchParams.get('attendant');

  let chosenLink: string;

  if (attendant && parseInt(attendant, 10) >= 1 && parseInt(attendant, 10) <= links.length) {
    // Se um atendente específico for solicitado via query param (1, 2, ou 3)
    chosenLink = links[parseInt(attendant, 10) - 1];
  } else {
    // Se nenhum atendente for especificado, escolhe um aleatoriamente (comportamento antigo)
    const randomIndex = Math.floor(Math.random() * links.length);
    chosenLink = links[randomIndex];
  }
  
  console.log(`👉 Redirecionando para: ${chosenLink}`);
  
  return NextResponse.redirect(chosenLink, 302);
}
