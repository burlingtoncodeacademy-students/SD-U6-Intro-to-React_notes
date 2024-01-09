function AboutMe() {

    const city = 'New York City';
    const state = "New York"

    let styles = {
        ul: {
            textAlign: 'left',
            color: 'red',
        },
        p: {
            fontSize: "20pt"
        }
    }

    return(
        <div>
            <p style={styles.p}>{city}, {state}</p>
            <ul style={styles.ul}>
                <li>Grocery Store</li>
                <li>Gas Station</li>
                <li>Out to Eat</li>
            </ul>
        </div>
    )
}

export default AboutMe;