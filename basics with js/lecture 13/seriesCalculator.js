function seriesCalculator(input) {
    let name = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let duration = Number(input[3]);

    let adverts = duration * 0.2
    let additionalTime = seasons * 10

    let totalTime = seasons * episodes * (duration + adverts) + additionalTime
    console.log(`Total time needed to watch the ${name} series is ${Math.floor(totalTime)} minutes.`);

}
seriesCalculator(["Lucifer",
"3",
"18",
"55"])