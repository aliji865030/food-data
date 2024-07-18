const express =require("express")
const cors=require("cors")

app.use(cors())

const data = [
    {
    "id": 4643,
    "category": "coffee",
    "name": "Starbucks Coffee Variety Pack, 100% Arabica",
    "image": "https://imgmedia.lbb.in/media/2020/03/5e6667ebdbd2496a507ab575_1583769579388.jpg"
    },
    {
    "id": 4646,
    "category": "coffee",
    "name": "Ethical Bean Medium Dark Roast, Espresso",
    "image": "https://cdn.shopify.com/s/files/1/0838/4525/files/Medium_Roast_1024x1024.jpg?v=1689240470"
    },
    {
    "id": 4641,
    "category": "coffee",
    "name": "Don Francisco Colombia Supremo Medium Roast",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Gn79sxSy55oXqOoR9b6jksk5vCNebwCkTg&s"
    },
    {
    "id": 1225,
    "category": "fresh-produce",
    "name": "1/2 in. Brushless Hammer Drill",
    "image": "https://www.realsimple.com/thmb/g1CUB42VFiAlQ2QttpemMuQuFGg=/fit-in/1500x3198/filters:no_upscale():max_bytes(150000):strip_icc()/rsp-product-skil-power-core-12-dl529002-dburreson-6-cab75aea9d99480a87c7fa28dfc31ef3.jpg"
    },
    {
    "id": 3674,
    "category": "fresh-produce",
    "name": "20V Max Cordless Drill Combo Kit",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGI3CiaIEiki-BzEQTMNgxyTukDp2u_ZhVdw&s"
    },
    {
    "id": 2585,
    "category": "fresh-produce",
    "name": "Green Cabbage Organic",
    "image": "https://img.lovepik.com/photo/20230421/medium/lovepik-raw-cabbage-on-wooden-background-photo-image_352292212.jpg"
    },
    {
    "id": 5851,
    "category": "fresh-produce",
    "name": "Cucumber Organic",
    "image": "https://cdn.pixabay.com/photo/2023/06/05/01/04/cucumber-8041166_640.jpg"
    },
    {
    "id": 8739,
    "category": "fresh-produce",
    "name": "Fresh Spinach Organic",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nKkxsn81pUPZP2OMt57Udpq_4C6KQ-pYwA&s"
    },
    {
    "id": 2177,
    "category": "meat-seafood",
    "name": "Cosco Three Step Steel Platform",
    "image": "https://content.oppictures.com/Master_Images/Master_Variants/Variant_1500/116416.JPG"
    },
    {
    "id": 1709,
    "category": "meat-seafood",
    "name": "Beef Choice Angus Ribeye Steak",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqrCw3zTP4wi6idPkcDh8OPR7dmeeRAe2fg&s"
    },
    {
    "id": 1709,
    "category": "meat-seafood",
    "name": "Angus Steak Burgers",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUhsP1lFeHQe6llFsXs_VDN997ekyRoZjAw&s"
    },
    {
    "id": 7395,
    "category": "meat-seafood",
    "name": "Boneless Skinless Chicken Breasts",
    "image": true
    },
    {
    "id": 8554,
    "category": "candy",
    "name": "Kinder Joy Eggs",
    "image": "https://i.ytimg.com/vi/m-tku4cacGI/sddefault.jpg"
    },
    {
    "id": 6483,
    "category": "candy",
    "name": "Cadbury Milk Chocolate",
    "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/307221007/MK/QI/MB/13226643/whatsapp-image-2022-04-07-at-5-26-08-pm.jpeg"
    },
    {
    "id": 5774,
    "category": "candy",
    "name": "HERSHEY'S, Milk Chocolate Almond",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJu3aFMF7hXoosUsga4ma_lTr37CCpEAZeA&s"
    },
    {
    "id": 8753,
    "category": "dairy",
    "name": "Reduced Fat Milk",
    "image": "https://static.toiimg.com/photo/67975826.cms"
    },
    {
    "id": 9482,
    "category": "dairy",
    "name": "Whole Milk",
    "image": "https://images.unsplash.com/photo-1634141510639-d691d86f47be?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwxMHx8bWlsa3xlbnwwfHx8fDE2OTIyNjAxODB8MA&ixlib=rb-4.0.3&fm=jpg&w=4000&h=5000&fit=max"
    },
    {
    "id": 5477,
    "category": "dairy",
    "name": "Cream Cheese",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJt68GDU2ZRsX1ftENyI_UawvUXMoeGVvYiQ&s"
    },
    {
    "id": 5478,
    "category": "dairy",
    "name": "Low Fat Vanilla Yogurt",
    "image": "https://thumbs.dreamstime.com/b/healthy-low-fat-frozen-yoghurt-parfait-twirl-topped-sprinkles-served-white-plastic-takeaway-tub-old-rustic-39433221.jpg"
    },
    {
    "id": 4875,
    "category": "bread-bakery",
    "name": "White Bread",
    "image": "https://i.pinimg.com/originals/6f/5f/53/6f5f5332cd54ba419022a4882935dbd5.png"
    }
    ]

const app=express()

app.get("/api/data",(req,res)=>{
    res.json({
        success:true,
        message:data
    })
})

app.listen(4000,()=>console.log("app is up and runing on port number 4000"))