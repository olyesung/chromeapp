const quotes = [
    {
        quote: "천재는 지구가 절대로 길들일 수 없는 전기같은 힘을 가졌다",
        author: "Lydia M. Child",
    },
    {
        quote: "모든 사람은 천재성을 갖고 태어나지만, 대부분의 사람은 그것을 단지 몇분간만 유지한다.",
        author: "Edgard Varese",
    },
    {
        quote: "자존심은 강력한 마약이지만, 자가면역 체계에는 별 도움이 되지 않는다.",
        author: "Stuart Stevens",
    },
    {
        quote: "천재란 자신에게 주어진 일을 하는 재능 있는 사람일 뿐이다.",
        author: "Thomas A. Edison",
    },
    {
        quote: "범인은 자신보다 뛰어난 사람을 알아보지 못하지만 재능을 가진 사람은 천재를 즉시 알아본다.",
        author: "Sir Arthur Conan Doyle",
    },
    {
        quote: "모욕 당하는 방법은 그것에 굴복하는 것이다. 사람은 요구하는 만큼만 존중을 받게 된다.",
        author: "William Hazlitt",
    },
    {
        quote: "할 수 있는 일을 해낸다면, 우리 자신이 가장 놀라게 될 것이다.",
        author: "Thomas A. Edison",
    },
    {
        quote: "인간에게는 의식적인 노력으로 자신의 삶을 높일 능력이 분명히 있다는 것보다 더 용기를 주는 사실은 없다.",
        author: "Henry David Thoreau",
    },
    {
        quote: "우리가 사람을 대할 때, 논리의 동물을 대하고 있지 않다는 점을 기억할 일이다. 우리는 감정의 동물, 편견으로 마음이 분주하고 자존심과 허영에 따라 움직이는 동물과 상대하고 있는 것이다.",
        author: "Dale Carnegie",
    },
    {
        quote: "자신의 본성이 어떤 것이든 그에 충실 하라. 자신이 가진 재능의 끈을 놓아버리지 마라. 본성이 이끄는 대로 따르면 성공할 것이다.",
        author: "Sydney Smith",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;