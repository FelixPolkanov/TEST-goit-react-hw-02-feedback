

const Section = ({ title, children }) => {
    
    return (
        <div>
            {title && <p> {title}</p>}
     {children}
    </div>   

    )
}

export default Section;