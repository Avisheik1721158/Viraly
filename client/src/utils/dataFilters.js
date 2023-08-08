const getRemainingPosts = (posts) => {
    const sortedPosts = [...posts].sort((a, b) => b.likeCount - a.likeCount);
    const remaining = sortedPosts.slice(3);
    return remaining;
}
const getTopPosts = (posts) => {
    const sortedPosts = [...posts].sort((a, b) => b.likeCount - a.likeCount);
    const topPosts = sortedPosts.slice(0, 3);
    return topPosts;
}

export {getRemainingPosts,getTopPosts }