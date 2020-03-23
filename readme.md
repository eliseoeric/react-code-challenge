# Instagram Clone Challenge

This repo serves as a beginner React coding challenge for potential employees.
Instructions for completing the task are provided here in the readme. Any questions or
concerns should be emailed to [Eric Eliseo](mailto:eric.eliseomartin@sosi.com) or [Jacob Reiter](jacob.reiter@sosi.com).

### Install the application

To install the project please clone the repo using git, or download using the `Clone or download` button above.

```bash
git clone https://github.com/eliseoeric/instagram-code-challenge
```

Next, change into the directory using your terminal and install the required packages:

```bash
# using npm
npm install

# using yarn
yarn install
```

### Starting the application

The application can be started using the `start` command:

```bash
# using npm
npm run-script start

# using yarn
yarn start
```

This will run the application at the following address: `localhost:7770`. Navigate to the address in your
browser and confirm that the application is running.

### Code Challenge

The application is a very barebones clone of Instagram, built using React. The application uses Redux to manage
state across components and React Router to handle page routing. Stylesheets are written in SASS.

As the application exists on first download, a user can browse a series of photos, each with titles, authors, captions and comments.
Users can click on a photo to open a given photo in the browser. At the single photo level, users are able to read comments and leave new comments.

However the application is not complete, below is a list of features we would like to add the the application. As the interview candidate,
we would like to see you implement at least two of the following features.

- Increment likes on photos: Currently a like counter is displayed for each photo, however it is not connected to any sort of functionality.
  The customer wants users to be able to click on the Heart icon and increment the number of likes on the current photo. The heart button should
  increment likes on the main page route, and on the individual photo route.

- Add Author Avatar: In the `src/data/posts.js` file, we have listed `author` and `avatar_url` properties for each post. The customer would like to use this data to
  display the author's name and avatar when the user mouses over the image. In the notes section below, you may find some proposed CSS and HTML markup. Please create
  a new component that represents the photo overlay information.

- Add ability to delete/remove comments: Currently we do not have a way to delete comments from the comment list. Markup exists for an `x` button that is displayed
  near the comment. Users should be able to click the `x` and have the comment deleted.

- Refactor input group to its own component: The `Comments` component has a few `input` elements that could be abstracted to a single React component. Refactor and abstract
  the `div.input-group` elements to their own React component.

- Add PropTypes: As developers, we want to make sure that our applications are as error proof as possible. One way that we can do that is via linting.
  The PropTypes library helps us lint our React components during development by defining types for each of our component props. This application already
  has the PropTypes library installed, but we want to make sure that we are using it. As the candidate, you should add PropTypes to each component.

### Notes

#### Increment Likes on Photos: 

For this task, you'll need to connect the `onClick` prop of the likes button found in the `src/components/Photo.js` file to a reducer function. Similar to the
Remove/Delete comments task, you'll need to create a new action and accompanying reducer. 

Once you add the `incrementLikes` reducer to the reducers file (`src/reducers/photos.js`), it will become available to the `Photo` component
via the component's props. You can observe the `addComment` reducer found in the `Comments` component as an example of this. We use `mapDispatchToProps` in the `src/components/App.jsx`
to map all of the actions and their reducers found in the `src/state/reducers/index.js` to props on the `App` component. These props can then be passed down
to children components.

You'll access the `incrementLikes` reducer from the `Photo`s props, and then fire it via the `onClick` prop for the Likes button.


##### Add Author Avatar

You'll need to create a new component to render the author meta data and avatar. We have provided some simple CSS classes in the `src/styles/_photo.scss` file
based on the following pseudo markup:

```
div.photo-meta
  div.photo-avatar
    img.avatar
  div.photo-author
    h4
```

This can safely be put in the `div.image-overlay` element and be viewed on mouseover.

##### Remove/Delete Comments

The HTML markup already exists for this, all that is required is that you create a new action and accompanying reducer.

Once you add the `removeComment` reducer to the reducers file (`src/reducers/comments.js`), it will become available to the
`Comments` component via the component's props. You can observe the `addComment` reducer as an example of this. We use `mapDispatchToProps` in the `src/components/App.jsx`
to map all of the actions and their reducers found in the `src/state/reducers/index.js` to props on the `App` component. These props can then be passed down
to children components.

##### Input Group Component

The input group component should be a component that wraps the following markup, found in the `src/components/Comments.js` file.

```jsx
<div className={'input-group'}>
  <input type='text' className={'input-field'} ref={authorInput} placeholder='author' />
</div>
```

The component will need to have props created to accommodate all of the element attributes found on the `input` element.

The `ref` prop should still be created in the parent component (in this case the `Comments` component), and passed to the
`InputGroup` component via a prop. However, you will not be able to call the prop `ref` as this is reserved for React.

##### PropTypes

The documentation for [PropTypes can be found here](https://www.npmjs.com/package/prop-types). Usage is very straight forward, for
each component you will need to import the library, and then define the `propTypes` value on the exported component. Note that
because all of our components are functional components (ie stateless), you will need add the `propTypes` property directly to the
exported React component:

```jsx
const ReactComponent = (props) => {
  // ... component logic here
};

ReactComponent.propTypes = {
  // .. prop type definitions here
};
```

