var cashRegister = {
    total: 0,
//insert the add method here    
    add: function (itemCost) {
        this.total += itemCost;
    },
    
    scan: function (item, count) {
        switch (item) { 
        case "eggs": 
            this.add(0.98*count); 
            break;
        
        case "milk": 
            this.add(1.23*count); 
            break;
        
        //Add other 2 items here
        case "magazine": 
            this.add(4.99*count); 
            break;
            
        case "chocolate": 
            this.add(0.45*count); 
            break;
        
        }
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggs", 2);
cashRegister.scan("magazine", 3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);