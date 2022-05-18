/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */

const sortBy = arg => {
    const result = arg.sort((a, b) => {
        return b.score - a.score;
    });
    return result;
};

const solution = (K, user_scores) => {
    let scoreBoard = [];
    let result = 0;

    if (K <= 0) {
        return result;
    }
    if (user_scores.length <= 0 || user_scores.length >= 1000) {
        return result;
    }

    const userScoreList = [];
    user_scores.forEach(item => {
        const strSplit = item.split(' ');
        const obj = { nickName: strSplit[0], score: strSplit[1] };
        userScoreList.push(obj);
    });

    userScoreList.forEach(item => {
        scoreBoard.push(item);
        const acc = scoreBoard.slice(0, K);
        const curr = sortBy(scoreBoard.slice(0, K));
        console.log(acc);

        if (scoreBoard.length >= K && JSON.stringify(acc) !== JSON.stringify(curr)) {
            result += 1;
        }
    });

    return result;
};

console.log(
    solution(3, ['alex111 100', 'cheries2 200', 'coco 150', 'luna 100', 'alex111 120', 'coco 300', 'cheries2 110'])
);
