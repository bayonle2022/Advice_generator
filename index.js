

const adviceID = document.getElementById('advice-id')
const adviceText = document.getElementById('advice-text')
const newAdviceButton = document.getElementById('new-advice-button');
const fetchData = async function () {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
            throw new Error("could not fetch resource")
        }
        const data = await response.json()
        adviceID.textContent = data.slip.id
        adviceText.textContent = `"${data.slip.advice}"`

    }
    catch (error) {
        console.error(error)
    }
}
newAdviceButton.addEventListener('click', fetchData);

// fetchData();