const FirstComponent = (props)=>{
    console.log(props);

    const {title, person, hobbies, componentExample} = props;
    return(

        <>
        <div>{title}</div>
        <div>Hello {person.name} who is {person.age} years old.</div>
        <div>
            <ul>

            {hobbies.map((hobby, index)=>{
               return <li key={index}>{hobby}</li>;
            })}
            </ul>
        </div>
        {componentExample}
        
        
        </>
        
    )
}
export default FirstComponent;