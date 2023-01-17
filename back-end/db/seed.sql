\c beauty

INSERT INTO skincare (item_name, brand, product_type, price, is_clean_beauty, image, where_to_purchase) VALUES
 ("KP Bump Eraser", "First Aid Beauty", "Body Scrub", 30.00, true, "https://www.sephora.com/productimages/sku/s2233245-main-zoom.jpg?pb=2020-03-sephora-clean-2019", "https://www.sephora.com/product/kp-bump-eraser-body-scrub-with-10-aha-P444989?skuId=2233245&icid2=products%20grid:p444989:product"),
 ("Butta Drop", "Fenty Skin", "Body Moisturizer", 45.00, false, "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/ButtaDrop_200x.jpg?v=1649459839", "https://www.sephora.com/product/fenty-beauty-rihanna-butta-drop-whipped-oil-body-cream-P472162");
--  ()

INSERT INTO makeup (item_name, brand, category, price, is_vegan, image, where_to_purchase) VALUES

('Jackie Aina Palette', 'Anastasia Beverly Hills','Eyeshadow', 45.00, false, 'https://www.anastasiabeverlyhills.com/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dw26cf7b49/images/2019_ImageOptimizations/Eyes/_Palette-Jackie/EYES_PaletteRule_Jackie-open_OPTIMIZED.jpg?sw=1200&sh=1200&sm=fit','https://www.anastasiabeverlyhills.com/jackie-aina-palette/ABH01-18184.html?bvstate=pg:23/ct:r&gclid=Cj0KCQjw39uYBhCLARIsAD_SzMQshwOR6CjAt-y-usCDI6EBV2TtjNQ5DxYxW3KbEflZy2shNzFJBSYaAnyfEALw_wcB'),

('Liquid Eyeliner', 'Anastasia Beverly Hills', 'Eyeliner', 18.00, true, 'https://www.anastasiabeverlyhills.com/dw/image/v2/BBLL_PRD/on/demandware.static/-/Sites-anastasia-master-catalog/default/dwa67f17eb/images/products/2019/Fall_Launch/FA19_LIQUIDLINER12124_CAP_SHADOW_FIN_optimized.jpg?sw=1200&sh=1200&sm=fit', 'https://www.anastasiabeverlyhills.com/liquid-liner/ABH01-21422.html'),

('The Warrior II','Juvias Place', 'Eyeshadow', 20.00, false, 'https://cdn.shopify.com/s/files/1/1476/5372/products/Warrior2_181ea77f-4d93-4205-9aee-428491bdd8eb_1080x.jpg?v=1616335670', 'https://www.juviasplace.com/products/the-warrior-ll-eyeshadow-palette'),

('Bronze Duo Bronzer', 'Juvias Place', 'Bronzer', 18.00, false, 'https://cdn.shopify.com/s/files/1/1476/5372/products/bronzed_dark_clamshell_v2_1080x.jpg?v=1641478493', 'https://www.juviasplace.com/products/bronzed-duo-bronzer?variant=39312114253927'),

('Airbrush Matte Bronzer', 'Charlotte Tilbury', 'Bronzer', 56.00, true, 'https://www.temptalia.com/wp-content/uploads/2020/05/charlotte-tilbury_deep-4_001_product.jpg', 'https://www.sephora.com/product/P459144?skuId=2351203'),

('Raizin Blush', 'MAC Cosmetics', 'Blush', 28.00, false, 'https://sdcdn.io/mac/us/mac_sku_M22052_1x1_0.png?width=1080&height=1080', 'https://www.maccosmetics.com/product/13842/329/products/makeup/face/blush-bronzer/powder-blush?shade=Raizin'),

('Nightmoth Lip Pencil', 'MAC Cosmetics', 'Lipliner', 21.00, false, 'https://sdcdn.io/mac/us/mac_sku_M38058_1x1_0.png?width=1080&height=1080', 'https://www.maccosmetics.com/product/13852/340/products/makeup/lips/lip-liner/lip-pencil?shade=Nightmoth'),

