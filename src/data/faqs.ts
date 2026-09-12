export type Faq = { question: string; answer: string; group: "Flowers" | "Orders" | "Shipping" };

export const faqs: Faq[] = [
  {
    group: "Flowers",
    question: "What are Hollydaff flowers made of?",
    answer:
      "Soft chenille (pipe-cleaner) stems, twisted and shaped by hand into petals and leaves, then finished with wraps, ribbons, beads and pearls. There are no real flowers involved — so no water, no pollen and no wilting.",
  },
  {
    group: "Flowers",
    question: "How long do they last?",
    answer:
      "For years. Keep them dry and away from harsh direct sunlight, and dust them gently with a soft brush or a hairdryer on the cool setting. They'll look just as good on your shelf next year.",
  },
  {
    group: "Orders",
    question: "Can I customise my order?",
    answer:
      "Almost everything is customisable — flower types, colours, wrapping, ribbons, name cut-outs and note cards. You can even send a reference picture (Pinterest is welcome!) and we'll recreate it.",
  },
  {
    group: "Orders",
    question: "How do I place an order?",
    answer:
      "Add pieces to your gift bag or design your own bouquet, then send the ready-made order message to us on Instagram (@hollydaff.co). We confirm the design, price and delivery date with you in the chat.",
  },
  {
    group: "Orders",
    question: "Do you offer cash on delivery?",
    answer:
      "We accept prepaid orders only. Every piece is handmade to order, so payment lets us reserve your slot and start crafting straight away.",
  },
  {
    group: "Orders",
    question: "Do you take bulk orders?",
    answer:
      "Yes, happily! Return gifts, weddings and events, corporate and festive gifting, exhibitions and stalls, and reseller packs. Share the designs and quantity you need and we'll send a quote.",
  },
  {
    group: "Shipping",
    question: "Do you ship across India?",
    answer:
      "Yes — we ship PAN India. Our parcels have reached customers in cities like Chennai and Bengaluru and across states like Haryana, and we've shipped a bulk order to the UK too. Ask us about international shipping.",
  },
  {
    group: "Shipping",
    question: "How long will my order take?",
    answer:
      "It depends on the design and quantity, since everything is made by hand. We'll share a clear timeline before you pay. Ordering for a date? Message us early so we can plan it for you.",
  },
  {
    group: "Shipping",
    question: "How are the flowers packed?",
    answer:
      "Carefully! Pieces are sleeved, cushioned and boxed so they arrive looking exactly as they left our studio.",
  },
];
