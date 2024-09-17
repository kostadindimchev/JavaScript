function solution(command) {
  const commands = {
    upvote: () => this.upvotes++,
    downvote: () => this.downvotes++,
    score: () => {
      const upVotes = this.upvotes;
      const downVotes = this.downvotes;
      const totalVotes = upVotes + downVotes;
      const balance = upVotes - downVotes;
      const inflatedNum = Math.ceil(Math.max(upVotes, downVotes) * 0.25);
      let rating = "new";

      if (upVotes > totalVotes * 0.66 && totalVotes >= 10) {
        rating = "hot";
      } else if (balance >= 0 && totalVotes > 100) {
        rating = "controversial";
      } else if (balance < 0 && totalVotes >= 10) {
        rating = "unpopular";
      }

      return totalVotes > 50
        ? [upVotes + inflatedNum, downVotes + inflatedNum, balance, rating]
        : [upVotes, downVotes, balance, rating];
    },
  };

  return commands[command]();
}

let post = {
  id: "3",
  author: "emil",
  content: "wazaaaaa",
  upvotes: 100,
  downvotes: 100,
};
solution.call(post, "upvote");
solution.call(post, "downvote");
console.log(solution.call(post, "score")); // [127, 127, 0, 'controversial']
