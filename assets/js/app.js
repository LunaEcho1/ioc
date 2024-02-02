// Function to fetch data from the server
async function fetchData() {
    try {
        const response = await fetch('data.json'); // Assuming data.json is the file containing your JSON data
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display indicators in the table
function displayIndicators(indicators) {
    const tableBody = document.querySelector('#indicators-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    indicators.forEach(indicator => {
        const row = `
            <tr>
                <td>${indicator.id}</td>
                <td>${indicator.associated}</td>
                <td>${indicator.ioc}</td>
                <td>${indicator.type}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Function to initialize the application
async function init() {
    // Fetch data from the server
    const data = await fetchData();

    // Display indicators in the table
    displayIndicators(data.indicators);
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
