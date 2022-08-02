const commentLenght = {
    short: 10,
    medium: 20,
    long: 100
}

const gennerateComment = (lenght) => {
    const comment = [];
    for (let i = 0; i < lenght; i++) {
        comment.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    }
    return comment.join('');
}

const randomComment = () => {
    const random = Math.floor(Math.random() * 100);
    const getLenght =
        random < 20 ? commentLenght.short : random == 20 ? commentLenght.medium : commentLenght.long;
    return gennerateComment(getLenght);
}


const randomDate = (start, end) => {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
};

const totalReview = () => {
    return Math.floor(Math.random() * 10) + 1
};

for (let i = 0; i < 5; i++) {
    const getTotalReview = totalReview();
    const Review = () => {
        review = [];
        for (let i = 0; i < getTotalReview; i++) {
            review.push({
                id: i,
                rating: Math.floor(Math.random() * 10) + 1,
                comment: randomComment(),
                createdAt: randomDate(new Date(2012, 0, 1), new Date())
            })
        }
        return review;
    };
    db.products.insert({
        name: Math.random().toString(26).substr(2, 10),
        price: Math.floor(Math.random() * 20) + 1,
        description: Math.random().toString(26).substr(2, 20),
        category: Math.random().toString(26).substr(2, 10),
        totalReview: getTotalReview,
        reviews: Review(),
        avgRating: review.reduce((acc, curr) => acc + curr.rating, 0) / getTotalReview
    },
    )
}

