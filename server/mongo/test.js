// 3 product có nhiều review nhất
db = db.getSiblingDB("test");
db.getCollection("products").aggregate(
    [
        {
            "$sort": {
                "totalReview": -1.0
            }
        },
        {
            "$limit": 3.0
        }
    ],
    {
        "allowDiskUse": false
    }
);
// 3 product rating cao nhất
db = db.getSiblingDB("test");
db.getCollection("products").aggregate(
    [
        {
            "$sort": {
                "avgRating": -1.0
            }
        },
        {
            "$limit": 3.0
        }
    ],
    {
        "allowDiskUse": false
    }
);
//review cũ nhất
db = db.getSiblingDB("test");
db.getCollection("products").aggregate(
    [
        { "$unwind": "$reviews" },
        {
            "$sort": {
                "reviews.createdAt": 1
            }
        },
        { "$limit": 1 },
        { "$project": { reviews: 1 } }
    ],
    {
        "allowDiskUse": false
    }
);
// 3 review mới nhất
db = db.getSiblingDB("test");
db.getCollection("products").aggregate(
    [
        { "$unwind": "$reviews" },
        {
            "$sort": {
                "reviews.createdAt": -1
            }
        },
        { "$limit": 3 },
        { "$project": { reviews: 1 } }
    ],
    {
        "allowDiskUse": false
    }
);
// nhiều review nhất, rating thấp nhất
db = db.getSiblingDB("test");
db.getCollection("products").aggregate(
    [
        {
            "$sort": {
                "totalReview": -1.0,
                "avgRating": 1.0
            }
        },
        {
            "$limit": 1.0
        }
    ],
    {
        "allowDiskUse": false
    }
);
// nhiều review nhất, comment trên 20 ký tự
