import { NextRequest, NextResponse } from 'next/server';

const links = [
  "https://wa.me/5511968264136?text=Ol%C3%A1%2C+eu+estava+navegando+pelo+site+e+estou+com+algumas+d%C3%BAvidas%2Fproblemas.",
];

export async function GET(request: NextRequest) {
  const chosenLink = links[0];
  
  console.log(`👉 Redirecionando para: ${chosenLink}`);
  
  return NextResponse.redirect(chosenLink, 302);
}
