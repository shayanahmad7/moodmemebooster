# 🎭 Meme Mood Booster

## 📖 Project Description

Meme Mood Booster is a React web application designed to lift your spirits by providing memes based on your current mood. This project addresses the semi-regular problem of needing a quick mood boost or distraction during the day.

**Live Demo:** [https://moodmemebooster.vercel.app/](https://moodmemebooster.vercel.app/)

**Note:** This project was developed as an assignment for the Projects in Programming Class at New York University (NYU).

## 🎯 Problem It Solves

In our fast-paced world, we often need a quick way to improve our mood or take a short mental break. Meme Mood Booster solves this by:

1. Allowing users to select their current mood
2. Fetching relevant memes based on the selected mood
3. Providing a simple interface to view, save, and share memes

## 🚀 Features

- 😊 Mood selection dropdown
- 🖼️ Meme carousel display
- 💾 Save favorite memes (currently logs to console)
- 🔗 Share memes (uses Web Share API if available)
- 🔄 Fetch more memes on demand

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Meme API

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## 🔧 Setup and Running Instructions

1. Clone the repository:

   ```
   git clone https://github.com/your-username/meme-mood-booster.git
   cd meme-mood-booster
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 🔌 API Integration

This project uses the Meme API (https://meme-api.com) to fetch random memes. The API is integrated as follows:

1. When a user selects a mood, the `fetchMemes` function is called.
2. This function sends a GET request to `https://meme-api.com/gimme/wholesomememes/5` to retrieve 5 random memes.
3. The retrieved memes are then displayed in a carousel for the user to view, save, or share.

## 🤖 AI Assistance and Credits

This project was developed with extensive assistance from the v0.dev AI. The AI provided:

1. Initial project structure and component setup
2. Implementation of API integration
3. Styling suggestions using Tailwind CSS
4. Troubleshooting and bug fixes

All major code portions were generated or suggested by the AI, with human oversight and modifications to fit the specific project requirements. The AI was particularly helpful in:

- Creating the basic structure of the React components
- Implementing the carousel functionality
- Styling the components using Tailwind CSS classes
- Integrating the Meme API and handling the data

Human intervention was required for:

- Customizing the mood selection options
- Adjusting the layout to fit the project's specific needs
- Implementing error handling and edge cases

## 📁 Project Structure

- `src/App.tsx`: Main component containing the Meme Mood Booster logic
- `src/components/ui/`: Contains reusable UI components (button, card, select, carousel)
- `src/lib/utils.ts`: Utility functions used across the project

## 🧪 Running Tests

To run the tests for this project:

```
npm test
```

## 🔒 Error Handling

The application includes basic error handling:

- API fetch errors are logged to the console
- A user-friendly message is displayed if no memes are found

Future improvements could include more robust error handling and user notifications.

## 🔜 Future Improvements

1. Implement mood-based meme filtering
2. Add user accounts to save favorite memes
3. Implement a backend to store user preferences and saved memes
4. Enhance error handling and user feedback
5. Add more interactive features like meme rating or comments

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/your-username/meme-mood-booster/issues) if you want to contribute.

## 👥 Authors

- Shayan Ahmad - [My GitHub](https://github.com/shayanahmad7)

## 🙏 Acknowledgements

- [Meme API](https://meme-api.com) for providing the meme data
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the JavaScript library for building user interfaces