('Vino Lip Pencil', 'MAC Cosmetics', 'Lipliner', 21.00, false, 'https://sdcdn.io/mac/us/mac_sku_S4W924_1x1_0.png?width=1080&height=1080', 'https://www.maccosmetics.com/product/13852/340/products/makeup/lips/lip-liner/lip-pencil?shade=Vino'),

('Killawatt Freestyle Highlighter', 'Fenty Beauty', 'Highlighter', 38.00, false, 'https://cdn.mysnapp.co.uk/images/original/59f99b16a9001.jpg', 'https://www.sephora.com/product/P64879845?skuId=1925916'),

('The Wahala 2 Palette', 'Juvias Place', 'Eyeshadow', 36.00, false, 'http://cdn.shopify.com/s/files/1/0529/4800/9113/products/20210507_024127_1200x1200.jpg?v=1620963353', 'https://www.juviasplace.com/products/wahala-2-palette');



-- took the key notes & fragrance descriptions off of each perfume page on sephora.com, fragrance net, oakcha.com

INSERT INTO perfume (item_name, brand, scent_type, key_notes, fragrance_description, price, is_long_lasting, image, where_to_purchase) VALUES

('Donna Born In Roma Eau de Parfum', 'Valentino', 'Warm Floral', 'This is a warm floral fragrance inspired by Roman street style and edgy haute couture. A trio of jasmine flowers and sparkling blackcurrant fuse with warm vanilla and rich woods to create a scent that captures the essence of modern femininity.','Blackcurrant, Jasmine Grandiflorum, Bourbon Vanilla', 138.00, true, 'http://cdn.shopify.com/s/files/1/0521/6993/2976/products/DONNABORN_1200x1200.jpg?v=1634941079', 'https://www.sephora.com/product/P449116?skuId=2249696'),

('Donna Born In Roma Yellow Dream Eau de Parfum' ,'Valentino', 'Fresh Floral', 'This long-lasting floral, musky perfume is twisted with floral notes of Turkish Rose and Peony Accord balanced by sensual white musk to create this luminous, fresh fragrance.', 'Italian Lemon, Fresh Musks, Rose Essence', 138.00, true, 'https://i.ebayimg.com/images/g/pEEAAOSwyLFg1Uro/s-l500.jpg', 'https://www.sephora.com/product/P470063?skuId=2408458'),


