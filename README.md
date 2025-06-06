
# Weather App

A modern and responsive **React** application that displays weather information for searched cities using a public weather API. Built with **Vite** and styled with **Bootstrap** for a clean UI.

## 🚀 Features

- Search weather by city name
- Displays current temperature, humidity, wind speed, and more
- Responsive UI compatible with all devices
- Handles API errors and invalid inputs gracefully

## 🛠 Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- OpenWeatherMap API (or similar weather API)

## 📁 Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Search.jsx
│   │   ├── Weather.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/gargayush717/weather-app.git
cd weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to use the app.

## ✍️ How to Use

- Enter the city name in the search box.
- View current weather details like temperature, humidity, wind speed, etc.
- The app automatically updates on valid searches.
- Shows error message for invalid city names or API errors.

## 🙌 Contributions

Feel free to fork, improve the app or UI, and send pull requests.

## 📢 Note

This is a frontend-only React app that fetches data from a public weather API. Ensure your API key (if required) is configured correctly.

---

👨‍💻 Developed by [Ayush Garg](https://github.com/gargayush717)
