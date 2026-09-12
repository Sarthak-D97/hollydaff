import { images, videos, type ImageId, type MediaImage, type MediaVideo, type VideoId } from "./media";
import type { CategorySlug } from "./categories";

export type ProductImage = MediaImage & { alt: string };

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  tagline: string;
  description: string;
  highlights: string[];
  customise: string;
  /** Selectable variants shown as chips (colour, style, flower…). */
  options?: { label: string; values: string[] };
  badges?: string[];
  /** Price in INR. Leave undefined to show "Price on request". */
  price?: number;
  occasions?: string[];
  images: ProductImage[];
  video?: MediaVideo;
  instagram: { url: string; views?: number };
  bestseller?: boolean;
};

const pic = (id: ImageId, alt: string): ProductImage => ({ ...images[id], alt });
const reel = (id: VideoId) => videos[id];
const ig = (code: string, views?: number, kind: "reel" | "p" = "reel") => ({
  url: `https://www.instagram.com/${kind}/${code}/`,
  views,
});

export const products: Product[] = [
  {
    slug: "sunflower-bouquet",
    name: "Sunshine Sunflower Bouquet",
    category: "bouquets",
    tagline: "Our best-selling bouquet — golden sunflowers and tiny daisies that never wilt.",
    description:
      "Plush sunflowers with fluffy white daisies and a sprig of greenery, layered in blush florist wrap and printed newsprint, then finished with a glossy black satin bow. Bright, cheerful and made to stay sunny on a shelf for years.",
    highlights: [
      "Sunflowers & daisies twisted by hand from soft chenille stems",
      "Blush wrap, newsprint layer and satin bow",
      "No water, no wilting, no fading — ever",
      "Add a handwritten note card",
    ],
    customise: "Choose the number of sunflowers, add daisies or roses, and pick your wrap and ribbon colours.",
    options: { label: "Wrap", values: ["Blush pink", "Pearl white", "Kraft brown", "Classic black"] },
    badges: ["Bestseller"],
    occasions: ["Birthdays", "Anniversaries", "Just because"],
    images: [
      pic("sunflower-bouquet-1", "Sunflower bouquet with daisies in blush and newsprint wrap"),
      pic("sunflower-bouquet-2", "Handmade sunflower bouquet tied with a black satin bow"),
      pic("sunflower-bouquet-3", "Sunflower bouquet against a white brick wall"),
      pic("sunflower-bouquet-4", "Close view of chenille sunflowers and daisies"),
    ],
    video: reel("reel-sunflower-bouquet"),
    instagram: ig("DWrKGR4vOLB"),
    bestseller: true,
  },
  {
    slug: "pink-rose-bouquet",
    name: "Blush Rose Bouquet",
    category: "bouquets",
    tagline: "A romantic armful of premium pink roses — perfect today, still perfect years from now.",
    description:
      "Rows of velvety pink roses, each shaped petal by petal, gathered in soft white wrap with a sheer pink ribbon. The classic romantic gesture, handmade so the roses keep their bloom long after the moment.",
    highlights: [
      "Premium roses in soft chenille",
      "White wrap with sheer pink ribbon",
      "Made in any quantity — from 6 to a grand bunch",
      "A Valentine's Day favourite",
    ],
    customise: "Pick the rose colour, number of stems, wrap and ribbon. Add a note card or a name tag.",
    options: { label: "Rose colour", values: ["Pink", "Red", "White", "Peach"] },
    badges: ["Valentine's favourite"],
    occasions: ["Valentine's Day", "Anniversaries", "Proposals"],
    images: [
      pic("pink-rose-bouquet-1", "Bouquet of handmade pink roses in white wrap"),
      pic("pink-rose-bouquet-2", "Pink rose bouquet with sheer ribbon"),
      pic("pink-rose-bouquet-3", "Premium pink roses bouquet held in hand"),
      pic("pink-rose-bouquet-4", "Close view of pink chenille roses"),
    ],
    video: reel("reel-pink-roses"),
    instagram: ig("DTdNauGj9ND", 5640),
  },
  {
    slug: "lavender-daisy-bouquet",
    name: "Lavender Daisy Bouquet",
    category: "bouquets",
    tagline: "A dreamy cloud of lilac and white daisies — our Pinterest-inspired custom favourite.",
    description:
      "Lilac and white daisies with sunny centres, framed by slender leaves and wrapped in layered pink organza with a satin tie. First made as a custom order recreated from a Pinterest picture — send us yours and we'll bring it to life.",
    highlights: [
      "Lilac & white daisies with slender leaves",
      "Layered organza wrap with satin tie",
      "Great for recreating a reference picture",
      "Soft, pastel and long-lasting",
    ],
    customise: "Swap daisy colours, change the wrap, or share a Pinterest reference for a one-of-a-kind design.",
    options: { label: "Daisy mix", values: ["Lilac & white", "All white", "Butter yellow & white"] },
    badges: ["Custom favourite"],
    occasions: ["Birthdays", "Graduations", "Just because"],
    images: [
      pic("lavender-daisy-bouquet-1", "Bouquet of lilac and white chenille daisies in pink organza"),
      pic("lavender-daisy-bouquet-2", "Lavender daisy bouquet held outdoors"),
    ],
    video: reel("reel-lavender-bouquet"),
    instagram: ig("DYC3alvvMzE", 2716),
  },
  {
    slug: "sky-blue-pearl-bouquet",
    name: "Sky Blue Pearl Bouquet",
    category: "bouquets",
    tagline: "The cutest blue bouquet — a dome of tiny blooms dotted with pearls.",
    description:
      "A rounded dome of sky-blue blossoms scattered with pearl beads, finished with a ruffled, pearl-edged wrap and trailing teal ribbons. Soft, playful and totally unexpected.",
    highlights: [
      "Dozens of tiny handmade blossoms",
      "Pearl beads and pearl-edged ruffle wrap",
      "Teal ribbon streamers",
      "A statement pastel gift",
    ],
    customise: "Available in other pastel shades — blush, lilac or white — with your choice of ribbon.",
    options: { label: "Colour", values: ["Sky blue", "Blush pink", "Lilac", "White"] },
    occasions: ["Birthdays", "Baby showers", "Just because"],
    images: [
      pic("blue-bouquet-1", "Sky blue handmade bouquet with pearls and ruffled wrap"),
      pic("blue-bouquet-2", "Close view of blue chenille blossoms with pearl beads"),
    ],
    video: reel("reel-blue-bouquet"),
    instagram: ig("DXPPw5iDxza", 2746),
  },
  {
    slug: "lilac-tulip-lily-bouquet",
    name: "Lilac Tulip & Lily Bouquet",
    category: "bouquets",
    tagline: "A velvety purple tulip with a star lily — for people who say it in purple.",
    description:
      "A plush purple tulip paired with a lilac lily and lavender sprigs, wrapped in pearly organza with a love note insert and a lilac satin ribbon.",
    highlights: [
      "Purple tulip, lilac lily & lavender sprigs",
      "Organza wrap with message insert",
      "Lilac satin ribbon",
      "Compact and easy to gift",
    ],
    customise: "Choose tulip and lily colours, change the ribbon, and write your own insert message.",
    options: { label: "Colour story", values: ["Lilac", "Crimson & pink", "Sunset orange"] },
    occasions: ["Birthdays", "Valentine's Day", "Apologies"],
    images: [
      pic("purple-tulip-bouquet-1", "Purple tulip and lilac lily bouquet with satin ribbon"),
      pic("purple-tulip-bouquet-2", "Handmade purple bouquet held against a white wall"),
      pic("tulip-lily-bouquet-3", "Lilac tulip bouquet in organza wrap"),
    ],
    video: reel("reel-purple-bouquet"),
    instagram: ig("DUD4itZjwuC", 6565),
  },
  {
    slug: "mini-tulip-lily-bouquet",
    name: "Mini Tulip & Lily Bouquet",
    category: "bouquets",
    tagline: "One tulip, one lily, a lot of love — a petite bouquet in the colour of your choice.",
    description:
      "A petite bouquet pairing a tulip with a lily and a little greenery, wrapped in sheer organza with a message insert. Small enough for a sweet surprise, pretty enough to keep forever.",
    highlights: [
      "Tulip + lily + greenery",
      "Sheer organza wrap with message insert",
      "Three colour stories to choose from",
      "Budget-friendly gift",
    ],
    customise: "Pick a colour story or mix your own tulip and lily shades.",
    options: { label: "Colour story", values: ["Crimson & pink", "Sunset orange", "Lilac"] },
    occasions: ["Birthdays", "Thank you", "Just because"],
    images: [
      pic("tulip-lily-bouquet-1", "Mini bouquet with a red tulip and magenta lily"),
      pic("tulip-lily-bouquet-2", "Mini bouquet with orange tulip and lily"),
    ],
    instagram: ig("DUBLfRTDwQ-"),
  },
  {
    slug: "single-rose-bouquet",
    name: "Single Rose Bouquet",
    category: "bouquets",
    tagline: "When your budget is small but your intention isn't.",
    description:
      "One pink-and-white rose in a cloud of frosted wrap, tied with a long fuchsia satin ribbon. A small, sweet 'thinking of you' that lasts far longer than a real one.",
    highlights: [
      "Single handmade rose",
      "Frosted wrap and long satin ribbon",
      "Our most affordable bouquet",
      "Lovely in bulk for events",
    ],
    customise: "Choose rose and ribbon colours — or order a set for friends, teams and events.",
    options: { label: "Rose colour", values: ["Pink & white", "Red", "Peach", "White"] },
    occasions: ["Valentine's Day", "Friendship Day", "Farewells"],
    images: [
      pic("single-rose-bouquet-1", "Single handmade rose bouquet with fuchsia satin ribbon"),
      pic("single-rose-bouquet-2", "Pink and white chenille rose in frosted wrap"),
    ],
    instagram: ig("DULj_qlD-C8", 4279),
  },
  {
    slug: "single-lily-bouquet",
    name: "Single Lily Bouquet",
    category: "bouquets",
    tagline: "One statement lily in black lace and sparkle.",
    description:
      "A single pink lily with curling tendrils, set in a black-and-lace wrap with a sparkling tulle layer and a satin bow in the colour you love.",
    highlights: [
      "Statement pink lily with tendrils",
      "Black & lace wrap with sparkling tulle",
      "Satin bow in teal, fuchsia or your pick",
      "Elegant and minimal",
    ],
    customise: "Change the lily colour, wrap and ribbon.",
    options: { label: "Ribbon", values: ["Teal", "Fuchsia", "Black", "Lilac"] },
    occasions: ["Birthdays", "Congratulations", "Women's Day"],
    images: [
      pic("single-lily-bouquet-1", "Single pink lily bouquet in black lace wrap with teal bow"),
      pic("single-lily-bouquet-2", "Single lily bouquet with fuchsia satin bow"),
      pic("single-lily-bouquet-3", "Handmade pink lily in black and lace wrap"),
    ],
    video: reel("reel-single-lily"),
    instagram: ig("DVQ6ewtj0pm", 3072),
  },
  {
    slug: "stargazer-lily-bouquet",
    name: "Stargazer Lily Bouquet",
    category: "bouquets",
    tagline: "Bold white-and-crimson stargazers in shimmering wrap.",
    description:
      "Striking stargazer lilies with crimson centres and fresh greenery, wrapped in shimmering white tulle and tied with a hot-pink bow — elegant, dramatic and made to be displayed.",
    highlights: [
      "Stargazer lilies with crimson streaks",
      "Shimmering white tulle wrap",
      "Hot-pink satin bow",
      "A show-stopping keepsake",
    ],
    customise: "Choose the number of lilies and the ribbon colour, or mix in roses.",
    occasions: ["Anniversaries", "Mother's Day", "Congratulations"],
    images: [
      pic("stargazer-lily-bouquet-1", "Stargazer lily bouquet in shimmering white wrap"),
      pic("stargazer-lily-bouquet-2", "Handmade stargazer lilies with hot pink bow"),
    ],
    video: reel("reel-stargazer-lilies"),
    instagram: ig("DSuSgdKD6Pe", 2338),
  },
  {
    slug: "grand-garden-bouquet",
    name: "Grand Garden Bouquet",
    category: "bouquets",
    tagline: "Our showstopper — an armful of every bloom we make.",
    description:
      "Lilies, sunflowers, gerberas, roses and blossoms in every colour, gathered into one abundant bouquet that fills a room. Made to order for big celebrations, milestones and people who deserve the whole garden.",
    highlights: [
      "Lilies, sunflowers, gerberas & roses",
      "Rainbow or custom colour palette",
      "Made to order for big moments",
      "Can be arranged in a vase or wrap",
    ],
    customise: "Tell us your colours and favourite flowers — we'll design the arrangement with you.",
    badges: ["Made to order"],
    occasions: ["Weddings", "Milestones", "Housewarming"],
    images: [
      pic("grand-mixed-bouquet-1", "Large handmade mixed bouquet of lilies, sunflowers and roses"),
      pic("grand-mixed-bouquet-2", "Close view of colourful chenille lilies and sunflowers"),
      pic("grand-mixed-bouquet-3", "Grand mixed bouquet on a floral background"),
    ],
    video: reel("reel-grand-bouquet"),
    instagram: ig("DZp2t-PpI-R", 2395),
  },
  {
    slug: "lily-stems",
    name: "Lily Stems",
    category: "bouquets",
    tagline: "Graceful long-stem lilies — single, in bunches or in bulk.",
    description:
      "Long-stem lilies with curling tendrils and pollen-tipped stamens. Buy a single stem, mix your own bunch for a vase, or order in bulk for décor, events and resale.",
    highlights: [
      "Long stems with curled tendrils",
      "Six colours to mix and match",
      "Single stems or bunches",
      "Bulk friendly for décor & events",
    ],
    customise: "Mix any colours, choose stem lengths and quantities.",
    options: { label: "Colour", values: ["White", "Blush pink", "Magenta", "Lilac", "Purple", "Sky blue"] },
    badges: ["Bulk friendly"],
    occasions: ["Home décor", "Weddings & events", "Return gifts"],
    images: [
      pic("lily-stems-1", "Bunch of handmade lilies in white, magenta and sky blue"),
      pic("lily-stems-2", "Magenta chenille lily stem"),
      pic("lily-stems-3", "Purple chenille lily stem"),
      pic("lily-stems-4", "Sky blue chenille lily stem"),
      pic("lily-stems-5", "White chenille lily stem with orange stamens"),
      pic("lily-stems-6", "Blush pink chenille lily stem"),
    ],
    video: reel("reel-lilies"),
    instagram: ig("DWLzswHCWP0", undefined, "p"),
  },
  {
    slug: "signature-flower-basket",
    name: "Signature Flower Basket",
    category: "baskets",
    tagline: "A basket full of love — sunflower, lilies and roses in woven cane.",
    description:
      "A woven cane basket brimming with a golden sunflower, blush lilies, red roses, pink blossoms and daisies, finished with a sheer bow. The gift that says birthday, anniversary and Raksha Bandhan all at once.",
    highlights: [
      "Sunflower, lilies, roses & daisies",
      "Real woven cane basket",
      "Sheer ribbon bow",
      "Arranged by hand, stem by stem",
    ],
    customise: "Choose the flower mix, basket size and bow colour.",
    badges: ["Gift favourite"],
    occasions: ["Birthdays", "Anniversaries", "Raksha Bandhan"],
    images: [
      pic("flower-basket-1", "Woven basket filled with a handmade sunflower, lilies and red roses"),
      pic("flower-basket-3", "Signature flower basket with sheer bow"),
    ],
    video: reel("reel-flower-basket"),
    instagram: ig("DcbHd7PPyjt", 3100),
    bestseller: true,
  },
  {
    slug: "sunflower-basket",
    name: "Sunflower Basket",
    category: "baskets",
    tagline: "A handful of sunshine in a knitted basket.",
    description:
      "A cheerful bunch of sunflowers in a knitted maroon basket with a handle — a happy little gift that brightens any desk, shelf or bedside.",
    highlights: [
      "Bunch of handmade sunflowers",
      "Knitted basket with handle",
      "Also available in mini size",
      "Bright and long-lasting",
    ],
    customise: "Pick the basket colour, size and flower mix.",
    options: { label: "Size", values: ["Regular", "Mini"] },
    occasions: ["Birthdays", "Get well soon", "Teacher's Day"],
    images: [
      pic("sunflower-basket-1", "Handmade sunflower basket with a knitted maroon basket"),
      pic("mini-pots-7", "Mini sunflower basket held outdoors"),
    ],
    instagram: ig("DTx5N6MD1zI", 6954),
  },
  {
    slug: "mini-flower-pots",
    name: "Mini Flower Pots",
    category: "mini-pots",
    tagline: "Our best-selling desk buddies — tiny potted blooms that make everyone smile.",
    description:
      "Palm-sized blooms in cupcake-style pots: lilies, daisies, tulips, sunflowers, hydrangeas and more. Loved as desk décor, return gifts and exhibition bestsellers — and happily made in bulk with name tags or cut-outs.",
    highlights: [
      "Palm-sized, zero-maintenance décor",
      "Lily, daisy, tulip, sunflower, hydrangea & more",
      "Our #1 pick for return gifts & stalls",
      "Name cut-outs & bulk packs available",
    ],
    customise: "Mix flower types and pot colours, add names or tags, and order any quantity.",
    options: {
      label: "Flower",
      values: ["Pink lily", "White daisy", "Red tulip", "Sunflower", "Blue hydrangea", "Carnation", "Smiley daisy"],
    },
    badges: ["Bestseller", "Bulk friendly"],
    occasions: ["Return gifts", "Desk décor", "Exhibitions & stalls"],
    images: [
      pic("mini-pots-1", "Mini pot with a handmade pink stargazer lily"),
      pic("mini-pots-2", "Mini pot with white chenille daisies"),
      pic("mini-pots-3", "Mini pot with red handmade tulips and a satin bow"),
      pic("mini-pots-5", "Mini pot with blue hydrangea blooms"),
      pic("mini-pots-6", "Smiley mini pot with a white and pink daisy"),
      pic("mini-pots-8", "Mini pot with pink carnations"),
      pic("mini-pots-4", "Collection of sunflower mini pots"),
    ],
    video: reel("reel-mini-pots"),
    instagram: ig("Dc-Z1r8vNKH", 47030),
    bestseller: true,
  },
  {
    slug: "flower-keychains",
    name: "Flower Keychains",
    category: "keychains",
    tagline: "Tiny blooms for your keys and bags — our most-watched reel (121K views!).",
    description:
      "Hand-twisted gerberas, lilies, sunflowers, lavender, strawberries and more on gold-tone keyrings. Cute on bags and keys, perfect for gift hampers — available as single pieces or bulk packs.",
    highlights: [
      "Neat finish — customers love that no glue marks show",
      "Gold-tone keyring with lobster clasp",
      "Dozens of flowers & fruits to choose from",
      "Single pieces or bulk packs",
    ],
    customise: "Choose any flower or colour, mix sets for hampers, or order bulk for events and resale.",
    options: {
      label: "Design",
      values: ["Blue gerbera", "Pink lily", "Sunflower", "Strawberry", "Magenta gerbera", "Lavender", "Teddy", "Flower cluster"],
    },
    badges: ["Bestseller", "Bulk friendly"],
    occasions: ["Return gifts", "Friendship Day", "Hampers"],
    images: [
      pic("flower-keychains-1", "Blue gerbera flower keychain"),
      pic("flower-keychains-2", "Pink lily flower keychain"),
      pic("flower-keychains-3", "Sunflower keychain on a gold ring"),
      pic("flower-keychains-4", "Strawberry keychains"),
      pic("flower-keychains-5", "Magenta gerbera keychain"),
      pic("flower-keychains-6", "Lavender sprig keychain"),
      pic("flower-keychains-8", "Pastel flower cluster keychain"),
      pic("flower-keychains-9", "Red strawberry keychain held outdoors"),
    ],
    video: reel("reel-keychains"),
    instagram: ig("DVBuWFZjwLN", 121772),
    bestseller: true,
  },
  {
    slug: "mini-bouquet-keychain",
    name: "Mini Bouquet Keychain",
    category: "keychains",
    tagline: "A whole bouquet, shrunk down to fit on your keys.",
    description:
      "A teeny wrapped bouquet — sunflowers, roses or blue blooms — complete with wrap, ribbon and a gold-tone ring. The sweetest bag charm and an adorable hamper add-on.",
    highlights: [
      "Tiny wrapped bouquet with ribbon",
      "Sunflower, rose or blue bloom designs",
      "Gold-tone ring and clasp",
      "Perfect hamper add-on",
    ],
    customise: "Pick flowers, wrap and ribbon colours.",
    options: { label: "Bouquet", values: ["Sunflower", "Blue blooms", "Red roses", "Mixed"] },
    occasions: ["Hampers", "Friendship Day", "Return gifts"],
    images: [
      pic("mini-bouquet-keychain-1", "Mini sunflower bouquet keychain with red ribbon"),
      pic("mini-bouquet-keychain-3", "Tiny sunflower bouquet keychain"),
      pic("mini-bouquet-keychain-2", "Mini bouquet keychains in sunflower and blue"),
      pic("mini-bouquet-keychain-4", "Blue mini bouquet keychain with pink bow"),
    ],
    video: reel("reel-keychains-colours"),
    instagram: ig("DYcYgAAvY_C", 6457),
  },
  {
    slug: "orchid-keyring",
    name: "Orchid Keyring",
    category: "keychains",
    tagline: "Delicate orchids in candy colours — packed and ready for gifting.",
    description:
      "Orchid blooms in yellow, pink, blush, lilac and sky blue on keyrings — lovely as a single gift and popular as bulk sets for events and resellers.",
    highlights: [
      "Multi-colour orchid blooms",
      "Neatly packed sets",
      "Great for resellers & events",
      "Lightweight bag charm",
    ],
    customise: "Choose colours and set sizes.",
    badges: ["Bulk friendly"],
    occasions: ["Return gifts", "Events", "Resale"],
    images: [
      pic("orchid-keyring-1", "Handmade orchid keyrings in pastel colours"),
      pic("orchid-keyring-2", "Packed set of orchid keyrings"),
    ],
    video: reel("reel-orchid-keyrings"),
    instagram: ig("DbsK3gjvCks", 3170),
  },
  {
    slug: "cake-keychains",
    name: "Cake Slice & Swiss Roll Keychains",
    category: "keychains",
    tagline: "Sweet treats that never melt. Which one are you choosing?",
    description:
      "A red-velvet cake slice with a cherry on top and a pink swiss roll — playful, squishy-looking charms for foodies, bakers and anyone with a sweet tooth.",
    highlights: ["Red-velvet cake slice design", "Pink swiss roll design", "Gold-tone ring and clasp", "Fun hamper add-on"],
    customise: "Pick your treat — or get both.",
    options: { label: "Treat", values: ["Cake slice", "Swiss roll", "Set of both"] },
    occasions: ["Birthdays", "Bakers & foodies", "Hampers"],
    images: [
      pic("cake-keychain-1", "Pink swiss roll and red velvet cake keychains"),
      pic("cake-keychain-2", "Red velvet cake slice keychain"),
      pic("cake-keychain-3", "Pink swiss roll keychain"),
    ],
    video: reel("reel-cake-keychains"),
    instagram: ig("DUBeG1dD9pd", 4114),
  },
  {
    slug: "tulip-bell-car-hanging",
    name: "Tulip Bell Car Hanging",
    category: "car-hangings",
    tagline: "Pastel tulip bells with pearls — the dreamiest car accessory (96K views!).",
    description:
      "Soft tulip bells with a flower crown, cascading blossoms and pearl strands, made to hang from your rear-view mirror. A gentle sway of colour on every drive.",
    highlights: [
      "Tulip bells with cascading blossoms",
      "Pearl hanging strands",
      "Pastel colour pairs",
      "Customisable colours",
    ],
    customise: "Choose the bell colours and pair combinations.",
    options: { label: "Colours", values: ["Pink & lilac", "All pink", "All lilac", "Custom pair"] },
    badges: ["Trending"],
    occasions: ["New car gifts", "Birthdays", "Car décor"],
    images: [
      pic("car-hanging-1", "Pink and lilac tulip bell car hanging with pearls"),
      pic("car-hanging-2", "Handmade car hanging with cascading blossoms"),
    ],
    video: reel("reel-car-hanging"),
    instagram: ig("DZNhUTtvhAx", 96752),
    bestseller: true,
  },
  {
    slug: "rose-lantern",
    name: "Glowing Rose Lantern",
    category: "gifts",
    tagline: "A deep-red rose that glows — décor by day, night light by night.",
    description:
      "A large red rose lamp with glowing rosebuds along its stem. Warm, romantic and cosy, it turns any bedside or desk into the prettiest corner of the room.",
    highlights: ["Glowing rose head & rosebuds", "Warm, cosy light", "Statement décor piece", "Romantic gift"],
    customise: "Ask about rose colours and sizes.",
    occasions: ["Anniversaries", "Valentine's Day", "Housewarming"],
    images: [
      pic("rose-lantern-1", "Glowing red rose lantern with lit rosebuds"),
      pic("rose-lantern-2", "Handmade rose lamp glowing in the dark"),
    ],
    video: reel("reel-rose-lantern"),
    instagram: ig("DS70Z8Mj-xB", 1983),
  },
  {
    slug: "flower-phone-cover",
    name: "Handmade Flower Phone Cover",
    category: "gifts",
    tagline: "A plush phone cover blooming with daisies — our newest launch.",
    description:
      "A soft, plush cover decorated with chenille daisies, a leaf and a pearl-bead strap. Tell us your phone model and favourite colours and we'll make one that's unmistakably yours.",
    highlights: ["Plush textured cover", "Chenille daisies & leaf", "Pearl-bead strap", "Made for your phone model"],
    customise: "Share your phone model, cover colour and flower colours.",
    badges: ["New"],
    occasions: ["Birthdays", "Self-gifting"],
    images: [
      pic("phone-cover-1", "Mint handmade phone cover with pink and lilac daisies"),
      pic("phone-cover-2", "Handmade flower phone cover with pearl strap"),
    ],
    video: reel("reel-phone-cover"),
    instagram: ig("DXj7KocDycN", 20758),
  },
  {
    slug: "pink-yellow-hamper",
    name: "Pink × Yellow Gift Hamper",
    category: "gifts",
    tagline: "A themed gift box of handmade blooms and charms.",
    description:
      "A curated box with a pink lily keychain, a yellow bloom, a charm bracelet and more — colour-coordinated, packed and ready to surprise. We'll happily build a hamper around any colour story or budget.",
    highlights: ["Colour-themed curation", "Handmade keychains & blooms", "Gift-ready box", "Built around your budget"],
    customise: "Pick a colour theme and tell us who it's for — we'll curate the rest.",
    options: { label: "Theme", values: ["Pink × yellow", "Lilac dream", "Red romance", "Custom"] },
    occasions: ["Birthdays", "Valentine's Day", "Bridesmaid gifts"],
    images: [
      pic("hamper-1", "Pink lily keychain from the pink and yellow gift hamper"),
      pic("hamper-2", "Yellow handmade bloom from the gift hamper"),
      pic("hamper-3", "Charm bracelet and blooms in a gift box"),
    ],
    video: reel("reel-hamper"),
    instagram: ig("DTlPirkEg7b", 2728),
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug) {
  return products.filter((p) => p.category === category);
}

export function getBestsellers() {
  const order = [
    "sunflower-bouquet",
    "mini-flower-pots",
    "flower-keychains",
    "tulip-bell-car-hanging",
    "signature-flower-basket",
    "pink-rose-bouquet",
    "lily-stems",
    "grand-garden-bouquet",
  ];
  return order.map((slug) => getProduct(slug)).filter((p): p is Product => Boolean(p));
}

export function getRelatedProducts(product: Product, limit = 4) {
  const same = products.filter((p) => p.category === product.category && p.slug !== product.slug);
  const others = products.filter((p) => p.category !== product.category && p.bestseller);
  return [...same, ...others].slice(0, limit);
}
