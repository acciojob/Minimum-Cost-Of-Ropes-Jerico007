function calculateMinCost() {
  //your code here
    let values = document.getElementById("rope-lengths");
	 let arr =  values.value;
	 arr =  arr.split(",");
	 for(let i = 0; i < arr.length ;  i ++)
		 {
			 arr[i]  = parseInt(arr[i]);
		 }
	
	let result =  document.getElementById("result");
	
  let finalAns = 0;
    arr.sort((a,b)  =>  {return  a-b;})
	while(arr.length  > 1)
	{
    let sum = arr[0]+arr[1];
    finalAns += sum;
    arr.splice(0,2);
    arr.push(sum);
    arr.sort((a,b)  =>  {return  a-b;})
	}
	result.innerText  = finalAns;

}  
