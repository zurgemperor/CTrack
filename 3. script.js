document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";

    const cryptoList = document.getElementById("crypto-list");

    async function fetchCryptoData() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayCryptoData(data);
        } catch (error) {
            cryptoList.innerHTML = "<p>Ошибка загрузки данных</p>";
        }
    }

    function displayCryptoData(data) {
        cryptoList.innerHTML = "";
        data.forEach(coin => {
            const coinElement = document.createElement("div");
            coinElement.classList.add("crypto-item");
            coinElement.innerHTML = `
                <strong>${coin.name} (${coin.symbol.toUpperCase()})</strong>: $${coin.current_price}
            `;
            cryptoList.appendChild(coinElement);
        });
    }

    fetchCryptoData();
});
