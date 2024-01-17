import { IEvent } from "@/lib/database/models/event.model";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Orden realizada! recibiras un email de confirmación.");
    }

    if (query.get("canceled")) {
      console.log("Orden cancelada -- continua buscando en nuestros eventos.");
    }
  }, []);
  const onCheckout = async () => {
    console.log("CHECKOUT!!!");
  };

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Obtén ticket" : "Comprar ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
