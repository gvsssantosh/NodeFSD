// Assignment-3
// ~~~~~~~~~~~~
// 	--> Create a node program to process flight details using Map collections. 
	
// 		a.  need to store the details :		flight numbers and corresponding details :   source, destination, date, time 
// 		b.  take a variable that holds the flight number and  find the status of the flight. 

// 		Eg:      input variable hold the flight number:  'AR456' 
// 					Output :   The Flight AR456 is leaving at 18.00 from Hyderabad to Bangalore 
					
				 
// 					Hint :  If flight already left, display the corresponding message
// 								If invalid flight, display the corresponding message. 
const flightMap = new Map();
flightMap.set("AR456",["delhi","mumbai","24-03-2024","12:10:53"]);
flightMap.set("AR458",["delhi","hyderabad","25-03-2024","22:10:53"]);
flightMap.set("AR460",["delhi","hyderabad","10-04-2024","22:10:53"]);
// console.log(flightMap.get("AR456"));

exports.mapFlightinfo =function(flightItem){
    let res=flightMap.get(flightItem);
    if(res==undefined){
        console.log("wrong flight number");
    }
    else{
        console.log(`flight number ${flightItem} from ${res[0]} to ${res[1]} is scheduled to depart on ${res[2]} at ${res[3]} `);
    }
    
}
exports.mapFlightStatus = function(flightItem,currdate,currtime){
    let res=flightMap.get(flightItem);
    if(res==undefined){
        console.log("wrong flight number");
        return;
    }
    else{
        if(res[2]<=currdate || res[3]<=currtime){
            console.log("flight already left");
        }
        console.log(`flight number ${flightItem} from ${res[0]} to ${res[1]} is scheduled to depart on ${res[2]} at ${res[3]} `);
    }
    

}
