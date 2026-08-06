import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./dev.db'
});
const prisma = new PrismaClient({ adapter });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, firstName, lastName, shippingAddress, cartItems, totalPrice } = body;

    if (!email) {
      return NextResponse.json({ error: "L'email est obligatoire pour le suivi de la commande." }, { status: 400 });
    }

    // 1. Chercher ou créer l'utilisateur (mode invité si nouveau)
    let user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          isGuest: true,
        }
      });
    }

    // 2. Créer la commande
    const order = await prisma.order.create({
      data: {
        guestEmail: email,
        userId: user.id,
        shippingAddress,
        totalPrice,
        status: 'PENDING'
      }
    });

    // 3. (Optionnel) Vider le panier ou marquer comme complété
    // Stripe integration logic can be placed here to generate a payment intent if needed.
    
    return NextResponse.json({ 
      success: true, 
      orderId: order.id, 
      message: 'Commande validée avec succès. Vous recevrez le suivi par email.' 
    });

  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Erreur lors de la création de la commande.' }, { status: 500 });
  }
}
