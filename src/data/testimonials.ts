// Real messages customers sent the shop (shared publicly in the "Reviews" highlight on Instagram).
// Lightly edited for spelling; names and handles are left out for privacy.

export type Testimonial = {
  quote: string;
  context: string;
  highlight?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I received my order today and I'm absolutely in love with it! Every single piece is so beautiful and the finishing is so perfect. The quality exceeded my expectations.",
    context: "Bouquet order",
    highlight: "The quality exceeded my expectations.",
  },
  {
    quote: "The keychains were absolutely amazing — no glue mark was visible, everything was so, so good!",
    context: "Keychains",
    highlight: "No glue mark was visible",
  },
  {
    quote:
      "The pots were impressive, including the cardboard cut-outs and the extra name cut-outs. Family members who saw these crafts for the first time were impressed with the quality.",
    context: "Mini pots",
    highlight: "Impressed with the quality",
  },
  {
    quote:
      "I just received my order and I'm absolutely in love with everything! The handmade details are gorgeous, and you can truly feel the care put into each piece. We're definitely placing a bulk order soon.",
    context: "First order",
    highlight: "You can truly feel the care put into each piece.",
  },
  {
    quote:
      "Everything is just as perfect as last time, and it was delivered within such a short time. This is my second order and I'm completely satisfied.",
    context: "Repeat customer",
    highlight: "My second order — completely satisfied.",
  },
  {
    quote: "Amazing product, I loved it! The packing was cool and I could see it was carefully packed with love.",
    context: "Shipped order",
    highlight: "Carefully packed with love",
  },
  {
    quote:
      "The sunflower is looking the best! Thank you for making it exactly the way I described, and for being so patient and kind.",
    context: "Custom order",
    highlight: "Exactly the way I described",
  },
  {
    quote: "I am absolutely in love with this! It looks even more beautiful in person than it did in the photos. Highly recommend!",
    context: "Bouquet",
    highlight: "Even more beautiful in person",
  },
  {
    quote:
      "Each and every flower has its own happiness. I love all the effort you put into every piece — wishing you lots of love and blessings.",
    context: "Bulk parcel",
    highlight: "Each and every flower has its own happiness.",
  },
  {
    quote: "Oh my god, it's so pretty — I don't have words at all! I'll be shopping more from you in the future.",
    context: "Mini pot",
    highlight: "I'll be shopping more from you",
  },
  {
    quote: "Your creativity is very beautiful. Great job, and thank you so much for such a beautiful thing.",
    context: "Gift order",
    highlight: "Your creativity is very beautiful.",
  },
  {
    quote: "It reached me safely and it's so pretty. Thank you once again!",
    context: "Delivered order",
    highlight: "Reached safely and so pretty",
  },
];
