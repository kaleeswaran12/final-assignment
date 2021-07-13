let cards=[
    {
        image:"https://i.pinimg.com/236x/c0/37/2f/c0372feb0069e6289eb938b219e0b0a1.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/c0/37/2f/c0372feb0069e6289eb938b219e0b0a1.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/65/62/f0/6562f0b25f69939bc0a655a3e9e48df4.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/65/62/f0/6562f0b25f69939bc0a655a3e9e48df4.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/3b/04/79/3b04799a4451dbbce98cfc8fdcf291ee.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/3b/04/79/3b04799a4451dbbce98cfc8fdcf291ee.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/b0/9d/d8/b09dd80112a56dd8743a69008c9e3a78.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/b0/9d/d8/b09dd80112a56dd8743a69008c9e3a78.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/0a/66/5a/0a665a4d4bd5a3f68b0fe8b3ed5af435.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/0a/66/5a/0a665a4d4bd5a3f68b0fe8b3ed5af435.jpg",
        value:5,
        status:"closed"
    },
       
]

console.log(cards);
let temp;
for(let i=cards.length-1;i>=0;i--) {
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;

function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
       
           <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status}" onclick="openCard(${index})"></div>
           </div>
       
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCard(index){
   console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerHTML=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else {
            alert("Game Over!!");
            location.reload();
        }
    }

    displayCards(cards);
}