('REPLICA Coffee Break Eau de Toilette', 'Maison Margiela Paris', 'Warm & Sweet Gourmand', 'This perfume evokes subtle aromas of warm coffee and milk mousse accord that blend with a sweetness defined by vanilla. This fragrance is blended atop light musk while the fresh spearmint and lavender is revealed once set on the skin for a long-lasting, fresh scent that is balanced by a soft sweetness.', 'Coffee Accord, Lavender, Milk Mousse Accord', 144.00, true, 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_287,h_287/https://perfumer.co/wp-content/uploads/2022/05/211168M449007_1.jpg', 'https://www.sephora.com/product/maison-margiela-replica-coffee-break-eau-de-toilette-P461184?skuId=2361038&icid2=products%20grid:p461184:product'),


('Lextase', 'Nina Ricci', 'Warm Floral', 'Launched by the design house of Nina Ricci in 2015, this stimulating scent consists of notes of Pear, Peach and Pink Pepper as its top notes. The heart is rousing with notes from Raspberry, Rose, White Flower and Jasmine. The notes of Vanilla, Amber, Musk, Patchouli, Virginia Cedar and Caramel rule the base.', 'Pear, Peach, Pink Pepper, Amber, Vanilla', 36.00, true, 'https://m.media-amazon.com/images/I/61M+ynjWS2L._SL1500_.jpg','https://www.fragrancenet.com/perfume/nina-ricci/lextase-nina-ricci/eau-de-parfum#277998'),


('Musk Al Roos', 'Lataffa', 'Fresh Floral', 'Perfume Musk Al Aroos Eau de Parfum by Lattafa Perfumes is a refined, slightly fresh perfume with an emphasis on Ambroxan, floral notes and white musk. The top note opens fruity and delicately fresh with lemons and Ambroxan. Bright floral notes follow in the heart note and are accompanied by sandalwood and white musk. Cedar, vanilla and amber harmoniously form the concluding base of Musk Al Aroos. Musk Al Aroos is a wonderfully pure velvety-creamy fragrance full of sensuality that goes well with any occasion.', 'Lemons & Ambroxan', 24.98, false, 'https://cdn.shopify.com/s/files/1/0127/7840/5947/products/3_210d1f4c-8fe6-4f92-956e-4444684448ad.png?v=1635449691','https://www.amazon.com/Musk-Aroos-Women-EDP-velvety-creamy/dp/B09PXF2ZD8/ref=sr_1_15?crid=JSA1ELYCQ6QD&keywords=musk+al+roos&qid=1662530056&sprefix=musk+al+roos%2Caps%2C51&sr=8-15'),


('Deja Vu White Flower | 57', 'Kay Ali', 'Warn Floral', 'This fragrance is a warm, sultry-white floral, where luxurious tuberose empowers the senses with a seductive yet impressively elegant scent, while Sri Lankan Sandalwood adds sophistication.', 'Gardenia, Jasmine, Vanilla', 118.00, false, 'https://fimgs.net/mdimg/vijesti/o.13211.2.jpg', 'https://www.sephora.com/product/huda-beauty-kayali-deja-vu-white-flower-57-P455258?skuId=2373603&icid2=products%20grid:p455258:product'),


('Princess Eau de Parfum', 'Kilian Paris', 'Warm & Sweet Gourmands', 'Green Tea', 'Ginger, Green Tea, Marshmallow',120.00, false, 'https://www.sephora.com/productimages/sku/s2576072-main-zoom.jpg', 'https://www.sephora.com/product/P433937'),


('Love Dont Be Shy', 'Kilian Paris', 'Warm Florals', 'This fragrance implores you at the opening with tender orange blossom absolute. Juicy honeysuckle and plush rose are softly caressed by the sweetness of luscious marshmallow sugar accord, satisfying the craving pang of new love. A warm amber base lends a touch of sensuality.', 'Orange blossom, Vanilla Absolute, Luscious Marshmallow', 265.00, true, 'https://m.bykilian.com/media/images/products/833x968/kl_sku_N3E601_833x968_4.jpg', 'https://www.sephora.com/product/P429621'),


('Ani', 'Nishane', 'Spicy Woody Vanilla', 'Launched in 2019 by the design house of Nishane, this composition opens with top notes from Green notes, Bergamot, Pink Pepper and Ginger. The enticing heart features notes from Turkish Rose, Cardamom and Black Currant. The fragrance draws to a close with seductive hints from Sandalwood, Benzoin, Cedar, Ambergris, Musk and Patchouli.', 'Bergamot, Green notes, Blue Ginger, Pink Pepper',235.00, true, 'https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_790/01/nm_4181748_100000_b', 'https://www.bloomingdales.com/shop/product/nishane-ani-extrait-de-parfum?ID=4241294'),


('Night in Cannes', 'Oakcha', 'Refreshing Lavender', 'Cannes always inspired the best in you and the spirit of the people made you want to stay one night more. City lights twinkle over the dark sky, and the refreshing smells of lavender, mint and cherry seep into your skin as the evening goes by. As you walk through the streets, the palm trees release hints of bergamot and praline and you know this will be a night in Cannes to remember.', 'Lavender, Mint and Bergamot', 39.95, true, 'https://cdn.shopify.com/s/files/1/0246/7666/3358/products/NIGHT-2_1000x.png?v=1660352784','https://www.oakcha.com/products/night-in-cannes?currency=USD&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&gclid=Cj0KCQjw39uYBhCLARIsAD_SzMTEU9bZh3RkL5DoMj4uYnst23PDS1YJfqkP3buMkGSXD83__V5VZW8aApqbEALw_wcB');