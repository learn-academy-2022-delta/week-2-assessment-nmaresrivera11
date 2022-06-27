# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer:
  An argument belongs to a method and a parameter is just a placeholder within a function. A method's argument is in the parentheses like (.includes()) and it tells the method the specifics for that method. Parameters are the placeholders within a function that you put your given values into.
  Researched answer:
  When an argument is given an empty parentheses it will apply the method to all of the characters in the string or array for example. In an array you would pass through an index in which the function will preform the method. In a string, it will be given an index to find the particular character or the index of the character needed. 



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer:
  Predefined parameters in (.map) is that it takes in arrays. After declared, the array can then be passed into the method. Value is needed and if you include index and array is optional.
  Researched answer:
  When passing through a (.map), value is the value of the array, it is required. Index and array is not required in order for your method to work.


3. What is the difference between map and filter?

  Your answer:
  (.map) is used in Higher-Order function methods to iterate over each index in the element and return a new array with the updated values. (.filter) is used to iterate as well and it will return a subset of the array with only the filtered out data requested of it. The (.filter) is used for selecting out only sepcific values requested from an array while (.map) gives a new array with new values that was asked of it from the function. 

  Researched answer:
  (.map) used to iterater and produce a new array with the method excecuted. While the (.map) will return a new array of the same length, (.filter) will return a subset of the original because it is a new array with only the filtered values.



4. What is the difference between a function and a method?

  Your answer:
  A function is a statement that a developer creates to tell the computer to preform with the information passed into it. A method however, is associated with its predetermined word that will do a specific task kind of like a tool. A function can be made to do something while a method is already made to do a task but is just waiting for it's arguments to be passed through it. 

  Researched answer:
  A functions syntax is function (const/var/let), functionName (the dev creates based on relevance to prompt or what it is going to do for you), and (parameters) which is optional but placeholders will allow you to more easily follow which direction its going in. A function needs to be called upon. A method can be called on without anything given in the parentheses. It is a property of an object that has a function too.



5. What is object destructuring?

  Your answer:
  Object deconstruction is when you quite literally pick apart pieces of of an object that you need. So under the object is a key and value pair, and this can look anything like only picking out a first/ or last name to using string interpolation to create a string with certain information stored in it from the k/v pair.

  Researched answer:
  Object deconstruction is very useful because it allows you to make pieces of an object recallable variables. This means it takes it from a group to individually reusable variables that allow you to work further with nested parts that belong to objects. It will save developers a lot of time because less code is involved and you can tweak the original object.



6. STRETCH: What is hoisting in JavaScript?

  Your answer:
  I am not very familiar with this term, so I will need to do a bit more research before I can get back to you with an answer on hoisting as it relates to Javascript.

  Researched answer:
  Hoisting is when all the declarations are at the top of the function you are working on or the scope in which you need it. Hoisting is so you can reference the variable or class in code before they are declared. It is like premptive statement of "Hey I am going to use this" for the computer to know what you are about to call on.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:
  In terms of class inheritance, we can think of this as parent-child. A child is inherent to the parent. So in a class if you have the parent class, you can then give a child class (or a new class) that will inherit attributes or behavior from the existing.

2. React:
  React uses components which are small pieces to the bigger puzzle. Using these components (of the same things over and over) we can put them together to for entire applications. Instagram feeds for example, are a whole bunch of components (profile picture, profile handle, image/video content/ like comment and save buttons with a caption for the post). These are on every feed over and over again, and programers use it as a template to just plug in your profiles specific user name and image content with your caption. They will always be the same smaller components repeated to create a large application with many users. Facebook was the first to do this concept.

3. React state:
  States store components behavior and determines how the component renders and behaves. This is like if you need to edit or if it will change over the course of time, the object hold information that is tweakable. State is just changing the access to changing an objects components.

4. React lifecycle methods:
  Render () is a method in the life cycle that will determine what is redered or drawn from the browser. This is automatic and happens whenever the view updates. Comparable to when the screen refreshes or is when something is clicked on. Constructor() runs before render() it is in the beginning stages of the lifecycle methods. ComponentDidUpdate is the ending mount phase and it encorporates the constructor and the render. These are in the mounting phase of lifecycle methods. In the update phase the setState is how you can update or set changes to to the state. The setState will trigger and retrigger the render() method because like reloading with new information it is like a refresh. Able to show you the change that occurred.

5. DOM:
  Document Object Model reacts by changing the view based on cursor position. It is waiting for the onclick so that it will then start the lifecycle methods. It is the interactivity within an application that will help respond accordingly. The DOM is what will excecute action once onclick is found in order to bring users to the next page or where they are navigating.
