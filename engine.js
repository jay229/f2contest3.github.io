const url = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';

// function to show menu
async function getMenu(){
    try {
        const response=await fetch(url);
        var data=await response.json();
    } catch (error) {
        console.log(error);
    }
    var food_menu=document.getElementById("food");
    data.forEach(element => {
        food_menu.innerHTML=`
            <div class="item">
                <h2>${element.name}</h2>
                <p>${element.description}</p>
                <p>${element.price}</p>
            </div>
        `;
    });
    
}
window.addEventListener('load',getMenu());

// function to take order
function takeOrder() {
    // console.log("Hello world");
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const burgerList=["Chicken Burger","Veggie Burger","Bean Burger","Wild salmon burger"];
            const order={
                burgers:[burgerList[Math.floor(Math.random()*3)],burgerList[Math.floor(Math.random()*3)],burgerList[Math.floor(Math.random()*3)]]
            }
            res(order)
        },2500)
    })
}

// function to prepare the order
function orderPrep(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({order_status:true, paid:false})
        },1500)
    })
}

// function to pay for the order
function payOrder(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({order_status:true, paid:true})

        }, 1000);
        thankyouFnc();
    })

}

function thankyouFnc(){
    alert("Thank you for eating with us today!")
}