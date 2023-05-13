# Multi-Step Form

This is a multi-step form project created using React.js and Redux for state management. The form allows users to enter their personal information, shipping information, and payment information in a step-by-step process.

## Demo

You can view a live demo of the project here: [https://your-demo-url.com](https://your-demo-url.com)


### Screenshot

![QR Code Component preview](./src/assets/images/desktop-design-step-1.jpg)
![QR Code Component preview](./src/assets/images/desktop-design-step-2-monthly.jpg)
![QR Code Component preview](./src/assets/images/mobile-design-step-3-monthly.jpg)
![QR Code Component preview](./src/assets/images/mobile-design-step-4-yearly.jpg)


## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine by running `git clone https://github.com/your-username/your-repo.git`.
2. Install the dependencies by running `npm install` or `yarn install`.
3. Start the development server by running `npm start` or `yarn start`.
4. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the project.

## Technologies Used

The project was created using the following technologies:

- React.js
- Redux
- Bootstrap

## Project Structure

The project has the following structure:

```
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Step.js
│   │   ├── Form.js
│   │   ├── StepOne.js
│   │   ├── StepTwo.js
│   │   ├── StepThree.js
│   │   └── ...
│   ├── redux(feature)/
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── store.js
│   │   └── types.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── ...
├── package.json
├── README.md
└── yarn.lock
```

Here's a brief explanation of each directory and file:

- `public/`: This directory contains the public files for the project, such as `index.html`, `favicon.ico`, and `manifest.json`.

- `src/components/`: This directory contains the React components for the project, including `Step.js`, `Form.js`, `StepOne.js`, `StepTwo.js`, `StepThree.js`, and other components.

- `src/redux/`: This directory contains the Redux files for the project, including `actions/`, `reducers/`, `store.js`, and `types.js`.

- `src/App.js`: This is the main component of the project that renders the form.

- `src/index.js`: This is the entry point of the project that renders the `App` component.

- `src/index.css`: This is the CSS file for the project that includes styles for the `App` component and other components.

## Contributing

If you would like to contribute to the project, feel free to submit a pull request or create an issue in the repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.