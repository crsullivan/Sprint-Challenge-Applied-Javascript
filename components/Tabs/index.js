// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


    axios.get  (`https://lambda-times-backend.herokuapp.com/topics`)
        .then (data => {
        const datas = newData(data.data)
        const topics = document.querySelector('.topics')
        // topics.appendChild(datas)
        console.log(data)
        
    })
    try {
    
    } catch (error) {
    document.querySelector('.topics').textContent = 'Retrieval Error Detected, Commencing Motherboard Combustion.'
    }




const newData = (data) => {

    
    const topics = document.querySelector('.topics')
    
    
    const tabs = document.querySelector('.tabs');  
    
    
    //Elements

    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    const tab4 = document.createElement('div');
    const tab5 = document.createElement('div');
    const tab6 = document.createElement('div');
    
    //Class

    topics.appendChild(tab1);
    tab1.classList.add('tab');
    tab1.textContent = `All`;

    topics.appendChild(tab2);
    tab2.classList.add('tab');
    tab2.textContent = data.topics[0];
    
    topics.appendChild(tab3);
    tab3.classList.add('tab');
    tab3.textContent = data.topics[1];
    
    topics.appendChild(tab4);
    tab4.classList.add('tab');
    tab4.textContent = data.topics[2];

    topics.appendChild(tab5);
    tab5.classList.add('tab');
    tab5.textContent = data.topics[3];

    topics.appendChild(tab6);
    tab6.classList.add('tab');
    tab6.textContent = data.topics[4];

    
    return topics;

}

