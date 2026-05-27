export const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://picsum.photos/400/300?random=1',
    description: 'Explore the latest in consumer electronics, smartphones, and accessories.',
    priceRange: '$10 - $2000',
    products: [
      {
        id: 'smartphone-x',
        name: 'Smartphone X Pro - 5G, 128GB, Phantom Black',
        price: '899.00',
        currency: 'USD',
        unit: 'Piece',
        gst: '18%',
        minPackSize: 1,
        inStock: true,
        image: 'https://picsum.photos/600/600?random=101',
        thumbnails: [
          'https://picsum.photos/100/100?random=101',
          'https://picsum.photos/100/100?random=102',
          'https://picsum.photos/100/100?random=103',
          'https://picsum.photos/100/100?random=104'
        ],
        description: 'The latest flagship smartphone featuring a stunning OLED display, pro-grade camera system, and all-day battery life.',
        specifications: {
          'Brand': 'TechTronic',
          'Model Name': 'X Pro',
          'Network': '5G Supported',
          'Screen Size': '6.7 Inches',
          'RAM': '8 GB',
          'Storage': '128 GB'
        },
        features: [
          '6.7" OLED Display',
          '128GB/256GB/512GB Storage',
          '50MP Triple Camera System',
          '5G Capable',
          'Water and Dust Resistant (IP68)'
        ],
        seller: {
          companyName: 'TechTronic Global',
          gstNumber: '07AAJCS1234D1Z5',
          rating: '4.8',
          location: 'New Delhi, Delhi',
          managingDirector: 'Rohan Sharma',
          address: '101, Tech Park, Okhla Industrial Estate, Phase 3, New Delhi, 110020, India'
        }
      },
      {
        id: 'wireless-earbuds-z',
        name: 'Wireless Earbuds Z with Active Noise Cancellation',
        price: '149.00',
        currency: 'USD',
        unit: 'Pair',
        gst: '18%',
        minPackSize: 5,
        inStock: true,
        image: 'https://picsum.photos/600/600?random=105',
        thumbnails: [
          'https://picsum.photos/100/100?random=105',
          'https://picsum.photos/100/100?random=106',
          'https://picsum.photos/100/100?random=107'
        ],
        description: 'Active noise cancelling wireless earbuds with high-fidelity sound and comfortable fit.',
        specifications: {
          'Color': 'Matte Black',
          'Connectivity': 'Bluetooth 5.2',
          'Battery Life': 'Up to 24 Hours',
          'Water Resistance': 'IPX4'
        },
        features: [
          'Active Noise Cancellation',
          'Up to 24 hours battery life with case',
          'Customizable EQ',
          'Sweat and water resistant'
        ],
        seller: {
          companyName: 'AudioMakers Inc',
          gstNumber: '29AAKCA4567F1Z3',
          rating: '4.5',
          location: 'Bengaluru, Karnataka',
          managingDirector: 'Priya Patel',
          address: '45, Audio Street, Koramangala, Bengaluru, 560034, India'
        }
      }
    ]
  },
  {
    id: 'fashion',
    name: 'Menswear',
    image: 'https://picsum.photos/400/300?random=3',
    description: 'Trendy and comfortable clothing for men, women, and kids.',
    priceRange: '$15 - $200',
    products: [
      {
        id: 'gents-kurta',
        name: 'Multi Color Festive Wear Mens Vol 2 Designer Kurta Payjama Mens Wear Catalog Collection',
        price: '1312.00',
        currency: 'INR',
        unit: 'Piece',
        gst: '0%',
        minPackSize: 46,
        inStock: true,
        image: 'https://picsum.photos/600/800?random=301',
        thumbnails: [
          'https://picsum.photos/100/150?random=301',
          'https://picsum.photos/100/150?random=302',
          'https://picsum.photos/100/150?random=303',
          'https://picsum.photos/100/150?random=304',
          'https://picsum.photos/100/150?random=305'
        ],
        description: 'A timeless festive wear kurta crafted from premium materials. Perfect for any traditional occasion.',
        specifications: {
          'Style': 'Trendy',
          'Technics': 'Printed',
          'Feature': 'Dry Cleaning, Washable',
          'Color': 'Multi color',
          'Material': 'Silk'
        },
        features: [
          'Premium Silk Blend',
          'Comfortable Fit',
          'Elegant Design',
          'Traditional Styling'
        ],
        seller: {
          companyName: 'Exim Connect Inc',
          gstNumber: '24AAHFE4684P1ZU',
          rating: '4',
          location: 'Surat, Gujarat',
          managingDirector: 'Mr H A Patel',
          address: '604, APMC Building, Krushi Bazar, Sahara Darwaja, Ring Road, Surat, Gujarat, 395002, India'
        }
      }
    ]
  }
];
