# NFT News API

This repository contains a Node.js application that serves as an API client for retrieving news articles related to the NFT (Non-Fungible Token) market from various sources. It utilizes Axios for making HTTP requests and Cheerio for parsing HTML content.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository:

git clone https://github.com/Arkosi27/nft-news-api.git


2. Navigate to the project directory:

cd nft-news-api


3. Install dependencies:

npm install


The server will run on port 8000 by default. You can modify the port number in the `index.js` file.

2. Access the API endpoints:

- Welcome Message: [http://localhost:8000/](http://localhost:8000/)
- NFT News Articles: [http://localhost:8000/nft-news](http://localhost:8000/nft-news)

## API Endpoints

### Welcome Message

Displays a welcome message and a brief introduction to the NFT news API.

- Endpoint: `/`
- Method: GET

### NFT News Articles

Returns a JSON array of news articles related to the NFT market from various sources.

- Endpoint: `/nft-news`
- Method: GET

## Contributing

Contributions are welcome! If you encounter issues or have improvements to suggest, please create a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push your branch to your fork: `git push origin feature/your-feature-name`
5. Create a pull request targeting the `main` branch of this repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
