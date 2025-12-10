import { NextRequest, NextResponse } from 'next/server';

const links = [
  "https://wa.me/5511968264136?text=Ol%C3%A1%2C+estava+navegando+pelo+site+mas+estou+com+duvidas+ou+problemas",
];

export async function GET(request: NextRequest) {
  const chosenLink = links[0];
  
  console.log(`👉 Redirecionando para: ${chosenLink}`);
  
  return NextResponse.redirect(chosenLink, 302);
}
