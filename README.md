# Survey Builder (React)

## Overview

Welcome to my **(Savvy) Survey Builder** project! 🎉

This is a **survey creation tool** built with **React** and **SurveyJS**, aimed at making the process of building surveys easier, more interactive, and visually appealing. My goal with this project is to create a tool that lets you design surveys with a drag-and-drop interface, so you can easily add multiple question types, customize the layout, and preview the surveys before finalizing them.

## Features Implemented

So far, here’s what I’ve built:

- **Survey Creation Interface**: 
  - Users can **dynamically add questions** to the survey. The available question types include:
    - **Text input questions** (for short answers)
    - **Multiple-choice questions** (using radio buttons)
    - **Checkbox questions** (for selecting multiple options)
    - **Comment boxes** (textarea for long responses)
  - A **toolbar** lets you quickly add these questions with just a click.

- **Survey Preview**:
  - You can **preview** your survey, ensuring everything looks good before you move forward. For now, it outputs the survey data to the console (but I'm planning to display the live form for a more interactive experience).

- **Survey Logic**:
  - I’ve included basic functionality for adding conditional logic (like showing specific questions based on previous answers), which is a core feature in survey tools like.

- **Responsive Design**: 
  - The layout is **mobile-friendly**, so it looks great on both small and large screens. Buttons and interactions are smooth with subtle animations for a pleasant user experience.

- **Interactive UI**:
  - I’m using **SurveyJS Creator** for managing the survey structure and handling the survey logic. The UI is intuitive with button hover effects and dynamic question creation.

## Technologies Used

Here’s what powers the app:

- **React**: A JavaScript library that I used to build the user interface.
- **SurveyJS**: The backbone of the survey builder, which provides the survey creation and management features.
- **CSS**: For styling and making the UI sleek and responsive.
- **Survey Creator**: The component from **SurveyJS** that makes it easy to create and manage surveys.

## Installation and Setup

If you’d like to try out the Survey Builder or contribute, here’s how you can set it up:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/bantuelle/survey-builder.git
   cd survey-builder
   ```

2. **Install dependencies** using either `npm` or `yarn`:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. Open your browser and go to `http://localhost:3000` to start using the Survey Builder! 🚀

## Future Enhancements

Here are some things I’d like to add next to make the app even better:

- **Live Survey Preview**: Instead of just logging the survey JSON, I’d like to display the **live form** so users can interact with their created survey right away.
- **Advanced Conditional Logic**: I want to make it possible to add complex **visibility rules** that control which questions appear based on previous answers.
- **Survey Export**: Add a feature to **save and export** surveys to formats like JSON, CSV, or directly to a database.
- **Drag-and-Drop Question Sorting**: Enhance the interface to allow users to **drag and drop** questions to reorder them easily.
- **UI Polish**: The UI could use some further refinement to make it even more visually stunning and user-friendly.

## Contributing

I’d love for you to contribute! If you have any ideas, suggestions, or improvements, feel free to fork this repo and open a pull request. Whether it's fixing bugs, adding features, or just sharing feedback, it’s all welcome.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and contribute! Check the [LICENSE](LICENSE) file for more details.
