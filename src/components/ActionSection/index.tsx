export const ActionSection = () => {
    return (
    <div> 
        <input type='text'></input>
        <select name='day' id='day'>
            <option value='sunday'>Sunday</option>
            <option value='monday'>Monday</option>
            <option value='tuesday'>Tuesday</option>
            <option value='wednesday'>Wednesday</option>
            <option value='thursday'>Thursday</option>
            <option value='friday'>Friday</option>
            <option value='saturday'>Saturday</option>
          
        </select>
        <select name='hours'>
            <option value='10:00'>10:00</option>
        </select>
        <button>+ Add to calendar</button>
        <button>- Delete all</button>
    </div>
    )
}