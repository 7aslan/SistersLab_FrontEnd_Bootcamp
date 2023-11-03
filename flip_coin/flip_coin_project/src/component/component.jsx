const Component = (props)=>{
    console.log(props);
    const {title, person, text, number} = props;

    return(

        <>
            <div>{title}</div>
            <div>
                <ul>
                    {person.map((name,index)=>{
                        return <li key ={index}>{name}</li>
                    })}
                </ul>
                <div>
                    <p>{text}</p>
                </div>
                <div>{number}</div>
            </div>
        
        </>
    )
}

export default Component;