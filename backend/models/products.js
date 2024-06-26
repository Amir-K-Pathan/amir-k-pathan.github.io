const productsData = [
  {
    id: '33',
    colors: ['Blue', 'White', 'Black'],
    name: 'Syltherine Sofa',
    price: 2345,
    imageSrc: 'syltherine-sofa.webp',
    imageSrcAlt: 'stylish sofa',
    description: 'A comfortable and stylish sofa.',
  },
  {
    id: '34',
    colors: ['Grey'],
    name: 'Modern Coffee Table',
    price: 799,
    imageSrc: 'image-2.png',
    imageSrcAlt: 'coffee-table.webp',
    description: 'A sleek and functional coffee table for your living room.',
  },
  {
    id: '35',
    colors: ['Beige', 'Brown'],
    name: 'Dining Chair Set (4 chairs)',
    price: 499,
    imageSrc: 'KeiraChampVelvetDiningChairLoneFront.webp',
    imageSrcAlt: 'dining chair',
    description: 'A set of four comfortable and stylish dining chairs.',
  },
  {
    id: '36',
    colors: ['White', 'Black'],
    name: 'Minimalist Floor Lamp',
    price: 199,
    imageSrc: 'Tilson+166cm+Tripod+Floor+Lamp.webp',
    imageSrcAlt: 'floor lamp',
    description: 'A modern floor lamp to add style and light to your room.',
  },
  {
    id: '37',
    colors: ['Natural Wood'],
    name: 'Queen Size Bed Frame',
    price: 999,
    imageSrc:
      'Bone_20Image_2001_20-_20Bed_2002_20King_20High_20Front_20View.webp',
    imageSrcAlt: 'bed frame',
    description:
      "A sturdy and stylish bed frame for a comfortable night's sleep.",
  },
  {
    id: '53',
    colors: ['Black', 'Grey'],
    name: 'Outdoor Patio Set (2 chairs & 1 table)',
    price: 399,
    imageSrc: 'MG_5491.webp',
    imageSrcAlt: 'outdoor patio',
    description:
      'A comfortable and stylish outdoor patio set for relaxing in the sun.',
  },
  {
    id: '38',
    colors: ['White', 'Black', 'Woodgrain'],
    name: 'Modern Bookshelf',
    price: 299,
    imageSrc: 'Jago+173cm+H+x+120cm+W+Geometric+Bookcase.webp',
    imageSrcAlt: 'bookshelf',
    description:
      'A stylish and functional bookshelf to organize your books and decorations.',
  },
  {
    id: '39',
    colors: ['Grey', 'Beige'],
    name: 'Comfortable Office Chair',
    price: 349,
    imageSrc: 'Herman-Miller-Aeron-2-PhotoRoom-1-1024x679.webp',
    imageSrcAlt: 'office chair',
    description: 'An ergonomic and comfortable office chair for long workdays.',
  },
  {
    id: '40',
    colors: ['Multicolor'],
    name: 'Area Rug (various sizes)',
    price: 149,
    imageSrc: 'Abstract+Machine+Woven+Area+Rug.webp',
    imageSrcAlt: 'area rug',
    description: 'A stylish area rug to add warmth and comfort to your floors.',
  },
  {
    id: '41',
    colors: ['Black', 'Chrome'],
    name: 'Modern Barstool (set of 2)',
    price: 249,
    imageSrc: 'Paynter+Swivel+Adjustable+Height+Stool.webp',
    imageSrcAlt: 'barstool',
    description:
      'Stylish and comfortable barstools for your kitchen counter or bar area.',
  },
  {
    id: '42',
    colors: ['White', 'Grey'],
    name: 'Nightstand',
    price: 179,
    imageSrc: 'BSD-105-TAUPE_main_600x.jpg',
    imageSrcAlt: 'night stand',
    description: 'A bedside table to keep your essentials within reach.',
  },
  {
    id: '43',
    colors: ['Natural Wood'],
    name: 'Wooden Dining Table',
    price: 599,
    imageSrc: 't161-bla3-starburst-industrial-oak-1.6m-dining-table-1.jpg',
    imageSrcAlt: 'dining table',
    description: 'A sturdy and stylish dining table for your dining room.',
  },
  {
    id: '44',
    colors: ['Black', 'Grey'],
    name: 'Media Console',
    price: 429,
    imageSrc: 'e._media_unit_main.jpg',
    imageSrcAlt: 'mediaconsole',
    description:
      'A stylish console to hold your TV, electronics, and media devices.',
  },
  {
    id: '45',
    colors: ['Beige', 'Grey'],
    name: 'Recliner Chair',
    price: 699,
    imageSrc: 'Chairbg_5a4f6348-5ec6-4294-bf5b-5498a97c97cf_799x598.webp',
    imageSrcAlt: 'recliner chair',
    description: 'A comfortable recliner chair for relaxing and watching TV.',
  },
  {
    id: '46',
    colors: ['White', 'Black'],
    name: 'Modern Dresser',
    price: 499,
    imageSrc: 'image-1.png',
    imageSrcAlt: 'bridstow_grey_large_dresser_solid_stamp.webp',
    description:
      'A stylish and functional dresser for your bedroom storage needs.',
  },
  {
    id: '47',
    colors: ['Multicolor'],
    name: 'Decorative Throw Pillows (set of 2)',
    price: 39,
    imageSrc: 'Apex+Crushed+Velvet+Cushion+Cover+Set.webp',
    imageSrcAlt: 'throw pillows',
    description: 'Add a touch of style and comfort to your sofa or bed.',
  },
];

exports.all = () => productsData;

exports.findById = (id) => productsData.find((product) => product.id === id);
