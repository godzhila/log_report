//declare the input file in the exact format
var contents = `
01-01-2012 01:13:36 Blah blah : blah CustomerId:1234 downloaded

Blah Size:5432 bytes Carrier:Company-A

01-01-2012 01:13:45 Blah blah : blah CustomerId:41444 downloaded

Blah Size:38655 bytes Carrier:Company-S

01-01-2012 01:13:47 Blah blah : blah CustomerId:12334 downloaded

Blah Size:25632 bytes Carrier:Company-A

01-01-2012 01:13:50 Blah blah : blah CustomerId:41444 downloaded

Blah Size:7213 bytes Carrier:Company-S

01-01-2012 01:13:58 Blah blah : blah CustomerId:553155 downloaded

Blah Size:70100 bytes Carrier:Company-v`;

//01-01-2012 01:13:36 Blah blah : blah CustomerId:1234 downloaded Blah Size:5432 bytes Carrier:Company-A 01-01-2012 01:13:45 Blah blah : blah CustomerId:41444 downloaded Blah Size:38655 bytes Carrier:Company-S 01-01-2012 01:13:47 Blah blah : blah CustomerId:12334 downloaded Blah Size:25632 bytes Carrier:Company-A 01-01-2012 01:13:50 Blah blah : blah CustomerId:41444 downloaded Blah Size:7213 bytes Carrier:Company-S 01-01-2012 01:13:58 Blah blah : blah CustomerId:553155 downloaded Blah Size:70100 bytes Carrier:Company-V

var clientInfo = new Map();

//declare the Regular Expression to extract customer data
var regexp = /CustomerId:(\d*).*?\n*?.*?Size:(\d*)/gm;
var array = [...contents.matchAll(regexp)];

for(var i = 0; i < array.length; i++ )
{
  key_exists(array[i][1], array[i][2]);
}

//function to check if the customer already exists
function key_exists(ID, bytes)
{
	if(clientInfo.has(ID))
	{
		clientInfo.set(ID, parseInt(clientInfo.get(ID)) + parseInt(bytes));
	}
	else
	{
		clientInfo.set(ID, bytes);
	}
}

//Format to print to console
for (var [clientID, clientByte] of clientInfo) 
{
  console.log("CustomerID " + clientID +' has downloaded ' + clientByte + " Bytes");
}