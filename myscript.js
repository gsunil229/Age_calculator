const calculateAge=()=>{
    let date=document.getElementById("date_field").value;
    let month=document.getElementById("month_field").value;
    let year=document.getElementById("year_field").value;

    if(date>31)
    {
        alert("Input Valid Date");
        return;
    }

    let dob=new Date(`${date} ${month} ${year}`);
    let now=new Date();
    let yy=now.getFullYear();
    
    if(year>yy)
    {
        alert(`Enter less than ${yy} year`);
        return;
    }
    let differenece=now-dob;
    let days=Math.floor((differenece)/(1000*60*60*24));
    alert(`Your age is:${days} days`)
    console.log(dob);

}