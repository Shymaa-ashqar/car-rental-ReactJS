import React, {useState, useEffect, useNavigate} from 'react'
import { useParams } from 'react-router-dom';


function BookingForm() {

    

    // let {ida} = useParams(id);
    let ida = 4;

    if(!localStorage.getItem("reservations"))
    localStorage.setItem("reservations",JSON.stringify([]));





    //****************** Start Date*******************//
    //Min and default//
        let lcl = JSON.parse(localStorage.getItem("reservations"));
        let found;
        let starting;
        let indx;
        let hrs
        for(let i in lcl)
           if(lcl[i].id == ida)
            {
                indx = i;
                let starting1 = (new Date(lcl[i].end));
                let mid = starting1.getDate()
                starting1.setDate(mid+1)
                console.log(starting1);
                let start = starting1.toISOString()
                starting = start.substring(0,10)
                found = true;
            
            }  

    let today = new Date();
    const start = today.toISOString();
    const valueCut1 = start.substring(0,10);
    const [valueCut, setValueCut] = useState(found?starting:valueCut1);
    
    // Max //
    let todayMax = new Date();
    let maxStartDate = todayMax.getDate();
    todayMax.setDate(maxStartDate+45);
    const maxStartString = todayMax.toISOString();
    const maxStartCut = maxStartString.substring(0,16);
    
    //****************** End Date*****************//
    //Min and default//

    let minEndDate = new Date(valueCut);
    let date = minEndDate.getDate();
    minEndDate.setDate(date+7);
    let minEndString = minEndDate.toISOString();
    let minEndCut = minEndString.substring(0,10);
    const [valueCut2, setValueCut2] = useState(null);

    useEffect(()=>{
        setValueCut2(minEndCut)
    },
    [valueCut]
    )
    
    const handleDateChange = (e) =>{
        setValueCut(e.target.value)
    }
    const handleDateChange2 = (e) =>{
        setValueCut2(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const navigate = useNavigate();
            let lclArr = JSON.parse(localStorage.getItem("reservations"));
            console.log(lclArr);
        let reservation = {
            id : 4,
            fname : e.target.fname.value,
            lname : e.target.lname.value,
            email : e.target.mail.value,
            tel : e.target.tel.value,
            start : valueCut,
            end : valueCut2,
            hour : e.target.hours.value
        }
        lclArr.push(reservation);
        console.log(reservation);
        localStorage.setItem("reservations",JSON.stringify(lclArr));
        // navigate('/listingcars');
    }

    console.log()


    return (
        <div className="container">
            <form className="form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="textsCont">
                    <div className='texts' id="texts1">
                        <input required placeholder='First Name' type="text" name="fname" id="fname" />
                        <input required placeholder='Last Name' type="text" name="lname" id="lname" />
                    </div>
                    <div className='texts' id="texts2">
                        <input required placeholder='Email' type="email" name="mail" id="mail" />
                        <input required placeholder='Mobile Number' type="tel" name="tel" id="tel" />
                    </div>
                </div>
            <div className="dates">
            {found&&
            <>
                <h3>You already have a reservation from {lcl[indx].start} to {lcl[indx].end}</h3>
            </>
                }
                <input onChange={(e)=>handleDateChange(e)} value={valueCut} type="date"  name="start" min={found?starting:valueCut1}/>
                <input onChange={(e)=>handleDateChange2(e)} value={valueCut2} type="date"  name="end"/>
                <input required type="time" name="hours" />


            </div>
            <div className="total">
                <p className="state">{((new Date(valueCut2)).getTime() - (new Date(valueCut)).getTime())/86400000} Days</p>
                <p>Total : JOD</p>

            </div>
            <div className="submit">
                <input type="submit" value="Book Now !"/>
            </div>
                    


            </form>
        </div>
    )
}

export default BookingForm
